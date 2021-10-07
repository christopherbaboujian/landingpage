import { BuildSpec, LinuxBuildImage, PipelineProject } from '@aws-cdk/aws-codebuild';
import { Artifact, Pipeline } from '@aws-cdk/aws-codepipeline';
import { CodeBuildAction, GitHubSourceAction } from '@aws-cdk/aws-codepipeline-actions';
import { CdkPipeline } from '@aws-cdk/pipelines';
import { Construct, SecretValue, Stack, StackProps, Stage } from '@aws-cdk/core';

interface PipelineProps extends StackProps {
  stages: Stage[];
}

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props: PipelineProps) {
    super(scope, id, props);

    const { stages } = props;

    const sourceArtifact = new Artifact();
    const buildArtifact = new Artifact('LandingPagesBuild');
    const cloudAssemblyArtifact = new Artifact('LandingPagesCloudAssembly');

    const sourceAction = new GitHubSourceAction({
      actionName: 'GitHub',
      output: sourceArtifact,
      oauthToken: SecretValue.secretsManager('github-token'),
      owner: 'leantoolkit',
      repo: 'landingpages',
      branch: 'main',
    });

    const buildAction = new CodeBuildAction({
      actionName: 'Build',
      project: new PipelineProject(this, 'LandingPagesBuild', {
        buildSpec: BuildSpec.fromSourceFilename('buildspec.yml'),
        environment: { buildImage: LinuxBuildImage.STANDARD_4_0 },
        environmentVariables: {
          DOMAIN: { value: 'https://leantoolkitpages.com' },
          API: { value: 'https://leantoolkitpages.com/api' },
        },
      }),
      input: sourceArtifact,
      outputs: [buildArtifact],
      runOrder: 1,
    });

    const synthAction = new CodeBuildAction({
      actionName: 'Synth',
      project: new PipelineProject(this, 'LandingPagesSynth', {
        buildSpec: BuildSpec.fromSourceFilename('cdk/buildspec.yml'),
        environment: { buildImage: LinuxBuildImage.STANDARD_4_0 },
      }),
      input: buildArtifact,
      // extraInputs: [buildArtifact],
      outputs: [cloudAssemblyArtifact],
      runOrder: 2,
    });

    const pipeline = new Pipeline(this, 'LandingPagesPipeline', {
      crossAccountKeys: false,
      restartExecutionOnUpdate: true,
      stages: [
        { stageName: 'Source', actions: [sourceAction] },
        { stageName: 'Build', actions: [buildAction, synthAction] },
      ],
    });

    const cdkPipeline = new CdkPipeline(this, 'CdkPipeline', {
      codePipeline: pipeline,
      cloudAssemblyArtifact,
    });

    stages.map((stage) => cdkPipeline.addApplicationStage(stage));
  }
}

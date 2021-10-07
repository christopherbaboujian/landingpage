#!/usr/bin/env node
import 'source-map-support/register';
import { App, Construct, Fn, Stage, StageProps } from '@aws-cdk/core';
import { ApiStack } from '../lib/api';
import { PipelineStack } from '../lib/pipeline';
import { StaticSiteStack } from '../lib/static-site';

const app = new App();

class ApplicationStage extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const domainName = 'leantoolkitpages.com';
    const allowedOrigins = [`https://${domainName}`, 'https://optifitdrink.nl'].join(',');

    const api = new ApiStack(this, 'Api', { allowedOrigins });

    const site = new StaticSiteStack(this, 'StaticSite', {
      api: { domain: Fn.importValue('ApiDomain'), stage: Fn.importValue('ApiStage') },
      domainName,
    });

    site.addDependency(api);
  }
}

const env = { account: '994880124163', region: 'eu-central-1' };

new PipelineStack(app, 'LandingPagesPipelineStack', {
  stages: [new ApplicationStage(app, 'Prod', { env })],
  env,
});

new StaticSiteStack(app, 'OptiFitSite', { domainName: 'optifitdrink.nl', env });

app.synth();

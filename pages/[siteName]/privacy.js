import { Fragment } from 'react';
import Footer from 'components/Footer';
import content from 'lib/content';
import FBPixel from '../../components/FBPixel';

const Privacy = ({ data, siteName }) => {
  const { colors } = data;

  if (!data) return null;

  return (
    <Fragment>
      <div className="z-0 relative bg-white">
        <div className="relative z-10 shadow">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12">
              <div className="flex items-center space-x-8">
                <span className="inline-flex rounded-md shadow-sm">
                  <a
                    href={`/${siteName}`}
                    className={`text-${siteName}_btnText ${colors.main} hover:${colors.hover} bg-${siteName}_main hover:bg-${siteName}_hover inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white focus:outline-none transition ease-in-out duration-150`}
                  >
                    Back to landing page
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
              <div className="py-6 px-5 space-y-6">
                <div className="space-y-6">
                  <span className="w-full flex rounded-md shadow-sm">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                    >
                      Sign up
                    </a>
                  </span>
                  <p className="text-center text-base leading-6 font-medium text-gray-500">
                    Existing customer?
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className={`text-base leading-6 font-semibold ${colors.txtMain} text-${siteName}_txtMain tracking-wide uppercase`}
            >
              Privacy Policy
            </h1>
            <p className="mt-1 text-4xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
              {data.privacy.your_own_data}
            </p>
          </div>
        </div>
      </div>

      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg text-gray-500 mx-auto">
            <p>
              At Lean Toolkit, accessible from https://*.leantoolkitpages.com, one of our main
              priorities is the privacy of our visitors. This Privacy Policy document contains types
              of information that is collected and recorded by Lean Toolkit and how we use it.
            </p>

            <p>
              If you have additional questions or require more information about our Privacy Policy,
              do not hesitate to contact us.
            </p>

            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to
              our website with regards to the information that they shared and/or collect in Lean
              Toolkit. This policy is not applicable to any information collected offline or via
              channels other than this website. Our Privacy Policy was created with the help of the{' '}
              <a
                href="https://www.cookiepolicygenerator.com/privacy-policy-generator/"
                rel="nofollow"
              >
                <span className={`${colors.txtMain} text-${siteName}_txtMain`}>
                  Privacy Policy Generator from CookiePolicyGenerator.com
                </span>
              </a>
              .
            </p>

            <h2>Consent</h2>

            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>

            <h2>Information we collect</h2>

            <p>
              The personal information that you are asked to provide, and the reasons why you are
              asked to provide it, will be made clear to you at the point we ask you to provide your
              personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information about you such as
              your name, email address, phone number, the contents of the message and/or attachments
              you may send us, and any other information you may choose to provide.
            </p>
            <p>
              When you register for an Account, we may ask for your contact information, including
              items such as name, company name, address, email address, and telephone number.
            </p>

            <h2>How we use your information</h2>

            <p>We use the information we collect in various ways, including to:</p>

            <ul>
              <li>Provide, operate, and maintain our webste</li>
              <li>Improve, personalize, and expand our webste</li>
              <li>Understand and analyze how you use our webste</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>
                Communicate with you, either directly or through one of our partners, including for
                customer service, to provide you with updates and other information relating to the
                webste, and for marketing and promotional purposes
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2>Log Files</h2>

            <p>
              Lean Toolkit follows a standard procedure of using log files. These files log visitors
              when they visit websites. All hosting companies do this and a part of hosting
              services' analytics. The information collected by log files include internet protocol
              (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp,
              referring/exit pages, and possibly the number of clicks. These are not linked to any
              information that is personally identifiable. The purpose of the information is for
              analyzing trends, administering the site, tracking users' movement on the website, and
              gathering demographic information.
            </p>

            <h2>Cookies and Web Beacons</h2>

            <p>
              Like any other website, Lean Toolkit uses 'cookies'. These cookies are used to store
              information including visitors' preferences, and the pages on the website that the
              visitor accessed or visited. The information is used to optimize the users' experience
              by customizing our web page content based on visitors' browser type and/or other
              information.
            </p>

            <p>
              For more general information on cookies, please read{' '}
              <a href="https://www.cookieconsent.com/what-are-cookies/" rel="nofollow">
                <span className={`${colors.txtMain} text-${siteName}_txtMain`}>"What Are Cookies"</span>
              </a>
              . Information regarding cookies from this Cookies Policy are from{' '}
              <a href="https://www.generateprivacypolicy.com/" rel="nofollow">
                <span className={`${colors.txtMain} text-${siteName}_txtMain`}>the Privacy Policy Generator</span>
              </a>
              .
            </p>

            <h2>Advertising Partners Privacy Policies</h2>

            <p>
              You may consult this list to find the Privacy Policy for each of the advertising
              partners of Lean Toolkit.
            </p>

            <p>
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or
              Web Beacons that are used in their respective advertisements and links that appear on
              Lean Toolkit, which are sent directly to users' browser. They automatically receive
              your IP address when this occurs. These technologies are used to measure the
              effectiveness of their advertising campaigns and/or to personalize the advertising
              content that you see on websites that you visit.
            </p>

            <p>
              Note that Lean Toolkit has no access to or control over these cookies that are used by
              third-party advertisers.
            </p>

            <h2>Third Party Privacy Policies</h2>

            <p>
              Lean Toolkit's Privacy Policy does not apply to other advertisers or websites. Thus,
              we are advising you to consult the respective Privacy Policies of these third-party ad
              servers for more detailed information. It may include their practices and instructions
              about how to opt-out of certain options.{' '}
            </p>

            <p>
              You can choose to disable cookies through your individual browser options. To know
              more detailed information about cookie management with specific web browsers, it can
              be found at the browsers' respective websites.
            </p>

            <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
            <p>
              Request that a business that collects a consumer's personal data disclose the
              categories and specific pieces of personal data that a business has collected about
              consumers.
            </p>
            <p>
              Request that a business delete any personal data about the consumer that a business
              has collected.
            </p>
            <p>
              Request that a business that sells a consumer's personal data, not sell the consumer's
              personal data.
            </p>
            <p>
              When you fill in your email on this website, you will receive a confirmation email.
              This email contains a personal link to download, manage and delete your data yourself.
            </p>

            <h2>GDPR Data Protection Rights</h2>

            <p>
              We would like to make sure you are fully aware of all of your data protection rights.
              Every user is entitled to the following:
            </p>
            <p>
              The right to access – You have the right to request copies of your personal data. We
              may charge you a small fee for this service.
            </p>
            <p>
              The right to rectification – You have the right to request that we correct any
              information you believe is inaccurate. You also have the right to request that we
              complete the information you believe is incomplete.
            </p>
            <p>
              The right to erasure – You have the right to request that we erase your personal data,
              under certain conditions.
            </p>
            <p>
              The right to restrict processing – You have the right to request that we restrict the
              processing of your personal data, under certain conditions.
            </p>
            <p>
              The right to object to processing – You have the right to object to our processing of
              your personal data, under certain conditions.
            </p>
            <p>
              The right to data portability – You have the right to request that we transfer the
              data that we have collected to another organization, or directly to you, under certain
              conditions.
            </p>
            <p>
              When you fill in your email on this website, you will receive a confirmation email.
              This email contains a personal link to download, manage and delete your data yourself.
            </p>

            <h2>Children's Information</h2>

            <p>
              Another part of our priority is adding protection for children while using the
              internet. We encourage parents and guardians to observe, participate in, and/or
              monitor and guide their online activity.
            </p>

            <p>
              Lean Toolkit does not knowingly collect any Personal Identifiable Information from
              children under the age of 13. If you think that your child provided this kind of
              information on our website, we strongly encourage you to contact us immediately and we
              will do our best efforts to promptly remove such information from our records.
            </p>
          </div>
        </div>
      </div>

      <Footer data={data} siteName={siteName} />
      <FBPixel />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const paths = [];
  for (const siteName in content) {
    paths.push({ params: { siteName } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { siteName } }) {
  return {
    props: {
      data: content[siteName],
      siteName,
    },
  };
}

export default Privacy;

import { Fragment } from 'react';
import Footer from 'components/Footer';
import content from 'lib/content';
import FBPixel from '../../components/FBPixel';

const Cookie = ({ data, siteName }) => {
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
        <div className="bg-white">
          <div className="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1
                className={`text-base leading-6 font-semibold ${colors.txtMain} text-${siteName}_txtMain tracking-wide uppercase`}
              >
                Cookie statement
              </h1>
              <p className="mt-1 text-4xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
                {data.cookie.your_own_data}
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
              <h2>What Are Cookies</h2>

              <p>
                As is common practice with almost all professional websites this site uses cookies,
                which are tiny files that are downloaded to your computer, to improve your
                experience. This page describes what information they gather, how we use it and why
                we sometimes need to store these cookies. We will also share how you can prevent
                these cookies from being stored however this may downgrade or 'break' certain
                elements of the sites functionality.
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

              <h2>How We Use Cookies</h2>

              <p>
                We use cookies for a variety of reasons detailed below. Unfortunately in most cases
                there are no industry standard options for disabling cookies without completely
                disabling the functionality and features they add to this site. It is recommended
                that you leave on all cookies if you are not sure whether you need them or not in
                case they are used to provide a service that you use.
              </p>

              <h2>Disabling Cookies</h2>

              <p>
                You can prevent the setting of cookies by adjusting the settings on your browser
                (see your browser Help for how to do this). Be aware that disabling cookies will
                affect the functionality of this and many other websites that you visit. Disabling
                cookies will usually result in also disabling certain functionality and features of
                the this site. Therefore it is recommended that you do not disable cookies. This
                Cookies Policy was created with the help of the{' '}
                <a
                  href="https://www.cookiepolicygenerator.com/cookie-policy-generator/"
                  rel="nofollow"
                >
                  <span className={`${colors.txtMain} text-${siteName}_txtMain`}>
                    Cookies Policy Generator from CookiePolicyGenerator.com
                  </span>
                </a>
                .
              </p>
              <h2>The Cookies We Set</h2>

              <ul>
                <li>
                  <p>Surveys related cookies</p>
                  <p>
                    From time to time we offer user surveys and questionnaires to provide you with
                    interesting insights, helpful tools, or to understand our user base more
                    accurately. These surveys may use cookies to remember who has already taken part
                    in a survey or to provide you with accurate results after you change pages.
                  </p>
                </li>
              </ul>

              <h2>Third Party Cookies</h2>

              <p>
                In some special cases we also use cookies provided by trusted third parties. The
                following section details which third party cookies you might encounter through this
                site.
              </p>

              <ul>
                <li>
                  <p>
                    This site uses Google Analytics which is one of the most widespread and trusted
                    analytics solution on the web for helping us to understand how you use the site
                    and ways that we can improve your experience. These cookies may track things
                    such as how long you spend on the site and the pages that you visit so we can
                    continue to produce engaging content.
                  </p>
                  <p>
                    For more information on Google Analytics cookies, see the official Google
                    Analytics page.
                  </p>
                </li>

                <li>
                  <p>
                    As we sell products it's important for us to understand statistics about how
                    many of the visitors to our site actually make a purchase and as such this is
                    the kind of data that these cookies will track. This is important to you as it
                    means that we can accurately make business predictions that allow us to monitor
                    our advertising and product costs to ensure the best possible price.
                  </p>
                </li>

                <li>
                  <p>
                    We also use social media buttons and/or plugins on this site that allow you to
                    connect with your social network in various ways. For these to work, Facebook
                    will set cookies through our site which may be used to enhance your profile on
                    their site or contribute to the data they hold for various purposes outlined in
                    their respective privacy policies.
                  </p>
                </li>
              </ul>

              <h2>More Information</h2>

              <p>
                Hopefully that has clarified things for you and as was previously mentioned if there
                is something that you aren't sure whether you need or not it's usually safer to
                leave cookies enabled in case it does interact with one of the features you use on
                our site.
              </p>

              <p>
                However if you are still looking for more information then you can contact us by
                visiting our{' '}
                <a href="https://privacy.leantoolkitpages.com/contact">
                  <span className={`${colors.txtMain} text-${siteName}_txtMain`}>contact page</span>
                </a>
              </p>
            </div>
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

export default Cookie;

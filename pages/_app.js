import Amplify from 'aws-amplify';

import '../styles/globals.css';
import '../styles/tailwind.css';
import '../styles/app.css';

Amplify.configure({
  Auth: {
    region: 'eu-central-1',
    identityPoolId: 'eu-central-1:04fb7db6-c4fd-4e49-8951-ec542c37bf2d',
  },
  API: {
    endpoints: [
      {
        name: 'RestApi',
        endpoint: process.env.API,
      },
    ],
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

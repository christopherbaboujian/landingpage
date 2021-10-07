import { API, Auth } from 'aws-amplify';

const location = () => window.location.href;

const eventsApi = async (params) => {
  return API.post('RestApi', '/events', {
    body: {
      location: location(),
      userId: await Auth.currentCredentials().then(({ identityId }) => identityId),
      ...params,
    },
  });
};

export const apiOnLoadedHome = () => {
  const params = {
    event: 'page',
    action: 'loaded',
    content: '',
  };

  return eventsApi(params);
};

export const apiOnClickBuy = (productName) => {
  const params = {
    event: 'click',
    action: 'buy now',
    content: productName,
  };

  return eventsApi(params);
};

export const apiAcceptedCookies = () => {
  const params = {
    event: 'cookies',
    action: 'accepted',
    content: 'cookies read and accepted',
  };
  return eventsApi(params);
};

// submit kind of product
export const apiOnSubmitKOP = (value) => {
  const params = {
    event: 'q1_kind_of_product',
    action: 'submitted',
    content: `${value}`,
  };
  return eventsApi(params);
};

// submit q2_region
export const apiOnSubmitRegion = (value) => {
  const params = {
    event: 'q2_region',
    action: 'submitted',
    content: `${value}`,
  };
  return eventsApi(params);
};

// submit q3_email
export const apiOnSubmitEmail = (email) => {
  const params = {
    event: 'q3_email',
    action: 'submitted',
    content: `${email}`,
  };
  return eventsApi(params);
};

// submit q3_terms
export const apiOnSubmitTerms = () => {
  const params = {
    event: 'q3_terms',
    action: 'submitted',
    content: 'accepted and read gdpr statement',
  };
  return eventsApi(params);
};

// submit Likert
export const apiOnLikert = (i, score) => {
  const params = {
    event: `q2_likert${i}`,
    action: 'submitted',
    content: score,
  };
  return eventsApi(params);
};

export const apiDownloadData = (userId) => {
  // return fetch(`https://leantoolkitpages.com/api/events/${userId}`).then(res => res.json());
  return fetch(`/api/events/${userId}`).then(res => res.json());
}

export const apiDeleteData = (userId) => {
  // return fetch(`https://leantoolkitpages.com/api/events/${userId}`, {
  //   method: 'DELETE',
  // }).then(res => res.json());
  return fetch(`/api/events/${userId}`, {
    method: 'DELETE',
  }).then(res => res.json());
}

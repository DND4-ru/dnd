import React from 'react';
import { inject, observer } from 'mobx-react';

import { GoogleLogin } from 'react-google-login';

const clientId = "470166333595-60pu15cklk15dp25qe5brqcdsco68udq.apps.googleusercontent.com";

const onSuccess = (store) => (response) => {
  store.setContent(response);

  console.log('success: ', response);
}

const onFailure = (store) => (response) => {
  store.setContent(undefined);

  console.log('failure: ', response);
}

const AuthButton = ({ store }) => {
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess(store)}
      onFailure={onFailure(store)}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  );
}

export default inject((stores) => ({
  store: stores.authentication,
}))(observer(AuthButton));

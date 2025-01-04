// FacebookLoginButton.js
import React from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';

const FacebookLoginButton = () => {
  const appId = "3948081438808561"; // Replace with your actual App ID

  const onSuccess = (response) => {
    console.log('Login Success!', response);
    // Handle successful login (e.g., send the token to your server)
  };

  const onFail = (error) => {
    console.log('Login Failed!', error);
    // Handle login failure
  };

  const onProfileSuccess = (response) => {
    console.log('Get Profile Success!', response);
    // Handle profile data
  };

  // Choose ONE of the following configurations (or make it configurable via props):

  // 1. Default Button:
  return (
    <FacebookLogin
      appId={appId}
      onSuccess={onSuccess}
      onFail={onFail}
      onProfileSuccess={onProfileSuccess}
    />
  );

  // 2. Custom Style:
  // return (
  //   <FacebookLogin
  //     appId={appId}
  //     onSuccess={onSuccess}
  //     onFail={onFail}
  //     onProfileSuccess={onProfileSuccess}
  //     style={{
  //       backgroundColor: '#4267b2',
  //       color: '#fff',
  //       fontSize: '16px',
  //       padding: '12px 24px',
  //       border: 'none',
  //       borderRadius: '4px',
  //     }}
  //   />
  // );

  // 3. Custom Render Function (replace CustomComponent with your actual component):
  // const CustomComponent = ({ onClick, onLogoutClick }) => (
  //   <button onClick={onClick}>Login with Facebook</button>
  //   // Add a logout button if needed, using onLogoutClick
  // );

  // return (
  //   <FacebookLogin
  //     appId={appId}
  //     onSuccess={onSuccess}
  //     onFail={onFail}
  //     onProfileSuccess={onProfileSuccess}
  //     render={({ onClick, logout }) => (
  //       <CustomComponent onClick={onClick} onLogoutClick={logout} />
  //     )}
  //   />
  // );

  // 4. Custom Params and Options:
  // return (
  //   <FacebookLogin
  //     appId={appId}
  //     onSuccess={onSuccess}
  //     onFail={onFail}
  //     onProfileSuccess={onProfileSuccess}
  //     useRedirect
  //     initParams={{
  //       version: 'v10.0',
  //       xfbml: true,
  //     }}
  //     dialogParams={{
  //       response_type: 'token',
  //     }}
  //     loginOptions={{
  //       return_scopes: true,
  //     }}
  //   />
  // );
};

export default FacebookLoginButton;
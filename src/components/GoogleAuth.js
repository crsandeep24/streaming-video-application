import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        client_id:
          "669052370622-99ms24mrk4vnlre5s3cvdhietgiusl3t.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  render() {
    return <div>Hello</div>;
  }
}

export default GoogleAuth;

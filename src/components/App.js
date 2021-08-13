import React, { useEffect, useState } from "react";
import Sawo from "sawo";
import styles from "./styles"

function App() {

  // state values
  const [userPayload, setUserPayload] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {

    // Sawo Configuration, required to render form in the container
    // onSuccess callback will get invoke, after successful login

    const sawoConfig = {
      // should be same as the id of the container
      containerID: 'ad46fb01-bb16-4e4e-bfb0-23255bc75d25',
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "email",
      // Add the API key
      apiKey: "15bc7505-666c-46be-8477-edc1ac0be3e8",
      // Add a callback here to handle the payload sent by sdk
      onSuccess: onSuccessLogin
    };

    // creating instance
    let sawo = new Sawo(sawoConfig)

    // calling method to show form
    sawo.showForm();
  }, [])



  // Sawo: 
  // OnSuccess Callback method

  const onSuccessLogin = async(payload) => {
    setUserPayload(payload);
    setIsLoggedIn(true);
  }

  return (
    <React.Fragment>
      
      <div style={styles.containerStyle}>
        <section>
          <h1>React | Sawo Form Example</h1>
          {/* Showing Successful login message */}
          {isLoggedIn && (
            <React.Fragment>
              <div style={styles.loggedin}>
                <h2>User Successfull login</h2>
                <div>UserId: {userPayload.user_id}</div>
                <div>Verification Token: {userPayload.verification_token}</div>
              </div>
            </React.Fragment>
          )}

          {/* Showing login form */}
          {
            !isLoggedIn && (
              <div style={styles.formContainer} id="sawo-container">
                {/* Sawo form will appear here */}
              </div>
          )}
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;

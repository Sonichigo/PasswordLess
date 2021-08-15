import React, { useEffect, useState } from "react";
import Sawo from "sawo";
import logo from '../logo.png';
import logo1 from '../logo1.png';
import styles from "./styles"

function App() {

  // state values
  const [userPayload, setUserPayload] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const config = {
      containerID: 'sawo-container',
      identifierType: "email",
      apiKey: "bf306610-45f8-473a-860f-829f109ea736",//localhost
      onSuccess: onSuccessLogin
    };

    // creating instance
    let sawo = new Sawo(config)
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
          <h1 align="center" styles={{color:"aliceblue"}}>News Board</h1>
          {/* Showing Successful login message */}
          {isLoggedIn && (
            <React.Fragment>
              <div style={styles.formContainer}>
                <img src={logo} className="App-logo" alt="logo" />
                <img src={logo1} className="App-logo" alt="logo" />
              </div>
            </React.Fragment>
          )}

          {/*Redirect*/}
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
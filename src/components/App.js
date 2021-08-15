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
        <section style={{backgroundImage:"url("+"data:image/jpeg;base64,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"+")"}}>
          <h1 align="center" style={{color:"aliceblue"}}>News Board</h1>
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
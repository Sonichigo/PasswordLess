# Sawo

Passwordless and OTP-less Authentication for your website. [Check the documentaion here.](https://docs.sawolabs.com/sawo/v/0.0.2/)

## Installing

A step by step series of examples that tell you how to get a development env running. These instructions will let you render the form in your speicified container, and allow you to attach successful login callback for futher actions.

#### Install the sawo package

```
npm i sawo
```
#### Import the Sawo class and verifyToken method from the sawo package
```
import Sawo from "sawo"
```

#### API Key
* Login to sawo [dev console.](dev.sawolabs.com)
* Create a new project
    * Set Project Name
    * Set Project Host
        *  For dev: point to localhost
        *  For prod: point to your domain.
*  Copy the API key

#### Configuration
```
    var config = {
        // should be same as the id of the container
        containerID: "<container_ID>",
        // can be one of 'email' or 'phone_number_sms'
        identifierType: "phone_number_sms",
        // Add the API key, generated in last step
        apiKey: "",
        // successful Login callback
        onSuccess: (payload) => {},
    };
```


#### Create Sawo instance
```
let sawo = new Sawo(<configuration>)
```

**Call the showForm method**
* ***"showForm"*** method is reponsible to render the form in the given container.
```
sawo.showForm()
```

After successful setup of Sawo sdk, a login form will rendered in the provided 

container. For ex:

![Login Form](https://lh3.googleusercontent.com/fife/ABSRlIpAptzt-JsV6x1TGLRzFx9t4164a2b-p5x7-zBKQrDwpGQcMIbAwm3rwrvSAEZdqJqrhQgfXuw-AHS5CBhkpEoGDE513mV3mpUS_goJzH-nSGqNjPFsymG_q6F2buvN8k8853FxxSn1tyn3o4Kr_O_cSEzHvs3ljm13fzFgz5tJ0gPnJzY9XBDCMmHB8z4PuMsw0uwdPUbm4poTm7JfaBb9IthEVPyjvJxBp9whl8ucTq-NGsIZUGGyolGfdC4k0Ki15Ht-9sV9-zI6iEdifo_rlU9Up-vGyYADPzWm0hB8ejuXL1FkOIzlITQ76WByVic5Tb0virAawTQSnIHWXIUQtX3s6XGIRm4Ol0HasVn8RHbEDyCLtzys6mRfKAx5uKPEnXNIGsbvqAWCshnjrRHpL2ERrqWi0co7p8asRjoKMtjE1K46Vo_ZUbKk-EH8u1HCTjqMJQCkmf7naIplrh4JTWNUky_cMv0YalCbrZVe2t-Vrwv2RfB1g5aRT4zsrfhIdcLFX6jiqbBfc6HOgiapHmR2F1eyviVgEnfYr-uNjTTH4btCB1-p8gyz3nPUdZFEpK-n7iaB1dWxcvWlh5mx2RXpiOT4i7zFu_4B6Qul5qRr8o5d7t2r4gym5LFEBJEUxr39syXaRv82hsSaaMcN_AWAlDxuVhjRqR6kVtAHEaqj9deTravS_KWJQBNRJYLGirfmvHYu_vQbJQDj4JdmS165iqpZ8g=-p-k-nu-ft)

## Project demo links

 * **[React](https://github.com/sawolab/sawo-examples/tree/master/react)**
 * **[Angular](https://github.com/sawolab/sawo-examples/tree/master/angular)**
 * **[VUE](https://github.com/sawolab/sawo-examples/tree/master/vue)**

## Authors

* **SAWO Labs** - [GitHub](https://github.com/sawolab/sawo-examples)
    
## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available,

## License

This project is licensed under the MIT License
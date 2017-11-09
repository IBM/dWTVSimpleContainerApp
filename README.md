# Node.js Hello World Sample

This application demonstrates a simple, reusable Node.js web application based on the Express framework.

## Run the app locally

1. [Install Node.js][]
1. cd into this project's root directory
1. Run `npm install` to install the app's dependencies
1. Run `npm start` to start the app
1. Access the running app in a browser at the URL written to the console (most likely http://localhost:6012)

[Install Node.js]: https://nodejs.org/en/download/

## Privacy Notice

This application uses a [metrics tracking package](https://www.npmjs.com/package/metrics-tracker-client) 
to track deployments to 
[IBM Bluemix](https://www.bluemix.net) and other Cloud Foundry platforms. The following 
information is sent to a [Deployment Tracker](https://github.com/IBM/metrics-collector-service) 
service on each deployment:

* Node.js package version
* Node.js repository URL
* Application Name (`application_name`)
* Application GUID (`application_id`)
* Application instance index number (`instance_index`)
* Space ID (`space_id`) or OS username
* Application Version (`application_version`)
* Application URIs (`application_uris`)
* Cloud Foundry API (`cf_api`)
* Labels of bound services
* Number of instances for each bound service and associated plan information
* Metadata in the `repository.yaml` file

This data is collected from the `package.json` and `repository.yaml` file in the sample 
application and the `VCAP_APPLICATION` and `VCAP_SERVICES` environment variables in 
IBM Bluemix and other Cloud Foundry platforms. This data is used by IBM to track metrics 
around deployments of sample applications to IBM Bluemix to measure the usefulness of our 
examples, so that we can continuously improve the content we offer to you. Only deployments 
of sample applications that include code to ping the Deployment Tracker service will be tracked.

## Disabling Deployment Tracking

To disable tracking, comment out the following line in `app.js`: 

``` javascript
require('metrics-tracker-client').track();
```

If you're not using tracking, you can edit the `package.json` file to remove 
the requirement for `metrics-tracker-client` if you like. 

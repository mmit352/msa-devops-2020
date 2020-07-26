# msa-devops-2020
Azure Pipelines project with demployment URL: https://msa-2020-devops-mmiit.azurewebsites.net/

The build pipeline prepares the web app for deployment. This is done by specifying things such as npm install, as if we were actually building on our local computers.Values specified in the build pipeline have made it so that everytime the github repository it is reading gets updated, the pipelines are started for redeployment.
This is necessary as the release pipeline will use the artifacts produced from the build pipeline to deploy the web app

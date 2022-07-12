# image-processing-api
A NodeJS API to process images on the fly, or serve from cache if they have already been processed.

As a work in progress this first version is limited to resize jpg images. 

## Instructions
- Clone the repo and install dependencies
```
npm install
```
- Build and run the project from the terminal
```
npm run build
node ./dist
```
- Endpoints
  - `/api` to view the api schema
  - `/api/image`
  
- Try it out! Go to the endpoint:
  - http://localhost:3000/api/image?filename=icelandwaterfall&width=100&height=100

## Develop
- To run on develop environment run on the terminal
```
npm start
```
- Run tests
```
npm run test
```
- Run linting and lint fix
```
npm run lint
npm run lint-fix
```
- Format code
```
npm run prettier
```
  

# uniosun-road-sign-system
VueJS based Multimodal, Multilingual, Campus Navigation System (CNS) for Osun State University.

## Setup
- Clone the repository
- INSTALL DEPENDENCIES: 
  - cd into app and run `npm install`
  - cd into restfulservice and run `npm install`
- CONFIGURE RESTFULSERVICE: 
  - cd into restful
  - copy the required GOOGLE APPLICATION CREDENTIALS into restfulservice
  - set the environment variable:
    - powershell: set $env:GOOGLE_APPLICATION_CREDENTIALS:path-to-GAC.json
    - command prompt: set GOOGLE_APPLICATION_CREDENTIALS=PATH-TO-GAC.json
- START THE APPLICATION
  - APP: 
    - cd into app
    - run: npm run dev
  - RESTFULSERVICE
    - cd into restfulservice
    - run: npm run start
## License
MIT

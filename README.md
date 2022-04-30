# CODE Project - Zulu

## About the Project
 
[Zulu](https://app.code.berlin/projects/ckxasczix00460wl8xfzl061u) is a web app for operation centers that manage disaster relief operations. Users are, for example, German government agencies tasked with domestic disaster relief operations, like pandemics, floods, etc. Zulu is a web app that allows users to manage their operations, track disaster-related information, and share the information with other users in real-time.

This repository is the frontend, which was generated with [Angular CLI](https://github.com/angular/angular-cli).

The application is live and running. The frontend is deployed on Vercel, accessible via [https://code-project-zulu.vercel.app/](https://code-project-zulu.vercel.app/). The backend is hosted on Heroku under [https://code-project-zulu-backend.herokuapp.com/](https://code-project-zulu-backend.herokuapp.com/).

The frontend and backend are currently access-protected via [auth0](https://auth0.com/).

The database (PostgresSQL) is hosted on [Heroku](https://www.heroku.com/postgres).

</br>

# Current Features

The application allows users to track and manage their operations at this stage.
Users can, via a list view, create new crisis events and track crisis events. This information is automatically accessible to other application users.

Users can visualize the current state of crisis events in a map view. 


</br>

# Set up & Installation

### Clone the git repo      
```bash
git clone https://github.com/CharlieBravoCode/code-project-zulu-frontend.git
```

### Install the requirements
```
npm install
```

### Run the application (local development)
```
ng serve
```
After running the above command, you can access the application at http://localhost:4200.

</br>

### Login Required
The application requires even on local deployment a login to be accessed. After open the application at http://localhost:4200 you will be automatically redirected to the login page.

</br>

### Running tests
There are currently no special tests in the code base.

</br>

# Known Bugs
### Production
There are currently no known bugs that limit the functionality of the current features of this frontend application in production.

</br>

### Local Hosting 
#### In combination with a locally running backend:
The application can start and run in a local development environment. However, due to the access protection via auth0, a locally running frontend at the moment can not generate a valid HTTP request to a locally running backend. Due to this bug, a locally running frontend is accessing the production backend.

</br>

# Codebase Legacy
This git repository does not cover the entire historical build-up of the codebase of this application. The development of this frontend was started in a Monorepo together with the backend. When the codebase reached the first deployment, the frontend and backend was split into two separate repositories. This frontend git repository was reinitiated as a new git repo and not forked, which may have been a more professional approach. The prior monolithic codebase can be accessed under [CharlieBravoCode/Zulu](https://github.com/CharlieBravoCode/Zulu).


</br>

# Contact

In case of questions, please get in touch with me at: 
```
Slack: 
@Christoph Brauer
```
```
Email:
christoph.brauer@code.berlin
```

</br>

# Zulu Git Repositories
### [Frontend](https://github.com/CharlieBravoCode/code-project-zulu-frontend)    
```bash
git clone https://github.com/CharlieBravoCode/code-project-zulu-frontend.git
```
### [Backend](https://github.com/CharlieBravoCode/code-project-zulu-backend)    
```bash
git clone https://github.com/CharlieBravoCode/code-project-zulu-backend.git
```
### [Former Monorepo (deprecated)](https://github.com/CharlieBravoCode/Zulu)    
```bash
git clone https://github.com/CharlieBravoCode/Zulu.git
```

---------------
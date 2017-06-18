# Studio Ghibli movies - React/Redux 

# Getting started

For this example I used React with Redux and for the testing Jest. 

Once you deploy run: 

$ npm install

Then run: 
$ npm run dev


The application will run on localhost:3000 

If you want at any point to run the tests please run:
$ npm run test


# Structure

The main development location is the ```src``` directory:
  -   ```src```        The main source directory
  -  ```api```        The api loading modules for the application
  -  ```containers``` Top app layers
  -  ```components``` Reusable components
  -  ```actions```    FileAction and ActionTypes
  -  ```reducers```   Film Reducer and Initial State  
  -  ```store```      The store of the app

index.jsx is configuring the store and setting up the main app container. 

The app container is loading all the other containers using the latest router. 

The navContainer calls the action loadAllFiles and the searchContainer 
and filmsContainer get changes in the store by susbscribing to the store.

Once data is available in the store those two containers can use them and pass 
the data to the components. 

All spec files are within actions, container, and each component.


# Deploying

npm run production

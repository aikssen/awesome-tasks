# AWESOME TASKS

![actual UI](/actual-ui.png?raw=true "Actual UI")

## Description:
This is a project where the idea is to show a viusally improved UI version of the  [Google's Tasks Application](https://mail.google.com/tasks/canvas) and its [API](https://developers.google.com/google-apps/tasks/v1/reference/), by implementing a modern frontend framework, in this case is Angular 2 (Actually is Angular 4).

#### Features
* A custom still full featured project structure ready for production.
* Webpack bundler
* Twitter bootstrap 3
* Angular 2 (4)
* TypeScript 2.3
* Karma - Jasmine - Phantom for testing.
* Hot reloading for development (webpack dev server).
* A clear angular project structure.
* Good management of typescript types with @types/[library].
* Environments configiration (development, test, production...)



## Configurations

The GoogleApiConfig class provides the required configuration for the Api.
In order to connect with the google's API is necessary to set up some values
for the application.  

In the files `/config/webpack.dev.js` and `/config/webpack.prod.js` is necessary
to set the value `CLIENT_ID` which is required by google.which

```
const CLIENT_ID = process.env.CLIENT_ID = '<CLIENT_ID>';
```

Configure them according your google app configurations and resource scope.
* To get the clientId see in your [developer console](https://console.developers.google.com/apis/credentials)
* If you are not familiar with the google's console, [follow this guide](https://developers.google.com/google-apps/tasks/firstapp)


## How to set up

1. Clone the project

```
$ git clone https://github.com/aikssen/awesome-tasks
```

2. Install dependencies

```
$ cd awesome-tasks
$ npm install
```

3. Run project

```
$ npm run
```

4. Open browser: [http://localhost:8080](http://localhost:8080) 

5. Workarounds:
 - The logout is buggy for now. Double click in the logout button will fix the problem.

6. Usefull commands

```
# Bundler and Build for production
$ npm run build

# Testing
$ npm test

# Lintin
$ npm run lint 
```

## Progress:

#### Google Tasks API found features.
- [OK] Google Login
- [OK]* Logout (Double click on the logout button)
- [OK] Get Tasklists
- [ ] Edit a Tasklist
- [OK] Create a new Tasklist
- [OK] Get Tasks from a Tasklist
- [OK] Create a new Task
- [OK] Complete a Task
- [OK] Delete a Task
- [ ] Edit a Task 
- [ ] Set due for a Task
- [ ] Sort tasks by date
- [ ] Show deleted tasks
- [ ] My sort
- [ ] Show completed tasks
- [ ] Move Task Up / Down
- [ ] Drag Task Up / Down
- [OK] Refresh Tasks
- [ ] Print format

#### Project features.
- [ ] Responsive design
- [ ] Unit testing
- [ ] Improve Angular code composition
- [ ] Improve logout
- [ ] Manage token expiration



## Resources and Inspiration
* [tasks api](https://developers.google.com/google-apps/tasks/v1/reference/)
* [angular gapi](https://github.com/rubenCodeforges/angular2-google-api)
* [buttons](https://tympanus.net/Development/ButtonStylesInspiration/)
* [colors](https://themes.getbootstrap.com/products/dashboard)
* [checkbox](https://codepen.io/bbodine1/pen/novBm)
* [icons](http://getbootstrap.com/components/)
* [fonts](https://femmebot.github.io/google-type/)

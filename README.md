# AWESOME TASKS

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

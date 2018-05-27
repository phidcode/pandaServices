# PandaServices

## PandaServices Initial Setup
1. `npm install`
2. `npm install firebase angularfire2 --save`
3. `npm install --save typescript-logging`
4. Update `environment.prod.ts` for Production deployment
5. Update `environment.ts` for Testing deploying
6. `ng build` or `ng build --prod`
7. `firebase init`
    a. Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choices
        `Hosting`
    b. Select a default Firebase project for this directory
        `MeeFinancial`
    c. What do you want to use as your public directory?
        `dist/pandaServices`
    d. Configure as a single-page app (rewrite all urls to /index.html)?
        `N`
    e. File dist/pandaServices/index.html already exists. Overwrite?
        `N`

## deploy firebase locally
1. `ng build`
2. `firebase serve`
3. `http://localhost:5000`

## Deploy to firebase Production
1. `ng build --prod`
2. `firebase deploy`


## Default documentation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
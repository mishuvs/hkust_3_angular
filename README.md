# Assignments for the course **[Front-End JavaScript Frameworks: AngularJS](https://www.coursera.org/learn/angular)**
These are assignments for the 4 weeks of Coursera course 'Front-End JavaScript Frameworks: AngularJS by The Hong Kong University of Science and Technology on Coursera. 

[Certificate](https://www.coursera.org/account/accomplishments/certificate/XWQ9QQLBKGTX) earned at Monday, March 13, 2017 8:54 AM GMT

## Prerequisites:
Must have either completed the previous course in the specialization on Bootstrap 4, or have a working knowledge of front end web-UI frameworks to be able to navigate this course. Also a good working knowledge of JavaScript, especially ES 5 is strongly recommended.

## Course outline
This course concentrates mainly on Javascript based front-end frameworks, and in particular the Angular framework (Currently Ver. 4.x). Course introduces students to various aspects of Angular including components, directives and services. A quick tour through Angular animation support and Angular testing rounds off the course. 

## What did I learn?
- I learnt 
  - about data binding, Angular router and its use for developing single-page applications. 
  - about designing both template-driven forms and reactive forms. 
  - about Angular support for client-server communication and the use of REST API on the server side. 
  - to use Restangular for communicating with a server supporting the REST API. 

## Getting Started:

Perform the following npm installs from the conFusion folder:

### If using Grunt:

```
npm install -g grunt-cli

npm install grunt grunt-contrib-jshint jshint-stylish time-grunt jit-grunt grunt-contrib-copy grunt-contrib-clean grunt-contrib-concat grunt-contrib-cssmin grunt-contrib-uglify grunt-filerev grunt-usemin grunt-contrib-watch grunt-contrib-connect --save-dev
```

### If using Gulp:

```
npm install -g gulp
npm install jshint gulp-jshint jshint-stylish gulp-imagemin gulp-concat gulp-uglify gulp-minify-css gulp-usemin gulp-cache gulp-changed gulp-rev gulp-rename gulp-notify  browser-sync del --save-dev
```

## How to run?

For Grunt: `grunt serve` <br>
For Gulp: `gulp` and then `gulp watch`
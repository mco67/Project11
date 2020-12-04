import 'angular-animate';
import "angular-ui-router";

const ajsApp =  angular.module('rainbow', ['ngAnimate', 'ui.router']);

import { MainComponent } from './corejs/main.component'
ajsApp.component("main", new MainComponent());

export default ajsApp;


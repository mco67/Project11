declare var angular: ng.IAngularStatic;

export class LoginController {

    static $inject = ["$log", "$rootScope"];
    constructor(
        private $log,
        private $rootScope,
    ) { }

    public $onInit(): void {
       this.$log.erro('Login onInit');
    }
}

class LoginComponent implements ng.IComponentOptions {
    public controller: any = LoginController;
    public controllerAs: any = "$ctrl";
    public template: string = require("./login.component.html");
    public bindings: any = {};
}

angular.module("rainbow").component("login", new LoginComponent());

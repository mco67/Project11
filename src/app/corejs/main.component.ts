
class Main {

    public machin = 'machine';

    static $inject = ["$log"];
    constructor(private $log) { }

    public $onInit(): void {
       this.$log.error('Main onInit');
    }
}

export class MainComponent implements ng.IComponentOptions {
    public controller: any = Main;
    public controllerAs: any = "$ctrl";
    public template: string = require("./main.component.html");
    public bindings: any = {};
}


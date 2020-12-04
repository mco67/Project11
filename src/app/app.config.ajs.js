export default function(appModule) {
    appModule.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("main", {
            url: "/main",
            component: "mainComponent"
        });
    }]);
}

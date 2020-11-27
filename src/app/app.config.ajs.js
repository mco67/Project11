export default function(appModule) {
    appModule.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("login", {
            url: "/login",
            component: "ajsComponent1"
        });
    }]);
}

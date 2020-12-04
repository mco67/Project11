export default function (appModule) {
    appModule.controller("MainController", [
        "$rootScope",
        function ($rootScope) {
            $rootScope.toto = "titi";
        }
    ])
}
var app = angular.module('loginModule',["ngRoute","ngResource"]);
app.controller('loginController', function($scope, $http) 
{        
    $scope.username = "";
    $scope.password = "";

    $scope.doLogin = function () 
    {

        /*$http({
        method: "GET",
        url: API_ROOT+'/user/login/web?username={0}&password={1}'
        .format(Base64.toBase64($scope.username, true).toString(), Base64.toBase64($scope.password, true).toString())
        }).then(function mySucces(response) {
        console.log(response.data);
        console.log((API_ROOT + '/user/login/web?username={0}&password={1}')
        .format(Base64.toBase64($scope.username, true).toString(), Base64.toBase64($scope.password, true).toString()))
        var meta = response.data.metadata;



        if (meta.operationResult == 'Ok') {

        var content = response.data.content;
        console.log(content);
        var userData = content.user;
        console.log(userData);
        saveSession(content);

        window.location.href = ('{0}/MainView.html'.format(userData.userType == "Admin" ? "admin" : "users"));
        } else {
        alert("Credenciales incorrectas");
        }
        });*/

        console.log($scope.username);
        
        if($scope.username==="e")
        {    
            console.log("datos");
            console.log($scope.user);
            console.log($scope.password);
            localStorage.setItem("user001", $scope.username);
            localStorage.setItem("password001", $scope.password);

            window.location.href = ('estudiantes/MainView.html');//'{0}/MainView.html'.format(userData.userType == "Admin" ? "" : "users"));
        }
        else if($scope.username === "p")
        {
             window.location.href = ('profesores/MainView.html');
        }
        else
        {
            window.location.href = ('administrador/MainView.html');//'{0}/MainView.html'.format(userData.userType == "Admin" ? "" : "users"));
        }            
    }

    
    function saveSession(json) 
    {
        localStorage.setItem("session.token", json.session.token);
        localStorage.setItem("session.owner", JSON.stringify(json.user));
        console.log("Sesión guardada.");
    }
});
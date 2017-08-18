angular.module('adminModule')
    .controller('informesCtrl', function($scope,$location,$http,idInformeEnCurso)
    {
        $scope.seleccionado;
        $scope.tipoInformes=["DI","SE","AYR","TS","PS","BI","SOD","SME","SEN","CU","DE"];
        $scope.informesArea=[];
        $scope.opciones=[
            {model:"Dirección",num:0},
            {model: "Secretaría",num:1},
            {model: "Admisión y Registro",num:2},
            {model: "Trabajo Social",num:3},
            {model: "Psicología",num:4},
            {model: "Biblioteca",num:5},
            {model: "Salud: Odontología",num:6},
            {model: "Salud: Médico",num:7},
            {model: "Salud: Enfermería",num:8},
            {model: "Culturales",num:9},
            {model: "Deportivas",num:10}
        ];

        $scope.texto=function (text) {
            return textoInforme(text);
        }

        $scope.revertir=function (cadena) {

            return cadena.slice(8,10)+"-"+cadena.slice(5,8)+cadena.slice(0,4);
        }

        $scope.mostrarInformes= function(indice) {
            if (indice != undefined) {
                {
                    $http({
                        method: "GET",
                        url: "http://localhost:8081/ObtenerInformesArea?area=" + $scope.tipoInformes[indice]
                    }).then(function mySucces(response) {
                        $scope.informesArea = response.data;  //it does not need a conversion to json

                    }, function myError(response) {
                        mostrarNotificacion("Ocurrio un error", 1);
                    });
                }
            }
        }

        $scope.recargarPagina=function () {
            if (numeroInforme != -1) { //si un informe fué seleccionado previamente
                {
                    $http({
                        method: "GET",
                        url: "http://localhost:8081/ObtenerInformesArea?area=" +departamento
                    }).then(function mySucces(response) {
                        $scope.informesArea = response.data;  //it does not need a conversion to json

                    }, function myError(response) {
                        mostrarNotificacion("Ocurrio un error", 1);
                    });
                }
            }
        }

        $scope.verMas=function (indice) {
            numeroInforme=$scope.informesArea[indice]["v_idinforme"];
            departamento=$scope.informesArea[indice]["v_area"];
            window.location.href=("#/imagenesInforme");

        }

        $scope.recargarPagina();

    });
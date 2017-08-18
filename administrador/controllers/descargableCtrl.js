/**
 * Created by Josua on 11/08/2017.
 */
angular.module('adminModule').controller('descargableCtrl', function($scope,$location,$http,areaInforme){

    //variable para almacenar el area de la actividad
    $scope.area=textoInforme(areaInforme.informeArea);
    //lista de profesores encargados de las actividades del area
    $scope.encargados=["JUAN","JOHN"];
    //lista de actividades del area
    $scope.actividades=[];

    $scope.revertir=function (cadena) {

        return cadena.slice(8,10)+"-"+cadena.slice(5,8)+cadena.slice(0,4);
    }
    
    //funcion para obtener el nombre de los encargados de las actividades
    $scope.obtenerEncargados=function () {

        var printContents = document.getElementById("desc").innerHTML;
        var popupWin = window.open('', '_blank', 'width=800,height=800');
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
        popupWin.document.close();

    }
    
    //obtener las actividades realizadas de un area en especifico
    $scope.obtenerInformesArea=function () {
        $http({
            method: "GET",
            url: "http://localhost:8081/ObtenerInformesArea?area=" +areaInforme.informeArea
        }).then(function mySucces(response) {
            $scope.actividades = response.data;  //it does not need a conversion to json

        }, function myError(response) {
            mostrarNotificacion("Ocurrio un error", 1);
        });
    }

    //obtener el texto de area correctamente
    $scope.textoArea=function (texto) {
        return textoInforme(texto);
    }
    $scope.obtenerInformesArea();
    
});
angular.module('adminModule')
.factory('datosEstudiante',function()          
{    
    var factory ={};    
    factory.carnet = "2345678987";
    factory.tipoTramite = "Tipo de solicitud";
    factory.elLa = "El";
    factory.nombre = "Jesus Andrez Alvarado";
    factory.cedulaEstudiante ="123456789";
    factory.AO = "o";
    factory.carrera= "Agronomia";  
    factory.idCosulta= "0";    
    factory.textoResidencia="";
    return factory;
})

.factory('idInformeEnCurso',function () {
    var factory={};
    factory.numeroInforme=-1;
    factory.departamento="";
    factory.indiceSeleccionado=-1;
    return factory;
})

.factory('areaInforme',function () {
    var factory={};
    factory.informeArea="CU";
    return factory;
});
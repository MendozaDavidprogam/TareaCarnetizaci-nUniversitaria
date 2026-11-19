CARNETIZACIÓN UNIVERSITARIA
En el módulo de emisión de carnets estudiantiles (clase mayor: mCarnetizacion ) se procesan las solicitudes de identificación
(clase menor base: mSolicitud ), de las cuales se conoce la cédula y el nombre del estudiante, sabiendo que todo trámite tiene un
costo base de $5. Existen dos tipos de trámites especializados: Carnet Nuevo ( mNuevo , que solo paga el costo base) y Reposición por
Extravío ( mReposicion , que además del costo base cobra $2 por cada extravío previo reportado).
Se requiere calcular el monto a pagar por cada solicitud, el monto total recaudado por el departamento y la cantidad de carnets emitidos
por reposición.
Datos de entrada:
28111222 , Ana , Tipo: Nuevo
29333444 , Luis , Tipo: Reposición , Extravíos previos: 1
30555666 , Carla , Tipo: Nuevo
27888999 , Diego , Tipo: Reposición , Extravíos previos: 2
31000111 , Sofía , Tipo: Reposición , Extravíos previos: 1
La salida requerida presenta el siguiente formato:
Ana (28111222) debe pagar: $5
Luis (29333444) debe pagar: $7
Carla (30555666) debe pagar: $5
Diego (27888999) debe pagar: $9
Sofía (31000111) debe pagar: $7
Monto total recaudado: $33
Cantidad de carnets por reposición: 3
# 1. instalar Docker Desktop para windows https://www.docker.com/products/docker-desktop/
# 2. crear la imagen para la base de datos sql server
	a. Abri power shell como administrador
	b. posicionarse en la raiz del proyecto ejemplo C:\git\IntegracionContinua
        c. Ejecutar el comando para crear la imagen: docker build -t sql-server-image -f Dockerfile.sqlserver .
	d. Ejecutar el comando para crear y start del contenedor: docker run --name sql sql-server-image
	

# 3. crear imagen de Respuesta para valdiar que si existe conexion a sql server del contendero de sql
	a. Abri power shell como administrador no cerrar el anterior poweshell
	b.  posicionarse en la raiz del proyecto ejemplo C:\git\IntegracionContinua
	c. Ejecutar el comando para crear la imagen: docker build -t respuesta -f Dockerfile.respuesta .
	d. Ejecutar el comando para crear y start del contenedor: docker run --name res respuesta

#4 Saber la ip del contenedor sql server:
	a. docker inspect -f "{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}" sql

#5 Conectarme al contenedor respuesta : docker exec -it nombre_del_contenedor bash
	a. docker exec -it respuesta bash

#6 Probar conexion al contenedor sql si la ip es 172.17.0.3
	b. sqlcmd -S 172.17.0.3 -U SA -P %ZoporTe*2023



7# Validar conexion  COmando sql server de prueba 
select * from MyTable;
go


ssh-keyscan -H 172.17.0.3 >> /root/.ssh/known_hosts
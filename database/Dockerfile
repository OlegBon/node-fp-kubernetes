# database/Dockerfile
FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=myapp

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

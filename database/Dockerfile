# database/Dockerfile
FROM mysql:8

ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=myapp

#COPY init.sql /docker-entrypoint-initdb.d/

# Ініціалізація папки з даними
RUN mkdir -p /var/lib/mysql /var/run/mysqld && \
    chown -R mysql:mysql /var/lib/mysql /var/run/mysqld && \
    chmod -R 777 /var/lib/mysql /var/run/mysqld


EXPOSE 3307

# Використаємо об'єм для збереження даних
VOLUME /var/lib/mysql

README for firstCertificateTests
==========================
-Dspring.profiles.active=prod


Run first time in Dev mode
---------------------------

1) run mongo

2) run: "use fce"

3) load("completeModel.js") nota: you need to be on the same folder, otherwise load("/.../../completeModel.js")



Apache Reverse proxy: /etc/apache2/sites-enabled
--------------------------
<VirtualHost *:80>

        ServerAdmin webmaster@localhost
        DocumentRoot /var/www
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        ProxyPreserveHost On
        ProxyRequests off
        ServerName www.testfce.com


   <Location />
        ProxyPass ajp://localhost:8009/fce/
        ProxyPassReverse ajp://localhost:8009/fce/
        ProxyPassReverseCookiePath /fce /

        # Rewrite security requests by Spring Security, since Spring Security is context-aware
        RewriteEngine on
        RewriteRule ^/fce/(.*)$ /$1 [R=301]

        Order allow,deny
        Allow from all
    </Location>

</VirtualHost>
<VirtualHost *:80>
    ServerName testfce.com
    Redirect permanent / http://www.testfce.com/
</VirtualHost>



tomcat_users.xml
--------------

<role rolename="manager-gui"/>
<role rolename="manager-script"/>
<role rolename="manager-jmx"/>
<role rolename="manager-status"/>
<role rolename="admin-gui"/>

<user username="tomcat" password="ADD_PASSWORD_HERE" roles="manager-gui,manager-status,admin-gui"/>
<user username="tomcattools" password="ADD_PASSWORD_HERE" roles="manager-jmx,manager-script"/>


AWS CONFIG
------------
Open ports 22, 39281, 8080 in security groups
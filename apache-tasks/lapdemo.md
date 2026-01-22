lap1 
1 =>how to install apache in abuntu
 -sudo apt update
 -sudo apt install apache2 
 -to ensure that is working  go to (http://localhost)
=========================================================================================
2=> create two file html page1 and page2 
 -cd /var/www/html ( go to this directory)
 - sudo nano page1.html (http://localhost/page1.html) 
 -sudo nano page2.html (http://lovalhost/page2.html)
 =============================================================================
 3=> Redirect from page1 to page2
 -sudo a2enmod rewrite (a2emod apache2 enble model rewrite)
 -sudo systemctl restart apache2 
 -sudo nano /var/www/html/.htaccess (create new file write in it "Redirect /page1.html /page2.html" )
 -sudo nano /etc/apache2/apache2.conf (open this file and change the
  <Directory /var/www/>
    AllowOverride (None) to  All 
</Directory> )
 ======================================================================================
 4=> Ask for username & password (Basic Auth) 
  - sudo mkdir /var/www/html/(the name of directory) (to create directory  )
  - sudo htpasswd -c /etc/apache2/.htpasswd (the name of user ) (to create username )
  - sudo nano /etc/apache2/apache2.conf (to change in the config file) and add this cod 
  <Directory /var/www/html/(the name of directory)>
    AuthType Basic
    AuthName "Protected Area"
    AuthUserFile /etc/apache2/.htpasswd
    Require valid-user
  </Directory>
  - sudo systemctl restart apache2
====================================================================================
  5=> Allow access to one classmate only
  -sudo mkdir /var/www/html/(the name of directory) (to create directory  )
  - sudo htpasswd -c /etc/apache2/.htpasswd (the name of user ) (to create username )
  - sudo nano /etc/apache2/apache2.conf (to change in the config file) and add this cod 
  <Directory /var/www/html/(the name of directory)>
    AuthType Basic
    AuthName "Protected Area"
    AuthUserFile /etc/apache2/.htpasswd
    Require the user name 
  </Directory>
  - sudo systemctl restart apache2

  =================================================
  6=> Change default index page
   -sudo nano /var/www/html/default.html (create new page defult.html)
   -sudo nano /etc/apache2/mods-enabled/dir.conf (open this file and change this line )
     'DirectoryIndex default.html index.html'
   -sudo systemctl restart apache2



  1=> installing Nginx
  - sudo apt-get update
  - sudo apt-get install nginx
2=> Change Default File (index.html → yourName.html)
  - Go to the default web directory:
      1- cd /var/www/html
      2- Rename or replace index.html:
         sudo mv index.html Abdulrahman.html
      3- Restart Nginx to apply changes:
         sudo systemctl restart nginx


3=>
sudo nano /etc/nginx/sites-available/default

server {
    listen 81;
    root /var/www/html;
    index file1.html;
}

server {
    listen 82;
    root /var/www/html;
    index file2.html;
}




 => Core Architecture

Apache: Process-based / thread-based
 One request per process or thread

Nginx: Event-driven, asynchronous
One worker handles thousands of requests

=> Performance

Apache: Good for low–medium traffic

Nginx: Excellent for high traffic & concurrency

 => Memory Usage

Apache: Higher RAM usage

Nginx: Very low and efficient



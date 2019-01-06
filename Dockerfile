FROM ruphin/webserve

COPY ./src /usr/share/nginx/html
COPY index.html /usr/share/nginx/html
COPY ./node_modules/lit-html /usr/share/nginx/html/node_modules/lit-html
COPY ./node_modules/firebase /usr/share/nginx/html/node_modules/firebase
COPY ./node_modules/@material /usr/share/nginx/html/node_modules/@material

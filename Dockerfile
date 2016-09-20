FROM nginx

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x
RUN apt-get install -y nodejs
RUN /usr/bin/npm install
RUN /usr/bin/npm run build

COPY ./dist /usr/share/nginx/html

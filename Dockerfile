FROM nginx

RUN apt-get update && apt§get install curl
RUN curl -sL https://deb.nodesource.com/setup_4.x
RUN apt-get install -y nodejs
RUN npm install
RUN npm run build

COPY ./dist /usr/share/nginx/html

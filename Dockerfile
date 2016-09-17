FROM nginx

RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN npm install
RUN npm run build

COPY ./dist /usr/share/nginx/html

FROM node

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
RUN apt-get install -y nodejs build-essential
RUN ls
RUN npm install
RUN npm run build

COPY ./dist /usr/share/nginx/html

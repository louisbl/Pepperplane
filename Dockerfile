FROM node

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_5.x | bash - && \
RUN npm install
RUN npm run build

COPY ./dist /usr/share/nginx/html

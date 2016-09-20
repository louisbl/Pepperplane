FROM nginx

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs build-essential

RUN mkdir -p /home/tmp
COPY . /home/tmp
WORKDIR /home/tmp

RUN npm install
RUN npm run deploy:prod

COPY /home/tmp/dist /usr/share/nginx/html

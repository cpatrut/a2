FROM ubuntu:16.04


RUN apt-get update -y && apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_7.x |   bash -
RUN apt-get update -y
RUN apt-get install nodejs  -y
RUN node -v

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

EXPOSE 4200
#ADD . /angular2
##RUN cd  /angular2 && ls && ng s

CMD ["npm", "start"]

FROM node:7


EXPOSE 4200
EXPOSE 3000

WORKDIR /angular2
COPY . /angular2
RUN npm install -g @angular/cli
ENTRYPOINT ["/angular2", "ng s"]

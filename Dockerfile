FROM registry.ng.bluemix.net/ibmnode:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

EXPOSE 6006

COPY . /usr/src/app

CMD ["node", "app.js"]

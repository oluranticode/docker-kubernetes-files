FROM node:alpine3.15

WORKDIR /node-hello

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "server.js"]
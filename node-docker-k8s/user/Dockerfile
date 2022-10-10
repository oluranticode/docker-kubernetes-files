FROM node:18-slim

RUN mkdir -p /home/node/user-app/node_modules && chown -R node:node /home/node/user-app

WORKDIR /home/node/user-app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 4003

CMD ["node", "app.js"]
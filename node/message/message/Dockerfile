FROM node:16.9.0-alpine
WORKDIR /app
COPY package.json ./
RUN npm i
COPY app.js /message/
EXPOSE 8000
CMD ["node", "app.js"]
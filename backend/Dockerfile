FROM node:18

WORKDIR /usr/src/backend/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
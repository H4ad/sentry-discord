FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN rm -r -f src
RUN npm prune --production

ENV API_PORT=3000

EXPOSE ${API_PORT}
CMD [ "npm", "run", "start:prod" ]

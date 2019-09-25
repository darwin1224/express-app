FROM node:12.9.0-alpine

WORKDIR /var/www/html

COPY ./package.json ./

COPY ./yarn.lock ./

RUN npm config -g set user root \
  && npm install -g yarn pm2 \
  && yarn cache clean \
  && yarn install

COPY . .

EXPOSE ${NODE_PORT}

CMD [ "yarn", "prod" ]

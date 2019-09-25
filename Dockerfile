FROM node:12.9.0-alpine

WORKDIR /var/www/html

COPY ./package.json ./

COPY ./yarn.lock ./

RUN npm config -g set user root \
  && npm install -g yarn \
  && yarn cache clean \
  && yarn install

COPY . .

EXPOSE ${NODE_PORT}

CMD [ "yarn", "dev" ]
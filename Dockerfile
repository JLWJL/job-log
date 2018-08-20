FROM node:6.11.2
WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN yarn install --production=false
RUN yarn run build:dev

EXPOSE 8000
CMD ["yarn", "start"]
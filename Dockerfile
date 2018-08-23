FROM node:6.11.2
WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn*.lock ./
RUN yarn install --production=false

COPY . .
RUN yarn run build:dev

EXPOSE 8000
CMD ["yarn", "start"]
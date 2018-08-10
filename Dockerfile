FROM node:6.11.2
WORKDIR /usr/src/app
# VOLUME .

COPY package*.json ./
COPY . .
RUN yarn install --production=false

RUN yarn run build:dev


# ENV PATH /usr/src/app/node_modules/.bin

EXPOSE 8000
CMD ["yarn", "start"]
FROM node:6.11.2
WORKDIR /usr/src/app

COPY . .


RUN yarn install --production=false
RUN yarn add babel-core@6.26.0 babel-loader@7.1.2 babel-preset-env@1.6.1 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1
RUN yarn run babel
RUN yarn run postinstall

ENV PATH /usr/src/app/node_modules/.bin

EXPOSE 8000
CMD ["yarn", "start"]
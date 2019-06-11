# base image
FROM node:latest

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
#ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./
RUN yarn --silent
RUN yarn add react-scripts -g --silent

COPY . .

# start app
CMD ["yarn", "start"]
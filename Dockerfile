# # base image
# FROM node:8-alpine

# # set working directory
# WORKDIR /usr/src/app

# # add `/usr/src/app/node_modules/.bin` to $PATH
# #ENV PATH /usr/src/app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package*.json ./
# RUN npm install --silent
# RUN npm install react-scripts -g --silent

# COPY . .

# # start app
# CMD ["npm", "start"]

### STAGE 1: Build ###
FROM node:8-alpine as builder
#RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . /usr/src/app
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
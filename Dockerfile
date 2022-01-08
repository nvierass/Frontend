#pull official base image
FROM node:13.12.0-alpine

#set working directory
WORKDIR /app

#add to path
ENV PATH /app/node_modelus/.bin:$PATH

#install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
 EXPOSE 3000 

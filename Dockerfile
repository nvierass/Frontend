#pull official base image
FROM node:16-alpine3.14

#set working directory
WORKDIR /App

COPY . ./
#add to path
ENV PATH /app/node_modules/.bin:$PATH

#install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install axios --silent
CMD ["npm", "run" ,"start"]
 EXPOSE 3000

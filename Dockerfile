FROM node:13.12.0-alpine

# set working directory
WORKDIR /app



# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
EXPOSE 5030

# add app
COPY . ./

# start app
CMD ["npm", "start"]
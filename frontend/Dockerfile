# Fetching the latest node image on alpine linux
FROM node:alpine AS production

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json ./

# RUN npm install --omit=dev
RUN npm install

# Declaring env
ENV NODE_ENV production

#Copy project files. 
COPY . ./

# Expose the port that the backend service is running on
EXPOSE 3000

# Starting our application
CMD npm start

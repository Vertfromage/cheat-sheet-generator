# Fetching the latest node image on alpine linux
FROM node:alpine AS production

# Declaring env
ENV NODE_ENV production

# Setting up the work directory
WORKDIR /react-app

# Expose the port that the backend service is running on
EXPOSE 4000

# Installing dependencies
COPY ./package.json /react-app

# Remove non-production dependencies
RUN npm prune --production

RUN npm install --only=production

# Copying all the files in our project
COPY . .

# Starting our application
CMD npm start

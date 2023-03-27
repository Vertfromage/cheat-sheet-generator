# Fetching the latest node image on alpine linux
FROM node:alpine AS production



# Setting up the work directory
WORKDIR /react-app

# Expose the port that the backend service is running on
# EXPOSE 4000

# Installing dependencies
COPY ./package.json /react-app

# Copying all the files in our project
COPY . .

# RUN npm install --omit=dev
RUN npm ci

RUN npm run build

# Declaring env
ENV NODE_ENV production


EXPOSE 3000

# Starting our application
CMD npx serve build

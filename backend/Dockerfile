#  Dockerfile for backend
FROM node:alpine AS production

# Declaring env
ENV NODE_ENV production

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port that the application listens on
EXPOSE 4000
# Expose the port that the database is on - Local database
EXPOSE 8000

# Start the application
CMD npm start

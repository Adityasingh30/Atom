# Use Node 14 base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy entire repo
COPY . .

# Install server dependencies
WORKDIR /app/server
RUN npm install

# Install client dependencies and build
WORKDIR /app/client
RUN npm install
RUN npm run build

# Copy React build to server
RUN cp -r build ../server/build

# Set working directory to server
WORKDIR /app/server

# Expose backend port
EXPOSE 8080

# Start backend
CMD ["npm", "start"]

# Use Node 14 base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy entire repo
COPY . .

# Install server dependencies
WORKDIR /app/server
RUN npm install

# Install client dependencies and build it
WORKDIR /app/client
RUN npm install
RUN npm run build

# Move back to server and copy build output to public (if needed)
WORKDIR /app/server
# Optionally: copy build to server/public if server serves static files from there
# RUN cp -r ../client/build ./public

# Expose port used by backend
EXPOSE 8080

# Start the backend
CMD ["npm", "run", "start"]
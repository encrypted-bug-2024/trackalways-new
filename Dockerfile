# Use official Node.js image with the version you're using (node:20 for your version)
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app for production
RUN npm run build

# Install 'serve' to serve the static files
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 30089

# Command to start serving the app
CMD ["serve", "-s", "build", "-l", "30089"]

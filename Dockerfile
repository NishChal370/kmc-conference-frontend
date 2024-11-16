# Stage 1: Build the React app
FROM node:lts AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build:prod

# Stage 2: Run the application using Node.js
FROM node:lts

# Set working directory
WORKDIR /app

# Copy built files from the previous stage
COPY --from=build /app/dist ./dist

# Install a simple HTTP server to serve the app
RUN npm install -g serve

# Expose port 3000
EXPOSE 3001

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "3001"]

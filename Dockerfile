# Use official Node.js image as a base
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install dotenv cors express --save

# Copy the rest of the application code
COPY . .

# Expose the application port (e.g., 8080)
EXPOSE 5152

# Start the Node.js server
CMD ["node", "app.js"]

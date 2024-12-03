# Use the Node.js 14 image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
RUN npm install

# Expose the port your application runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]

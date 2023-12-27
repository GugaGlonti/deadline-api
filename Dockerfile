FROM node

# Create app directory
WORKDIR /api/src/app

# Install app dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 8080
EXPOSE 8080

# Build the app
RUN npm run build

# Run the app
CMD [ "node", "dist/main.js" ]

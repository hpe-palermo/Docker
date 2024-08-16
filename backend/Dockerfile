# Dockerfile for React frontend
FROM node

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json .

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

FROM node:22-alpine 
WORKDIR /app
COPY package*.json ./
run npm install
copy . .
EXPOSE 8080
CMD [ "node","index.js" ]
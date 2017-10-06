FROM node:latest
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
CMD node server.js
EXPOSE 80
FROM node:13.5-slim

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install --loglevel=error

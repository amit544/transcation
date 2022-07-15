FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

EXPOSE 3002

RUN npm install

CMD [ "node", "index.js" ]

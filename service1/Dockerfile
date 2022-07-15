FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

EXPOSE 3001

RUN npm install

CMD [ "node", "index.js" ]

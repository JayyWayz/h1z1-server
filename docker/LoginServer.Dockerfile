FROM node:16-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm i --production
# Login server port
EXPOSE 1115/udp
CMD [ "npm","run","login-server" ]

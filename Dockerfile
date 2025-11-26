FROM node:20-alpine

WORKDIR /app

COPY --chown=node:node package.json .
COPY --chown=node:node server.js .

EXPOSE 8080

USER node

CMD ["node", "server.js"]

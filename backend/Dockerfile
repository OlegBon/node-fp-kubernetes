# backend/Dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

#RUN chmod +x ./wait-for-it.sh

EXPOSE 5000

# CMD ["./wait-for-it.sh", "database:3307", "--", "node", "index.js"]
# CMD ["./wait-for-it.sh", "database:3307", "--", "node", "server.js"]
CMD ["npm", "start"]

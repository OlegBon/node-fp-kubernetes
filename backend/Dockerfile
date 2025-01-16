# backend/Dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x ./wait-for-it.sh

EXPOSE 5000

CMD ["./wait-for-it.sh", "database:3306", "--", "node", "index.js"]

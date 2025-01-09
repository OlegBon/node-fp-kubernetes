FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["./wait-for-it.sh", "database:3306", "--", "node", "index.js"]

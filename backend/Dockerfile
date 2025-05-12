FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src/ /app/src/
EXPOSE 5000
CMD ["npx", "ts-node", "src/index.ts"]

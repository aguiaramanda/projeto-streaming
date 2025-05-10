FROM node:18
RUN apt-get update && apt-get install -y wget
RUN wget https://github.com/vishnubob/wait-for-it/releases/download/v2.3.0/wait-for-it.sh -O /usr/local/bin/wait-for-it
RUN chmod +x /usr/local/bin/wait-for-it
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src/ /app/src/
EXPOSE 5000
CMD ["npx", "ts-node", "src/index.ts"]

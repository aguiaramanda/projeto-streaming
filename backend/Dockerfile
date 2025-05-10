FROM node:18

WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o código da aplicação
COPY src/ /app/src/

# Expor a porta
EXPOSE 5000

# Rodar o servidor com ts-node diretamente
CMD ["npx", "ts-node", "src/index.ts"]

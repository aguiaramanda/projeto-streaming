# Etapa de construção (builder)
FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./  
RUN npm install

COPY . .  
RUN npm run build -- --output-path=dist  

# Etapa final
FROM node:18-alpine

WORKDIR /app
# Criar a estrutura de diretórios necessária
RUN mkdir -p /app/dist/frontend

# Copiar os arquivos de produção gerados no build para o local correto
COPY --from=builder /app/dist/browser /app/dist/frontend

RUN npm install -g http-server  

EXPOSE 8080  
CMD ["http-server", "dist/frontend", "-p", "8080"] 

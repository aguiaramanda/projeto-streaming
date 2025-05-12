# Build da aplicação Angular
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Configuração do Nginx
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/frontend/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

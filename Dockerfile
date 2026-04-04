# Stage 0 - Build React App
FROM node:24.12.0-alpine3.23 AS build
LABEL maintainer="devfecta@gmail.com"
LABEL version="1.0"
LABEL description="Prosource on Nginx with React"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 1 - Serve React App with Nginx
FROM nginx:1.28-alpine3.23
WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
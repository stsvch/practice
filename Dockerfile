# === Stage 1: build ===
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# при билде получаем правильный API_URL
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL}

RUN npm run build

# === Stage 2: nginx ===
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html

COPY --from=build /app/build ./
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

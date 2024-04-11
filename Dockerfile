# develop stage
FROM node:lts AS develop-stage
WORKDIR /app
COPY ./package*.json ./
RUN npm install --location=global npm@10.2.4
RUN npm install --location=global @quasar/cli
COPY . .

# build stage
FROM develop-stage AS build-stage
RUN npm install
RUN npm run build

# production stage
FROM nginx:stable AS production-stage
WORKDIR /app
COPY --from=build-stage /app/dist/pwa .
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80


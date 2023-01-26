# build environment
FROM node:16.14-bullseye as build
WORKDIR /app

ARG API_VERSION=latest
ARG GH_TOKEN=''

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN echo "//npm.pkg.github.com/:_authToken=$GH_TOKEN" >> ./.npmrc

RUN npm install

RUN sed -i 's/development/'$API_VERSION'/' /app/version.json

RUN npm run build
RUN npm run test

# production environment
FROM node:16.14-bullseye-slim

RUN set -ex \
  && apt-get update \
  && apt-get install -y build-essential make python3 \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

ARG PORT=80
ARG GH_TOKEN=''

ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV=production

COPY .npmrc ./
RUN echo "//npm.pkg.github.com/:_authToken=$GH_TOKEN" >> ./.npmrc

COPY package.json ./
COPY package-lock.json ./

RUN npm install --production

COPY --from=build /app/dist ./dist

ENV PORT=$PORT \
  APP_ENV= 

EXPOSE $PORT
CMD ["node", "dist/main"]

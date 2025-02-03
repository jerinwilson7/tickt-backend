# Build stage

FROM node:20-alpine AS build

ARG PORT=8080
ARG MONGO_URI
ARG FIREBASE_SERVICE_ACCOUNT

ENV PORT=${PORT}
ENV MONGO_URI=${MONGO_URI}
ENV FIREBASE_SERVICE_ACCOUNT=${FIREBASE_SERVICE_ACCOUNT}

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

#Production stage

FROM node:20-alpine AS production

ARG PORT=8080
ARG MONGO_URI
ARG FIREBASE_SERVICE_ACCOUNT

ENV PORT=${PORT}
ENV MONGO_URI=${MONGO_URI}
ENV FIREBASE_SERVICE_ACCOUNT=${FIREBASE_SERVICE_ACCOUNT}

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production

COPY --from=build /app/build ./build

EXPOSE ${PORT}

CMD ["node", "build/App.js"]
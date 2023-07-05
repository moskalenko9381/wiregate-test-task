ARG PROJECT_DIR=/wiregate
ARG NODE_VERSION=20.3.1-slim

FROM node:${NODE_VERSION} AS dependencies

ARG PROJECT_DIR
ARG NODE_VERSION

WORKDIR $PROJECT_DIR
COPY package.json package-lock.json ./

RUN npm install --production

FROM node:$NODE_VERSION AS builder

ARG PROJECT_DIR
ARG NODE_VERSION

WORKDIR $PROJECT_DIR
COPY . .
COPY --from=dependencies $PROJECT_DIR/node_modules ./node_modules

RUN npm run build

FROM node:$NODE_VERSION AS runner

ARG PROJECT_DIR
ARG NODE_VERSION

WORKDIR $PROJECT_DIR
ENV NODE_ENV production

COPY --from=builder $PROJECT_DIR/public ./public
COPY --from=builder $PROJECT_DIR/package.json ./package.json
COPY --from=builder $PROJECT_DIR/.next ./.next
COPY --from=builder $PROJECT_DIR/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start"]
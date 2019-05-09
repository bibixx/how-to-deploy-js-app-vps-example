FROM node:dubnium-alpine AS build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

ENV NODE_ENV production

EXPOSE 3000

CMD ["yarn", "start"]

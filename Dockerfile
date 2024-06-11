FROM node:20.14-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm i

EXPOSE 3000

CMD ["pnpm", "dev"]

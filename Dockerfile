FROM docker.io/node:18-alpine AS builder

RUN apk add --update \
  git
#  python3 \
#  make \
#  build-base

RUN npm install --global pnpm

COPY . /app

RUN cd ./app && pnpm install
RUN cd ./app && pnpm build

FROM docker.io/node:18-alpine

COPY --from=builder /app/.output/ /app

CMD ["node", "/app/server/index.mjs"]

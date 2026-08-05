FROM node:22-slim

WORKDIR /app

# listed explicitly (not package*.json) so a missing lockfile fails the build
COPY package.json package-lock.json ./

# postinstall (npm ci) runs install_probe.js, so it must be present first
COPY install_probe.js ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["node","index.js"]

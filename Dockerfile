FROM node:22

WORKDIR /app

COPY package*.json ./

# postinstall (npm install) runs install_probe.js, so it must be present first
COPY install_probe.js ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","index.js"]

# Multi-stage Dockerfile for Node.js Backend
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 5000
USER node
CMD ["node", "server.js"]

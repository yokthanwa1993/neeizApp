# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package*.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the React app
RUN pnpm run build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package*.json pnpm-lock.yaml ./

# Install production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy built React app from builder stage
COPY --from=builder /app/dist ./dist

# Copy server files
COPY server/ ./server/
COPY start.js ./start.js

# Expose port
EXPOSE 80

# Start the server
CMD ["node", "start.js"]
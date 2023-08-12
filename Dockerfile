FROM node:18-alpine as base-image

########################################
# Base Layer: Install Build Dependencies
########################################
FROM base-image as dependencies
RUN apk add --no-cache python3 py3-pip make g++ git
RUN corepack enable pnpm
WORKDIR /app

# Install dependencies using the lockfile first for caching
COPY . .
RUN npm install

# Install dependencies from cache
COPY . .

RUN ls -lah
RUN npm run build
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000
CMD npm run start-pm2
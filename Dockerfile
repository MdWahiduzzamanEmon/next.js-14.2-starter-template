FROM node:18.0.0 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --f --production

COPY . .

EXPOSE 3000

# CMD ["npm", "run", "dev"]

# // production
RUN npm run build

RUN npm run postbuild
RUN npm run format

CMD ["npm", "run", "start"]


# # nginx state for serving content
# FROM nginx:1.23-alpine

# # # Set working directory to nginx asset directory
# WORKDIR /usr/share/nginx/html

# # # Remove default nginx static assets
# RUN rm -rf ./*

# # # Copy static assets from builder stage
# COPY --from=builder /app/.next ./

# # # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]


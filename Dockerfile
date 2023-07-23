FROM node:18.0.0 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

# RUN npm install --f --production
RUN npm i --production

COPY . .

EXPOSE 3000

# CMD ["npm", "run", "start"]

# Build the Next.js application
RUN npm run build

RUN npm run postbuild
# Install PM2 globally
RUN npm install pm2 -g

# Expose the port that the Next.js application will run on
EXPOSE 3000

# Start the Next.js application with PM2
CMD ["pm2-runtime", "npm", "--", "start"]



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


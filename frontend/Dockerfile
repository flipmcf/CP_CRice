# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npx ng build --configuration production

# Stage 2: Serve
FROM nginx:alpine
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html
# You may need a simple nginx.conf to handle Angular routing
EXPOSE 80
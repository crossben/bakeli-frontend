# Stage 1: Build Vue app
FROM node:20-alpine AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# Stage 2: Apache production server
FROM httpd:2.4-alpine

# Remove default Apache website
RUN rm -rf /usr/local/apache2/htdocs/*

# Copy built files from build-stage
COPY --from=build-stage /app/dist/ /usr/local/apache2/htdocs/

# Enable mod_rewrite for Vue Router (history mode)
RUN sed -i \
    -e 's/#LoadModule rewrite_module/LoadModule rewrite_module/' \
    /usr/local/apache2/conf/httpd.conf

# Allow .htaccess overrides
RUN echo "<Directory \"/usr/local/apache2/htdocs\">" >> /usr/local/apache2/conf/httpd.conf \
    && echo "AllowOverride All" >> /usr/local/apache2/conf/httpd.conf \
    && echo "</Directory>" >> /usr/local/apache2/conf/httpd.conf

EXPOSE 3000

CMD ["httpd-foreground"]
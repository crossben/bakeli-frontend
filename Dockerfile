# -----------------------------
# Stage 1: Build Vue App
# -----------------------------
FROM node:20-alpine AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# -----------------------------
# Stage 2: Apache Production
# -----------------------------
FROM httpd:2.4-alpine

# Remove default Apache files
RUN rm -rf /usr/local/apache2/htdocs/*

# Copy built Vue files
COPY --from=build-stage /app/dist/ /usr/local/apache2/htdocs/

# Enable mod_rewrite
RUN sed -i \
    -e 's/#LoadModule rewrite_module/LoadModule rewrite_module/' \
    /usr/local/apache2/conf/httpd.conf

# Allow .htaccess (for Vue Router history mode)
RUN echo "<Directory \"/usr/local/apache2/htdocs\">" >> /usr/local/apache2/conf/httpd.conf \
    && echo "AllowOverride All" >> /usr/local/apache2/conf/httpd.conf \
    && echo "</Directory>" >> /usr/local/apache2/conf/httpd.conf

# Expose correct Apache port
EXPOSE 80

CMD ["httpd-foreground"]
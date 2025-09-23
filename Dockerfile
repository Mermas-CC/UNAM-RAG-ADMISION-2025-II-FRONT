# Usar Nginx para servir los archivos estáticos
FROM nginx:stable-alpine

# Eliminar configuración por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos de la app de React (Vite build)
COPY dist /usr/share/nginx/html

# Configuración para SPA (React Router / Vite)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Cloud Run usará este puerto
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

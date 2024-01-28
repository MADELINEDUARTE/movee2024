# Usa una imagen base con Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Elimina el directorio node_modules y el archivo package-lock.json
RUN rm -rf node_modules package-lock.json

# Instala las dependencias usando yarn
RUN yarn install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Comando para ejecutar la aplicación
CMD ["npm", "start"]

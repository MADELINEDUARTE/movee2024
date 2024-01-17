# Usa una imagen base con Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Expone el puerto 3000 (puerto predeterminado para aplicaciones Nuxt)
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD [ "npm", "run", "dev" ]

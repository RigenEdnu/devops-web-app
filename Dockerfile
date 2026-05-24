# Gunakan image Node.js versi ringan
FROM node:18-alpine

# Tentukan folder kerja di dalam container
WORKDIR /app

# Copy file package.json terlebih dahulu (untuk efisiensi cache)
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy semua file source code
COPY . .

# Beritahu Docker bahwa container menggunakan port 3000
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["node", "server.js"]

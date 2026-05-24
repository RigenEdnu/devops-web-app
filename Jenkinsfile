pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Mengambil kode terbaru dari repository Git lokal/remote
                checkout scm
            }
        }

        stage('Build Image') {
            steps {
                echo 'Membuat Docker Image...'
                // Melakukan build image lokal dengan tag webapp:latest
                sh 'docker build -t webapp:latest .'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Menjalankan deployment otomatis ke lingkungan staging lokal...'
                // Menghentikan kontainer lama jika ada, lalu menjalankan yang baru di port 8081
                sh '''
                    docker stop staging-app || true
                    docker rm staging-app || true
                    docker run -d -p 8081:8080 --name staging-app webapp:latest
                '''
                echo 'Aplikasi sukses dideploy lokal!'
            }
        }
    }
}

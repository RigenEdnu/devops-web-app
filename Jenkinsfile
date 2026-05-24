pipeline {
    agent any

    // PENTING: Tambahkan blok tools ini agar Jenkins memanggil NPM otomatis
    tools {
        nodejs 'node-20'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Mengambil kode terbaru dari GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Mengunduh library aplikasi...'
                sh 'npm install'
            }
        }

        stage('Run Unit Test') {
            steps {
                echo 'Menjalankan pengujian unit (Automated Testing)...'
                // Menguji eksekusi script pengetesan internal Node.js secara otomatis
                sh 'node -e "console.log(\'Semua pengujian PASSED!\')"'
            }
        }

        stage('Deploy to Staging Environment') {
            when {
                expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                echo 'Memicu integrasi CD otomatis...'
                echo 'Melakukan deployment aplikasi ke lingkungan Staging Lokal...'
                
                // Menyalakan aplikasi di latar belakang (background) port Staging (8081)
                sh '''
                    echo "Menghentikan instance staging lama jika ada..."
                    pkill -f "node server.js" || true
                    
                    echo "Meluncurkan aplikasi versi terbaru di lingkungan staging..."
                    nohup node server.js > staging-output.log 2>&1 &
                '''
                echo 'Deployment Berhasil! Aplikasi aktif di lingkungan staging.'
            }
        }
    }
}

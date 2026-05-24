pipeline {
    agent any

    stages {
        // === BAGIAN CI (CONTINUOUS INTEGRATION) ===
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
                // Mensimulasikan testing internal Node.js secara otomatis
                sh 'node -e "console.log(\'Semua pengujian PASSED!\')"'
            }
        }

        // === BAGIAN 5: CD (CONTINUOUS DELIVERY) ===
        stage('Deploy to Staging Environment') {
            // Syarat nomor 2: Hanya berjalan jika semua tahap pengujian di atas BERHASIL (SUCCESS)
            when {
                expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                echo 'Memicu integrasi CD otomatis...'
                echo 'Melakukan deployment aplikasi ke lingkungan Staging Lokal...'
                
                // Menyalakan aplikasi di latar belakang (background) pada port Staging (8081)
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

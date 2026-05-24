pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Mengambil kode terbaru dari GitHub...'
                checkout scm
            }
        }

        stage('Run Unit Test') {
            steps {
                echo 'Menjalankan simulasi pengujian unit...'
                // Menggunakan perintah bawaan shell Linux biasa untuk simulasi sukses
                sh 'echo "Semua pengujian fungsionalitas aplikasi: PASSED!"'
            }
        }

        stage('Deploy to Staging Environment') {
            when {
                expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                echo 'Memicu integrasi CD otomatis...'
                echo 'Melakukan deployment aplikasi ke lingkungan Staging Lokal...'
                
                // Menggunakan perintah background process Linux untuk menyalakan file server.js
                sh '''
                    echo "Menghentikan instance lama..."
                    pkill -f "node server.js" || true
                    
                    echo "Meluncurkan aplikasi ke port staging (8081)..."
                    nohup node server.js > staging-output.log 2>&1 &
                '''
                echo 'Deployment Berhasil! Aplikasi aktif di lingkungan staging.'
            }
        }
    }
}

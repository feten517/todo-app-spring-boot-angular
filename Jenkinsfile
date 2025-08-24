pipeline {
    agent any

    environment {
        // ➡️ Remplacez par le VRAI chemin de votre projet
        PROJECT_PATH =  "${env.WORKSPACE}"
        NODE_VERSION = '16.20.2'
    }

    stages {
        stage('Vérification Accès') {
            steps {
                script {
                    // Vérifie que le chemin existe
                    def dirExists = fileExists("${PROJECT_PATH}")
                    if (!dirExists) {
                        error "❌ ERREUR : Le dossier ${PROJECT_PATH} n'existe pas !"
                    } else {
                        echo "✅ Dossier trouvé : ${PROJECT_PATH}"
                    }
                }
            }
        }

        stage('Build Angular') {
            steps {
                bat """
                echo "Build Angular en cours..."
                cd "${PROJECT_PATH}\\angular-frontend"
                call npm install
                call npx ng build --prod --no-source-map
                """
            }
        }
    }
}

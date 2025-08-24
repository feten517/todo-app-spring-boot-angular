pipeline {
    agent any
    stages {
        stage('Vérification Accès') {
            steps {
                script {
                    if (!fileExists(".")) {
                        error("❌ ERREUR : Workspace non accessible !")
                    }
                    echo "✅ Dossier trouvé : ${env.WORKSPACE}"
                }
            }
        }
        stage('Build Angular') {
            steps {
                // CHANGEZ ICI : bat -> sh
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Build Spring Boot') {
            steps {
                // CHANGEZ ICI aussi si vous avez des bat
                sh 'mvn clean package'
            }
        }
    }
}

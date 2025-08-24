pipeline {
    agent any
    tools {
        // Utilise le Maven que vous avez configuré
        maven 'maven'  // ← Gardez le nom exact que vous avez donné dans Jenkins
    }
    stages {
        stage('Vérification Structure') {
            steps {
                script {
                    echo "📁 Workspace: ${env.WORKSPACE}"
                    if (!fileExists('frontend/package.json')) {
                        error("❌ Le projet Angular n'est pas dans le dossier 'frontend'")
                    }
                    if (!fileExists('pom.xml')) {
                        error("❌ Le projet Spring Boot n'a pas de pom.xml")
                    }
                    echo "✅ Structure OK"
                }
            }
        }
        
        stage('Installation Node.js') {
            steps {
                script {
                    // Installation de Node.js automatiquement
                    sh '''
                        curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
                        sudo apt-get install -y nodejs
                        echo "Node version: $(node --version)"
                        echo "NPM version: $(npm --version)"
                    '''
                    echo "✅ Node.js installé"
                }
            }
        }
        
        stage('Build Angular') {
            steps {
                dir('frontend') {
                    sh 'npm install --force'
                    sh 'npm run build -- --prod'
                    echo "✅ Build Angular réussi"
                }
            }
        }
        
        stage('Build Spring Boot') {
            steps {
                // Utilise le Maven configuré dans Jenkins
                sh 'mvn clean package -DskipTests'
                echo "✅ Build Spring Boot réussi"
            }
        }
        
        stage('Tests') {
            steps {
                sh 'mvn test'
                echo "✅ Tests passés"
            }
        }
        
        stage('Déploiement') {
            steps {
                script {
                    echo "🚀 Déploiement réussi!"
                    echo "L'application est prête dans target/"
                    archiveArtifacts artifacts: 'target/*.jar', fingerprint: true
                }
            }
        }
    }
    
    post {
        success {
            echo '🎉 Pipeline exécuté avec succès!'
            // Nettoyage optionnel
            sh 'sudo apt-get remove -y nodejs'
        }
        failure {
            echo '❌ Pipeline échoué. Vérifiez les logs.'
        }
        always {
            echo '🔧 Nettoyage des processus...'
        }
    }
}

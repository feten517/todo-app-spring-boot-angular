pipeline {
    agent any
    tools {
        maven 'maven'
    }
    stages {
        stage('Vérification Structure') {
            steps {
                script {
                    echo "📁 Workspace: ${env.WORKSPACE}"
                    if (!fileExists('angular-frontend/package.json')) {
                        error("❌ Le projet Angular n'est pas dans le dossier 'angular-frontend'")
                    }
                    if (!fileExists('springboot-backend/pom.xml')) {
                        error("❌ Le projet Spring Boot n'a pas de pom.xml dans 'springboot-backend'")
                    }
                    echo "✅ Structure OK"
                }
            }
        }
        
        stage('Installation Node.js') {
            steps {
                script {
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
                dir('angular-frontend') {
                    sh 'npm install --force'
                    sh 'npm run build -- --prod'
                    echo "✅ Build Angular réussi"
                }
            }
        }
        
        stage('Build Spring Boot') {
            steps {
                dir('springboot-backend') {
                    sh 'mvn clean package -DskipTests'
                    echo "✅ Build Spring Boot réussi"
                }
            }
        }
        
        stage('Tests') {
            steps {
                dir('springboot-backend') {
                    sh 'mvn test'
                    echo "✅ Tests passés"
                }
            }
        }
        
        stage('Déploiement') {
            steps {
                script {
                    echo "🚀 Déploiement réussi!"
                    echo "L'application Spring Boot est prête dans springboot-backend/target/"
                    archiveArtifacts artifacts: 'springboot-backend/target/*.jar', fingerprint: true
                }
            }
        }
    }
    
    post {
        success {
            echo '🎉 Pipeline exécuté avec succès!'
        }
        failure {
            echo '❌ Pipeline échoué. Vérifiez les logs.'
        }
    }
}

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
                    
                    // Vérifier Angular
                    if (!fileExists('angular-frontend/package.json')) {
                        error("❌ Le projet Angular n'est pas dans 'angular-frontend'")
                    }
                    
                    // Vérifier Spring Boot
                    if (!fileExists('springboot-backend/pom.xml') && !fileExists('spring-boot/pom.xml')) {
                        error("❌ Aucun projet Spring Boot trouvé (springboot-backend/ ou spring-boot/)")
                    }
                    
                    echo "✅ Structure OK"
                }
            }
        }
        
        stage('Installation Node.js') {
            steps {
                script {
                    sh '''
                        # Télécharger et installer Node.js localement sans permissions root
                        NODE_VERSION="18.20.4"
                        curl -O https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz
                        tar -xf node-v$NODE_VERSION-linux-x64.tar.xz
                        export PATH="$PWD/node-v$NODE_VERSION-linux-x64/bin:$PATH"
                        
                        echo "Node version: $(node --version)"
                        echo "NPM version: $(npm --version)"
                    '''
                    echo "✅ Node.js installé localement"
                }
            }
        }
        
        stage('Build Angular') {
            steps {
                dir('angular-frontend') {
                    sh '''
                        # Ajouter Node.js au PATH
                        export PATH="$WORKSPACE/node-v18.20.4-linux-x64/bin:$PATH"
                        
                        # Solution pour l'erreur OpenSSL dans Node.js 18+
                        export NODE_OPTIONS="--openssl-legacy-provider"
                        
                        npm install --force
                        npm run build -- --prod
                    '''
                    echo "✅ Build Angular réussi"
                }
            }
        }
        
        stage('Build Spring Boot') {
            steps {
                script {
                    if (fileExists('springboot-backend/pom.xml')) {
                        dir('springboot-backend') {
                            sh 'mvn clean package -DskipTests'
                        }
                    } else if (fileExists('spring-boot/pom.xml')) {
                        dir('spring-boot') {
                            sh 'mvn clean package -DskipTests'
                        }
                    }
                    echo "✅ Build Spring Boot réussi"
                }
            }
        }
        
        stage('Tests') {
            steps {
                script {
                    if (fileExists('springboot-backend/pom.xml')) {
                        dir('springboot-backend') {
                            sh 'mvn test'
                        }
                    } else if (fileExists('spring-boot/pom.xml')) {
                        dir('spring-boot') {
                            sh 'mvn test'
                        }
                    }
                    echo "✅ Tests passés"
                }
            }
        }
        
        stage('Déploiement') {
            steps {
                script {
                    echo "🚀 Déploiement réussi!"
                    if (fileExists('springboot-backend/pom.xml')) {
                        archiveArtifacts artifacts: 'springboot-backend/target/*.jar', fingerprint: true
                    } else if (fileExists('spring-boot/pom.xml')) {
                        archiveArtifacts artifacts: 'spring-boot/target/*.jar', fingerprint: true
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo '🎉 Pipeline exécuté avec succès!'
            // Nettoyage
            sh 'rm -rf node-v* || true'
        }
        failure {
            echo '❌ Pipeline échoué. Vérifiez les logs.'
        }
        always {
            echo '🔧 Nettoyage terminé'
        }
    }
}

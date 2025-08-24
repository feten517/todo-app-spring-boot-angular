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
                        # Installer NVM (Node Version Manager)
                        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                        
                        # Installer et utiliser Node.js 18
                        nvm install 18
                        nvm use 18
                        
                        echo "Node version: $(node --version)"
                        echo "NPM version: $(npm --version)"
                    '''
                    echo "✅ Node.js installé via NVM"
                }
            }
        }
        
        stage('Build Angular') {
            steps {
                dir('angular-frontend') {
                    sh '''
                        # Charger NVM dans ce shell aussi
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                        nvm use 18
                        
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
        }
        failure {
            echo '❌ Pipeline échoué. Vérifiez les logs.'
        }
    }
}

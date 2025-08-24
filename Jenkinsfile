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
                    
                    // Vérifier Spring Boot - essayez les deux chemins possibles
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
                script {
                    // Déterminer quel dossier Spring Boot utiliser
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

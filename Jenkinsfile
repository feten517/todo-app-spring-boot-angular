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
                    if (!fileExists('spring-boot/pom.xml')) {
                        error("❌ Aucun projet Spring Boot trouvé dans 'spring-boot/'")
                    }
                    
                    echo "✅ Structure OK"
                }
            }
        }
        
        stage('Installation Node.js') {
            steps {
                script {
                    sh '''
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
                        export PATH="$WORKSPACE/node-v18.20.4-linux-x64/bin:$PATH"
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
                dir('spring-boot') {
                    sh 'mvn clean package -DskipTests'
                    echo "✅ Build Spring Boot réussi"
                }
            }
        }
        
        stage('Tests') {
            steps {
                dir('spring-boot') {
                    sh 'mvn test'
                    echo "✅ Tests passés"
                }
            }
        }
        
        stage('Déploiement') {
            steps {
                script {
                    echo "🚀 Déploiement en cours..."

                    def jarPath = 'spring-boot/target/todoapp-0.0.1-SNAPSHOT.jar'

                    // Vérifier que le JAR existe
                    if (!fileExists(jarPath)) {
                        error("❌ JAR non trouvé : ${jarPath}")
                    }

                    // Archiver le JAR dans Jenkins
                    archiveArtifacts artifacts: jarPath, fingerprint: true

                    // Stopper l'ancienne instance si elle existe
                    sh "pkill -f ${jarPath} || true"

                    // Lancer l'application en arrière-plan sur le port 9090
                    sh "nohup java -jar ${jarPath} --server.port=9090 > app.log 2>&1 &"

                    echo "✅ Application déployée et démarrée sur le port 9090"
                }
            }
        }
    }
    
    post {
        success {
            echo '🎉 Pipeline exécuté avec succès!'
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

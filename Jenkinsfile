pipeline {
    agent {
        label 'docker-amd64'
    }
    environment {
        def workspace  = pwd()
    }
    stages {
        stage('npm install') {
            steps {
                sh "npm install"
            }
        }
        stage('bg build') {
            steps {
                sh "ng build"
            }
        }
        stage('docker build') {
            steps {
                sh "docker build -t ${env.DOCKER_REPO}/galasa-webui-generic:${env.DOCKER_VERSION} ." 
            }
        }
        stage('docker push') {
            steps {
                sh "docker push ${env.DOCKER_REPO}/galasa-webui-generic:${env.DOCKER_VERSION}" 
            }
        }
    }
}

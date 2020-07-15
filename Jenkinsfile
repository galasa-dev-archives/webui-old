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
                dir('dist') {
                    deleteDir()
                }
                sh "ng build"
                sh "echo -n ${GIT_COMMIT} > dist/webui.hash"
            }
        }
        stage('docker build') {
            steps {
                withFolderProperties { 
                    sh "docker build -t ${env.DOCKER_REPO}/galasa-webui-generic:${env.DOCKER_VERSION} ." 
                }
            }
        }
        stage('docker push') {
            steps {
                withFolderProperties { 
                    sh "docker push ${env.DOCKER_REPO}/galasa-webui-generic:${env.DOCKER_VERSION}" 
                }
            }
        }
    }
}

pipeline {
    agent {
        label 'docker-amd64'
    }
    environment {
//Configure Maven from the maven tooling in Jenkins
        def mvnHome = tool 'Default'
        PATH = "${mvnHome}/bin:${env.PATH}"
      
//Set some defaults
        def workspace = pwd()
    }
    stages {
// Set up the workspace, clear the git directories and setup the manve settings.xml files
        stage('prep-workspace') { 
           steps {
                configFileProvider([configFile(fileId: '86dde059-684b-4300-b595-64e83c2dd217', targetLocation: 'settings.xml')]) {
                }
                dir('repository/dev.galasa') {
                    deleteDir()
                }
                dir('repository/dev/galasa') {
                    deleteDir()
                }
            }
        }

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
                sh "echo -n ${GIT_COMMIT} > dist/build.hash"
            }
        }
        stage('maven artifact') {
            steps {
                withCredentials([string(credentialsId: 'galasa-gpg', variable: 'GPG')]) {
                    withFolderProperties { 
                        sh "mvn --settings ${workspace}/settings.xml -Dmaven.repo.local=${workspace}/repository -Dgpg.skip=${GPG_SKIP} -Dgpg.passphrase=$GPG  -P ${MAVEN_PROFILE} -B -e -fae --non-recursive ${MAVEN_GOAL}"
                    }
                }
            }
        }
    }
}

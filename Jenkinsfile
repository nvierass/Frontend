pipeline {
	agent {dockerfile: true}
	stages {
		stage('Clone repository') {
			steps{
				checkout scm
			}
    		}
		stage('Create Image') {
			steps {
				sh 'docker login -u nvierass -p Grupo4Mingeso'
				sh 'docker build . -t nvierass/mingeso:frontend-mingesog4'
				sh 'docker push -t nvierass/mingeso:frontend-mingesog4'
			}
		}
	}
}

pipeline {
	environment {
		registry = "nvierass/mingeso"
		registryCredential = 'docker-hub-credentials'
		backEnd = ''
		frontEnd = ''
		backEndImage = ''
		frontEndImage = ''
	}
	agent {dockerfile true}
	stages {
		stage('Clone Repositories') {
			steps{
				echo 'Clonando repositorios'
				frontEnd = git 'https://github.com/nvierass/Frontend.git' Frontend
				backEnd = git 'https://github.com/nvierass/Backend.git'	Backend
				echo 'Repositorios clonados'
			}
    		}
		stage('Static Analisis') {
			steps{
				echo 'Análisis estatico de codigo'
			}
		}
		stage('Unit Testing'){
			steps{
				echo 'Pruebas unitarias JUnit'
			}
		}
		stage('Automatized Testing'){
			steps{
				echo 'Pruebas automatizadas selenium'
			}
		}
		stage('Create Docker Images') {
			steps {
				frontEndImage = sh 'docker build Frontend -t nvierass/mingeso:frontend-mingesog4'
				frontEndImage = sh 'docker build Backend -t nvierass/mingeso:backend-mingesog4'
			}
		}
		stage('Push Docker Images'){
			steps {
				docker.withRegistry(registry,registryCredential){
					frontEndImage.push()
					backEndImage.push()
				}
			}
		}
	}
}

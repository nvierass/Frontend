pipeline {
	agent {dockerfile true}
	stages {
		stage('Clone Repositories') {
			steps{
				echo 'Clonando repositorios'
				git 'https://github.com/nvierass/Frontend.git'
				git 'https://github.com/nvierass/Backend.git'
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
				echo 'Creando imagenes'
				sh 'docker build Frontend -t nvierass/mingeso:frontend-mingesog4'
				sh 'docker build Backend -t nvierass/mingeso:backend-mingesog4'
				echo 'Imagenes creadas' 
			}
		}
		stage('Push Docker Images'){
			steps {
				docker.withRegistry('https://hub.docker.com/r/nvierass/mingeso','docker-hub-credentials'){
					frontEndImage.push()
					backEndImage.push()
				}
			}
		}
	}
}

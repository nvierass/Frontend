pipeline {
	agent any
	stages {
		stage('Preparacion') {
			steps {
				
				echo "Nueva instrucción"
			}
		}
		stage('Build') {
			steps {
				echo "Prueba JF y Weebhook build"
			}
		}
		stage('Test') {
			steps {
				echo "Prueba JF y Weebhook test"
			}
		}
		stage('Deploy') {
			steps {
				echo "Prueba JF y Weebhook deploy"
			}
		}
		stage('Final') {
			steps {
				docker login -u nvierass -p Grupo4Mingeso
				docker build -t nvierass/mingeso:frontend-mingesog4
				docker push -t nvierass/mingeso:frontend-mingesog4
			}
		}
	}
}

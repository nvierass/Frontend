pipeline{
	agent {dockerfile true}
	stages{
		stage('Retrieve'){
			steps{
				git 'https://github.com/nvierass/Frontend.git'
			}
		}
		stage('Image creation'){
			steps{
				sh 'docker login -u nvierass -p Grupo4Mingeso'
				sh 'docker build . -t nvierass/mingeso:frontend-mingeso-g4'
				sh 'docker push nvierass/mingeso:frontend-mingeso-g4'
			}
		}
	}
}

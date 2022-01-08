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
				script{
					def image = docker.build("nvierass/mingeso:frontend-mingeso-g4")
					image.push(":frontend-mingeso-g4")
				}
			}
		}
	}
}

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
				image = docker.build("nvierass/mingeso:frontend-mingeso-g4")
				script{
					image.push(":frontend-mingeso-g4")
				}
			}
		}
	}
}

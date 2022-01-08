pipeline{
	agent {dockerfile true}
	stages{
		stage('Retrieve'){
			steps{
				git 'https://github.com/nvierass/Frontend.git'
			}
		}
		stage('Image creation'){
			agent { docker }
			steps{
				docker.build("nvierass/mingeso").push(":frontend-mingeso-g4")
			}
		}
	}
}

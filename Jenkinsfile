pipeline{
	agent {dockerfile true}
	stages{
		stage('Retrieve'){
			steps{
				git 'https://github.com/nvierass/Frontend.git'
			}
		}
		stage('Image create'){
			steps{
				sh """
				docker build . -t nvierass/mingeso:frontend-mingeso-g4
				"""
			}
		}
		stage('Push image'){
			steps{
				sh """
				docker push nvierass/mingeso:frontend-mingeso-g4
				"""
			}
		}
	}
}

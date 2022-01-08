pipeline{
	agent {dockerfile true}
	stages{
		stage('Retrieve'){
			steps{
				git 'https://github.com/nvierass/Frontend'
			}
		}
		stage('Image create'){
			steps{
				def image = docker.build("mingeso:frontend_mingesog4")
			}
		}
		stage('Push image'){
			steps{
				image.push()
			}
		}
	}
}

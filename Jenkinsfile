pipeline{
	agent {dockerfile true}
	stages{
		stage('Retrieve'){
			git 'https://github.com/nvierass/Frontend'
		}
		stage('Image create'){
			docker.build("mingeso:frontend_mingesog4")
		}
		stage('Push image'){
			docker.push
		}
	}
}

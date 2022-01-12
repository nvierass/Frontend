pipeline{
	agent any
	//tools {nodejs "NODEJS"}
	stages{
		stage('Retrieve'){
			steps{
				git branch: 'master',  url: 'https://github.com/nvierass/Frontend'
			}
		}
		stage('Test Automatizadas'){
			steps{
				script{
					    sh 'npm install'
						sh 'npm test.sh'
					    junit '**/target/*.xml' 
				}
			}
		}
		
		stage('Image creation'){
			steps{
				script{
					sh 'docker build . -t nvierass/mingeso:frontend-mingeso-g4'
					sh 'docker push nvierass/mingeso:frontend-mingeso-g4'
				}
			}
		}
		
		
	}
}

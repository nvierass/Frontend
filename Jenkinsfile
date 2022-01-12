pipeline{
	agent any
	tools {nodejs "NODEJS"}
	stages{
		stage('Retrieve'){
			steps{
				git branch: 'master',  url: 'https://github.com/nvierass/Frontend'
			}
		}
		stage('Test Automatizadas'){
			steps{
				dir("src"){
						sh 'npm install'
						sh 'install -g selenium-webdriver'
						sh 'npm instal request'
						sh 'npm test.js'
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

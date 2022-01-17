pipeline{
	agent any

	stages{
		stage('Retrieve'){
			steps{
				git branch: 'master',  url: 'https://github.com/nvierass/Frontend'
			}
		}
		environment {
        CI = 'true' 
    }
		stage('Test') { 
            steps {
                sh './src/test.sh' 
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

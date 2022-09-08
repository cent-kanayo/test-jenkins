pipeline{
    agent any
    tools {
        nodejs "node"
    }
    stages{
        stage('test'){
            steps{
                echo "Testing stage"
            }
        }

        stage('production'){
            steps{
                echo "Production stage"
                sh '''
                    sudo ssh -i /var/lib/jenkins/kanayo.pem -t -o StrictHostKeyChecking=no  ubuntu@ec2-44-204-68-161.compute-1.amazonaws.com
                    cd /var/www/
                    sudo rm -f html
                    sudo mkdir html
                    cd html
                    sudo git init
                    sudo git remote add origin https://github.com/cent-kanayo/test-jenkins.git
                    sudo git pull origin main
                    sudo npm install
                    sudo pm2 kill
                    sudo PORT=3000 pm2 start index.js
                    '''
            }
        }
    }
}
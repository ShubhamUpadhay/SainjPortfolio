pipeline {
  agent {
    docker {
      image 'node:20-bullseye'
      args '-u root'
    }
  }

  environment {
    REPO_SLUG = 'ShubhamUpadhay/SainjPortfolio'  // <-- change
    BRANCH    = 'main'
  }

  options { timestamps(); ansiColor('xterm') }

  stages {
    stage('System deps') {
      steps {
        sh 'apt-get update && apt-get install -y git rsync'
      }
    }
    stage('Checkout') {
      steps {
        checkout([$class: 'GitSCM',
          branches: [[name: "*/${BRANCH}"]],
          userRemoteConfigs: [[url: "https://github.com/${REPO_SLUG}.git"]]
        ])
      }
    }
    stage('Install') { steps { sh 'npm ci' } }
    stage('Build') {
      steps {
        sh '''
          export VITE_APP_VERSION=$GIT_COMMIT
          npm run build
          # SPA fallback so client-side routes work on GitHub Pages
          cp build/index.html build/404.html
        '''
      }
    }

    stage('Deploy → gh-pages') {
      steps {
        withCredentials([string(credentialsId: 'gh_pat', variable: 'GH_PAT')]) {
          sh '''
            set -e
            WORKDIR=$(mktemp -d)

            git config --global user.name  "${GH_NAME}"
            git config --global user.email "${GH_EMAIL}"

            # Clone gh-pages (or create it if first time)
            git clone --depth 1 --branch gh-pages \
              https://${GH_PAT}@github.com/${REPO_SLUG}.git "$WORKDIR" || {
              git clone --depth 1 https://${GH_PAT}@github.com/${REPO_SLUG}.git "$WORKDIR"
              cd "$WORKDIR"
              git checkout --orphan gh-pages
              rm -rf *
              echo "<meta http-equiv=\\"refresh\\" content=\\"0; url=${REPO_SLUG#*/}/\\">" > index.html
              git add -A
              git commit -m "init gh-pages"
              git push -u origin gh-pages
            }

            # Sync built output (note: using build/, not dist/)
            rsync -av --delete ./build/ "$WORKDIR"/

            cd "$WORKDIR"
            git add -A
            if ! git diff --cached --quiet; then
              git commit -m "deploy: ${GIT_COMMIT}"
              git push origin gh-pages
            else
              echo "No changes to deploy."
            fi
          '''
        }
      }
    }
  }

  post {
    success { echo '✅ Deployed to gh-pages.' }
    failure { echo '❌ Build failed. Check logs.' }
  }
}
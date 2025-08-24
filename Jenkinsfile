pipeline {
  agent any

  options { timestamps() }

  environment {
    REPO_SLUG = 'ShubhamUpadhay/SainjPortfolio'
    BRANCH    = 'main'
    GH_NAME   = 'jenkins-bot'
    GH_EMAIL  = 'jenkins-bot@example.com'
    NVM_DIR   = "${WORKSPACE}/.nvm"
    NODE_VER  = '20'
    CI        = 'true'
    ROLLUP_SKIP_NODEJS_NATIVE = '1'   // prefer Rollup's JS build on ARM
  }

  stages {
    stage('Checkout') {
      steps {
        checkout([
          $class: 'GitSCM',
          branches: [[name: "*/${BRANCH}"]],
          userRemoteConfigs: [[url: "https://github.com/${REPO_SLUG}.git"]]
        ])
      }
    }

    stage('Setup Node (nvm)') {
      steps {
        sh '''
          set -e
          if [ ! -d "$NVM_DIR" ]; then
            mkdir -p "$NVM_DIR"
            if command -v curl >/dev/null 2>&1; then
              curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | NVM_DIR="$NVM_DIR" bash
            else
              wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | NVM_DIR="$NVM_DIR" bash
            fi
          fi
          . "$NVM_DIR/nvm.sh"
          nvm install ${NODE_VER}
          nvm use ${NODE_VER}
          node -v
          npm -v
        '''
      }
    }

    stage('Install') {
      steps {
        sh '''
          set -e
          . "$NVM_DIR/nvm.sh"
          nvm use ${NODE_VER}

          # Be extra-safe on CI: skip all optional deps (avoids Rollup native binary)
          echo "optional=false" > .npmrc

          # Deterministic install; fallback to clean install if npm ci hits the optional-deps bug
          ROLLUP_SKIP_NODEJS_NATIVE=1 npm ci || {
            echo "npm ci failed — cleaning lock & node_modules due to Rollup optional dep bug"
            rm -rf node_modules package-lock.json
            ROLLUP_SKIP_NODEJS_NATIVE=1 npm install
          }
        '''
      }
    }

    stage('Build') {
      steps {
        sh '''
          set -e
          . "$NVM_DIR/nvm.sh"
          nvm use ${NODE_VER}

          # Ensure Rollup uses pure JS implementation during build
          ROLLUP_SKIP_NODEJS_NATIVE=1 VITE_APP_VERSION=$GIT_COMMIT npm run build

          # Your vite.config.ts uses outDir: "build" — add SPA fallback for client-side routes
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

            # Clone gh-pages or initialize it
            if git clone --depth 1 --branch gh-pages \
              https://${GH_PAT}@github.com/${REPO_SLUG}.git "$WORKDIR"; then
              echo "Cloned gh-pages"
            else
              git clone --depth 1 https://${GH_PAT}@github.com/${REPO_SLUG}.git "$WORKDIR"
              cd "$WORKDIR"
              git checkout --orphan gh-pages
              rm -rf *
              echo "<meta http-equiv=\\"refresh\\" content=\\"0; url=${REPO_SLUG#*/}/\\">" > index.html
              git add -A
              git commit -m "init gh-pages"
              git push -u origin gh-pages
            fi

            # Copy built files (no rsync needed)
            rm -rf "$WORKDIR"/*
            cp -a build/* "$WORKDIR"/

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
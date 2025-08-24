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
    // # Ask Rollup to prefer JS implementation; we still add native if Rollup insists
    ROLLUP_SKIP_NODEJS_NATIVE = '1'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout([$class: 'GitSCM',
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

          # Prefer JS Rollup path during install
          export ROLLUP_SKIP_NODEJS_NATIVE=1

          # Deterministic install; clean fallback if needed
          npm ci || {
            echo "npm ci failed — retrying with clean install"
            rm -rf node_modules package-lock.json
            npm install
          }

          # ---- ARM64 Sanity for Rollup native binding ----
          ARCH=$(node -p "process.arch")
          PLAT=$(node -p "process.platform")
          if [ "$PLAT" = "linux" ] && [ "$ARCH" = "arm64" ]; then
            # If Rollup's native loader complains, add the platform package explicitly
            node -e "try{require('rollup');console.log('rollup import OK')}catch(e){process.exit(42)}" || {
              echo "Installing Rollup ARM64 GNU binary..."
              npm i -D @rollup/rollup-linux-arm64-gnu@latest
              # verify again
              node -e "require('rollup');console.log('rollup import OK after install')"
            }
            # SWC native binding (for @vitejs/plugin-react-swc)
            node -e "try{require('@swc/core');console.log('swc ok')}catch(e){process.exit(42)}" || {
              echo "Installing @swc/core-linux-arm64-gnu..."
              npm i -D @swc/core-linux-arm64-gnu@latest
              node -e "require('@swc/core');console.log('swc ok after install')"
            }
          fi
        '''
      }
    }

    stage('Build') {
      steps {
        sh '''
          set -e
          . "$NVM_DIR/nvm.sh"
          nvm use ${NODE_VER}

          # Keep Rollup in JS mode if possible; native is present if we added it above
          export ROLLUP_SKIP_NODEJS_NATIVE=1
          VITE_APP_VERSION=$GIT_COMMIT npm run build

          # outDir is "build" in your vite.config.ts -> add SPA fallback
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
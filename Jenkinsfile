// pipeline {
//   agent any

//   options { timestamps() }

//   environment {
//     REPO_SLUG = 'ShubhamUpadhay/SainjPortfolio'
//     BRANCH    = 'main'
//     GH_NAME   = 'jenkins-bot'
//     GH_EMAIL  = 'jenkins-bot@example.com'
//     NVM_DIR   = "${WORKSPACE}/.nvm"
//     NODE_VER  = '20'
//     CI        = 'true'
//     ROLLUP_SKIP_NODEJS_NATIVE = '1'
//   }

//   stages {
//     stage('Checkout') {
//       steps {
//         checkout([$class: 'GitSCM',
//           branches: [[name: "*/${BRANCH}"]],
//           userRemoteConfigs: [[url: "https://github.com/${REPO_SLUG}.git"]]
//         ])
//       }
//     }

//     stage('Setup Node (nvm)') {
//       steps {
//         sh '''
//           set -e
//           if [ ! -d "$NVM_DIR" ]; then
//             mkdir -p "$NVM_DIR"
//             if command -v curl >/dev/null 2>&1; then
//               curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | NVM_DIR="$NVM_DIR" bash
//             else
//               wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | NVM_DIR="$NVM_DIR" bash
//             fi
//           fi
//           . "$NVM_DIR/nvm.sh"
//           nvm install ${NODE_VER}
//           nvm use ${NODE_VER}
//           node -v
//           npm -v
//         '''
//       }
//     }

//     stage('Install') {
//       steps {
//         sh '''
//           set -e
//           . "$NVM_DIR/nvm.sh"
//           nvm use ${NODE_VER}

//           # Prefer JS Rollup path during install
//           export ROLLUP_SKIP_NODEJS_NATIVE=1

//           # Deterministic install; clean fallback if needed
//           npm ci || {
//             echo "npm ci failed — retrying with clean install"
//             rm -rf node_modules package-lock.json
//             npm install
//           }

//           # ---- ARM64 Sanity for Rollup native binding ----
//           ARCH=$(node -p "process.arch")
//           PLAT=$(node -p "process.platform")
//           if [ "$PLAT" = "linux" ] && [ "$ARCH" = "arm64" ]; then
//             # If Rollup's native loader complains, add the platform package explicitly
//             node -e "try{require('rollup');console.log('rollup import OK')}catch(e){process.exit(42)}" || {
//               echo "Installing Rollup ARM64 GNU binary..."
//               npm i -D @rollup/rollup-linux-arm64-gnu@latest
//               # verify again
//               node -e "require('rollup');console.log('rollup import OK after install')"
//             }
//             # SWC native binding (for @vitejs/plugin-react-swc)
//             node -e "try{require('@swc/core');console.log('swc ok')}catch(e){process.exit(42)}" || {
//               echo "Installing @swc/core-linux-arm64-gnu..."
//               npm i -D @swc/core-linux-arm64-gnu@latest
//               node -e "require('@swc/core');console.log('swc ok after install')"
//             }
//           fi
//         '''
//       }
//     }

//     stage('Build') {
//       steps {
//         sh '''
//           set -e
//           . "$NVM_DIR/nvm.sh"
//           nvm use ${NODE_VER}

//           # Keep Rollup in JS mode if possible; native is present if we added it above
//           export ROLLUP_SKIP_NODEJS_NATIVE=1
//           VITE_APP_VERSION=$GIT_COMMIT npm run build

//           # outDir is "build" in your vite.config.ts -> add SPA fallback
//           cp build/index.html build/404.html
//         '''
//       }
//     }

//     stage('Deploy → gh-pages') {
//       steps {
//         withCredentials([string(credentialsId: 'gh_pat', variable: 'GH_PAT')]) {
//           sh '''
//             set -e
//             WORKDIR=$(mktemp -d)

//             git config --global user.name  "${GH_NAME}"
//             git config --global user.email "${GH_EMAIL}"

//             if git clone --depth 1 --branch gh-pages \
//               https://${GH_PAT}@github.com/${REPO_SLUG}.git "$WORKDIR"; then
//               echo "Cloned gh-pages"
//             else
//               git clone --depth 1 https://${GH_PAT}@github.com/${REPO_SLUG}.git "$WORKDIR"
//               cd "$WORKDIR"
//               git checkout --orphan gh-pages
//               rm -rf *
//               echo "<meta http-equiv=\\"refresh\\" content=\\"0; url=${REPO_SLUG#*/}/\\">" > index.html
//               git add -A
//               git commit -m "init gh-pages"
//               git push -u origin gh-pages
//             fi

//             rm -rf "$WORKDIR"/*
//             cp -a build/* "$WORKDIR"/

//             cd "$WORKDIR"
//             git add -A
//             if ! git diff --cached --quiet; then
//               git commit -m "deploy: ${GIT_COMMIT}"
//               git push origin gh-pages
//             else
//               echo "No changes to deploy."
//             fi
//           '''
//         }
//       }
//     }
//   }

//   post {
//     success { echo '✅ Deployed to gh-pages.' }
//     failure { echo '❌ Build failed. Check logs.' }
//   }
// }

// Jenkinsfile (Declarative Pipeline) — Vite + React + TypeScript
pipeline {
  agent {
    // Use Docker so we don't depend on Jenkins' global Node tool
    docker {
      image 'node:20-bullseye'
      // Mount npm cache inside the workspace for faster installs
      args '-v $PWD/.npm-cache:/root/.npm -v $PWD/.pnpm-store:/root/.local/share/pnpm'
      reuseNode true
    }
  }

  options {
    timestamps()
    ansiColor('xterm')
    // Keep last 20 builds and artifacts to save space
    buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '20'))
    disableConcurrentBuilds()
  }

  environment {
    // Make Node installs more reliable in CI
    CI = 'true'
    // Tune memory for large Vite builds if needed
    NODE_OPTIONS = '--max-old-space-size=4096'
    // Ensure consistent timezone if your app generates timestamps
    TZ = 'Asia/Kolkata'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
        // Prevent accidental use of duplicate manifests/templates
        sh '''
          echo "Sanity: keeping root/index.html and package.json only"
          [ -f "index 2.html" ] && echo "Deleting stray index 2.html" && rm -f "index 2.html" || true
          [ -f "package 2.json" ] && echo "Deleting stray package 2.json" && rm -f "package 2.json" || true
        '''
      }
    }

    stage('Install') {
      steps {
        sh '''
          corepack enable || true
          # Prefer npm if you’ve locked to package-lock.json
          if [ -f package-lock.json ]; then
            npm ci
          else
            npm i --frozen-lockfile || npm i
          fi
        '''
      }
    }

    stage('Lint') {
      steps {
        sh '''
          if npm run | grep -q "^  lint"; then
            npm run lint
          else
            echo "No lint script found, skipping."
          fi
        '''
      }
    }

    stage('Build') {
      steps {
        sh '''
          if npm run | grep -q "^  build"; then
            npm run build
          else
            echo "No build script found."; exit 1
          fi
        '''
      }
    }

    stage('Bundle Report (optional)') {
      when { expression { return fileExists('build-stats.html') || fileExists('stats.html') } }
      steps {
        echo 'Archiving rollup/visualizer output…'
      }
    }

    stage('Archive Artifacts') {
      steps {
        script {
          def toArchive = []
          if (fileExists('dist')) { toArchive << 'dist/**' }
          if (fileExists('build-stats.html')) { toArchive << 'build-stats.html' }
          if (fileExists('stats.html')) { toArchive << 'stats.html' }
          if (toArchive.size() == 0) {
            error 'Nothing to archive (dist/ not found). Did the build succeed?'
          }
          archiveArtifacts artifacts: toArchive.join(', '), fingerprint: true, onlyIfSuccessful: true
        }
      }
    }

    stage('Deploy (main)') {
      when {
        allOf {
          branch 'main'
          expression { return (sh(script: "npm run | grep -q '^  deploy'", returnStatus: true) == 0) }
        }
      }
      steps {
        sh 'npm run deploy'
      }
    }
  }

  post {
    always {
      // Surface common test reports if you add tests later
      junit allowEmptyResults: true, testResults: '**/junit-*.xml, **/junit.xml, **/coverage/junit.xml'
      // Keep workspace tidy between builds
      cleanWs deleteDirs: true, disableDeferredWipeout: true
    }
    failure {
      echo 'Build failed 🚨 — check Lint/Build logs above.'
    }
    success {
      echo 'Build finished ✅ — artifacts archived under "dist/".'
    }
  }
}
module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'server',
      script: './server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'root',
      host: '60.205.207.145',
      ref: 'origin/master',
      repo: 'git@github.com:Taffyw/react-ssr.git',
      path: '/root/project/react-ssr',
      'post-deploy': 'pm2 reload ecosystem.config.js --env production'
    }
  }
};
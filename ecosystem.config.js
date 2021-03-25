module.exports = {
  apps: [{
    name: 'redeployApp',
    watch: true,
    // Delay between restart
    watch_delay: 5000,
    ignore_watch: ['node_modules', '.git', '.env'],
    watch_options: {
      followSymlinks: false,
    },
  }],
};

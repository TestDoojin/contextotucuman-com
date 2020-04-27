const chromeLauncher = require('chrome-launcher');

(async () => {
  await chromeLauncher.launch({
    port: 3700,
    chromeFlags: [
      '--headless',
      '--proxy-server=\'direct://\'',
      '--proxy-bypass-list=*'
    ]
  });
})();

Package.describe({
  name: 'inno:zoom',
  version: '0.0.2',
  summary: 'Wrapper for Medium\'s Image Zoom Plugin',
  git: 'https://github.com/stephan281094/meteor-zoom'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'lib/zoom-vanilla.js/dist/zoom-vanilla.min.js',
    'lib/zoom-vanilla.js/css/zoom.css'
  ], 'client');
});

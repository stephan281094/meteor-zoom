Package.describe({
  name: 'inno:zoom',
  version: '0.0.1',
  summary: 'Wrapper for Medium\'s Image Zoom Plugin',
  git: 'https://github.com/stephan281094/meteor-zoom'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'lib/bootstrap/js/transition.js',
    'lib/zoom.js/dist/zoom.min.js',
    'lib/zoom.js/css/zoom.css'
  ], 'client');
});

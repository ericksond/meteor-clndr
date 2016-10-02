Package.describe({
  name: 'ericksond:clndr',
  version: '0.0.2',
  summary: 'Wrapper for clndr.js',
  git: 'https://github.com/ericksond/meteor-clndr',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.addFiles(['moment.min.js', 'clndr.min.js'], 'client');
});


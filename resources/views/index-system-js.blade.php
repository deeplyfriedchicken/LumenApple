<!-- 2. Configure SystemJS -->
<script>
  System.config({
      "defaultJSExtensions": true,
      packages: {
          app: {
              format: 'register',
              defaultExtension: 'js'
          },
          '@angular/router': { main: 'index.js', defaultExtension: 'js' },
          '@angular/common': { main: 'index.js', defaultExtension: 'js' },
          '@angular/core': { main: 'index.js', defaultExtension: 'js' },
          '@angular/http': { main: 'index.js', defaultExtension: 'js' },
          '@angular/platform-browser-dynamic': { main: 'index.js', defaultExtension: 'js' },
          '@angular/compiler': { main: 'index.js', defaultExtension: 'js' },
          '@angular/platform-browser': { main: 'index.js', defaultExtension: 'js' },
      }
  });

  System.import('main').then(null, console.error.bind(console));
</script>

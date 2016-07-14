<!-- 2. Configure SystemJS -->
<script>
  System.config({
      "defaultJSExtensions": true,
      packages: {
          app: {
              format: 'register',
              defaultExtension: 'js'
          }
      }
  });

  System.import('main').then(null, console.error.bind(console));
</script>

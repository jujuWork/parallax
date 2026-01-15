### fetching HTML file

1. Separate each HTML file.
   - index.html
   - header.html
   - footer.html
   - about.html
   
2. Fetching HTML files first before Javascript

```
<script>
      // Loading Multiple Components
      function loadComponent(filePath, targetId) {
        return fetch(filePath)
          .then((response) => response.text())
          .then((htmlContent) => {
            document.getElementById(targetId).innerHTML = htmlContent;
          })
          .catch((error) => {
            console.error('Cound not load Components' + filePath);
          });
      }

      // Execution - wait for header to load before loading the script
      loadComponent('assets/pages/header.html', 'header-container').then(() => {
        const script = document.createElement('script'); //asynchronous javascript
        script.src = '/assets/js/header-js/header.js';
        document.body.appendChild(script);
      });
    </script>
```

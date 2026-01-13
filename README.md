### fetching HTML file

1. Separate each HTML file.
   - index.html
   - header.html
   - footer.html
   - about.html
2. Fetching HTML files using JavaScript

```
  <script>
    // Loading Multiple Components
    function loadComponent(filePath, targetId) {
      fetch(filePath)
        .then((response) => response.text())
        .then((htmlContent) => {
          document.getElementById(targetId).innerHTML = htmlContent;
        })
        .catch((error) => {
          console.error('Cound not load Components' + filePath);
        });
    }

    // Execution
    loadComponent('assets/pages/header.html', 'header-container');
    loadComponent('assets/pages/content.html', 'content-container');
    loadComponent('assets/pages/footer.html', 'footer-container');
  </script>
```

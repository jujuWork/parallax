### fetching HTML file
1. Separate each HTML file.
   - index.html
   - header.html
   - footer.html
   - about.html
2. Fetching HTML files using JavaScript
  ```
    <body>
      <div id="nav-placeholder"></div>
        <h1>Welcome to the Home Page</h1>
          <script>
          fetch("nav.html")
          .then(response => response.text())
          .then(data => {
          document.getElementById("nav-placeholder").innerHTML = data;
          });
          </script>
    </body>
  ```

const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Tell the browser we're sending HTML
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write("<h1>Hello Everyone!</h1>");
  res.write("<p>Welcome to my page.</p>");
  res.write("<p>I am <strong>Jhasmine Dimaano</strong> from <strong>BSIT BA - 4102</strong></p>");
  res.write(`
    <blockquote>
      “You only live once, but if you do it right, once is enough.”<br>
      ― Mae West
    </blockquote>
  `);

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

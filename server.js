const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write(`
    <html>
      <head>
        <title>Welcome Page</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background: #ffe6f2; /* soft pink background */
            font-family: 'Comic Sans MS', cursive, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .container {
            background: #ffb6c1; /* pinky container */
            padding: 40px 60px;
            border-radius: 25px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            text-align: center;
            max-width: 500px;
          }

          h1 {
            color: #ff4da6;
            font-size: 2.8em;
            margin-bottom: 20px;
          }

          p {
            font-size: 1.4em;
            color: #800040;
            margin: 10px 0;
          }

          blockquote {
            font-size: 1.1em;
            font-style: italic;
            color: #660033;
            margin-top: 25px;
            border-left: 5px solid #ff66b3;
            padding-left: 15px;
          }

          strong {
            color: #ff1a75;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Hello Everyone!</h1>
          <p>Welcome to my page.</p>
          <p>I am <strong>Jhasmine Dimaano</strong> from <strong>BSIT BA - 4102</strong></p>
          <blockquote>
            “You only live once, but if you do it right, once is enough.”<br>
            ― Mae West
          </blockquote>
        </div>
      </body>
    </html>
  `);

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

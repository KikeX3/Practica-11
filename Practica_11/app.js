const express = require("express"); // importmos la dependencia
const app = express(); // declaramos una app de express

const port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor

app.use("/assets", express.static(__dirname + "/public")); // le decimos a la app que tuilize de directorio virtual statico nuestro directorio local de nombre public

//primera ruta (esta al nivel de la raiz /), hello world!
app.get("/", function (req, res) {
  res.send(
    `<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head>
    <body><h1>hello world!</h1></body></html>`
  );
  // modificamos el html de la ruta raiz para agregarle la referencia a
  // nuestro archivo CSS con nuestros estilos
});

// segunda ruta /api, regresa un objeto JSON
app.get("/api", function (req, res) {
  res.json({ firstname: `Taylor`, lastname: `Hawkins` });
});
// tercera ruta, recibe un parametro
app.get(`/person/:id`, function (req, res) {
  res.send(
    `<html><head></head><body><h1>Person:` +
      req.params.id +
      `</h1></body></html>`
  );
});
app.listen(port); //levantar el server y ponerlo en escucha

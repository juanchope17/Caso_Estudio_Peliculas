const express = require('express');
require('./db/db-connection-mongo');
require('dotenv').config();
const tipoR = require('./routes/TipoR');
const mediaR = require('./routes/MediaR');
const productoraR = require('./routes/ProductoraR');
const generoR = require('./routes/GeneroR');
const directorR = require('./routes/DirectorR');

const app = express();
app.use(express.json());


async function main() {
  await app.listen(process.env.PORT);
  console.log(`Server on port ${process.env.PORT}, Congratulations`);
}

app.get('/', (req, res) => {
  res.send('servidor prendido');
})


app.use('/api/tipo', tipoR);
app.use('/api/productora', productoraR);
app.use('/api/genero', generoR);
app.use('/api/director', directorR);
app.use('/api/media', mediaR);

main();

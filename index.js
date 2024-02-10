const express = require('express');
const app = express();
app.listen(3003, console.log('Server ON'));

const { obtenerMedicamentos, obtenerPersonal } = require('./consultas');

app.get('/medicamentos', async (req, res) => {
   const queryString = req.query;
   console.log(queryString);
   const medicamentos = await obtenerMedicamentos(queryString);
   res.json(medicamentos);
});

app.get('/personal', async (req, res) => {
   const queryString = req.query;
   const personal = await obtenerPersonal(queryString);
   res.json(personal);
});

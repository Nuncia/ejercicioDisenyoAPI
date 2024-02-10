const { Pool } = require('pg');

const pool = new Pool({
   user: 'postgres',
   host: 'localhost',
   password: '',
   database: 'farmacia',
   port: 5433,
   allowExitOnIdle: true,
});

const obtenerMedicamentos = async ({ limits = 10, order_by = 'id_ASC' }) => {
   const [campo, direccion] = order_by.split('_');
   const formattedQuery = format(
      'SELECT * FROM medicamentos order by %s %s LIMIT %s',
      campo,
      direccion,
      limits
   );
   const { rows: medicamentos } = await pool.query(formattedQuery);
   return medicamentos;
};

const obtenerPersonal = async ({ limits = 10, order_By = 'id_ASC' }) => {
   const [campo, direccion] = order_by_split('_');
   const formatQuery = format(
      'SELECT * FROM personal order by %s %s LIMIT $s',
      campo,
      direccion,
      limits
   );
   const { rows: personal } = await pool.query(formatQuery);
   return personal;
};

module.exports = { obtenerMedicamentos, obtenerPersonal };

const express = require('express');
const app = express();
const sequelize = require('./src/config/config')

const routerEvento = require('./src/router/EventoRouter');
const routerParticipantes = require('./src/router/ParticipantesRouter');

app.use(express.json());

app.use('/evento', routerEvento);
app.use('/participantes', routerParticipantes);

app.get('/healthcheck', (req, res) => {
  return res.status(200).json({
    msg: 'Estamos funcionando!',
    alive: true
  })
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso!');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(process.env.PORT == null ? 3000 : process.env.PORT, (req, res) => {
      console.log('*********************************');
      console.log('Servidor rodando na porta: 3000');
      console.log('*********************************');
    });
  })

  .catch((error) => {
    console.log('**************************************************');
    console.error('Erro ao se conectar com o banco: ', error)
    console.log('**************************************************');

  })
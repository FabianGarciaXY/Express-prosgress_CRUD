
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'Alive'});
});

app.get('/explorers', async (req, res) => {
  const allExplorers = await prisma.explorer.findMany({});
  res.status(200).json({
    allExplorers
  });
});

app.get('/explorers/:id', async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.explorer.findUnique({
    where: {id: parseInt(id)}
  });
  res.status(200).json(explorer);
});

app.post('/explorers', async (req, res) => {
  const explorer = {
    name: req.body.name,
    username: req.body.username,
    mission: req.body.mission
  }
  const message = 'Explorer creado.';
  await prisma.explorer.create({
    data: explorer
  });
  res.json({message});
});

app.put('/explorers/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.explorer.update({
    where: {
      id: id
    },
    data: {
      mission: req.body.mission
    }
  });
  return res.json({message: "Actualizado con éxito"});
});

app.delete('/explorers/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.explorer.delete({where: { id: id}});
  return res.json({message: "Eliminado correctamente" });
});


// Endpoints para la nueva tabla
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany({});
  res.status(200).json(users);
});




app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});

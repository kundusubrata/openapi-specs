import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { apiDocumentation } from './docs /apiDocs';


const app = express();
const port = 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' }
];

app.get('/', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Service is running!' });
});

app.get('/users', (req, res) => {
  const { name } = req.query;

  if (name) {
    // @ts-ignore
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    res.json(filteredUsers);
  } else {
    res.json(users);
  }
});

app.use("/documentation", swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

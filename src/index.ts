import express from 'express';
let users = require('../MOCK_DATA.json');
import * as dotenv from 'dotenv';


const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

dotenv.config();



app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
	res.send('Hello from my API!');
});

// "id": 1,
// "first_name": "Edeline",
// "last_name": "Buckwell",
// "email": "ebuckwell0@globo.com",
// "gender": "Female",
// "ip_address": "14.9.55.68"


  // CREATE
app.post('/users', (req, res) => {
	const newUser = {
		first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    ip_address: req.body.ip_address,
		id: req.body.id
	};
	users.push(newUser);
	res.json(newUser);
});

// READ

app.get('/users', (req: any, res: { json: (arg0: any) => void; }) => {
  res.json(users);
});

// UPDATE
app.put('/users', (req, res) => {
	const { id, name } = req.body;
	users = users.map((user: { id: any; name: any; }) => {
		if (user.id === id) {
			user.name = name;
		}
		return user;
	});
	res.json(users);
});

// DELETE
app.delete('/users', (req, res) => {
	const { id } = req.body;
	users = users.filter((user: { id: any; }) => user.id !== id);
	res.json(users);
});

// // READ
// app.get('/users', (_, res) => {
// 	res.json(users);
// });


app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});






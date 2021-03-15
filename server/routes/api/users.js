const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get contacts

router.get('/', async (req, res) => {
	const posts = await loadUsersCollection();
	res.send(await posts.find({}).toArray());
});

// Add contact

router.post('/', async (req, res) => {
	const posts = await loadUsersCollection();
	await posts.insertOne({
		name: req.body.name,
		phone_num: req.body.phone_num,
		email: req.body.email,
		imgUrl: req.body.imgUrl,
	});

	res.status(201).send();
});

// Edit Contact

// router.put('/:id', async (req, res) => {
// 	const posts = await loadUsersCollection();
// 	await posts.findOneAndUpdate(
// 		new mongodb.ObjectID(req.params.id),
// 		{
// 			Attribute: 'good',
// 		},
// 		{
// 			$set: {
// 				Type: 'DVD',
// 				Title: 'Matrix, The',
// 				Released: 1999,
// 				Genre: 'Action',
// 			},
// 		},
// 		{ upsert: true }
// 	);
// 	res.status(200).send();
// });

// Delete contact

router.delete('/:id', async (req, res) => {
	const posts = await loadUsersCollection();
	await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
	res.status(200).send({});
});

// Handle connection to the DB

async function loadUsersCollection() {
	const client = await mongodb.MongoClient.connect(
		'mongodb+srv://dev_user:21101986@contactmanager.tg2xq.mongodb.net/users_contact?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
		}
	);

	return client.db('users_contact').collection('users');
}
module.exports = router;

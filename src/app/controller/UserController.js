import User from '../models/User.js'


class UserController {
	// declarando um método assincrono.

	async store(req, res) {
	   const {id, name, email} = await User.create(req.body)

	   return res.json({id, name, email})
	};

	async index(req, res) {
		const person = {
			name: "Laura",
			age: 21
		}
		return res.status(200).json(person);
	};
	
	async delete(req, res) {
	   return res.status(200).json({message: "Isso é delete"})

	};
	async update(req, res) {
	   return res.status(200).json({message: "Isso é update"})
	};

}

export default new UserController();
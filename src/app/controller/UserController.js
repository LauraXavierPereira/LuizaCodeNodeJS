import * as Yup from 'yup'; //Validador de dados
import User from '../models/User.js'


class UserController {
	// declarando um método assincrono.

	async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string().required(),
			password: Yup.string().required().min(6),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(401).json({
				message: '[ERROR] - Dados Inválidos'
			})
		}

		const userExists = await User.findOne({
			where: {
				email: req.body.email
			}
		});

		if(userExists){
			return res.status(401).json({message: '[ERROR] - Usuários já cadastrado no sistema'})
		}

		const { id, name, email } = await User.create(req.body)

		return res.json({ id, name, email })
	};

	async index(req, res) {
		const person = {
			name: "Laura",
			age: 21
		}
		return res.status(200).json(person);
	};

	async delete(req, res) {
		return res.status(200).json({
			message: "Isso é delete"
		})

	};
	async update(req, res) {
		return res.status(200).json({
			message: "Isso é update"
		})
	};

}

export default new UserController();
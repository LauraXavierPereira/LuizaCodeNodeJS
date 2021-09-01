import jwt from 'jsonwebtoken';

import User from '.../models/User';
import authConfig from '../../config/auth';

class SessionController {
    async store(req, res){
        const {email, password} = req.body;

        const user = await User.findOne({
            where: { email }
        });
        //findOne procura um registro dentro do banco de dados.
        //Acessa o banco e verifica se essa conta existe.

        if(!user){
            return res.status(401).json({ message: 'O usuário não está cadastrado' });
        };

        if(!(await user.checkPassword(password))){
            return res.status(400).json({message: 'Senha incorreta.'});
        }; //Função pronta que posso utilizar.

        const { id, name } = user;

        return res.json({
            user: {
                id, // id do usuário
                name,
                email
            },
            token: jwt.sign({ id, name, email }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        });
    }
}

export default new SessionController();
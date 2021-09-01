import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';


export default async (req, resp, next) => {
    const authHeaders = req.headers.authorization;
    
    if(!authHeaders){
        return resp.status(401).json({message: 'Usuário não logado'})
    }

    const [, token] = authHeaders.split(' '); //Pega o token

    try{
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = decoded.id
        next();
        //Dois parâmetro de uma callback.
    } catch (err) {
        console.log("[ERROR] - ", error)
        return resp.status(401).json({message: 'Token Inválido'});
    }

    //validação 2 -> console.log(token);

    // validação 1 -> console.log(authHeaders)
    //next();

}
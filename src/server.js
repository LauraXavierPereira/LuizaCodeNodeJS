//Responsável por abrir as portas de comunicação.
import app from './app';

const PORT = process.env.PORT || 4000;

//Defino que irá ouvir a minha porta.
app.listen(PORT);
const User = require("../models/User");

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        let userFounded = await User.findOne({ $or: [{ username }, { email }] });
        if (userFounded) return res.status(400).json({ error: 'Usuario ya existe' })
        if (password.length < 4) return res.status(400).json({ error: 'La contraseña minimo 4 caracteres' });
        let user = new User(req.body);
        await user.save();
        return res.status(200).json({ ok: 'Registrado correctamente' });
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const userFounded = await User.findOne({ $or: [{ username }, { email }] });
        if (!userFounded) return res.status(400).send({ error: 'Usuario no encontrado' });
        if (password == userFounded.password) return res.status(200).send({ token: 'Token listo' });
        return res.status(400).send({ error: 'Contraseña incorrecta' });
    } catch (error) {
        console.log(error);
    }
}
module.exports = { register, login }
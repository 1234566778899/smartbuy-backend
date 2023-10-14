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
        if (!userFounded) return res.status(400).json({ error: 'Usuario no encontrado' });
        if (password == userFounded.password) return res.status(200).json({ token: 'Token listo' });
        return res.status(400).json({ error: 'Contraseña incorrecta' });
    } catch (error) {
        console.log(error);
    }
}

const addCustomer = async (req, res) => {
    try {
        const { dni, name, lname, monthly_income } = req.body;
        if (!dni || !name || !lname || !monthly_income) {
            return res.status(400).json({ error: 'Datos inválidos' });
        }
        const userFounded = await User.findOne({ dni });
        if (userFounded) return res.status(400).json({ error: 'Cliente ya existe' });
        const user = new User({ dni, name, lname, monthly_income });
        await user.save();
        return res.status(200).json({ ok: 'Cliente registrado correctamente' });
    } catch (error) {
        console.log(error);
    }
}
const getCustomers = async (req, res) => {
    const users = await User.find({ name: { $exists: true } }).sort({ createdAt: -1 });
    return res.status(200).json(users);
}
const deleteCustomer = async (req, res) => {
    const { id } = req.params;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ ok: 'Usuario eliminado correctamente' });
}
const updateCustomer = async (req, res) => {
    const { dni, name, lname, monthly_income } = req.body;
    const { id } = req.params;

    const userFounded = await User.findOne({ dni });
    if (!userFounded) return res.status(400).json({ ok: 'Usuario no econtrado' });

    await User.findOneAndUpdate({ id }, { dni, name, lname, monthly_income });
    return res.status(200).json({ ok: 'Usuario actualizado correctamente' });
}
module.exports = { register, login, addCustomer, getCustomers, deleteCustomer, updateCustomer }
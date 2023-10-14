const express = require('express');
const { register, login, addCustomer, getCustomers, updateCustomer, deleteCustomer } = require('../controllers/User');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/add', addCustomer);
router.get('/list', getCustomers);
router.post('/edit/:id', updateCustomer);
router.get('/delete/:id', deleteCustomer);

module.exports = router;
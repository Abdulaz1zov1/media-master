const express = require('express')
const router = express.Router()
const {
    login,
    logout,
    register_ADMIN,
    register_USER,
    getOne,
    getAll,
    updateOne,
    deleteOne,
    getme
} = require('../controller/user')


router.post('/login', login)
router.post('/register_ADMIN', register_ADMIN)
router.post('/register_USER', register_USER)
router.get('/getme', getme)
router.get('/logout', logout)
router.get('/all', getAll)
router.get('/:id', getOne)
router.put('/:id', updateOne)
router.delete('/:id', deleteOne)


module.exports = router
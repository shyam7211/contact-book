const express = require('express');
const router = express.Router();
const {getContacts,getContact,putContact,postContact,deleteContact} = require('../controller/contactController')

router.route('/').get(getContacts).post(postContact)
router.route('/:id').get(getContact).put(putContact).delete(deleteContact)

module.exports = router;
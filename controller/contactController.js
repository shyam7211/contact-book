//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req,res)=>{
    res.status(200).json({ message: "Get all contacts." })
}

//@desc Create contact
//@route POST /api/contacts/
//@access Public
const createContact = (req,res)=>{
    console.log("The request body is", req.body);
    const {name, email, phone} = req.body;
    if( !name || !email || !phone){
        req.status(500);
        throw new Error("All fields are necessary!!");
    }
    res.status(201).json({ message: "Create contacts." })
}

//@desc Get contact
//@route GET /api/contacts/:id
//@access Public
const getContact = (req,res)=>{
    res.status(200).json({ message: `Get contact of ${req.params.id}` })
}

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const updateContact = (req,res)=>{
    res.status(200).json({ message: `Update contact of ${req.params.id}` })
}

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const deleteContact = (req,res)=>{
    res.status(200).json({ message: `Delete contact for ${req.params.id}` })
}

module.exports = {
    getContacts,
    getContact,
    updateContact,
    createContact,
    deleteContact
}
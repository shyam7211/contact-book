//@desc Get all contacts
//@route GET /api/contacts

const asyncHandler = require("express-async-handler")

//@access Public
const getContacts = asyncHandler (async (req,res)=>{
    res.status(200).json({ message: "Get all contacts." })
});

//@desc Create contact
//@route POST /api/contacts/
//@access Public
const createContact = asyncHandler (async (req,res)=>{
    console.log("The request body is", req.body);
    const {name, email, phone} = req.body;
    if( !name || !email || !phone){
        res.status(400);
        throw new Error("All fields are necessary!!");
    }
    res.status(201).json({ message: "Create contacts." })
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler (async (req,res)=>{
    res.status(200).json({ message: `Get contact of ${req.params.id}` })
});

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const updateContact = asyncHandler (async (req,res)=>{
    res.status(200).json({ message: `Update contact of ${req.params.id}` })
});

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const deleteContact = asyncHandler (async (req,res)=>{
    res.status(200).json({ message: `Delete contact for ${req.params.id}` })
});

module.exports = {
    getContacts,
    getContact,
    updateContact,
    createContact,
    deleteContact
}
import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);


//* elavult, a Model metódusok már nem működnek callbackekkel
// export const addNewContact = (req, res) => {
//   let newContact = new Contact(req.body);

//   newContact.save((err,contact) => {
//      if (err) {
//        res.rend(err);
//      }
//   res.json(contact);
//    })
// };

export const addNewContact = async (req, res) => {
  let newContact = new Contact(req.body);

  try {
    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    res.send(err);
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (err) {
    res.send(err);
  }
};

export const getContactWithID = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    res.json(contact);
  } catch (error) {
    res.send(error);
  }
};

export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.params.contactId }, req.body, { new: true }
    );
    res.json(contact);
  } catch (error) {
    res.send(error);
  }
};


// Contact.remove is not a function -.-
// export const deleteContact = (req,res) => {
//     Contact.remove({_id: req.params.contactId}, (err) => {
//       if (err) {
//         res.send(err);
//       }
//       res.json({message: 'Successfully deleted contact'});
//     });
// };

export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndRemove({ _id: req.params.contactId })
    res.json({ message: 'Successfully deleted contact' });
  } catch (error) {
    res.send(error);
  }
};
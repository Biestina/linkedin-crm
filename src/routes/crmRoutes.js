import { 
  addNewContact, 
  getContacts, 
  getContactWithID, 
  updateContact, 
  deleteContact } from '../controllers/crmController';

const routes = (app) => {
  app.route('/contact')
    //* get all contacts
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`)
      console.log(`Request type: ${req.method}`)
      next();
    }, getContacts)

    //* post new contact
    // .post((req, res) =>
    //   res.send('POST request successful!')
    // )
    .post(addNewContact);

  app.route('/contact/:contactId')

    //* get specific contact
    .get(getContactWithID)

    //* update a contact
    // .put((req, res) =>
    //   res.send('PUT request successful!')
    // )
    .put(updateContact)

    //* delete a contact
    .delete(deleteContact)
}

export default routes;
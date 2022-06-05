import { addNewContact, getContacts, getContactWithID } from "../controllers/crmController";

const routes = (app) => {
    app.route("/contact")
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContacts)
        .post(addNewContact);

    app.route("/contact/:contactID")
        .get(getContactWithID)
        .put((req, res) => console.log("PUT request successful"))
        .delete((req, res) => console.log("DELETE request successful"));
}

export default routes;
const routes = (app) => {
    app.route("/contact")
        .get((req, res) => console.log("GET request successful"))
        .post((req, res) => console.log("POST request successful"));

    app.route("/contact/:contactID")
        .put((req, res) => console.log("PUT request successful"))
        .delete((req, res) => console.log("DELETE request successful"));
}

export default routes;
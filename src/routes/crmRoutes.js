const routes = (app) => {
    app.route("/contact")
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
        },
            (req, res, next) => {
                console.log("GET request successful")
            })
        .post((req, res) => console.log("POST request successful"));

    app.route("/contact/:contactID")
        .put((req, res) => console.log("PUT request successful"))
        .delete((req, res) => console.log("DELETE request successful"));
}

export default routes;
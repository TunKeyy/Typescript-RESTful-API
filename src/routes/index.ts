import express, { Application } from "express"
import userRoute from "./UserRoute"
import scoreRoute from "./ScoreRoute"
function route(app: Application) {
    app.use('/user', userRoute);
    app.use('/score', scoreRoute);
    app.use('/', (req, res) => {
        res.send("Home");
    })
}
export default route;
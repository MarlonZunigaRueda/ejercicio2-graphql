import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from"./graphql/schema";
const app = express();
//const schema = {};
app.use("/graphql" , graphqlHTTP({
    graphiql : true,
    schema : schema
}));

app.listen(4000, () => {
    console.log("Servidor ON en puerto 4000");
})
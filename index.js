import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
  res.send('graphql is amazing');
})

const root = {
  product: () => {
    return {
      "id": 234233,
      "name": "widget",
      "description": "beautiful widget",
      "price": 34.99,
      "soldout": false
    }
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(3000, () => {
  console.log('Graphql app running on port 3000')
})
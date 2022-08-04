const {gql} = require("apollo-server")

const typeDefs = gql`

    type Query{
        user: [user]
        users(id:ID!): user
        books: [books]
    }

    type user{
        id: ID!,
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        books: [books]
    }

    type books{
        by: ID,
        name: String
    }
    
    type Mutation{
        signUpUserDummy(userNew:userInput!): user
    }
    
    input userInput{
        firstName: String,
        lastName: String,
        email: String,
        password: String,
    }

`

module.exports = typeDefs

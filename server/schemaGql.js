const {gql} = require("apollo-server")

const typeDefs = gql`

    type Query{
        user: [user]
        users(_id:ID!): user
        quote: [QuoteWithName]
        iquote(by:ID!):[quote]
        myprofile:user
    }

    type QuoteWithName{
        name:String
        by:IdName
    }

    type IdName{
        _id:String
        firstName:String
    }

    type user{
        _id: ID!,
        firstName: String
        lastName: String
        email: String
        password: String
        quote: [quote]
#        image: [Image]
    }

    type quote{
        by: ID,
        name: String
    }
    
    type Image{
        by: ID
        image: String
    }

    type Token{
        token:String
    }
    
    type Mutation{
        signupUser(userNew:userInput!):user
        signinUser(userSignin:UserSigninInput!):Token
        createQuote(name:String!):String
        updateUser(userData: userData!): user
        uploadImage(image:String!):String
    }

    input UserSigninInput{
        email:String!
        password:String!
    }
    
    input userInput{
        firstName: String
        lastName: String
        email: String
        password: String
    }
    
    input userData{
        _id: ID
        firstName: String
        lastName: String
        email: String
    }

`

module.exports = typeDefs





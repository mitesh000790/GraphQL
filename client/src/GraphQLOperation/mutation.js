import {gql} from '@apollo/client'

export const SIGNUP_USER = gql`
    mutation createUser($userNew:userInput!){
        user:signupUser(userNew:$userNew){
            firstName
        }
    }
`
export const LOGIN_USER = gql`
    mutation SigninUser($userSignin:UserSigninInput!){
        user:signinUser(userSignin:$userSignin){
            token
        }
    }
`

export const CREATE_QUOTE = gql`
    mutation createQuote($name:String!){
        quote:createQuote(name:$name)
    }
`

export const UPDATE_USER = gql`
    mutation updateUser($userData:userData!){
        user:updateUser(userData:$userData){
            _id
            firstName
            lastName
            email
        }
    }
`

export const UPDATE_QUOTE = gql`
    mutation updateQuote($quoteEdit:quoteEdit!){
        quote:updateQuote(quoteEdit:$quoteEdit){
            _id,
            name
        }
    }
`

export const DELETE_QUOTE = gql`
    mutation deleteQuote($quotById:quotById!){
        quote:deleteQuote(quotById:$quotById){
            _id
        }
    }
`

import {gql} from '@apollo/client'
export const GET_ALL_QUOTES = gql`
    query getAllQuotes{
        quote{
            name
            by{
                _id
                firstName
            }
        }
    }
`

export const GET_MY_PROFILE = gql`
    query getMyProfile{
        users:myprofile{
            _id
            firstName
            lastName
            email
            quote{
                _id
                name
            }
        }
    }
`

export const GET_USER_BY_ID = gql`
    query getUserById($userid: ID!) {
        users(_id: $userid) {
            _id
            firstName
            lastName
            email
            quote{
                name
            }
        }
    }
`

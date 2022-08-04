const {user, books} = require("./fakeCollection")
const {randomBytes} = require("crypto")

const resolvers = {
    Query: {
        user: () => user,
        users: (_, {id}) => user.find((user) => user.id === id),
        books: () => books
    },
    user:{
        books: ({id}) => books.filter((item) => item.by === id)
    },

    Mutation:{
        signUpUserDummy: (_,{userNew}) => {
            const id = randomBytes(5).toString("hex")
            user.push({
                id,
                ...userNew
            })
            return user.find((user) => user.id === id)
        }
    }
}

module.exports = resolvers

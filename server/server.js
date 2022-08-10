const {ApolloServer} = require("apollo-server")
const {ApolloServerPluginLandingPageGraphQLPlayground} = require("apollo-server-core")
const mongoose = require("mongoose")
const typeDefs = require("./schemaGql")
const dotenv = require("dotenv")
require("./models/User");
require("./models/Quotes");
require("./models/Image");
const jwt = require("jsonwebtoken")
const resolvers = require("./resolvers")

dotenv.config();


const MONGO_URL = process.env.MONGODB_ATLAS_URL
const JWT_SECRET = process.env.JWT_SECRET

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("connected mongoDB")
})

// Middleware
const context = ({req})=>{
    const { authorization } = req.headers;
    if(authorization){
        const {userId} = jwt.verify(authorization,JWT_SECRET)
        console.log("userId------------->", userId, authorization)
        return {userId}
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({port}) => {
    console.log(`server is running on ${port}`)
})


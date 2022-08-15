const {user, quote} = require("./fakeCollection")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const User  = mongoose.model("User")
const Quote  = mongoose.model("Quotes")
const dotenv = require("dotenv")

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET

const resolvers = {
    Query: {
        user:async () => await User.find({}),
        users:async (_,{_id})=> await User.findOne({_id}),
        quote:async ()=>await Quote.find({}).populate("by","_id firstName"),
        iquote:async (_,{by})=> await Quote.find({by}),
        myprofile:async (_,args,{userId})=>{
            if(!userId) throw new Error("You must be logged in")
            return await User.findOne({_id:userId})
        }
    },
    user:{
        quote: async (ur)=> await Quote.find({by:ur._id})
    },


    Mutation:{
        signupUser:async (_,{userNew})=>{
            const user = await User.findOne({email:userNew.email})
            if(user){
                throw new Error("User already exists with that email")
            }
            const hashedPassword =  await bcrypt.hash(userNew.password,12)

            const newUser =  new User({
                ...userNew,
                password:hashedPassword
            })
            return await newUser.save()
        },
        signinUser:async (_,{userSignin})=>{
            const user = await User.findOne({email:userSignin.email})
            if(!user){
                throw new Error("User dosent exists with that email")
            }
            const doMatch =await bcrypt.compare(userSignin.password,user.password)
            if(!doMatch){
                throw new Error("email or password in invalid")
            }
            const token = jwt.sign({userId:user._id},JWT_SECRET)
            return {token}
        },
        createQuote:async (_,{name},{userId})=>{
            if(!userId) throw new Error("You must be logged in")
            const newQuote = new Quote({
                name,
                by:userId
            })
            await newQuote.save()
            return "Quote saved successfully"
        },
        updateUser:async (_,{userData},{userId})=>{
            if(!userId) throw new Error("You must be logged in")
               return User.findByIdAndUpdate({_id: userData._id}, {...userData}, {new:true} )
        }
    }
}

module.exports = resolvers

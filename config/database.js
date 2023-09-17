import mongoose from 'mongoose'

const connectDB = async ()=>{
    const {connection} = await mongoose.connect(process.env.MONGO_URI)

    try {
        console.log(`MongoDB is Connected with ${connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB
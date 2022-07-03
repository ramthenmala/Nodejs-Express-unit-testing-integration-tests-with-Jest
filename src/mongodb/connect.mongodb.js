//mongodb+srv://rammongodbvid:<password>@cluster0.ksbpb.mongodb.net/?retryWrites=true&w=majority
 
const mongoose = require('mongoose')
const mongoURI = `mongodb+srv://rammongodbvid:GJeFBBXkzACRqUHD@cluster0.ksbpb.mongodb.net/?retryWrites=true&w=majority`;
async function connect(){
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
        });
    } catch (error) {
        console.log('Error connecting mongoBD', error);
    }
}

module.exports = { connect }
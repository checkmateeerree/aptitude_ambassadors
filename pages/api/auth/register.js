import dbConnect from '../../../utils/connectToDb';
import { hash } from 'bcryptjs';
let User = require("../../../models/usermodel.js");


async function handler(req, res) {
    
    //Only POST mothod is accepted
    if (req.method === 'POST') {
        //Getting email and password from body
        const { email, password } = req.body;
        //Validate
        if (!email || !email.includes('@') || !password) {
            res.status(423).json({ message: 'Invalid Data' });
            return;
        }
        //Connect with database
        await dbConnect();
        //Check existing
        let user = await User.findOne({ email: email });
        //Send error response if duplicate user is found
        if (user) {
            res.status(422).json({ message: 'User already exists' });
            return;
        }
        //Hash password
        else {
            user = new User({
                name: "john doe",
                email: email,
                password: await hash(password, 12)
            });
            await user.save();
        }
        
        //Send success response
        return res.status(200).json({ message: 'User created'});
        //Close DB connection
    } else {
        //Response for other than POST method
        return res.status(500).json({ message: 'Route not valid' });
    }
}

export default handler;
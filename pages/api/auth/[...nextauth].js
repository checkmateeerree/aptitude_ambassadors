import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import {compare} from 'bcryptjs'
import dbConnect from '../../../utils/connectToDb';
const User = require("../../../models/usermodel.js");

export default NextAuth({
    //Configure JWT
    session: {
        jwt: true
    },
    
    //Specify Provider
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                await dbConnect();
                //Find user with the email  
                const result = await User.findOne({
                    email: credentials.email,
                });
                //Not found - send error res
                if (!result) {
                    throw new Error('No user found with the email');
                }
                //Check hased password with DB password
                const checkPassword = await compare(credentials.password, result.password);
                //Incorrect password - send response
                if (!checkPassword) {
                    throw new Error('Password doesnt match');
                }
                //Else send success response
                else return {email: result.email};
            },
        }),
    ],
});
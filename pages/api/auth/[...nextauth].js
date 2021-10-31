import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import {compare} from 'bcryptjs'
import dbConnect from '../../../utils/connectToDb';
const User = require("../../../models/usermodel.js");
let userAccount = null;

export default NextAuth({
    //Configure JWT
    session: {
        jwt: {
            signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
        }
    },
    jwt: {
        secret: process.env.SECRET,
        signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
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
                //Check hased password wih DB password
                const checkPassword = await compare(credentials.password, result.password);
                //Incorrect password - send response
                if (!checkPassword) {
                    throw new Error('Password doesnt match');
                }
                //Else send success response
                else {
                    userAccount = result;
                    return result;
                }
            },
        }),
    ],
    callbacks: {
    async session(session, token) {
        if (userAccount !== null)
        {
            session.user = userAccount;
        }
        else if (typeof token.user !== typeof undefined && (typeof session.user === typeof undefined 
            || (typeof session.user !== typeof undefined && typeof session.user.userId === typeof undefined)))
        {
            session.user = token.user;
        }
        else if (typeof token !== typeof undefined)
        {
            session.token = token;
        }
        return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
        if (typeof user !== typeof undefined)
        {
            token.user = user;
        }
        return token;
    }
}
});
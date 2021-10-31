// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"
import dbConnect from "../../../utils/connectToDb"
import SummerProgram from "../../../models/summerprogrammodel"

const secret = process.env.SECRET
const signingKey = process.env.JWT_SIGNING_PRIVATE_KEY

export default async (req, res) => {
  if (req.method === 'POST'){
    const token = await getToken({ req, secret, signingKey });
    if (token.user.isAdmin) {
        const {name, image, type, link} = req.body
        await dbConnect();
        let program = new SummerProgram({
            name,
            image,
            type,
            link
        });
        await program.save();

        return res.status(200).json({ message: 'Program entered'});

    } else {
        // Not Signed in
        return res.status(401)
    }
    return res.end()
} else {
    return res.status(400).json({message: "Bad request"})
}
}
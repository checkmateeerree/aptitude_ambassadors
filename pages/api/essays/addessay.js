// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"
import dbConnect from "../../../utils/connectToDb"
import Essay from "../../../models/essaymodel"

export default async (req, res) => {
  if (req.method === 'POST'){
        const {prompt, text, type} = req.body

        await dbConnect();
        let program = new Essay({
            prompt,
            text,
            type,
        });

        await program.save();
        return res.status(200).json({ message: 'Program entered'});
} else {
    console.log("hey")
    return res.status(400).json({message: "Bad request"})
}
}
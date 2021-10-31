// This is an example of how to read a JSON Web Token from an API route

import dbConnect from "../../../utils/connectToDb"
import SummerProgram from "../../../models/summerprogrammodel"

export default async (req, res) => {
  if (req.method === 'GET'){

    await dbConnect();

    const programs = await SummerProgram.find({});
    return res.status(200).json({programs})
}
 else {
    return res.status(400).json({message: "Bad request"})
    }
}
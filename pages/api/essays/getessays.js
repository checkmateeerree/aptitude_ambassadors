// This is an example of how to read a JSON Web Token from an API route

import dbConnect from "../../../utils/connectToDb"
import Essay from "../../../models/essaymodel"

export default async (req, res) => {
  if (req.method === 'GET'){

    await dbConnect();

    const essays = await Essay.find({});
    return res.status(200).json({essays})
}
 else {
    return res.status(400).json({message: "Bad request"})
    }
}
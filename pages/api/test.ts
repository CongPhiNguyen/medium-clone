import dbConnect from "../../utils/dbConnect";
import post from '../../models/post';
import type { NextApiRequest, NextApiResponse } from 'next'
// import post
dbConnect();
type Data = {
  post: any[],
  run: boolean,
  error: string,
}

Error = function () {
  throw 'Bug'
} as any

export default async (req: NextApiRequest,res: NextApiResponse<Data>) => {
    const {method} = req;
    switch(method){
      case 'GET':
        try{
          const posts = await post.find();
          res.status(200).send({
            post: posts,
            run: true,
            error: ""
          })
        }
        catch(err){
          // let message: string = "";
          // if(err instanceof Error) message = err.message;
          res.status(400).send({
            post: [],
            error: err,
            run: false,
          })
        }
    }
    // console.log(method);
    // res.status(200).json({ name: 'John Doe' })
}
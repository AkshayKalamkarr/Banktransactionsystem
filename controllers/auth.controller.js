import userModel from "../src/models/user.model.js";

/**  user register controller  */

async function userRegisterController(req, res) {
  const { email, password, name } = req.body;

  const userExists = await userModel.findOne({
    email : email
  })

  if(userExists){
    return res.json({message : "user already exist with this email" , status :"failed"})
  }


  const user = await userModel.create({
    email,password,name
  })


}


export default userRegisterController

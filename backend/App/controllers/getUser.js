import userModel from "../models/userModel.js";

const getUser = async (req,res)=>{
  let {email} = req.details;
  try{
    let user = await userModel.findOne({email})
    if(user){
      return res.json({
        error:false,
        message:"User details fetched successfully",
        user,
      })
    }
    return res.json({
      error:true,
      message:"User deails unavailable"
    })
  }catch(error){
    return res.json({
      error:true,
      message:"Internal error"
    })
  }
}

export default getUser;
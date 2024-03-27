import express  from 'express';
import User from '../models/user.js'

const router=express.Router();


// all routes in here are starting with /users


// getting all users
router.get('/',async (req,res)=>{
    try{
        const users=await User.find();  
        res.json(users);
        }
        catch(err){
             res.json({message:err});
        }
});

// // getting user by id 
router.get('/:userid',async (req,res)=>{
     try{
    const user= await User.findById(req.params.userid);
     res.json(user);
     }
     catch(err){
          res.json({message:err});
     }
 });




// posting user details 

router.post('/',async (req,res)=>{
   const user=new User;
   user.firstName=req.body.firstName;
   user.lastName=req.body.lastName;
   user.age=req.body.age;
   try{
   const savedUser=await user.save();
   res.json(savedUser);
   }
   catch(err){
        res.json({message:err});
   }
})

// delete a user
// router.delete('/:userid',async(req,res)=>{
//      try{
//      const user=await User.remove({_id:req.params.userid});
//      res.send('user deleted');
//      }
//      catch(err){
//           res.json({message:err});
//      }
// });




export default router ;
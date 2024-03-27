import express  from 'express';
import Vehicle from '../models/Plate.js'
import Park from '../models/Parking.js'
import Array from '../models/Array.js'

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
const router=express.Router();
async function gt(){
    const d=await Array.find().sort({ _id: -1 })
    let Slot =`${d[0].SLOT}`;
    return Slot;
}
router.get('/',async (req,res)=>{
    try{
        const d=await Array.find().sort({ _id: -1 })
        let Slot =`${d[0]}`; 
        console.log(); 
        res.send(Slot);
        }
        catch(err){
             res.json({message:err});
        }

});

router.post('/in',async (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    let Slot= await gt();
    const park=new Park();
    const rt=new Array();
    park.PlateNum=req.body.PlateNum;
   
    var datetime = new Date();
    console.log('Slot before ',typeof(Slot));
    let count=0;
    for (let i=0;i<Slot.length;i++){
        if (Slot[i]=='0'){
        park.slot=i
        Slot=Slot.replaceAt(i,'1');
        break;
        }
        count++;
    }
    console.log(count,Slot.length)
    if (count!=Slot.length){
        try{
            const savedSlot=await park.save();
            res.json(savedSlot);
            }
            catch(err){
                 res.json({message:err});
            }
            // Slot=Slot+'0';
            rt.SLOT=Slot;
            const saved=await rt.save();
            console.log('Slot aftyer',Slot);
    }
    else{
        return res.sendStatus(404)
    }
 })
 router.post('/out',async (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    let Slot= await gt();
    const park=new Park();
    const array=new Array();
    park.PlateNum=req.body.PlateNum;
    var datetime = new Date();
    var find= await Park.findOneAndDelete({PlateNum:req.body.PlateNum})
    if (find!=null){
    console.log(`parking `,find.slot)
    const s=find.slot
    Slot=Slot.replaceAt(s,'0');
    array.SLOT=Slot;
    console.log("checkout slots",Slot)
    res.json({message:'deleted'})
    const save=await array.save();
    console.log(save)
    }
    else{
        res.json({message:'Parking Lot Empty'})
    }
 })

 export default router ;
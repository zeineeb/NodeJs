const express = require('express');
const router = express.Router();
const Contact = require ("../models/contact.js")

router.get('/GetAll' , (req , res , next)=> {
  Contact.find({},(err,data)=>{
    if(err) return done(err);
    res.json(data)
  });
});

router.put('/:id' , (req , res , next)=> {
  
    Contact.updateOne({ id: req.params.id , fullName : req.body.contactName , phone :req.body.contactTel },(err,data)=>{
      if(err) return done(err);
      res.json(data)
    });
  });

  router.delete('/:id' , (req , res , next)=> {
  
    Contact.deleteOne({ id: req.params.id },(err,data)=>{
      if(err) return done(err);
      res.json(data)
    });
  });
  
router.post('/', (req , res , next )=> {
var contact = new Contact ({fullName : req.body.contactName , phone :req.body.contactTel})
contact.save((err , newContact)=>{
if(err){
    console.log(`there is an error ${err}`);
} else {
    res.json(newContact);
}

    })
});
module.exports = router ;
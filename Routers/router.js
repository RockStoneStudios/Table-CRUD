const router = require('express').Router();
const User = require('../Models/usuarios');

router.get('/', async (req,res)=>{
    const users = await User.find({});
    console.log(users);
    res.render('index',{
         data : users
    });
});

router.get('/delete/:id',async(req,res)=>{
    const {id} = req.params;
    const user = await User.findOne({_id :id});
    console.log('usuario'+user);
    await User.remove({_id : id});
    res.redirect('/');
});

router.post('/add', async(req,res)=>{
    
    const user = new User(req.body);
     console.log(user);
      await user.save();
     res.redirect('/');

});

 router.post('/update/:id', async(req,res)=>{
     const {id} = req.params;
     await User.updateOne({_id:id},req.body);
     res.redirect('/'); 
    
 });

router.get('/update/:id',async(req,res)=>{
     const {id} = req.params;
     const user =  await User.findOne({_id:id});
     
     res.render('update',{
         user
     });

})



module.exports = router;
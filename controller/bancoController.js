const express = require('express');
const dateFormat = require('dateformat');
const registro = require('../model/Agendamentos');

const router = express.Router();

router.post('/cadastro', async (req, res) => {
  try{

     console.log(req.body.param);
    const ret = await registro.create(req.body.param);
    return res.json({ret});
  }catch(err){
    return res.status(400).send(err);
  }
});
router.put('/update', async (req, res) => {
  try{
      
      console.log(req.body.param);
      const ret = await registro.update({ _id: req.body.param._id }, req.body.param);
      
    
    return res.json({ret});
  }catch(err){
    return res.status(400).send(err);
  }
});
router.get('/lista', async (req, res) => {
  try{
  
  	 registro.find({}).then(function (dados) {
	 	return res.send(dados);
	 });

    
  }catch(err){
    return res.status(400).send(err);
  }
});

router.delete('/remove/:id', async (req, res) => {
  try{
     var id = req.params['id'];
  	 console.log(id);
  	 registro.deleteOne({ _id:id }).then(function (dados) {
       return res.send("ok");
     });
  }catch(err){
    return res.status(400).send(err);
  }
});


module.exports = router;
 

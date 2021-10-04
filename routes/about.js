const { urlencoded, response } = require('express');
const express=require('express');
const router = express.Router();
const request=require('request');

router.get ('/about',(req,res)=>{

    //Using request :-
    /*request({url:url, json:true},(err,res)=>{
       if(err)
       {
           console.log("WRONG ADDRESS");
       }
       else
        {
            val=res.body.location.name +' '+res.body.current.weather_descriptions[0] +' '+ res.body.current.temperature
            console.log(val);
        }   
    })*/
    res.render('about',{
        value: 'Created by Nishit R.',
        title:'Weather App'
    }); 
})

module.exports=router;
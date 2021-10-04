const { request, response } = require('express');
const express=require('express');
const router = express.Router();

// For HTML files... we have to use re.sendFile('htmlfile');
//const path=require('path')
//const htmlfile=path.join(__dirname,'../public/app.html');

router.get('/',(req,res)=>{
    res.render('home',{
        title:'Weather App'
    })
})

// I have used Fetch and document.qs() therefore, I have created logic in public folder. Since, both works in browser side not in node side...

module.exports=router;
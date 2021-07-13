const timer=(req,res,next)=>{
    let dat=new Date()
    let day = dat.getDay();
    console.log(day)

    let hours =dat.getHours(); 
    console.log(hours)
    if(day==0||day==6||hours<9||hours>17){
        res.send("don''t have permissions")
    }
  
    else {
        next();
    }
}
    module.exports=timer
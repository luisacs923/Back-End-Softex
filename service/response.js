function response(sts,msg,data){
    return{
        status:sts,
        message:msg,
        data:data,
        timeStramp : new Date().getTime()
    }
}

export default response;
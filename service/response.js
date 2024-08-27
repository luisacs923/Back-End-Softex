function response(Sts,Msg,Data){
    return{
        status:Sts,
        message:Msg,
        data:Data,
        timeStamp : new Date().getTime()
    }
}

export default response;
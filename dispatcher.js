


const dispatcher =(messageData,text)=>{
    return messageData.replyTo.reply(text.slice(0,1900));
}

export default dispatcher
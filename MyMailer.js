class MyMail {
    constructor()
    {
        this.sender = 'gohildiyas@gmail.com';
        this.host = 'gmail.com';
        this.password = '123123';
    }
    send(receiver,subject,message)
    {
        console.log('I will send you mail');
    }
}
module.exports.MyMail = MyMail; 
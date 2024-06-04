function getCurrentDate()
{
    //Create date class object
    let d1 = new Date();
    let today = d1.getDate() + "/" + d1.getMonth() + "/" + d1.getFullYear();
    return today; 
}

let getCuurentTime = () =>
{
    let d1 = new Date();
    let now = d1.getHours() + ":" + d1.getMinutes() + ":" + d1.getSeconds();
    return now; 
}

let getCurrentDateTime = function()
{
    let currentdatetime = getCurrentDate() + " " + getCuurentTime();
    return currentdatetime; 
}

//export all functions (Compulsary)
module.exports.getDate = getCurrentDate;
module.exports.getTime = getCuurentTime;
module.exports.getDateTime = getCurrentDateTime;
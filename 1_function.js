function getCurrentDate()
{
    //Create date class object
    let d1 = new Date();
    let today = d1.getDate() + "/" + d1.getMonth() + "/" + d1.getFullYear();
    return today; 
}

var today = getCurrentDate();
console.log(today);
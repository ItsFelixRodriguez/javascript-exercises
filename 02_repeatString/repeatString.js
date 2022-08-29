
const repeatString = function(str,times) {
    let i;
    var text = "";
    for (i=0; i<times;i++){
        text += str;
    } 
   
    if (times < 0) {
        return "ERROR";
    }
    return text;
};
let text = "hey";
let times = 3;
repeatString ()
// Do not edit below this line
module.exports = repeatString;

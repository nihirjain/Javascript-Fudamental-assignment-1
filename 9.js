const students = [1,2,999,56,"mithun",1234,"PW"];

for(let student of students){
    if(typeof student == "string"){
        console.log(`Found the first string ${student}`);
        return false;
    }
}
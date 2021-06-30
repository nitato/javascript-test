//問題①
const array =[2,4,7,5,4,3,8];
const result =array.filter(function(item){
  return item===4;
});
console.log(result);
const indexofnum= array.indexOf(4);
console.log(indexofnum);
array.splice(1,1);
console.log(array);
const indexofnumber=array.indexOf(4);
console.log(indexofnumber);
array.splice(3,1);
console.log(array);
//問題②
const leapYear =function(ce){
  if (ce%4===0 && ce%100!=0){
    return console.log("うるう年です");
  }else if(ce%400===0){
    return console.log("うるう年です");} else {
    return console.log("うるう年じゃないです");};
}
  leapYear(2020);
  leapYear(2021);
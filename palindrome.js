let N=6;
let str="nrupul";

let bag="";
 for(i=str.length-1;i>=0;i--){
   bag+=str[i];
 }
if(bag==str){
  console.log("it is palindrome")
}
else{
  console.log("it is not a palindrome");
}
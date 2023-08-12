function convertNumberToword(n){
let units=["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
let unit=["mười","mười một", "mười hai", "mười ba", "mười bốn", "mười năm", "mười sáu", "mười bảy","mười tám", "mười chín"]
let tens=[""," ","hai mươi","ba mươi","bốn mươi","năm mươi","sáu mươi","bảy mươi","tám mươi","chín mươi"];
if (n<0||n>9999){
return "số không hợp lệ ";
}
if (n < 10) {
    return units[n];
  }else if(n<20){
     return unit[n-10];
  }else if(n<=99){
    units[1] = "mốt";
    const tenDigit = Math.floor(n / 10);
    const unitDigit = n % 10;
    return tens[tenDigit] + " " + units[unitDigit];
   
  }else if(n<1000){
    const hundredDigit = Math.floor(n / 100);
    const remainingDigits = n % 100;
    return units[hundredDigit] + " trăm " + convertNumberToword(remainingDigits);
  } else {
    const thousandDigit = Math.floor(n / 1000);
    const remainingDigits = n % 1000;
    return units[thousandDigit] + " nghìn " + convertNumberToword(remainingDigits);
  }
}

console.log(convertNumberToword(9991));
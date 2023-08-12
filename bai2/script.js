function reverseNumber(n) {
  if(n>0){
    let reversedNumber = 0;
  while (n !== 0) {
    const lastDigit = n % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return reversedNumber;
  }
  return "so nhap ko hop le";
  
}
const argument = 12345;
document.write(reverseNumber(argument));

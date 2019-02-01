var num = 0;
for(var cont = 0; cont < 100; cont ++){
   if(num % 3 == 0){
       console.log('Fizz ' + num);
       num ++;
   }else if(num % 5 == 0){
       console.log('Buzz ' + num);
       num ++;
   }else if(num % 3 == 0 && num % 5 == 0){
       console.log('FizzBuzz ' + num);
   }else{
       console.log(num);
       num ++;
   }
}
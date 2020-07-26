// const factorial

const sumfuctorial=n =>{
         let sum=1;
         for (let i=1; i<=n; i++) {
             sum=sum*i;
         }
         return sum;
     }
     console.log(sumfuctorial(5))


//  const stars

const stars=n =>{
        for(var i=1; i<=n; i++) {
          console.log("*".repeat(i));
        }
    }   
         console.log(stars(7))

         
// const stars1

const stars1=n =>{
        for(var i=1; i<=n; i++){
              console.log("-".repeat(n-i)+"*".repeat(i))
        }
    }
        console.log (stars1(7))

        
// array of numbers        
var arr = [10, 20, 30, 40, 50];
var total = 0;
for(var i = 0; i < arr.length; i++) {
    total += arr[i];
}
var avg = total / arr.length;
console.log(avg)
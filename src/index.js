module.exports = function toReadable (number) {
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five' , 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];
   let i = 16;

      while (i <= 20){
        arr[i] = arr[Number(String(i)[1])] + 'teen';
   
        i === 18 ? arr[i] = arr[8] + 'een' : arr[i];
        i === 20 ? arr[i] = 'twenty' : arr[i];

        i += 1;
      }

      while (i > 20 && i < 100){
        i % 10 === 0 ? arr[i] = arr[Number(String(i)[0])] + 'ty' : arr[i] = arr[Number(String(i)[0] + '0')] + ' ' + arr[Number(String(i)[1])];

        i === 30 ? arr[i] = arr[13].slice(0,4) + 'ty' : arr[i];
        i === 40 ? arr[i] = 'forty' : arr[i];
        i === 50 ? arr[i] = arr[15].slice(0,3) + 'ty' : arr[i];
        i === 80 ? arr[i] = arr[8] + 'y' : arr[i];

         i += 1;
      }
      
      while (i >= 100 && i < 1000){
            i % 100 === 0 ? arr[i] = arr[Number(String(i)[0])] + ' hundred' : arr[i] = arr[Number(String(i)[0])] + ' hundred ' + arr[Number(String(i).slice(1))];
        
            i += 1;
        }
    
        if (i === 1000)  arr[i] =  arr[Number(String(i)[0])] + ' thousand';
 return arr[number];
};
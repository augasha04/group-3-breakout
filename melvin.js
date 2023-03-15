let number = [1,2,5,6,9,8,5,6,3,4];

function evenNumbers(){
    let even = [];
    for(let i = 0; i < number.length; i++)
    if(number[i] % 2 === 0){
        even.push(number[i])
        
    }
    return even;
}
console.log(evenNumbers())
const fruits = ['Mango','Apple','Kiwi','Banana','Orange']
console.log(fruits);
fruits.push('Peach')
console.log(fruits);


let arrayOfNumber = [1,2,9,8,7,5,4,3,6]
for (let i = 0; i < arrayOfNumber.length; i++) {
    if (arrayOfNumber[i] === 6) {
        console.log(arrayOfNumber[i])
    }
    
}
fruits.sort()
console.log(fruits);
arrayOfNumber.sort()
console.log(arrayOfNumber);
arrayOfNumber.reverse()
console.log(arrayOfNumber);
fruits.reverse()
console.log(fruits)
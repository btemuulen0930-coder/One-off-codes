const names = ["Adam","Sara","sanctum","carl","keplar"];
const ages =[16,20,89,50,43];
const types=["Male","Female","building","fish","planet"]
const profile=[names,ages,types]
let i;
for(i=0;i<names.length; i++){
    console.log(i+1,profile[0][i], profile[1][i], profile[2][i]);
}
// 1. Print every element of the array, each on its own line.
const fruits = ["apple", "banana", "cherry"];
// Expected:
//   apple
//   banana
//   cherry
// your code here
for(let i=0;i<fruits.length; i++){
    console.log(fruits[i]);
}

// 2. Add up all the numbers and print the total.
const nums = [4, 8, 15, 16, 23, 42];
// Expected: 108
// your code here
let sum=0;
for(let i=0;i<nums[i];i++){
    sum+=nums[i];
}
console.log(sum)

// 3. Count how many numbers in the array are even, and print the count.
const values = [3, 6, 9, 12, 15, 18];
// Expected: 3
// your code here
let sum=0;
for(let i=0;i<values.length; i++){
    if(values[i]%2===0){
        sum++;
    }
}
console.log(sum);

// 4. Find and print the largest number in the array.
const scores = [42, 17, 99, 23, 56];
// Expected: 99
// your code here
let bignumber=0;
for(let i=0; i<scores.length;i++){
    if(bignumber<scores[i]){
        bignumber=scores[i];
    }
}
console.log(bignumber)

// 5. Find the smallest number AND the index where it sits.
//    Print:  smallest <value> at index <i>
const temps = [12, 5, 8, 3, 20];
// Expected: smallest 3 at index 3
// your code here
let smallnumber=temps[0];
let index=0;
for(let i = 1; i<temps.length; i++){
    if(smallnumber>temps[i]){
        smallnumber=temps[i];
        index=i;
    }
}
console.log("smallest", smallnumber, "at index",index);

// 6. Build a NEW array where every number is doubled, then print it.
const base = [1, 2, 3, 4];
// Expected: [ 2, 4, 6, 8 ]
// your code here
let double=[]
for(let i =0; i<base.length;i++){
    double[i]=base[i]*2
}
console.log(double)

// 7. Count how many times the target value appears in the array.
const items = [1, 2, 2, 3, 2, 4];
const target = 2;
// Expected: 3
// your code here
let total=0;
for(let i=0; i<items.length;i++){
    if(items[i]===target){
        total++;
    }
}
console.log(total);

// 8. Calculate and print the average of the numbers.
const data = [10, 20, 30, 40];
// Expected: 25
// your code here
let sum=0;
for(let i=0;i<data.length;i++){
    sum+=data[i];
}
console.log(sum/data.length);

// 9. Build a NEW array containing only the numbers greater than 10,
//    then print it.
const list = [5, 12, 8, 20, 3, 15];
// Expected: [ 12, 20, 15 ]
// your code here
let target=10,a=0;
let filteredlist=[];
for(let i=0;i<list.length;i++){
    if(list[i]>target){
        filteredlist[a]=list[i];
        a++;
    }
}
console.log(filteredlist);

// 10. Reverse the array into a NEW array WITHOUT using .reverse().
//     Then print the new array.
const letters = ["a", "b", "c", "d"];
// Expected: [ 'd', 'c', 'b', 'a' ]
// your code here
let reversedletters=[];
for(let i=0;i<letters.length;i++){
    reversedletters[i]=letters[letters.length-1-i];
}
console.log(reversedletters)

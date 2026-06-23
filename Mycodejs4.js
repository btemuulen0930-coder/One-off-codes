// 1. FizzBuzz. Loop from 1 to 20 and print:
//    "Fizz" if divisible by 3, "Buzz" if divisible by 5,
//    "FizzBuzz" if divisible by BOTH, otherwise the number itself.
//    Hint: check the BOTH case first.
// Expected: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14
//           FizzBuzz 16 17 Fizz 19 Buzz   (each on its own line)
// your code here
function FizzBuzz(n){
    for(let i=1; i<n+1; i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz");
        }else if(i%3===0){
            console.log("Fizz");
        }else if(i%5===0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
FizzBuzz(20);
// 2. Add up ONLY the even numbers in the array and print the total.
const nums = [4, 7, 10, 13, 6, 9];
// Expected: 20
// your code here
function evennumbersum(numberarray){
    let sum=0;
    for(let i=0; i<numberarray.length; i++){
        if(numberarray[i]%2===0){
            sum+=numberarray[i];
        }
    }
    return sum;
}
let answer2=evennumbersum(nums);
console.log(answer2);
// 3. In a SINGLE loop, count how many numbers are positive,
//    negative, and zero. Print all three counts.
const values = [3, -1, 0, 8, -5, 0, 2];
// Expected: positives 3, negatives 2, zeros 2
// your code here
function numberspread(numberarray){
    let negsum=0,possum=0,zerosum=0;
    for(let i=0;i<numberarray.length;i++){
        if(numberarray[i]>0){
            possum++;
        }else if(numberarray[i]===0){
            zerosum++;
        }else{
            negsum++;
        }
    }
    return [possum, negsum, zerosum];
}
let answer3=numberspread(values);
console.log("positives",answer3[0],",","negatives", answer3[1],",","zeros",answer3[2])
// 4. Find the largest EVEN number in the array and print it.
//    (Ignore odd numbers completely.)
const data = [3, 8, 5, 12, 7, 10];
// Expected: 12
// your code here
function largesteven(numberarray){
    let bigeven=0;
    for(let i = 0; i<numberarray.length;i++){
        if(numberarray[i]%2===0 && numberarray[i]>bigeven){
            bigeven=numberarray[i];
        }
    }
    return bigeven;
}
let answer4=largesteven(data);
console.log(answer4)
// 5. Check whether the array is sorted in ascending order.
//    Print true or false.
const arr = [1, 3, 5, 7, 9];
// Expected: true
// your code here
function isarrayordered(numberarray){
    for(let i=0; i<numberarray.length-1; i++){
        if(numberarray[i]>numberarray[i+1]){
            return false;
        }
    }
    return true;
}
let answer5=isarrayordered(arr);
console.log(answer5)
// 6. Find the SECOND largest number in the array and print it.
const scores = [42, 17, 99, 23, 56];
// Expected: 56
// your code here
function secondlargest(numberarray){
    let bignumber=0,secondbignumber=0;
    for(let i = 0; i<numberarray.length;i++){
        if(numberarray[i]>bignumber){
            secondbignumber=bignumber;
            bignumber=numberarray[i];
        }else if(numberarray[i]>secondbignumber && numberarray[i]!=bignumber){
            secondbignumber=numberarray[i]
        }
    }
    return secondbignumber;
}
let answer6=secondlargest(scores);
console.log(answer6)
// 7. Count how many numbers fall within the range 10 to 50 inclusive.
//    (Use a range check: n >= 10 && n <= 50)
const list = [5, 12, 50, 9, 33, 60, 10];
// Expected: 4
// your code here
function filrterednumber(n,m,numberarray){
    let count=0;
    for(let i=0; i<numberarray.length; i++){
        if(numberarray[i]>=n && numberarray[i]<=m){
            count++;
        }
    }
    return count;
}
let answer7= filrterednumber(10,50,list)
console.log(answer7)
// 8. Find the longest word in the array and print it.
const words = ["sun", "banana", "cat", "elephant", "dog"];
// Expected: elephant
// your code here
function longestword(wordarray){
    let string=wordarray[0];

    for(let i=0; i<  wordarray.length; i++){
        if(wordarray[i].length < string){
            string=wordarray[i];
        }
    }
    return string;
}
let answer8=longestword(words);
console.log(answer8)
// 9. Count vowels and consonants in the string (letters only).
//    Print both counts.
const text = "javascript";
// Expected: vowels 3, consonants 7
// your code here
function vowels_and_consonants(string){
    let  a="a",e="e",i="i",o="o",u="u",text=string.toLowerCase(),number_of_vowels=0,number_of_consonants=0;

    for(let n = 0 ; n<text.length; n++){
        if(text[n]===a || text[n]===e || text[n]===i || text[n]===o || text[n]===u){
            number_of_vowels++;
        }else{
            number_of_consonants++;
        }
    }

    return [number_of_vowels, number_of_consonants]
}
let answer9=vowels_and_consonants(text)
console.log("vowels", answer9[0], ",", "consonants", answer9[1])
// 10. Remove duplicates: build a NEW array containing each value
//     only once, keeping first-seen order. Print it.
const items = [1, 2, 2, 3, 4, 2,2,4, 4, 5];
// Expected: [ 1, 2, 3, 4, 5 ]
// your code here
function remove_dups(numberarray){
    let newarray=[];

    for(let i = 0; i<numberarray.length; i++){
        let j;
        for(j=0; j<i; j++){
            if(newarray[j]===numberarray[i]){
                break;
            }
        }
        if(j===i){
            newarray.push(numberarray[i]);
        }
    }
    return newarray;
}
let answer10=remove_dups(items);
console.log(answer10)
// this is a comment
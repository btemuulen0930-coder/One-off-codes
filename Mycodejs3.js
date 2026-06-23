// 1. Print each character of the word on its own line.
const word = "coder_yeah";
// Expected:
//   c
//   o
//   d
//   e
// your code here
for(let i=0;i<word.length;i++){
    console.log(word[i]);
}

// 2. Count the characters using a loop (increment a counter).
//    Do NOT just print .length — count them one by one.
const text = "javascript";
// Expected: 10
// your code here
let lengthoftext=0;
for(let i=0;i<text.length;i++){
    lengthoftext++;
}
console.log(lengthoftext);

// 3. Count how many vowels (a, e, i, o, u) are in the string.
const phrase = "education";
// Expected: 5
// your code here
let a="a",e="e",i="i",o="o",u="u",numberofvowels=0;
for(let i=0;i<phrase.length;i++){
    if(phrase[i]===a || phrase[i]===e || phrase[i]===i || phrase[i]===o || phrase[i]===u){
        numberofvowels++;
    }
}
console.log(numberofvowels);

// 4. Count how many times the letter "a" appears.
const sentence = "banana";
// Expected: 3
// your code here
let numberofa=0;
for(let i=0;i<sentence.length;i++){
    if(sentence[i]==='a'){
        numberofa++;
    }
}
console.log(numberofa)

// 5. Reverse the string into a NEW string (don't use a built-in reverse).
//    Build it character by character, then print it.
const name = "elbeg";
// Expected: geble
// your code here
let reversename="";
for(let i=0;i<name.length;i++){
    reversename=reversename+name[name.length-1-i];
}
console.log(reversename);

// 6. Build a NEW string with all the spaces removed, then print it.
const spaced = "h e l l o";
// Expected: hello
// your code here
let spaceless="";

for(let i=0; i<spaced.length;i++){
    if(spaced[i]!=" "){
        spaceless=spaceless+spaced[i];
    }
}
console.log(spaceless);

// 7. Build a NEW string where every space is replaced with a dash "-".
const title = "learn java script";
// Expected: learn-java-script
// your code here
let dashed="";

for(let i=0; i<title.length;i++){
    if(title[i]!=" "){
        dashed=dashed+title[i];
    }else{
        dashed=dashed+"-";
    }
}
console.log(dashed);

// 8. Check if the word is a palindrome (reads the same forwards and
//    backwards). Print true or false.
const candidate = "level";
// Expected: true
// your code here
let reversecandidate="";
for(let i=0;i<candidate.length;i++){
    reversecandidate=reversecandidate+candidate[candidate.length-i-1]
}
if(reversecandidate===candidate){
    console.log(true)
}else{
    console.log(false)
}

// 9. Count how many words are in the sentence.
//    Hint: words are separated by spaces.
const line = "I love javascript a lot";
// Expected: 5
// your code here
let spaceamount=1;
if(line.length!=0){
    for(let i=0; i<line.length;i++){
        if(line[i]===" "){
            spaceamount++;
        }
    }
    console.log(spaceamount);
}else{
    console.log("This doesnt have a word in it")
}

// 10. Count how many UPPERCASE letters are in the string.
//     Hint: a character ch is uppercase when  ch >= "A" && ch <= "Z"
const mixed = "HelloWorldJS";
// Expected: 4
// your code here
let uppercase_letter_count=0;
for(let i=0;i<mixed.length;i++){
    if(mixed[i] >= "A" && mixed[i] <= "Z"){
        uppercase_letter_count++;
    }
}
console.log(uppercase_letter_count)

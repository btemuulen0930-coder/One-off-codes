let age=200
if(age>=0 && age<=5){
    console.log("Kindergarten")
}else if(age>=6 && age<=18){
    console.log("School student")
}else if(age>=19 && age<=21){
    console.log("Uni Student")
}else if(age>=22 && age<=130){
    console.log("Old fart")
}else if(age>=130){
    console.log("Immortal")
}else{
    console.log("Entity soon to exist")
}
/* ========================= EASY ========================= */

// E1. A person can enter the club only if age is 18 or older
//     AND hasID is true. Print "Welcome" or "Denied".
const age1 = 20;
const hasID = true;
// Expected: Welcome
// your code here
if(age1>=18 && hasID==true){
    console.log("Welcome")
}else{
    console.log("Go away, you no allowed here")
}
// E2. It is a day off if isWeekend is true OR isHoliday is true.
//     Print "Day off" or "Work day".
const isWeekend = false;
const isHoliday = true;
// Expected: Day off
// your code here
if(isWeekend===true || isHoliday===true){
    console.log("Take a rest")
}else{
    console.log("Work you lazy idiot")
}

// E3. Go to the beach only if temperature is above 30 AND isSunny.
//     Print "Beach" or "Stay home".
const temperature = 33;
const isSunny = true;
// Expected: Beach
// your code here
if(temperature>30 && isSunny===true){
    console.log("Woooh here i come beach")
}else{
    console.log("Whaa no beach for me")
}

// E4. Grant admin access if username is "admin" OR username is "root".
//     Print "Admin access" or "Regular user".
const username = "root";
// Expected: Admin access
// your code here
if(username==="admin" || username==="root"){
    console.log("Hello master")
}else{
    console.log("stranger ye best be getting out of here real quick or i am gonna have to unload my AR15 straight into your skull")
}

// E5. A number is "good" if it is positive (> 0) AND even (n % 2 === 0).
//     Print "Good" or "Not good".
const number = 8;
// Expected: Good
// your code here
if(number>0 && number%2==0){
    console.log("a even positive integer")
}else{
    console.log("everything else")
}

/* ======================== MEDIUM ======================== */
/* Combine && and || together, or chain several conditions. */

// M1. Login succeeds if the username is "elbeg" AND password is "1234".
//     Print "Login OK" or "Wrong credentials".
const user = "elbeg";
const password = "1234";
// Expected: Login OK
// your code here
if(user==="elbeg" && password==="1234"){
    console.log("Hello user")
}else{
    console.log("unless you wanna die, you best be heading outta hear real quick")
}

// M2. A customer gets a discount if they are a member (isMember)
//     OR they spent more than 100000.
//     Print "Discount" or "Full price".
const isMember = false;
const totalSpent = 120000;
// Expected: Discount
// your code here
if(isMember===true || totalSpent>100000){
    console.log("Hello loyal customer")
}else{
    console.log("Hello you slob")
}

// M3. Entry is free if age is under 5 OR over 65. Otherwise paid.
//     Print "Free" or "Paid".
const age3 = 70;
// Expected: Free
// your code here
if(age3<5 || age3>65){
    console.log("Please go right in")
}else{
    console.log("Give me my money")
}

// M4. A person may drive only if ALL are true:
//     age is 18+, hasLicense is true, AND isSober is true.
//     Print "Can drive" or "Cannot drive".
const age4 = 25;
const hasLicense = true;
const isSober = false;
// Expected: Cannot drive
// your code here
if(age4>=18 && hasLicense===true && isSober===true){
    console.log("Keep going mister, no problems here")
}else{
    console.log("Illegal driver, off to the station we go")
}

// M5. Bring an umbrella if it isRaining,
//     OR if it isCloudy AND humidity is above 80.
//     Print "Umbrella" or "No umbrella".
const isRaining = false;
const isCloudy = true;
const humidity = 85;
// Expected: Umbrella
// your code here
if(isRaining===true || (isCloudy===true && humidity>80)){
    console.log("Boy it bout to rain, the hell you doin without an umbrella")
}else{
    console.log("why in tarnation did you brain an umbrella the sky is fine")
}

/* ========================= HARD ========================= */
/* Operator precedence, ranges, and multi-part logic.
   Tip: when mixing && and ||, use parentheses to be explicit. */

// H1. Leap year. A year is a leap year if:
//     it is divisible by 4 AND not by 100,
//     OR it is divisible by 400.
//     Print "Leap year" or "Not a leap year".
//     After it works, mentally test: 1900 (no), 2000 (yes), 2023 (no).
const year = 1900;
// Expected: Leap year
// your code here
if((year%4===0 && year%100!=0) || year%400===0){
    console.log("Tis is the year of the leap")
}else{
    console.log("No jumping for us this year")
}

// H2. A grade is "valid B" if score is at least 80 AND below 90.
//     Print "Grade B" or "Not B".
const score = 84;
// Expected: Grade B
// your code here
if(score>=80 && score<90){
    console.log("You a failure, B stands for broke and thats what you gonna be if you keep getting Bs'-asian parent")
}else{
    console.log("for some reason i was only programmed to identify if you got a B or not and if your seeing this you either got an A, very impressive, or you got below B which is well less then desirable")
}

// H3. Access the control panel only if the user isLoggedIn
//     AND (role is "admin" OR role is "moderator").
//     Print "Access granted" or "Access denied".
const isLoggedIn = true;
const role = "moderator";
// Expected: Access granted
// your code here
if(isLoggedIn===true && (role==="admin" || role==="moderator")){
    console.log("Hello admin")
}else{
    console.log("Hello peasent")
}


// H4. Three side lengths form a valid triangle only if EVERY pair
//     of sides sums to more than the third side:
//     a+b > c AND b+c > a AND a+c > b.
//     Print "Valid triangle" or "Invalid triangle".
const a = 3;
const b = 4;
const c = 5;
// Expected: Valid triangle
// your code here
if(a+b>c && a+c>b && b+c>a){
    console.log("euclidian triangle")
}else{
    console.log("Non-euclidian triangle")
}

// H5. A password is "strong" if its length is at least 8
//     AND it contains a number OR a symbol.
//     (hasNumber and hasSymbol are given as booleans.)
//     Print "Strong" or "Weak".
const pwLength = 10;
const hasNumber = false;
const hasSymbol = true;
// Expected: Strong
// your code here
if(pwLength>=8 && (hasNumber===true || hasSymbol===true)){
    console.log("New password accepted")
}else{
    console.log("Please change your password")
} 



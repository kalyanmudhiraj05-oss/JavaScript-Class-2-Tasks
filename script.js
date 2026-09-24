//Variables & Data Types

//1.Create a variable using let and store your name. Print its data type using typeof.
let name = "Kalyan";
console.log(typeof(name));

//2.Create a variable containing your age. Print its value and data type.
let age = 26;
console.log(age);
console.log(typeof(age));

//3.Create a variable containing true. Print its value and data type.
let isEmployee = true;
console.log(isEmployee);
console.log(typeof(isEmployee));

//4.Declare a variable without assigning any value. Print its value and data type.
let x;
console.log(x);
console.log(typeof(x));

//5.Create a variable containing null. Print its value and data type.
let a = null;
console.log(a);
console.log(typeof(a));

//6.Create five variables containing a string, number, boolean, undefined, and null. Print all five.
let myName = "Kalyan";
let myAge = 26;
let working = true;
let city;
let salary = null;

console.log(myName);
console.log(myAge);
console.log(working);
console.log(city);
console.log(salary);

//7.Create a variable containing your qualification and print its data type.
let qualification = "MCA";
console.log(typeof(qualification));

//8.Create a variable containing your salary and check whether its data type is number.
let salary1 = 25000;
console.log(typeof(salary1));
console.log(typeof(salary1) === "number");

//9.Create a variable containing "100" and another containing 100. Print the data type of both.
let strNumber = "100";
let num = 100;

console.log(typeof(strNumber));
console.log(typeof(num));

//10.Create variables for your name, age, qualification, and working status. Print all their values and data types.
let name1 = "Kalyan";
let age1 = 26;
let qualification1 = "MCA";
let workingStatus = "Full time";

console.log(name1, typeof(name1));
console.log(age1, typeof(age1));
console.log(qualification1, typeof(qualification1));
console.log(workingStatus, typeof(workingStatus));


//Arrays

//11.Create an array containing five fruit names. Print the complete array.
let fruits = ["Mango", "Apple", "Banana", "Orange", "Grapes"];
console.log(fruits);

//12.Create an array containing five numbers. Print the first element.
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);

//13.Create an array containing six colors. Print the third element.
let colors = ["Red", "White", "Black", "Orange", "Violet", "Pink"];
console.log(colors[2]);

//14.Create an array containing five mobile brands. Print the last element using length.
let brands = ["Redmi", "Vivo", "Apple", "Realme", "Asus"];
console.log(brands[brands.length - 1]);

//15.Create an array containing seven numbers. Print the second-last element using length.
let numbers1 = [100, 200, 300, 400, 500, 600, 700];
console.log(numbers1[numbers1.length - 2]);

//16.Create an array containing your favorite foods. Print the first, third, and last elements.
let foods = ["Biryani", "Paneer", "Curd", "Sambar", "Noodles"];

console.log(foods[0]);
console.log(foods[2]);
console.log(foods[foods.length - 1]);

//17.Create an array containing five cricketer names. Print the fourth cricketer.
let cricnames = ["Rohit", "Virat", "Abhishek", "Dhoni", "Jadeja"];
console.log(cricnames[3]);

//18.Create an array containing different toys. Print the last toy dynamically using length - 1.
let toys = ["Doll", "Ball", "Teddy Bear", "Toy Car", "Building Blocks"];
console.log(toys[toys.length - 1]);

//19.Create an array containing 10 values. Print the first, last, and second-last values.
let values = [111, 222, 333, 444, 555, 666, 777, 888, 999, 0];

console.log(values[0]);
console.log(values[values.length - 1]);
console.log(values[values.length - 2]);

//20.Create an array containing fruits, toys, and a cricketer's name.
//Print the complete array and any three individual values.
let items = ["Apple", "Mango", "Teddy Bear", "Toy Car", "Virat"];

console.log(items);
console.log(items[1]);
console.log(items[2]);
console.log(items[4]);


//Objects

//21.Create an object containing name, age, and city. Print the complete object.
let student = {
    name: "Kalyan",
    age: 26,
    city: "Hyderabad"
};

console.log(student);

//22.Create an object containing your name, qualification, and company. Print the company.
let emp = {
    name: "Kalyan",
    qualification: "MCA",
    company: "Stackly"
};

console.log(emp.company);

//23.Create an object containing a fruits array. Print the second fruit.
let data = {
    fruits: ["Apple", "Mango", "Banana"]
};

console.log(data.fruits[1]);

//24.Create an object containing a toys array. Print the last toy dynamically.
let items2 = {
    toys: ["Doll", "Toy Car", "Ball"]
};

console.log(items2.toys[items2.toys.length - 1]);

//25.Create an object containing cricketer and team. Print the cricketer's name.
let player = {
    cricketer: "Dhoni",
    team: "India"
};

console.log(player.cricketer);

//26.Create an object containing fruitName, toyName, and cricketer. Print all three properties.
let example = {
    fruitName: "Mango",
    toyName: "Ball",
    cricketer: "Dhoni"
};

console.log(example.fruitName);
console.log(example.toyName);
console.log(example.cricketer);

//27.Create an object with two arrays: students and courses. Print the first student and second course.
let study = {
    students: ["Kalyan", "Rajesh", "Venkat Sai"],
    courses: ["Java", "JavaScript", "ReactJs"]
};

console.log(study.students[0]);
console.log(study.courses[1]);

//28.Create an object containing a mobile array and print the third mobile.
let phones = {
    mobile: ["Redmi", "Apple", "Realme", "Apple"]
};

console.log(phones.mobile[2]);

//29.Create an object containing employeeName, skills, and experience. Print the second skill.
let company = {
    employeeName: "Kalyan",
    skills: ["HTML", "CSS", "JavaScript", "ReactJs"],
    experience: 1
};

console.log(company.skills[1]);

//30.Create an object containing your personal information and print any three individual properties.
let information = {
    name: "Kalyan",
    age: 26,
    city: "Hyderabad",
    qualification: "MCA"
};

console.log(information.name);
console.log(information.age);
console.log(information.qualification);


//Arithmetic Operators

//31.Create two numbers and perform addition, subtraction, multiplication, and division.
let a1 = 20;
let b1 = 10;

console.log(a1 + b1);
console.log(a1 - b1);
console.log(a1 * b1);
console.log(a1 / b1);

//32.Create two numbers and find their remainder using %.
let a2 = 20;
let b2 = 3;

console.log(a2 % b2);

//33.Find the result of 2 ** 5.
console.log(2 ** 5);

//34.Create two variables and perform all six arithmetic operations: +, -, *, /, %, **.
let a3 = 2;
let b3 = 3;

console.log(a3 + b3);
console.log(a3 - b3);
console.log(a3 * b3);
console.log(a3 / b3);
console.log(a3 % b3);
console.log(a3 ** b3);

//35.Create a variable containing 10. Increase its value by 5 using +.
let number = 10;
number = number + 5;

console.log(number);


//Increment & Decrement

//36.Create a variable with value 10 and use pre-increment. Print the result.
let a4 = 10;
console.log(++a4);

//37.Create a variable with value 10 and use post-increment. Print the result.
let a5 = 10;
console.log(a5++);
console.log(a5);

//38.Create a variable with value 20 and use pre-decrement. Print the result.
let a6 = 20;
console.log(--a6);

//39.Create a variable with value 20 and use post-decrement. Print the result.
let a7 = 20;
console.log(a7--);
console.log(a7);

//40.Create two variables and demonstrate the difference between pre-increment and post-increment.
let pre = 10;
let post = 10;

console.log(++pre);
console.log(post++);
console.log(post);


//Assignment Operators

//41.Create a = 20 and b = 10. Use += and print the result.
let a8 = 20;
let b8 = 10;

a8 += b8;
console.log(a8);

//42.Create a = 50 and b = 20. Use -= and print the result.
let a9 = 50;
let b9 = 20;

a9 -= b9;
console.log(a9);

//43.Create a = 10 and b = 5. Use *= and print the result.
let a10 = 10;
let b10 = 5;

a10 *= b10;
console.log(a10);

//44.Create a = 100 and b = 10. Use /= and print the result.
let a11 = 100;
let b11 = 10;

a11 /= b11;
console.log(a11);

//45.Create a = 25 and b = 4. Use %= and print the result.
let a12 = 25;
let b12 = 4;

a12 %= b12;
console.log(a12);


//Comparison, Logical & Ternary

//46.Compare two numbers using <, >, <=, and >=. Print all results.
let a13 = 5;
let b13 = 6;

console.log(a13 < b13);
console.log(a13 > b13);
console.log(a13 <= b13);
console.log(a13 >= b13);

//47.Compare a number and a string using both == and ===. Observe the difference.
let number1 = 10;
let string = "10";

console.log(number1 == string);
console.log(number1 === string);

//48.Create two conditions using numbers and combine them using &&, ||, and !.
let a14 = 10;
let b14 = 5;

console.log(a14 > b14 && a14 < 20);
console.log(a14 > b14 || a14 < 5);
console.log(!(a14 > b14));

//49.Create a variable called age. Using a ternary operator, print "Eligible" if the age is 18 or above; otherwise print "Not Eligible".
let age2 = 26;

console.log(age2 >= 18 ? "Eligible" : "Not Eligible");

//50.Create marks variable and use a ternary operator.
//If marks are 35 or above → print "Pass"
//Otherwise → print "Fail"

let marks = 50;

console.log(marks >= 35 ? "Pass" : "Fail");
//Write a program to find all pairs of an integer array whose sum is equal to a given number?
function findPairs(arr, targetSum) {
    let pairs = []; 
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
    return pairs;
  }
  const integerArray = [1, 2, 3, 4, 5, 6];
  const givenSum = 7;
  
  const result = findPairs(integerArray, givenSum);
  console.log(result);

//Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
function reverseArray(arr){
  let left = 0;
  let right = arr.length-1;

  while(left<right){
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp;

    left++;
    right--;
  }
}
let MyArray = [1,2,3,4,5,6];
reverseArray(MyArray);
console.log(MyArray);

//Write a program to check if two strings are a rotation of each other?

function areRotations(str1, str2) {
  if (str1.length !== str2.length) {
      return false;
  }

  const concatenatedStr = str1 + str1;

  if (concatenatedStr.includes(str2)) {
      return true;
  }

  return false;
}

const string1 = "rotation";
const string2 = "tationro";

if (areRotations(string1, string2)) {
  console.log(`${string1} and ${string2} are rotations of each other.`);
} else {
  console.log(`${string1} and ${string2} are not rotations of each other.`);
}

//Write a program to print the first non-repeated character from a string?
function find_FirstNotRepeatedChar(str) {
  var arra1 = str.split('');
  var result = '';
  var ctr = 0;
 
  for (var x = 0; x < arra1.length; x++) {
    ctr = 0;
 
    for (var y = 0; y < arra1.length; y++) 
    {
      if (arra1[x] === arra1[y]) {
        ctr+= 1;
      }
    }
 
    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
 }
console.log(find_FirstNotRepeatedChar('sasasan'));

//Read about the Tower of Hanoi algorithm. Write a program to implement it.?

function towerOfHanoi(n ,source ,auxiliary, target){
  if(n === 1){
    console.log(`move disk 1 from ${source} to ${target}`);
    return;
  }
  towerOfHanoi(n - 1,source, target, auxiliary);
  console.log(`move disk ${n} from ${source} to ${target}`);
  towerOfHanoi(n - 1, auxiliary, source, target);
}
towerOfHanoi(3,'A','B','C');

//Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.?
function isOperator(char) {
  // Check if the character is an operator (+, -, *, /, etc.)
  return ['+', '-', '*', '/', '^'].includes(char);
}

function postfixToPrefix(postfixExpression) {
  let stack = [];

  for (let char of postfixExpression) {
    if (isOperator(char)) {
     
      let operand2 = stack.pop();
      let operand1 = stack.pop();

 
      let prefixExpression = char + operand1 + operand2;

   
      stack.push(prefixExpression);
    } else {
   
      stack.push(char);
    }
  }


  return stack.pop();
}

// Example usage:
const postfixExpression = "ab+c*";
const prefixExpression = postfixToPrefix(postfixExpression);
console.log("Postfix Expression:", postfixExpression);
console.log("Prefix Expression:", prefixExpression);

//Write a program to convert prefix expression to infix expression?
function isOperator(char) {
  return ['+', '-', '*', '/', '^'].includes(char);
}

function prefixToInfix(prefix) {
  let stack = [];

 
  for (let i = prefix.length - 1; i >= 0; i--) {
    let char = prefix[i];

    if (isOperator(char)) {
      
      let operand1 = stack.pop();
      let operand2 = stack.pop();

    
      let infix = '(' + operand1 + char + operand2 + ')';

    
      stack.push(infix);
    } else {
      
      stack.push(char);
    }
  }

 
  return stack.pop();
}


const prefix = "*+ab-cd";
const infix = prefixToInfix(prefix);
console.log("Prefix Expression:", prefix);
console.log("Infix Expression:", infix);

//Write a program to check if all the brackets are closed in a given code snippet...?

function areBracketsClosed(code) {
  const stack = [];
  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];

  for (let i = 0; i < code.length; i++) {
    const char = code[i];

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];

      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}


const codeSnippet = 'const example = [ key: "value" ]';
const isClosed = areBracketsClosed(codeSnippet);

if (isClosed) {
  console.log('All brackets are properly closed.');
} else {
  console.log('Brackets are not closed properly.');
}


//Write a program to reverse a stack...?
 

class Stack {
  constructor() {
      this.top = null
  }
  push(ele) {
      var node = new newNode(ele)
      node.next = this.top
      this.top = node
  }
  pop() {
      var temp = this.top
      var char = temp.data
      this.top = this.top.next
      temp = null
      return char
  }
  reverseString(str) {
      var i = 0
      var reversestr = ""
      while (i != str.length) {
          this.push(str.charAt(i))
          i++
      }
      var temp = this.top
      while (temp != null) {
          var char
          char = this.pop()
          reversestr += char
          temp = this.top
      }
      return reversestr
  }
  display() {
      var temp = this.top
      while (temp != null) {
          console.log(temp.data)
          temp = temp.next
      }
  }
}
class newNode {
  constructor(data, next) {
      this.data = data
      this.next = null
  }
}

const stack = new Stack()
const string = "saminathan"
const reverse = stack.reverseString(string)
console.log(`The String provided - ${string}\nString in reverse format -${reverse}`)

//Write a program to find the smallest number using a stack..?

class MyStack {

  constructor() {

      this.s = [];

      this.minEle;

  }



  getMin() {

      if (this.s.length == 0)

          console.log("Stack is empty");


      

      else

          console.log("Minimum Element in the stack is: ", this.minEle);

  }



  peek() {

      if (this.s.length == 0) {

          console.log("Stack is empty ");

          return;

      }

      let t = this.s[0]; 


      console.log("Top Most Element is: ");




      (t < this.minEle) ? console.log(this.minEle) : console.log(t);


  }




  pop() {

      if (this.s.length == 0) {

          console.log("Stack is empty ");

          return;

      }

      console.log("Top Most Element Removed: ");

      let t = this.s[0]; 

      this.s.shift();


      
      if (t < this.minEle) {

          console.log(this.minEle);

          this.minEle = (2 * this.minEle) - t;

      }


      else

          console.log(t);

  }



  push(x) {


      if (this.s.length == 0) {

          this.minEle = x;

          this.s.unshift(x);

          console.log("Number Inserted: ", x);

          return;

      }


  

      else if (x < this.minEle) {

          this.s.unshift(2 * x - this.minEle);

          this.minEle = x;

      }


      else

          this.s.unshift(x);


      console.log("Number Inserted: ", x);

  }


};




let s = new MyStack;


s.push(3);
s.push(5);
s.getMin();
s.push(2);
s.push(1);
s.getMin();
s.pop();
s.getMin();
s.pop();
s.peek();

 
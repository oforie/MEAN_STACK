// Given the code below, re-write it using all TypeScript features you have learned

var myNum:number = 5;
var myString:string = "Hello Universe";
var myArr: Array<number> = [1,2,3,4];
let myObj= {name:'Bill'};
var anythingVariable:any = "Hey";
var anythingVariable:any = 25; 
var arrayOne:Array<boolean> = [true, false, true, true]; 
var arrayTwo:Array<any> = [1, 'abc', true, 2];

myObj = { x: 5, y: 10 };  //can't be redeclared
// object constructor
class MyNode{
    val: number;

    constructor(val:number) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        var _priv:number = 10;
    };
    return(MyNode);
};


let myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}
/*
    This page has several variable declarations
    and output on the browser console.

    Author: Josh Archer
    File: script.js
    Date: 4/7/22
 */

let ourClass = "SDEV 117";
let credits = 5;

//use string concatenation with our output!
console.log("Here is PI: " + Math.PI);
console.log("I am currently in " + ourClass);
console.log(`This is a ${credits} credit class`);

//create a few variables and show off the data types in JS
let orderNum = 984;
let buyer = "Josh B. Archer";
let orderTotal = 99.99;
let purchaseOnline = true;
let shoppingCart = ["blu ray player", "surfboard", "pen"];
let shippingAddress = {
    road: "100 apple lane",
    city: "seattle",
    state: "wa"
};

//print out the type of my variables
console.log(typeof shippingAddress);

let myVariableName = "Blah";   //camel-case for regular variables
const HOURS_IN_WORK_WEEK = 40; //upper-case for constants

myVariableName = "blahdy blah";
//HOURS_IN_WORK_WEEK = 100;



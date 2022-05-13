// Created by: Logan Rodriguez
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

//constants
const SMALL_PRICE = 8
const LARGE_PRICE = 15
const TOPPINGS_PRICE = 0.50

//function
function answer () {
  
//user input for size
  let selectSize = document.getElementById("size");
  let size = selectSize.options[selectSize.selectedIndex].value;
  let sizePrice = undefined
    
 // user input for toppings
  let selectToppings = document.getElementById("toppings");
  let toppings = selectToppings.options[selectToppings.selectedIndex].value;
  let toppingsPrice = undefined
    // if statements for size
  if (size == "small"){
    sizePrice = SMALL_PRICE
  }
  else{
    sizePrice = LARGE_PRICE
  }
  
  if (toppings == "one"){
    toppingsPrice = TOPPINGS_PRICE
  }
  else if (toppings == "two"){
    toppingsPrice = TOPPINGS_PRICE * 2
  }
  else if (toppings == "three"){
    toppingsPrice = TOPPINGS_PRICE * 3
  }
  else if (toppings == "four"){
    toppingsPrice = TOPPINGS_PRICE * 4
  }
  else{
    toppingsPrice = 0
  }

  //variables
  let subtotal = sizePrice + toppingsPrice
  let tax = subtotal * 0.13
  let total = subtotal + tax
  
  //display the results
    document.getElementById('answer').innerHTML = "Subtotal = " + subtotal.toFixed(2) + ". Tax Price = " + tax.toFixed(2) + ". Total = " + total.toFixed(2) + "."
}
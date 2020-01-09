// html file structure:
// in between <head> tag
<link rel="stylesheet" href="./style.css"></link>
// just after </body>
<script src="main.js" charset="utf-8"></script>
// start always w/ const, let
// create with const if never to be changed
const aVariable = 11
let bVariableBe = "asd"
const modalForUse = document.querySelector("#modal")
// PROCESS: Add static elements to html if need be
// PROCESS: Add elements w/ code if need be

// If there is smth that I'd want to happen once DOM loaded
document.addEventListener('DOMContentLoaded', function(){
    //function details here
}
// Iteration ON ARRAYS! - use of for .. of
for (const like of likes){
    like.addEventListener("click",function(e){
        //could be anuything. just an example for addEventListener here
    }
}
// Iteration ON ARRAYS! - another use of for .. of
const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
for (const element of myArray) {
  console.log(element);
}
// Iteration ON OBJECTS! - use of for .. in (NOT of!)
const address = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York'
  };
  for (const key in address) {
      console.log(address[key]);
  }
// update, check classes
if (e.target.classList.contains("activated-heart")){
    e.target.classList.remove("activated-heart");
  } else {
    e.target.classList.add("activated-heart");
  }
// how to get element by ID (with #)
document.querySelector("#modal")
// how to get elementSSS by class (with .)
let likes = document.querySelectorAll(".like-glyph")
// how to get element by ID (directly!)
document.getElementById("id") // if id is a variable, obviously, no need for ""
// Fetch POST example
let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
fetch("http://localhost:3000/dogs", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });
// Fetch GET example (with different notation!)
function fetchImages() {
    const targetURL = 'https://dog.ceo/api/breeds/image/random/4'
    return fetch(targetURL).then(resp => resp.json()).then(json => renderImages(json));
  }
//PROCESS: Be careful about return to -actually- return!
// use of forEach on a retreived data!
function renderImages(json) {
      const dogContainer = document.querySelector('#dog-image-container')
    json.message.forEach(imageUrl => {
        let newImage = document.createElement('img')
        newImage.src = imageUrl
        dogContainer.appendChild(newImage)
    })
  }
  //Complicated find. Could find anything!
  function find(array, criteriaFn) {
    let current = array
    let next = []
    while (current || current === 0) {
      if (criteriaFn(current)) {
        return current
      }
      if (Array.isArray(current)) {
        for (let i = 0; i < current.length; i++) {
          next.push(current[i])
        }
      }
      current = next.shift()
    }
    return null
  }
// Create a new object and add new key,value pair
function updateDriverWithKeyAndValue(object_input, key, value) {
    return Object.assign({}, object_input, { [key]: value });
}
// Overwrite a key,value pair
function destructivelyUpdateDriverWithKeyAndValue(object_input, key, value) {
    object_input[key] = value;
    return object_input;
}
// Delete key,value after creating a new object
function deleteFromDriverByKey(object_input, key) {
    let newObject = Object.assign({}, object_input);
    delete newObject[key];
    return newObject;
}
// Delete key,value - destruct the current object!
function destructivelyDeleteFromDriverByKey(object_input, key) {
    delete object_input[key];  
    return object_input;
}
// Merge objects
Object.assign(initialObject, additionalObject, additionalObject, ...);
// To get the keys of an object in an array:
Object.keys(wednesdayMenu); // => ["cheesePlate", "fries", "salad"]
// To delete a property from an object
delete wednesdayMenu.salad; // => true
// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
//=================================================
//DOM
//==================================================
// to make a function work with some interval
let timer = setInterval(function(){
    increment_by_some_number(1)
}, 1500);
// to clear the interval
clearInterval(timer)
// create a branch and append it to the body
newCommentLi = document.createElement("li")
newCommentLi.innerText = commentEntered.value
targetNode.appendChild(newCommentLi)
// to change the property in a bulk way
let allButtons = document.querySelectorAll("button")
allButtons.forEach(btn => btn.disabled = true)
buttonToChange.disabled = false
// a good example of nested
let queue = [p0_li_array,p1_li_array,p2_li_array];
  for (let i_outer=0; i_outer<queue.length; i_outer++){
    for (let i_inner=0; i_inner<queue[i_outer].length; i_inner++){
      target_parent.appendChild(queue[i_outer][i_inner]);
    }
  }
// example to find the parent node and delete
function remove_from_the_list(id){
    //Find the li for that button
    let target_child = document.getElementById(id).parentNode;
    target_child.remove();
}
// example for switch 
function color_based_on_priority(priority_index){
    switch (priority_index) {
      case 0:
        return `Red`;
        break;
      case 1:
        return `Yellow`;
        break;
      default:
        return `Green`;
    }
  }
// PROCESS: Use of backticks!
new_item.id = `li-${timestamp_li.toString()}`
// style!
dodger.style.backgroundColor = "#FF69B4";
// good example for check key strokes
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10);
      dodger.style.left = `${left - 1}px`;
    }
  });
// Important for MAP
let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
function exerciseDog(dogName,dogBreed){
    // return routine.map(fn => fn(dog, breed))
    let result = routine.map(afunction => afunction(dogName,dogBreed));
    return result;
}
//=====================
ul.removeChild(ul.querySelector('li:nth-child(2)'))
// Or find and remove
ul.remove()
// while loop
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  let i = 0; // the initialization moved OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }
  return gifts;
}
//for loop
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

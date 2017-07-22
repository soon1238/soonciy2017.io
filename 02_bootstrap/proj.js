var display0 = document.getElementById("display0");
var display1 = document.getElementById("display1");
var display2 = document.getElementById("display2");
var textToAdd = document.getElementById("text-to-add");
var positionToSplice = document.getElementById("position-to-splice");

var itemArray = [];
// var ObjArray={
//     display0:[],
//     display1:[],
//     display2:[]
// };
var ObjArray=[[]];

function updateDisplay() {
    console.log(itemArray);
    // itemArray.join("");
    var tempStr = '';
    // display.innerHTML = itemArray;
    for (var i = 0; i < itemArray.length; i++) {
        tempStr += itemArray[i];

    }
    display0.innerHTML = tempStr;
}
updateDisplay(); // Update the display for the first time when the script loads


/* array.push(newItem) adds the newItem to the end of the array
 * example: ["apple", "banana", "cherry", newItem]
 * <button onclick="pushItem()">end</button> */
function pushItem(item) {
    console.log("add to last");
    // var displayobj{display:display,}
    if (item) {

        itemArray.push("<span "+"class='" + item +"'></span>");
    }
    else {
        itemArray.push("<span class='glyphicon glyphicon-star'></span>");
    }
    updateDisplay();
}

function popItem() {
    console.log("remove from last");
    itemArray.pop();
    updateDisplay();
}

function pushDisplayItem(display,item) {
    console.log("add to last");
    
    if (item) {

        ObjArray[display].push("<span "+"class='" + item +"'></span>");
    }
    else {
        ObjArray[display].push("<span class='glyphicon glyphicon-star'></span>");
    }
    updateObjDisplay();
}

function popDisplayItem(display) {
    console.log("remove from last");
    ObjArray[display].pop();
    updateObjDisplay();
}

function updateObjDisplay(display) {
    console.log(itemArray);
    // itemArray.join("");
    var tempStr = '';
    // display.innerHTML = itemArray;
    if (ObjArray[display].length>0){
    for (var i = 0; i < ObjArray[display].length; i++) {
        tempStr += ObjArray[display][i]; 

    }
    display1.innerHTML = tempStr;
    }
}
// updateObjDisplay(1); // Update the display for the first time when the script loads
// updateObjDisplay(2); 

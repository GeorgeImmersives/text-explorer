const prompt = require("prompt-sync")();

console.log("Welcome to the world of Terminal. Your goal is to find the Golden Keyboard.");

let x = 0;
let y = 0;

let isOver = false;

while(isOver !== true){
    let nextMove = prompt(`Your coordinates are (${x},${y}). Would you like to go "up", "right", "down", or "left"? `);
    if(nextMove == 'up'){
        y = y + 1;
    }
    else if(nextMove == 'down'){
        y = y - 1;
    }
    else if(nextMove == 'left'){
        x = x - 1;
    }
    else if(nextMove == 'right'){
        x = x + 1;
    }
    if(x == -2 && y == 1){
        isOver = true;
        console.log("You enter through the main gates of a castle.")
        console.log(`Your coordinates are (${x},${y}).`)
        console.log("In the center of the courtyard lays a Golden Keyboard! You Win!");
    }
    else if((x == 0 && y == 0) || (x == -1 && y ==0) || (x == 0 && y == -1) || (x == -1 && y ==-1)){
        console.log("You emerge into a meadow with tall grass.")
        console.log(`Your coordinates are (${x},${y}).`)
    }
    else if((x == 1 && y == 0) || (x == 1 && y == 1 ) || (x == 1 && y == -1)){
        console.log("You find yourself in a forest. Trees tower around you.")
        console.log(`Your coordinates are (${x},${y}).`)
    }
    else if((x == 2 && y == 0) || (x == 2 && y == -1) || (x == 2 && y == -2) || (x == 1 && y == -2)){
        console.log("You the forest here is dense, making it dark and hard to see.")
        console.log(`Your coordinates are (${x},${y}).`)
    }
    else if((x == -2 && y == 0) || (x <= 0 && y == -2) || (x == -1 && y == -2) || (x == -2 && y == -1) || (x == -2 && y == -2)){
        console.log("You enter a hot and humid swamp.")
        console.log(`Your coordinates are (${x},${y}).`)
    }
    else if((y == 1 && x == 1)){
        console.log("You emerge from the treeline and find yourself halfway up a rocky mountain.")
        console.log(`Your coordinates are (${x},${y}).`)
    }
    else if((y == 2 && x >= 1) || (x == 2 && y == 0) || (y == 2 && x == 0) || (x == 2 && y == 1) || (x == 2 && y ==2) || (x == 1 && y == 2)){
        console.log("You reach the summit of a mountain, the views are amazing but the snow is quite cold up here.")
        console.log(`Your coordinates are (${x},${y}).`)
    }
    else if((y == 2 && x >= -1) || (x == -2 && y == 0) || (x == -2 && y == 1) || (x == -2 && y == 2) || (x == -1 && y == 2)){
        console.log("You reach a volcano, black volcanic rock is everywhere, with rivers of hot lava.")
        console.log(`Your coordinates are (${x},${y}).`)
    }
}
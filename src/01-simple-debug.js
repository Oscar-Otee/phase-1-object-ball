console.log('Simple debugging example running.')
debugger

let x = 99
debugger
console.log(x)


function gameObject() {
    const gameInfo = {
        home:{
            teamName: "Brooklyn Nets", 
            colors: ["Black", "White"], 
            players: {"Alan Anderson": {number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1},
             "Reggie Evans": {number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7}, 
             "Brook Lopez": {number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15}, 
             "Mason Plumlee": {number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5}, 
             "Jason Terry": {number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1}}},
        away:{
            teamName: "Charlotte Hornets", 
            colors: ["Turquoise", "Purple"], 
            players: {"Jeff Adrien": {number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2}, 
            "Bismak Biyombo": {number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10}, 
            "DeSagna Diop": {number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5}, 
            "Ben Gordon": {number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0}, 
            "Brendan Haywood": {number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12}}}}

            return gameInfo;
}


function numPointsScored(nameOfPlayer) {
    let object = gameObject();

    for (const obj in object) {
        for (const player in object[obj]["players"]) {
            if (player === nameOfPlayer) {
                return object[obj]["players"][nameOfPlayer]["points"];
            }
        }   
        
    }

}
console.log(numPointsScored("Ben Gordon"));


function shoeSize(nameOfPlayer) {
    let object = gameObject();


    for (const obj in object) {
        for (const player in object[obj]["players"]) {
            if (player === nameOfPlayer) {
                return object[obj]["players"][nameOfPlayer]["shoe"];
            }
        }   
        
    }

}
console.log(shoeSize("Ben Gordon"));


function teamColors(teamName) {
    let object = gameObject();
    if (teamName === object["home"]["teamName"]) {
        return object["home"]["colors"];
    }

    else if (teamName === object["away"]["teamName"]) {
        return object["away"]["colors"];
    }

}
console.log(teamColors("Charlotte Hornets"));


function teamNames() {
    let object = gameObject();
    return [object["home"]["teamName"], object["away"]["teamName"]];
  }


console.log(teamNames());


function playerNumbers(teamName) {
    let object = gameObject();
    const jerseyNumbers = [];


    for (const obj in object) {
        for (const player in object[obj]["players"]) {
            if (teamName === object[obj]["teamName"]) {
                jerseyNumbers.push(object[obj]["players"][player]["number"]);
            }
        }   
        
    }

    return jerseyNumbers;
}
console.log(playerNumbers("Charlotte Hornets"))



function playerStats(nameOfPlayer) {
    let object = gameObject();

    for (const obj in object) {
        for (const player in object[obj]["players"]) {
            if (player === nameOfPlayer) {
                return object[obj]["players"][nameOfPlayer];
            }
        }   
        
    }


}
console.log(playerStats("Ben Gordon"));



function bigShoeRebounds() {
    let object = gameObject();

    let largestShoeSize = 0;
    let playerName = " "
    for (const obj in object) {
        for (const player in object[obj]["players"]) {
            if (object[obj]["players"][player]["shoe"] >= largestShoeSize) {
                largestShoeSize = object[obj]["players"][player]["shoe"];
                playerName = player;
            
            }
        }   
        
    }
    
    return playerName;

}
console.log(bigShoeRebounds());



function mostPointsScored() {
    let object = gameObject();

    let mostPoints = 0;
    let playerName = " "
    for (const obj in object) {
        for (const player in object[obj]["players"]) {
            if (object[obj]["players"][player]["points"] >= mostPoints) {
                mostPoints = object[obj]["players"][player]["points"];
                playerName = player;
            
            }
        }   
        
    }
    
    return playerName;

}
console.log(mostPointsScored());



function playerWithLongestName() {
    let object = gameObject();

    let longestName = 0;
    let playerName = " "
    for (const obj in object) {
        for (const player in object[obj]) {
            for ( const elem of Object.keys(object[obj][player])) {
                if (elem.length >= longestName) {
                    longestName = elem.length;
                    playerName = elem;
                
                }
            } 
            
        }   
        
    }
    
    return playerName;

}

console.log(playerWithLongestName());





function gameObject(){
const gameObject = 
{   home: {
    teamName: "Brooklyn Nets", 
    colors: ["Black", "White"], 
    players: {
    "Alan Anderson": {
        "number":  0, 
        "shoes": 16, 
        "points": 22, 
        "rebounds": 12,
        "assists": 12,
        "steals": 3, 
        "blocks": 1,
        "slamDunks": 1,
    },
    "Reggie Evans": {
        "number":  30, 
        "shoes": 14, 
        "points": 12, 
        "rebounds": 12,
        "assists": 12,
        "steals": 12, 
        "blocks": 12,
        "slamDunks": 7,
    },
    "Brook Lopez": {
        "number":  11, 
        "shoes": 17, 
        "points": 17, 
        "rebounds": 19,
        "assists": 10,
        "steals": 3, 
        "blocks": 1,
        "slamDunks": 15,
    },
    "Mason Plumlee": {
        "number":  1, 
        "shoes": 19, 
        "points": 26, 
        "rebounds": 12,
        "assists": 6,
        "steals": 3, 
        "blocks": 8,
        "slamDunks": 5,
    },
    "Jason Terry": {
        "number":  31, 
        "shoes": 15, 
        "points": 19, 
        "rebounds": 2,
        "assists": 2,
        "steals": 4, 
        "blocks": 11,
        "slamDunks": 1,
    },
}

    },


    away: {
        teamName: "Charlotte Hornets", colors: ["Truquoise",
    "Puple"], players: {
        "Jeff Adrien": {
            "number": 4, 
            "shoes": 18, 
            "points": 10, 
            "rebounds": 1,
            "assists": 1,
            "steals": 2, 
            "blocks": 7,
            "slamDunks": 2,
},
         "Bismak Biyombo":
{
            "number":  0, 
            "shoes": 16, 
            "points": 12, 
            "rebounds": 4,
            "assists": 7,
            "steals": 7, 
            "blocks": 15,
            "slamDunks": 10,
    },
        "DeSagna Diop":
{
    "number":  2, 
    "shoes": 14, 
    "points": 24, 
    "rebounds": 12,
    "assists": 12,
    "steals": 4, 
    "blocks": 5,
    "slamDunks": 5,

},
    "Ben Gordon":
    {
        "number":  8, 
        "shoes": 15, 
        "points": 33, 
        "rebounds": 3,
        "assists": 2,
        "steals": 1, 
        "blocks": 1,
        "slamDunks": 0,
    
    },
    "Brendan HayWood":
    {
        "number":  33, 
        "shoes": 15, 
        "points": 6, 
        "rebounds": 12,
        "assists": 12,
        "steals": 22, 
        "blocks": 5,
        "slamDunks": 12,
    
    },

    },



    }
}
return gameObject
}

// TEST FUNCTION
// function homeTeamName() {
//     let object = gameObject()
//     return object.home.teamName;
// }
// console.log(homeTeamName())

// function numPointsScored(playerEntered){
// const game = gameObject();
// const awayPlayers = game.away.players
// const homePlayers = game.home.players
// const players = {...homePlayers, ...awayPlayers}

// for (const playerName in players) {
//   if (playerName ===playerEntered) {
//     return players[playerName].points
//   }
// }
// }


// for (const gameKey in game) { 
// const teamObj = game[gameKey]
//   const playerObj = teamObj.players
//   for (const playerKey in playerObj) {
//     if (playerKey === playerName) {
//       return playerObj[playerKey].points
//       }
//    }
//   }
// }
// //TEST 
// console.log(numPointsScored("Ben Gordon"))

// function shoeSize(playerName){
//   const game = gameObject();
//   for (const gameKey in game) {
//     const teamObj = game[gameKey]
//       const playerObj = teamObj.players
//       for (const playerKey in playerObj) {
//         if(playerKey === playerName) {
//           return playerObj[playerKey].shoes
//         }
//       }
//   }
// }
  
  // console.log(shoeSize("Ben Gordon"))

  // function teamColors(teamName) {
  //   const game = gameObject();
  //   debugger
  //   for (const gameKey in game) {
  //     const teamObj = game[gameKey]
  //     debugger
  //     const teamKey = teamObj.teamName
  //     if(teamKey === teamName){
  //       return teamObj[teamKey].colors
  //     }
  //   }
  // }

//   function teamColors(teamNamed) {
//     const game = gameObject();
//     const team1 = game.home.teamName
//     const team2 = game.away.teamName
//     if(teamNamed === team1){
//       return game.home.colors
//     }
//     else if(teamNamed === team2){
//         return game.away.colors
//       }
//     else{
//       return null;
//     }
//     }
// console.log(teamColors("Brooklyn Nets"))

function players(){
  const game = gameObject();
  const homePlayers = game.home.players;
  const awayPlayers = game.away.players;
  return {...homePlayers, ...awayPlayers}
}
function playerStats(playerNamed){
const playerArrays = Object.entries(players())

const player = playerArrays.find(playerArray => playerArray[0] === playerNamed)

return player[1]
}
console.log(playerStats("Jason Terry"))

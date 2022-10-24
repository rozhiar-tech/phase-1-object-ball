function gameObject(){
    const teams={
        home:{
            teamName: 'homeBrooklyn Nets',
            colors:["Black", "White"],
            players:{
                "Alan Anderson	":{
                    "number":0,
                    "Shoe":16,
                    "points":16,
                    "Rebounds":12,
                    "Assists":12,
                    "Steals":3,
                    "Blocks":1,
                    "Slam Dunks":1,
                },
                "Reggie Evans":{
                    "number":30,
                    "Shoe":14,
                    "points":12,
                    "Rebounds":12,
                    "Assists":12,
                    "Steals":12,
                    "Blocks":12,
                    "Slam Dunks":7,
                },
                "Brook Lopez":{
                    "number":11,
                    "Shoe":17,
                    "points":17,
                    "Rebounds":19,
                    "Assists":10,
                    "Steals":3,
                    "Blocks":1,
                    "Slam Dunks":15,
                },
            },
        },
        away:{
            teamName: 'Charlotte Hornets',
            colors:["Turquoise", "Purple"],
            players:{
                "Alan Anderson	":{
                    "number":0,
                    "Shoe":16,
                    "points":16,
                    "Rebounds":12,
                    "Assists":12,
                    "Steals":3,
                    "Blocks":1,
                    "Slam Dunks":1,
                },
                "Reggie Evans":{
                    "number":30,
                    "Shoe":14,
                    "points":12,
                    "Rebounds":12,
                    "Assists":12,
                    "Steals":12,
                    "Blocks":12,
                    "Slam Dunks":7,
                },
                "Brook Lopez":{
                    "number":11,
                    "Shoe":17,
                    "points":17,
                    "Rebounds":19,
                    "Assists":10,
                    "Steals":3,
                    "Blocks":1,
                    "Slam Dunks":15,
                },
            },
        
        },
    }
    console.log("Object.entries(oo) =>", Object.entries(teams));
}
console.log(gameObject())
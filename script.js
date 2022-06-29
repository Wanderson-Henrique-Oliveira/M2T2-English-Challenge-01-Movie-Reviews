let fantasyMovie = [
    {
        Title: "Lord of The Rings (Trilogy)",
        Director: "Peter Jackson",
        Year: "2001-2003",
    },
    {
        Title: "Bridge to Terabithia",
        Director: "Gábor Csupó",
        Year: "2007"
    },
    {
        Title: "Miss Peregrine's Home for Peculiar Children",
        Director: "Tim Burton",
        Year: "2016",
    }
]

console.log(fantasyMovie)
//=============================================================
let comedyMovie = [
    {
        Title: "Minha Mãe é Uma Peça",
        Director: "André Pellenz",
        Year: "2013",
    },
    {
        Title: "White Chicks",
        Director: "Keenen Ivory Wayans",
        Year: "2004"
    },
    {
        Title: "Mean Girls",
        Director: "Mark Waters",
        Year: "2004",
    }
]

console.log(comedyMovie)
//=============================================================
let horrorMovie = [
    {
        Title: "Us",
        Director: "Jordan Peele",
        Year: "2019",
    },
    {
        Title: "Get Out!",
        Director: "Jordan Peele",
        Year: "2017",
    },
    {
        Title: "Sinister",
        Director: "Scott Derrickson",
        Year: "2012"
    }
]

console.log(horrorMovie)
//=============================================================
//BONUS: 1 TRUE, 2 FALSE

let bestFantasyMovie = fantasyMovie[1].Title

if (bestFantasyMovie === fantasyMovie[0].Title){
    console.log("My favorite movie is", fantasyMovie[0].Title)
}else{
    console.log("Not even 5 stars")
}
//=============================================================
let bestComedyMovie = comedyMovie[2].Title

if (bestComedyMovie === comedyMovie[0].Title){
    console.log("My favorite movie is", comedyMovie[0].Title)
}else{
    console.log("Not even 5 stars")
}
//=============================================================
let bestHorrorMovie = horrorMovie[0].Title

if (bestHorrorMovie === horrorMovie[0].Title){
    console.log("My favorite movie is", horrorMovie[0].Title)
}else{
    console.log("Not even 5 stars")
}
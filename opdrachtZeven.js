//Opdraht 7. functions with arguments
// create a function that can paint a wall red
const paintWallRed = function(){
    console.log("The wall has been painted red");
};
paintWallRed();
// create a function that can paint a wall in any color
const paintWall = function(color){
    console.log("The wall has been painted" + color);
};
paintWall(" blue");
paintWall("Grey");
/*als ik de functie aanroep zonder argument, krijg ik de melding
"The wall has been painted undefined"*/

//Multiple arguments; we want also choose which wall needs to be painted
const paintWalls = function(color, compassPoint){
    console.log("The" + compassPoint,  "wall has been painted" + color);
};
paintWalls(" South-east", " Green");
paintWalls(" North", " white");
paintWalls(" Black", " Southern");
paintWalls( 3, false);
/* Het maakt niet uit wat je invult als argument bij het aanroepen van de functie,
 Hetgene wat je invult wordt 'ingevuld'. Als je de argumenten binnen de functie
 omwisselt wordt het in de output ook omgewisseld  */

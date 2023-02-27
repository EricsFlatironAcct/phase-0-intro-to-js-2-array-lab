// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
//adds to end
function destructivelyAppendCat(name){
    cats.push(name);
}
//adds to beginning
function destructivelyPrependCat(name){
    cats.unshift(name);
}
//removes from beginning
function destructivelyRemoveFirstCat(){
    cats.shift();
}
//removes from end
function destructivelyRemoveLastCat(){
    cats.pop();
}
//returns new object with object added to end
function appendCat(name){
    return [...cats, name];
}
//returns new object with object added to beginning
function prependCat(name){
    return[name, ...cats];
}
//returns new object with last item removed
function removeLastCat(){
    return cats.slice(0,cats.length-1);
}
//returns new object with first item removed
function removeFirstCat(){
    return cats.slice(1);
}

// Code your solution in this file!
const hq = 42;
let distance;


function distanceFromHqInBlocks(pickUp){
   pickUp < 42? (distance = hq - pickUp) : (distance = pickUp-hq);
   
   
   return distance;

}

function distanceFromHqInFeet(pickUp){
const tance = distanceFromHqInBlocks(pickUp);
return tance * 264;
}

function distanceTravelledInFeet(start , destination){
start<destination? (distance = destination- start) : (distance = start - destination);
return distance * 264;
}

function calculatesFarePrice(start, destination){
let price;
  const dist = distanceTravelledInFeet(start, destination);
if (dist <= 400){
  return 0;
}
else if ( dist > 400 && dist <= 2000){
  price = (dist- 400) * (0.02);
  return price;
}
else if (dist > 2000 && dist <= 2500){
  return 25;
} else {
  return "cannot travel that far"
}
}


console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInBlocks(43));
console.log(distanceTravelledInFeet(43,44));
console.log (calculatesFarePrice(43,68))

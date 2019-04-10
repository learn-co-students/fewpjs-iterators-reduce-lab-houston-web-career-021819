// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5]; 
let totalBatteries = 0 
batteryBatches.reduce(function(accumulator, current){
   return totalBatteries = accumulator + current
}, 0)
/*
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
*/


function calculateTip(amount, rat) {
  let rating = rat.toLowerCase()
  return (rating==='terrible')? 0 :
    (rating==='poor')? Math.ceil(amount*0.05):
    (rating==='good')? Math.ceil(amount*0.1):
    (rating==='great')? Math.ceil(amount*0.15):
  (rating==='excellent')? Math.ceil(amount*0.20): "Rating not recognised"
}


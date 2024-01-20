export function findOutlier(integers: number[]): number {

    //count even or odd numbers, check which "type of array" we got
    let evenNumbers = 0
    let oddNumbers = 0
    //store last of each type
    let even = 0;
    let odd = 0;
    //loop through the numbers
    integers.forEach(integer => {
      //if even, increase count and save
      if(integer % 2 === 0) {
        evenNumbers++
        even = integer
      //same for odd
      } else {
        oddNumbers++
        odd = integer
      }
    })
    //if only 1 even number, that means all others are odd and so we return the last/only even number stored
    if(evenNumbers === 1){
      return even
    }
    //if that is not true, we simply return the odd number
    return odd
  }
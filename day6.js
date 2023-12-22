const races_data_part_one = [
    { time_limit: 35, distance_record: 213 },
    { time_limit: 69, distance_record: 1168 },
    { time_limit: 68, distance_record: 1086 },
    { time_limit: 87, distance_record: 1248 }
]

const calculatePossibleDistances = (time_limit) => {
    const distances = []
    for (let i = 0; i <= time_limit; i++) {
        //(time_limit-i)*i
        distances.push(i * (time_limit - i))
    }
    return distances
}

// const race_1_distances = calculatePossibleDistances(races_data[0].time_limit)
//     .filter(distance => distance > races_data[0].distance_record).length

// console.log(race_1_distances)

const possibleWaysToWin = races_data_part_one.reduce((acc, next) => {
    const distances = calculatePossibleDistances(next.time_limit)
    const possible_ways = distances.filter(distance => distance > next.distance_record).length
    acc.push(possible_ways)
    return acc
}, [])

console.log("#Each race record can be beaten this number of ways", JSON.stringify(possibleWaysToWin))

const puzzle_answer = possibleWaysToWin.reduce((acc, next) => acc * next, 1)

console.log("#Puzzle answer", puzzle_answer)

const race_data_part_two = {
    time_limit: 35696887, // 35.696.887 mmmh 35 million
    distance_record: 213116810861248 // and this much millimeters
}  // Yup, that's way bigger than the previous one

// Maybe begin by the middle time_limit/2 and then go up until the distance i * (time_limit - i) <= distance_record
// we increment a variable possible_ways and then we return it multiplied by 2

// const calculatePossibleDistancesPartTwo = (time_limit, distance_record) => {
//     let possible_ways = 0
//     const middle = Math.floor(time_limit / 2)
//     for (let i = middle; i < time_limit; i++) {
//         if (i * (time_limit - i) <= distance_record) possible_ways++
//         else break
//     }
//     return possible_ways * 2
// }


// Ditched the above function because it was too slow
// I just noticed there was a quadratic equation to solve this problem, line 47: i * (time_limit - i)
// with this equation: x*(time-x) = distance. How do I get x?
// To solve the equation x*(time-x)=distance for x, we rearrange the equation:
// x*time-x²=distance
// Now, we bring all terms to one side of the equation:
// x²-x*time+distance=0
// This is a quadratic equation in the form ax²+bx+c=0, where:
// a=1,b=-time,c=distance
// The solution for x can be found using the quadratic formula:
// x=(-b±Math.sqrt(b²-4ac))/2a

function solveEquation(time, distance) {
    // Coefficients of the quadratic equation ax^2 + bx + c = 0
    const a = 1;
    const b = -time;
    const c = distance;
  
    // Calculate the discriminant
    const discriminant = b ** 2 - 4 * a * c;
  
    // Check if the discriminant is non-negative
    if (discriminant >= 0) {
      // Calculate the two possible solutions for x
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  
      return Math.ceil(x1) - Math.ceil(x2);
    } else {
      // No real solutions
      return null;
    }
  }
  
  // Example usage
  const time = 35696887;
  const distance = 213116810861248;
  
  const solutions = solveEquation(time, distance);
  
  if (solutions !== null) {
    console.log(`Numbers of ways to beat the record (${distance}mm) for a race time limit of ${time}ms, is `, solutions);
  } else {
    console.log("No real solutions");
  }
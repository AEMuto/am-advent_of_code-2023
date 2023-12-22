/**
 * DAY 2
 */
// Determine which games would have been possible if the bag had been loaded with only
// 12 red cubes, 13 green cubes, and 14 blue cubes.
//  What is the sum of the IDs of those games?
// [[{ green: 20 }, { red: 3 }, { blue: 2 }], [{ red: 9 }, { blue: 16 }, { green: 18 }], [{ blue: 6 }, { red: 19 }, { green: 10 }], [{ red: 12 }, { green: 19 }, { blue: 11 }],],
const INPUT = [
    [
        [{ green: 20 }, { red: 3 }, { blue: 2 }],
        [{ red: 9 }, { blue: 16 }, { green: 18 }],
        [{ blue: 6 }, { red: 19 }, { green: 10 }],
        [{ red: 12 }, { green: 19 }, { blue: 11 }],
    ],
    [
        [{ green: 12 }, { blue: 3 }, { red: 16 }],
        [{ red: 6 }, { blue: 4 }, { green: 12 }],
        [{ green: 11 }, { red: 4 }, { blue: 3 }],
        [{ green: 8 }, { red: 15 }, { blue: 5 }],
    ],
    [
        [{ blue: 13 }, { red: 4 }, { green: 8 }],
        [{ green: 2 }, { red: 4 }, { blue: 19 }],
        [{ blue: 5 }],
        [{ blue: 10 }, { green: 6 }, { red: 2 }],
        [{ blue: 19 }],
        [{ blue: 8 }, { red: 6 }],
    ],
    [
        [{ green: 14 }, { blue: 8 }, { red: 10 }],
        [{ green: 11 }, { blue: 7 }, { red: 8 }],
        [{ green: 8 }, { blue: 18 }, { red: 11 }],
    ],
    [
        [{ red: 7 }, { green: 7 }, { blue: 1 }],
        [{ red: 2 }, { green: 1 }, { blue: 2 }],
        [{ blue: 2 }, { green: 7 }],
        [{ red: 7 }, { blue: 3 }, { green: 11 }],
    ],
    [
        [{ green: 3 }, { red: 1 }, { blue: 3 }],
        [{ green: 5 }, { red: 19 }, { blue: 8 }],
        [{ red: 7 }, { green: 2 }, { blue: 10 }],
        [{ blue: 1 }, { green: 1 }, { red: 12 }],
        [{ blue: 6 }, { green: 1 }, { red: 16 }],
    ],
    [
        [{ blue: 1 }],
        [{ blue: 2 }, { red: 11 }, { green: 3 }],
        [{ blue: 1 }, { red: 7 }],
        [{ green: 2 }, { red: 2 }],
        [{ green: 3 }, { red: 4 }, { blue: 1 }],
        [{ blue: 3 }, { green: 3 }, { red: 9 }],
    ],
    [
        [{ red: 4 }, { green: 6 }, { blue: 4 }],
        [{ red: 4 }, { green: 1 }],
        [{ blue: 9 }, { green: 1 }, { red: 11 }],
    ],
    [
        [{ blue: 3 }, { red: 17 }, { green: 5 }],
        [{ blue: 8 }, { green: 9 }, { red: 1 }],
        [{ green: 6 }, { blue: 2 }, { red: 2 }],
    ],
    [
        [{ green: 3 }, { blue: 8 }],
        [{ green: 2 }, { red: 2 }, { blue: 3 }],
        [{ green: 1 }, { red: 2 }, { blue: 1 }],
        [{ red: 1 }, { green: 3 }, { blue: 9 }],
        [{ blue: 11 }],
        [{ blue: 7 }],
    ],
    [
        [{ red: 3 }, { blue: 3 }, { green: 9 }],
        [{ green: 3 }, { red: 4 }, { blue: 8 }],
        [{ red: 1 }, { blue: 12 }],
        [{ red: 2 }, { blue: 5 }, { green: 7 }],
        [{ blue: 11 }, { red: 2 }, { green: 6 }],
    ],
    [
        [{ green: 15 }, { blue: 3 }, { red: 1 }],
        [{ green: 10 }, { blue: 2 }, { red: 2 }],
        [{ blue: 2 }, { green: 15 }],
        [{ red: 1 }, { green: 10 }, { blue: 2 }],
        [{ green: 16 }, { red: 2 }],
    ],
    [
        [{ green: 2 }, { blue: 3 }, { red: 5 }],
        [{ green: 9 }, { blue: 5 }, { red: 1 }],
        [{ blue: 10 }, { red: 4 }],
    ],
    [
        [{ red: 1 }, { green: 3 }, { blue: 20 }],
        [{ red: 8 }, { green: 5 }, { blue: 1 }],
        [{ blue: 12 }, { green: 1 }, { red: 2 }],
        [{ red: 8 }, { green: 2 }, { blue: 2 }],
    ],
    [
        [{ blue: 14 }, { green: 3 }, { red: 8 }],
        [{ red: 16 }, { blue: 10 }],
        [{ green: 2 }, { blue: 10 }, { red: 9 }],
        [{ red: 12 }, { blue: 3 }, { green: 2 }],
        [{ green: 4 }, { red: 6 }, { blue: 4 }],
    ],
    [
        [{ green: 9 }, { red: 7 }, { blue: 5 }],
        [{ green: 15 }, { red: 4 }],
        [{ green: 3 }, { red: 6 }],
    ],
    [
        [{ green: 1 }, { red: 7 }, { blue: 10 }],
        [{ blue: 8 }, { red: 2 }, { green: 1 }],
        [{ red: 7 }, { green: 1 }, { blue: 9 }],
        [{ red: 1 }],
    ],
    [
        [{ blue: 2 }, { green: 1 }, { red: 1 }],
        [{ red: 9 }, { green: 4 }, { blue: 2 }],
        [{ green: 3 }, { red: 10 }, { blue: 1 }],
    ],
    [
        [{ blue: 1 }, { green: 5 }, { red: 13 }],
        [{ green: 8 }, { red: 15 }, { blue: 1 }],
        [{ green: 4 }, { red: 6 }, { blue: 1 }],
        [{ blue: 2 }, { green: 3 }],
        [{ red: 8 }, { blue: 2 }, { green: 9 }],
    ],
    [
        [{ green: 1 }, { blue: 1 }, { red: 1 }],
        [{ blue: 7 }, { red: 2 }],
        [{ red: 3 }, { blue: 3 }, { green: 1 }],
        [{ blue: 2 }, { red: 2 }],
    ],
    [
        [{ blue: 1 }, { red: 2 }, { green: 13 }],
        [{ green: 13 }, { blue: 5 }, { red: 7 }],
        [{ green: 4 }, { red: 13 }, { blue: 2 }],
    ],
    [
        [{ green: 7 }, { red: 16 }, { blue: 6 }],
        [{ red: 1 }, { blue: 5 }, { green: 10 }],
        [{ blue: 5 }, { green: 4 }, { red: 14 }],
        [{ green: 6 }, { blue: 6 }],
        [{ blue: 6 }, { green: 4 }, { red: 2 }],
    ],
    [
        [{ blue: 2 }, { green: 3 }, { red: 1 }],
        [{ blue: 2 }],
        [{ red: 3 }, { green: 4 }],
    ],
    [
        [{ red: 10 }, { green: 6 }, { blue: 12 }],
        [{ red: 1 }, { blue: 13 }, { green: 1 }],
        [{ blue: 7 }, { green: 9 }, { red: 1 }],
        [{ red: 7 }, { green: 7 }, { blue: 5 }],
    ],
    [
        [{ green: 13 }, { blue: 15 }, { red: 10 }],
        [{ green: 14 }, { blue: 6 }, { red: 1 }],
        [{ green: 14 }, { red: 5 }, { blue: 15 }],
        [{ green: 7 }, { red: 6 }, { blue: 14 }],
        [{ red: 6 }, { blue: 2 }, { green: 17 }],
        [{ blue: 13 }, { red: 4 }, { green: 4 }],
    ],
    [
        [{ green: 16 }, { blue: 12 }],
        [{ blue: 10 }, { green: 17 }, { red: 3 }],
        [{ blue: 12 }, { green: 12 }],
        [{ blue: 8 }, { green: 5 }],
        [{ red: 1 }, { blue: 10 }, { green: 2 }],
    ],
    [
        [{ blue: 12 }, { red: 4 }],
        [{ blue: 12 }, { green: 2 }, { red: 1 }],
        [{ blue: 16 }, { red: 4 }, { green: 1 }],
        [{ blue: 11 }, { red: 3 }],
        [{ green: 1 }, { red: 3 }, { blue: 1 }],
    ],
    [
        [{ green: 16 }, { blue: 2 }, { red: 14 }],
        [{ blue: 7 }, { red: 9 }, { green: 8 }],
        [{ blue: 6 }, { green: 12 }, { red: 19 }],
        [{ blue: 9 }, { red: 10 }, { green: 15 }],
        [{ red: 19 }, { blue: 7 }, { green: 10 }],
        [{ green: 5 }, { red: 6 }, { blue: 3 }],
    ],
    [
        [{ red: 1 }, { green: 2 }],
        [{ blue: 11 }, { green: 5 }, { red: 4 }],
        [{ red: 6 }, { green: 6 }, { blue: 12 }],
        [{ blue: 14 }, { red: 5 }, { green: 4 }],
        [{ green: 5 }, { red: 8 }, { blue: 6 }],
        [{ blue: 8 }, { red: 4 }, { green: 4 }],
    ],
    [
        [{ red: 15 }, { blue: 2 }, { green: 6 }],
        [{ red: 4 }, { green: 3 }, { blue: 2 }],
        [{ blue: 9 }, { green: 3 }, { red: 16 }],
        [{ green: 1 }, { blue: 11 }, { red: 13 }],
    ],
    [
        [{ blue: 2 }, { green: 4 }, { red: 3 }],
        [{ red: 3 }, { blue: 3 }, { green: 4 }],
        [{ red: 1 }, { blue: 6 }],
        [{ red: 3 }, { blue: 6 }, { green: 2 }],
        [{ green: 3 }, { red: 1 }, { blue: 6 }],
        [{ green: 7 }, { blue: 1 }, { red: 2 }],
    ],
    [
        [{ green: 8 }],
        [{ blue: 3 }, { green: 14 }],
        [{ green: 8 }, { blue: 5 }, { red: 5 }],
        [{ green: 6 }, { red: 9 }, { blue: 4 }],
    ],
    [
        [{ red: 6 }, { green: 10 }],
        [{ green: 8 }],
        [{ blue: 2 }, { green: 13 }],
        [{ red: 3 }, { blue: 2 }, { green: 1 }],
        [{ red: 2 }, { green: 3 }],
        [{ red: 2 }, { green: 12 }, { blue: 1 }],
    ],
    [
        [{ blue: 1 }, { red: 12 }, { green: 1 }],
        [{ blue: 2 }, { red: 7 }],
        [{ blue: 9 }, { red: 1 }, { green: 1 }],
    ],
    [
        [{ blue: 1 }, { green: 2 }],
        [{ red: 3 }, { blue: 1 }],
        [{ red: 2 }],
        [{ green: 2 }, { red: 5 }],
        [{ red: 1 }, { green: 1 }],
    ],
    [
        [{ green: 12 }, { blue: 3 }, { red: 6 }],
        [{ green: 15 }, { blue: 10 }, { red: 3 }],
        [{ red: 5 }, { green: 9 }, { blue: 14 }],
    ],
    [
        [{ red: 2 }, { green: 13 }, { blue: 6 }],
        [{ green: 2 }],
        [{ green: 17 }, { blue: 9 }, { red: 4 }],
        [{ blue: 7 }, { red: 1 }, { green: 2 }],
    ],
    [
        [{ red: 9 }, { blue: 12 }],
        [{ blue: 11 }, { red: 2 }],
        [{ red: 5 }],
        [{ red: 10 }, { blue: 2 }],
        [{ blue: 2 }, { green: 1 }, { red: 13 }],
    ],
    [
        [{ green: 11 }, { red: 8 }, { blue: 17 }],
        [{ red: 3 }, { green: 3 }, { blue: 7 }],
        [{ blue: 12 }, { red: 13 }, { green: 11 }],
        [{ blue: 17 }, { green: 11 }, { red: 9 }],
        [{ blue: 8 }, { green: 12 }, { red: 2 }],
    ],
    [
        [{ green: 4 }, { red: 2 }],
        [{ green: 5 }, { blue: 1 }, { red: 12 }],
        [{ red: 11 }, { green: 2 }],
        [{ red: 6 }, { green: 1 }],
    ],
    [
        [{ green: 13 }, { red: 4 }, { blue: 1 }],
        [{ green: 9 }, { blue: 1 }, { red: 3 }],
        [{ red: 20 }],
        [{ green: 3 }, { red: 19 }, { blue: 1 }],
    ],
    [
        [{ green: 3 }, { red: 1 }, { blue: 6 }],
        [{ green: 6 }, { blue: 7 }],
        [{ red: 1 }, { green: 11 }, { blue: 6 }],
        [{ green: 5 }, { blue: 9 }, { red: 7 }],
    ],
    [
        [{ blue: 2 }, { green: 9 }, { red: 9 }],
        [{ red: 8 }, { green: 2 }, { blue: 10 }],
        [{ green: 15 }, { blue: 6 }],
        [{ red: 6 }, { blue: 2 }, { green: 2 }],
        [{ green: 2 }, { blue: 2 }, { red: 13 }],
        [{ green: 7 }, { blue: 6 }, { red: 6 }],
    ],
    [
        [{ blue: 6 }, { green: 3 }, { red: 3 }],
        [{ red: 4 }, { blue: 3 }],
        [{ red: 3 }, { green: 4 }],
    ],
    [
        [{ red: 2 }, { blue: 19 }],
        [{ red: 3 }, { blue: 19 }, { green: 17 }],
        [{ red: 12 }, { green: 8 }, { blue: 19 }],
        [{ green: 14 }, { red: 11 }, { blue: 1 }],
        [{ red: 10 }, { green: 8 }, { blue: 1 }],
        [{ red: 6 }, { blue: 1 }, { green: 19 }],
    ],
    [
        [{ red: 4 }],
        [{ blue: 8 }, { green: 3 }],
        [{ red: 3 }, { green: 3 }, { blue: 1 }],
        [{ blue: 4 }, { green: 2 }, { red: 5 }],
    ],
    [
        [{ blue: 5 }, { red: 9 }, { green: 2 }],
        [{ blue: 5 }, { green: 7 }, { red: 6 }],
        [{ green: 13 }, { blue: 5 }, { red: 10 }],
    ],
    [
        [{ green: 8 }, { blue: 12 }, { red: 1 }],
        [{ green: 8 }, { blue: 9 }, { red: 2 }],
        [{ blue: 8 }, { green: 12 }, { red: 3 }],
        [{ green: 5 }, { blue: 13 }, { red: 2 }],
    ],
    [
        [{ red: 4 }, { blue: 18 }],
        [{ blue: 4 }, { red: 3 }, { green: 2 }],
        [{ red: 7 }, { green: 2 }, { blue: 10 }],
        [{ green: 1 }, { red: 5 }, { blue: 5 }],
        [{ blue: 6 }, { red: 4 }],
    ],
    [
        [{ green: 13 }, { blue: 1 }, { red: 6 }],
        [{ blue: 1 }, { red: 1 }, { green: 13 }],
        [{ green: 15 }, { red: 2 }],
        [{ blue: 1 }, { green: 1 }, { red: 2 }],
        [{ green: 5 }, { blue: 1 }, { red: 1 }],
        [{ green: 13 }],
    ],
    [
        [{ green: 1 }, { red: 6 }],
        [{ green: 1 }, { blue: 3 }, { red: 6 }],
        [{ red: 7 }, { blue: 3 }],
        [{ blue: 3 }, { red: 9 }],
        [{ blue: 2 }, { red: 2 }],
    ],
    [
        [{ red: 2 }, { green: 12 }, { blue: 9 }],
        [{ green: 8 }, { red: 2 }, { blue: 11 }],
        [{ blue: 13 }, { red: 2 }, { green: 10 }],
        [{ blue: 5 }, { green: 2 }],
    ],
    [
        [{ red: 18 }, { blue: 13 }, { green: 3 }],
        [{ blue: 10 }, { green: 6 }, { red: 15 }],
        [{ red: 7 }, { green: 1 }, { blue: 4 }],
        [{ blue: 6 }, { red: 16 }, { green: 10 }],
    ],
    [
        [{ blue: 4 }, { green: 5 }],
        [{ green: 4 }, { blue: 4 }, { red: 2 }],
        [{ red: 2 }],
        [{ green: 4 }, { red: 1 }],
    ],
    [
        [{ green: 7 }, { red: 1 }, { blue: 4 }],
        [{ green: 2 }, { red: 7 }, { blue: 2 }],
        [{ blue: 4 }, { red: 4 }, { green: 2 }],
        [{ blue: 3 }],
        [{ blue: 5 }, { red: 6 }, { green: 12 }],
        [{ green: 13 }],
    ],
    [
        [{ red: 10 }, { green: 1 }, { blue: 6 }],
        [{ blue: 1 }, { green: 4 }],
        [{ green: 4 }, { blue: 6 }, { red: 10 }],
        [{ green: 7 }, { blue: 4 }],
        [{ blue: 10 }, { red: 7 }, { green: 8 }],
        [{ blue: 7 }, { green: 1 }],
    ],
    [
        [{ blue: 8 }, { red: 2 }, { green: 7 }],
        [{ blue: 8 }, { red: 1 }, { green: 11 }],
        [{ blue: 7 }, { green: 1 }, { red: 7 }],
        [{ red: 7 }, { green: 14 }, { blue: 5 }],
        [{ red: 7 }, { green: 4 }, { blue: 8 }],
    ],
    [
        [{ green: 17 }, { red: 1 }],
        [{ blue: 7 }, { red: 2 }, { green: 18 }],
        [{ red: 4 }, { green: 15 }, { blue: 18 }],
    ],
    [
        [{ green: 12 }, { blue: 6 }],
        [{ green: 10 }, { blue: 8 }, { red: 2 }],
        [{ red: 1 }, { green: 11 }, { blue: 1 }],
        [{ green: 4 }, { blue: 6 }, { red: 2 }],
        [{ blue: 5 }, { green: 1 }, { red: 2 }],
    ],
    [
        [{ green: 4 }, { red: 2 }],
        [{ blue: 2 }, { green: 6 }, { red: 5 }],
        [{ red: 1 }, { green: 3 }, { blue: 1 }],
        [{ blue: 6 }, { green: 3 }],
    ],
    [
        [{ red: 1 }, { blue: 1 }],
        [{ red: 5 }, { blue: 11 }, { green: 1 }],
        [{ red: 1 }, { blue: 13 }, { green: 1 }],
    ],
    [
        [{ green: 12 }, { blue: 5 }],
        [{ blue: 1 }, { red: 5 }, { green: 18 }],
        [{ green: 9 }, { red: 2 }, { blue: 10 }],
        [{ blue: 11 }, { green: 7 }],
        [{ green: 10 }, { red: 4 }, { blue: 3 }],
    ],
    [
        [{ red: 15 }, { blue: 1 }, { green: 10 }],
        [{ green: 2 }, { blue: 11 }, { red: 1 }],
        [{ blue: 4 }, { green: 2 }, { red: 9 }],
    ],
    [
        [{ red: 11 }, { blue: 2 }],
        [{ blue: 1 }, { red: 14 }],
        [{ green: 2 }, { blue: 2 }, { red: 12 }],
        [{ red: 3 }],
        [{ red: 13 }, { blue: 1 }],
        [{ green: 1 }, { red: 12 }],
    ],
    [
        [{ blue: 10 }, { red: 1 }],
        [{ blue: 12 }, { green: 1 }],
        [{ green: 1 }, { blue: 3 }, { red: 1 }],
    ],
    [
        [{ green: 5 }, { blue: 14 }],
        [{ green: 6 }, { blue: 9 }, { red: 1 }],
        [{ green: 6 }, { blue: 2 }],
        [{ green: 5 }],
    ],
    [
        [{ blue: 2 }, { red: 1 }],
        [{ blue: 3 }, { red: 1 }],
        [{ blue: 5 }, { red: 2 }],
        [{ red: 2 }, { blue: 7 }, { green: 2 }],
        [{ green: 1 }, { blue: 2 }, { red: 2 }],
    ],
    [
        [{ blue: 2 }, { green: 13 }],
        [{ green: 5 }, { red: 1 }],
        [{ blue: 2 }, { green: 9 }, { red: 1 }],
        [{ green: 18 }, { red: 1 }],
    ],
    [
        [{ green: 15 }, { red: 8 }, { blue: 8 }],
        [{ red: 5 }, { green: 11 }, { blue: 2 }],
        [{ red: 9 }, { blue: 6 }, { green: 11 }],
        [{ green: 6 }, { red: 4 }, { blue: 5 }],
    ],
    [
        [{ blue: 4 }, { red: 2 }],
        [{ red: 1 }, { green: 1 }, { blue: 1 }],
        [{ blue: 5 }, { green: 1 }, { red: 2 }],
        [{ blue: 1 }],
        [{ red: 1 }, { green: 1 }],
        [{ blue: 3 }],
    ],
    [
        [{ red: 5 }, { blue: 2 }],
        [{ blue: 1 }, { green: 4 }],
        [{ green: 10 }, { red: 5 }, { blue: 2 }],
        [{ blue: 2 }, { green: 6 }, { red: 4 }],
    ],
    [
        [{ blue: 9 }, { green: 1 }],
        [{ red: 1 }, { blue: 5 }],
        [{ blue: 7 }, { red: 1 }, { green: 11 }],
        [{ green: 3 }, { red: 1 }, { blue: 11 }],
    ],
    [
        [{ green: 1 }, { red: 1 }, { blue: 10 }],
        [{ blue: 12 }],
        [{ red: 2 }, { blue: 9 }],
    ],
    [
        [{ blue: 5 }],
        [{ blue: 4 }, { red: 2 }, { green: 8 }],
        [{ red: 1 }, { blue: 4 }, { green: 1 }],
    ],
    [
        [{ green: 9 }, { blue: 9 }, { red: 10 }],
        [{ blue: 8 }, { green: 17 }, { red: 1 }],
        [{ blue: 3 }, { red: 2 }, { green: 4 }],
        [{ blue: 10 }, { green: 8 }, { red: 7 }],
        [{ blue: 7 }, { red: 10 }, { green: 5 }],
    ],
    [
        [{ green: 11 }, { blue: 12 }, { red: 8 }],
        [{ red: 11 }, { green: 11 }, { blue: 8 }],
        [{ red: 6 }, { blue: 9 }, { green: 14 }],
        [{ blue: 14 }, { red: 12 }, { green: 9 }],
    ],
    [
        [{ red: 1 }, { blue: 3 }, { green: 2 }],
        [{ green: 4 }, { blue: 5 }],
        [{ blue: 1 }, { red: 1 }],
        [{ green: 3 }, { blue: 4 }, { red: 1 }],
        [{ green: 5 }, { red: 1 }, { blue: 3 }],
        [{ red: 1 }, { green: 2 }],
    ],
    [
        [{ blue: 10 }, { green: 4 }, { red: 12 }],
        [{ green: 6 }, { red: 10 }, { blue: 10 }],
        [{ blue: 14 }, { green: 3 }, { red: 8 }],
        [{ red: 5 }, { green: 6 }],
        [{ green: 4 }],
        [{ blue: 20 }, { red: 5 }, { green: 5 }],
    ],
    [
        [{ green: 13 }],
        [{ green: 15 }, { blue: 9 }, { red: 6 }],
        [{ red: 5 }, { green: 10 }, { blue: 6 }],
        [{ green: 13 }, { red: 6 }, { blue: 4 }],
    ],
    [
        [{ red: 1 }, { blue: 9 }],
        [{ green: 1 }, { blue: 10 }, { red: 3 }],
        [{ blue: 9 }, { green: 1 }, { red: 1 }],
    ],
    [
        [{ blue: 2 }, { red: 1 }],
        [{ blue: 2 }, { green: 5 }],
        [{ red: 2 }, { green: 7 }, { blue: 2 }],
        [{ blue: 3 }],
        [{ green: 2 }, { red: 2 }],
        [{ green: 7 }, { blue: 2 }, { red: 1 }],
    ],
    [
        [{ red: 7 }, { blue: 12 }, { green: 4 }],
        [{ red: 9 }, { green: 11 }, { blue: 8 }],
        [{ blue: 10 }, { red: 8 }, { green: 9 }],
        [{ red: 6 }, { blue: 2 }, { green: 7 }],
        [{ red: 12 }, { green: 8 }, { blue: 9 }],
    ],
    [
        [{ blue: 14 }],
        [{ blue: 10 }, { red: 3 }, { green: 4 }],
        [{ blue: 7 }, { green: 10 }, { red: 2 }],
        [{ red: 3 }, { blue: 4 }, { green: 12 }],
    ],
    [
        [{ red: 12 }, { blue: 13 }, { green: 2 }],
        [{ red: 11 }, { green: 3 }, { blue: 15 }],
        [{ red: 15 }, { green: 4 }, { blue: 5 }],
        [{ red: 1 }, { green: 3 }, { blue: 11 }],
        [{ green: 3 }, { red: 4 }, { blue: 3 }],
    ],
    [
        [{ blue: 8 }, { green: 1 }, { red: 1 }],
        [{ red: 1 }, { blue: 8 }, { green: 4 }],
        [{ red: 3 }, { blue: 13 }, { green: 8 }],
    ],
    [
        [{ blue: 9 }, { green: 4 }, { red: 4 }],
        [{ red: 4 }, { blue: 2 }, { green: 4 }],
        [{ red: 10 }, { green: 2 }],
        [{ blue: 7 }, { green: 4 }, { red: 12 }],
    ],
    [
        [{ blue: 1 }, { green: 9 }, { red: 10 }],
        [{ red: 1 }, { blue: 11 }, { green: 2 }],
        [{ blue: 17 }, { red: 3 }],
    ],
    [
        [{ red: 12 }, { green: 6 }, { blue: 9 }],
        [{ blue: 18 }, { red: 17 }, { green: 7 }],
        [{ red: 16 }, { green: 6 }],
        [{ green: 6 }, { red: 5 }, { blue: 12 }],
    ],
    [
        [{ green: 12 }, { blue: 10 }, { red: 2 }],
        [{ blue: 4 }, { green: 15 }, { red: 1 }],
        [{ green: 7 }, { blue: 11 }],
        [{ green: 12 }, { blue: 7 }, { red: 2 }],
        [{ blue: 14 }, { green: 12 }, { red: 2 }],
    ],
    [
        [{ blue: 14 }, { red: 1 }, { green: 3 }],
        [{ green: 3 }, { blue: 2 }, { red: 3 }],
        [{ red: 1 }, { blue: 16 }],
        [{ green: 1 }, { blue: 10 }],
    ],
    [
        [{ red: 11 }, { green: 5 }],
        [{ red: 5 }, { green: 5 }, { blue: 1 }],
        [{ red: 8 }, { blue: 1 }, { green: 4 }],
        [{ blue: 1 }, { green: 3 }, { red: 8 }],
    ],
    [
        [{ green: 19 }, { red: 2 }, { blue: 10 }],
        [{ blue: 9 }, { green: 11 }, { red: 4 }],
        [{ blue: 10 }, { green: 5 }, { red: 2 }],
        [{ red: 3 }, { blue: 5 }, { green: 7 }],
    ],
    [
        [{ green: 1 }, { blue: 7 }, { red: 5 }],
        [{ green: 9 }, { red: 6 }, { blue: 13 }],
        [{ blue: 11 }, { red: 12 }, { green: 7 }],
        [{ red: 1 }, { blue: 12 }, { green: 7 }],
    ],
    [
        [{ red: 4 }, { green: 9 }, { blue: 1 }],
        [{ green: 11 }, { blue: 11 }, { red: 4 }],
        [{ red: 10 }, { blue: 17 }, { green: 11 }],
        [{ blue: 5 }, { red: 12 }, { green: 2 }],
        [{ blue: 14 }, { green: 6 }, { red: 5 }],
        [{ green: 8 }, { blue: 19 }, { red: 13 }],
    ],
    [
        [{ green: 5 }, { blue: 1 }, { red: 7 }],
        [{ blue: 3 }, { red: 14 }, { green: 17 }],
        [{ blue: 3 }, { red: 7 }, { green: 9 }],
        [{ red: 17 }, { green: 6 }, { blue: 1 }],
        [{ red: 17 }, { green: 4 }],
    ],
    [
        [{ red: 3 }, { green: 10 }],
        [{ green: 9 }, { red: 11 }],
        [{ red: 2 }, { green: 6 }, { blue: 2 }],
        [{ blue: 1 }, { red: 9 }, { green: 1 }],
        [{ red: 12 }, { blue: 1 }],
        [{ green: 4 }, { red: 12 }],
    ],
    [
        [{ green: 3 }, { red: 11 }, { blue: 1 }],
        [{ green: 3 }, { red: 13 }, { blue: 4 }],
        [{ green: 1 }, { blue: 3 }, { red: 12 }],
        [{ green: 4 }, { red: 10 }],
        [{ blue: 4 }, { green: 10 }, { red: 12 }],
    ],
    [
        [{ blue: 6 }, { red: 12 }],
        [{ red: 17 }, { green: 1 }, { blue: 11 }],
        [{ blue: 13 }, { red: 9 }],
        [{ red: 9 }, { blue: 6 }, { green: 2 }],
    ],
    [
        [{ green: 15 }, { blue: 1 }, { red: 11 }],
        [{ green: 12 }, { blue: 12 }, { red: 14 }],
        [{ green: 12 }, { blue: 10 }, { red: 1 }],
    ],
    [
        [{ green: 1 }, { red: 11 }, { blue: 4 }],
        [{ green: 4 }, { red: 1 }],
        [{ red: 9 }, { blue: 2 }],
        [{ blue: 5 }, { red: 11 }, { green: 9 }],
    ],
];

const AVAILABLE_CUBES = { red: 12, blue: 14, green: 13 };

const day2 = (gamesArr) => {
    // calculate the highest value of each in a game
    // 0. reduce the array of games
    // 1. reduce the array of arrays of game to an object score { red: x, green: y, blue: z }
    //    by chosing the max value of cubes for each colors
    // 2. then compare it to { red: 12, green: 13, blue: 14 },
    return gamesArr.reduce(
        (result, game, game_index) => {
            // console.log(`Processing game ${game_index + 1}: `, JSON.stringify(game));
            const game_score = game.reduce(
                (game_result, round, round_index) => {
                    // console.log(
                    //   `Processing round ${round_index + 1}: `,
                    //   JSON.stringify(round),
                    // );
                    round.forEach((color_cube) => {
                        if ("red" in color_cube)
                            color_cube.red > game_result.red
                                ? (game_result.red = color_cube.red)
                                : null;
                        if (color_cube.blue)
                            color_cube.blue > game_result.blue
                                ? (game_result.blue = color_cube.blue)
                                : null;
                        if (color_cube.green)
                            color_cube.green > game_result.green
                                ? (game_result.green = color_cube.green)
                                : null;
                    });
                    return game_result;
                },
                { red: 0, blue: 0, green: 0 },
            ); // sub-reduce end

            /** PART TWO - START */
            const game_score_power =
                game_score.red * game_score.blue * game_score.green;

            result.part_two += game_score_power;
            /** PART TWO - END */

            // console.log(
            //   `Scores for game ${game_index + 1} are: ${JSON.stringify(
            //     game_score,
            //   )}, it's power is ${game_score_power}`,
            // );

            if (
                game_score.red <= AVAILABLE_CUBES.red &&
                game_score.blue <= AVAILABLE_CUBES.blue &&
                game_score.green <= AVAILABLE_CUBES.green
            ) {
                // console.log(
                //   `## Valid Game found: Game ${game_index + 1}, ${JSON.stringify(
                //     game_score,
                //   )} is inferior to ${JSON.stringify(
                //     available_cubes,
                //   )} availabe cubes. ##`,
                // );
                // console.log(`## Adding ${game_index + 1} to ${result.part_one} ##`);
                result.part_one += game_index + 1;
            }

            return result;
        },
        { part_one: 0, part_two: 0 },
    );
};

const result_day_2 = day2(INPUT);

console.log(`### GAME TOTAL INDEX is: ${result_day_2.part_one} ##`);
console.log(`### GAME TOTAL POWER is: ${result_day_2.part_two} ##`);

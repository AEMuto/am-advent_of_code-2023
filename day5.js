const SEEDS = [
  2276375722, 160148132, 3424292843, 82110297, 1692203766, 342813967,
  3289792522, 103516087, 2590548294, 590357761, 1365412380, 80084180,
  3574751516, 584781136, 4207087048, 36194356, 1515742281, 174009980, 6434225,
  291842774,
];

const SEEDS_RANGE = [
  [2276375722, 160148132],
  [3424292843, 82110297],
  [1692203766, 342813967],
  [3289792522, 103516087],
  [2590548294, 590357761],
  [1365412380, 80084180],
  [3574751516, 584781136],
  [4207087048, 36194356],
  [1515742281, 174009980],
  [6434225, 291842774],
];

const seed_to_soil_map = [
  [4170452318, 3837406401, 124514978],
  [2212408060, 1593776674, 105988696],
  [3837406401, 4016132523, 278834773],
  [1475766470, 1699765370, 492158296],
  [3698488336, 1475766470, 118010204],
  [2318396756, 2191923666, 46351359],
  [4116241174, 3961921379, 54211144],
  [2193579298, 3791037069, 18828762],
  [2364748115, 2578360543, 354997036],
  [3085506703, 3439828590, 106510622],
  [1967924766, 3546339212, 219021823],
  [2719745151, 3765361035, 25676034],
  [2745421185, 2238275025, 340085518],
  [2186946589, 3809865831, 6632709],
  [3192017325, 2933357579, 506471011],
];
const soil_to_fertilizer_map = [
  [2067774073, 3521970321, 52706909],
  [3338663639, 285713733, 377282283],
  [4175452431, 2125409520, 119514865],
  [3950920796, 1900877885, 224531635],
  [285713733, 3604616580, 690350716],
  [976064449, 3368036703, 153933618],
  [2120480982, 662996016, 210956413],
  [2763248642, 1355402238, 545475647],
  [3715945922, 873952429, 49638562],
  [3765584484, 3182700391, 185336312],
  [2331437395, 923590991, 431811247],
  [1129998067, 2244924385, 937776006],
  [3308724289, 3574677230, 29939350],
];
const fertilizer_to_water_map = [
  [1898912715, 0, 159034880],
  [0, 781591504, 125461131],
  [4234890433, 2427770485, 8749678],
  [176481534, 1845116986, 384152450],
  [822014814, 539693831, 241897673],
  [125461131, 907052635, 47763268],
  [1476125220, 244008638, 19613711],
  [3828547378, 4170474998, 124492298],
  [2643114268, 2457193301, 126243103],
  [173224399, 2229269436, 3257135],
  [2916187764, 3376015556, 236473226],
  [764735505, 186729329, 57279309],
  [2427770485, 3802085897, 160735547],
  [2895514626, 2436520163, 20673138],
  [3152660990, 2671736916, 584987016],
  [1495738931, 1131222975, 403173784],
  [1339983969, 1534396759, 136141251],
  [2588506032, 3612488782, 54608236],
  [3737648006, 2583436404, 88300512],
  [737041056, 159034880, 27694449],
  [2057947595, 1677521625, 167595361],
  [1063912487, 263622349, 276071482],
  [3953039676, 4041226796, 129248202],
  [2225542956, 1670538010, 6983615],
  [560633984, 954815903, 176407072],
  [2847762723, 3328263653, 47751903],
  [2769357371, 3962821444, 78405352],
  [3825948518, 3256723932, 2598860],
  [4082287878, 3667097018, 134988879],
  [4243640111, 3276936468, 51327185],
  [4217276757, 3259322792, 17613676],
];
const water_to_light_map = [
  [527906959, 2908176499, 284796856],
  [1306013866, 0, 139756297],
  [500839409, 1466481782, 27067550],
  [1269694476, 139756297, 36319390],
  [0, 778456518, 2402633],
  [4218077327, 4154765934, 76889969],
  [812703815, 4004150799, 56130996],
  [153843304, 3657154694, 8975056],
  [2402633, 905946004, 132694584],
  [3795108796, 2776082693, 132093806],
  [3927202602, 1422228955, 44252827],
  [1445770163, 1493549332, 1282533361],
  [3794865694, 780859151, 243102],
  [2728303524, 176075687, 602380831],
  [162818360, 3666129750, 338021049],
  [3330684355, 3319846298, 337308396],
  [4154765934, 4231655903, 63311393],
  [135097217, 887199917, 18746087],
  [3667992751, 3192973355, 126872943],
  [3971455429, 781102253, 88826366],
  [1252423178, 869928619, 17271298],
  [868834811, 1038640588, 383588367],
];
const light_to_temperature_map = [
  [2621973104, 3678827401, 230150807],
  [1333642604, 1531317439, 615453278],
  [3364444750, 2854318675, 314483239],
  [2978187907, 3908978208, 107198609],
  [1117308885, 1110453605, 216333719],
  [1951157390, 4016176817, 152726483],
  [4168382203, 2717095112, 26843204],
  [0, 312822387, 5553076],
  [287414983, 245463475, 67358912],
  [1949095882, 2597527252, 2061508],
  [3836867339, 1522015715, 9301724],
  [648138229, 2599588760, 117506352],
  [4132690450, 1486323962, 35691753],
  [2852123911, 4168903300, 126063996],
  [2468610361, 3525464658, 153362743],
  [526108840, 988424216, 122029389],
  [5553076, 0, 148736111],
  [3265904462, 1326787324, 98540288],
  [4195225407, 716774234, 17303853],
  [181751976, 318375463, 105663007],
  [843084177, 3275513023, 249951635],
  [2214264232, 734078087, 254346129],
  [154289187, 218000686, 27462789],
  [3146382866, 684048190, 32726044],
  [765644581, 2433292104, 77439596],
  [3179108910, 2510731700, 86795552],
  [3846169063, 2146770717, 286521387],
  [2103883873, 2743938316, 110380359],
  [3085386516, 1425327612, 60996350],
  [3678927989, 526108840, 157939350],
  [4212529260, 3193074987, 82438036],
  [354773895, 148736111, 69264575],
  [1093035812, 3168801914, 24273073],
];
const temperature_to_humidity_map = [
  [1008510114, 1939290935, 27755995],
  [2205283444, 4197517502, 16218189],
  [1119061522, 3123774174, 108864966],
  [1566495924, 221087407, 33939034],
  [3089618547, 3728555042, 25452278],
  [2341294643, 3455988869, 16076350],
  [2286651827, 3754007320, 54642816],
  [704748216, 2542375745, 76754089],
  [445299830, 3938069116, 259448386],
  [1036266109, 1300576315, 82795413],
  [178337856, 1565003866, 40230920],
  [2122934367, 1605234786, 81339593],
  [1484902828, 980285858, 81593096],
  [2823460240, 1967046930, 266158307],
  [3827446421, 1526750766, 38253100],
  [984919715, 1161567987, 23590399],
  [218568776, 1061878954, 99689033],
  [4049237602, 3232639140, 223349729],
  [953670836, 2233205237, 3881060],
  [318257809, 3472065219, 89705062],
  [1727156113, 3113814046, 9960128],
  [3733360236, 444372828, 94086185],
  [4272587331, 3688491436, 22379965],
  [910921285, 178337856, 42749551],
  [781502305, 3808650136, 129418980],
  [957551896, 2798966448, 27367819],
  [1870217811, 1686574379, 252716556],
  [407962871, 2998327877, 37336959],
  [2508087592, 2826334267, 171993610],
  [1600434958, 3561770281, 126721155],
  [3865699521, 812829188, 167456670],
  [1737116241, 1185158386, 115417929],
  [1852534170, 3710871401, 17683641],
  [3420360273, 255026441, 38629788],
  [1227926488, 2620139318, 178827130],
  [4033156191, 4250190027, 16081411],
  [2204273960, 2619129834, 1009484],
  [2250197491, 4213735691, 36454336],
  [2680081202, 1383371728, 143379038],
  [3458990061, 538459013, 274370175],
  [3115070825, 2237086297, 305289448],
  [2357370993, 293656229, 150716599],
  [1406753618, 3035664836, 78149210],
  [2221501633, 4266271438, 28695858],
];
const humidity_to_location_map = [
  [2849843584, 4147982382, 56632112],
  [3849085050, 3618212322, 355529444],
  [1632881348, 407047779, 65646492],
  [3056274757, 2246063521, 686771203],
  [2729873863, 4028012661, 26534599],
  [3779070915, 1543896540, 70014135],
  [2571854216, 2932834724, 91402738],
  [2192942437, 1028113266, 378911779],
  [2960746591, 932585100, 95528166],
  [765942740, 0, 407047779],
  [2663256954, 1441254676, 66616909],
  [2756408462, 4054547260, 93435122],
  [1698527840, 1407025045, 34229631],
  [0, 3024237462, 156854744],
  [3743045960, 1507871585, 36024955],
  [156854744, 3181092206, 437120116],
  [1172990519, 472694271, 459890829],
  [2906475696, 3973741766, 54270895],
  [593974860, 2074095641, 171967880],
  [1732757471, 1613910675, 460184966],
];

const ALMANAC = [
  seed_to_soil_map,
  soil_to_fertilizer_map,
  fertilizer_to_water_map,
  water_to_light_map,
  light_to_temperature_map,
  temperature_to_humidity_map,
  humidity_to_location_map,
];

// instructions: https://adventofcode.com/2023/day/5

/**
 * Pass a number through one of the individual map and get its new value
 */
const numberMapping = (number, map) => {
  let result = number;
  map.forEach((line) => {
    const [destination_start, source_start, range] = line;
    if (number >= source_start && number <= source_start + range - 1) {
      result = number + (destination_start - source_start);
    }
  });
  return result;
};

const reverseNumberMapping = (number, map) => {
  let result = number;
  map.forEach((line) => {
    const [destination_start, source_start, range] = line;
    if (number >= destination_start && number <= destination_start + range - 1) {
      result = number - (destination_start - source_start);
    }
  });
  return result;
}

/**
 * Pass a seed through the ALMANAC to get its location
 */
const getLocationFromSeed = (seed) => {
  return ALMANAC.reduce((acc, map, i) => {
    if (i === 0) acc = numberMapping(seed, map);
    else acc = numberMapping(acc, map);
    return acc;
  }, 0);
};

/* PART ONE ****************************************************************/

// const seeds_location = SEEDS.map((seed) => {
//   const seed_mapping = ALMANAC.reduce((acc, map, i) => {
//     if (i === 0) {
//       const res = numberMapping(seed, map);
//       acc.push(res);
//     } else {
//       const previous_result = acc[i - 1];
//       const res = numberMapping(previous_result, map);
//       acc.push(res);
//     }
//     return acc;
//   }, []);
//   return { seed, location: seed_mapping[seed_mapping.length - 1] };
// });

// console.log(seeds_location); // All the seed mapped to a location
// console.log(
//   "Seed smallest location is: ",
//   Math.min(...seeds_location.map((seed) => seed.location))
// );

//console.log(seeds_location[16]);

/* PART TWO ****************************************************************/

let smallest_seed_start_range = SEEDS.reduce((acc, next, i) => {
  if (i === 0) {
    acc["location"] = getLocationFromSeed(next);
    acc["location_end"] = {};
    acc["location_end"]["value"] = getLocationFromSeed(next + SEEDS[i + 1]);
    acc["seed"] = next;
    acc["location_end"]["seed"] = next;
    acc["location_end"]["seed_index"] = i;
  } else if (i % 2 === 0) {
    const location = getLocationFromSeed(next);
    const location_end = getLocationFromSeed(next + SEEDS[i + 1]);
    if (location < acc["location"]) {
      acc["location"] = location;
      acc["seed"] = next;
      acc["index"] = i;
      acc["range"] = [next, next + SEEDS[i + 1]];
    }
    if (location_end < acc["location_end"]["value"]) {
      acc["location_end"]["value"] = location_end;
      acc["location_end"]["seed"] = next;
      acc["location_end"]["seed_index"] = i;
    }
  }
  return acc;
}, {});

// console.log(smallest_seed_start_range);
// {
//     "location": 484023871,
//     "location_end": {
//       "value": 297483080,
//       "seed": 3289792522,
//       "seed_index": 6
//     },
//     "seed": 1515742281,
//     "index": 16,
//     "range": [
//       1515742281,
//       1689752261
//     ]
//   }

const [START, END] = [SEEDS[6], SEEDS[6] + SEEDS[7]];

const MIDDLE = Math.floor((START + END) / 2);

let smallest_location = getLocationFromSeed(END); // 297483080
let test = getLocationFromSeed(MIDDLE);           // 2007706982
let test2 = getLocationFromSeed(START);           // 1100109810

// for (let i = END; i >= START; i--) {
//   //console.log(`#Processing seed ${i}`);
//   const current_location = getLocationFromSeed(i);
//   if (i === END || current_location < smallest_location) {
//     console.log(
//       "## smallest location updated! New value is: ",
//       current_location
//     );
//     smallest_location = current_location;
//   } else console.log("...");
// }

// The above loop is too slow, we need to find a way to get the smallest location
// without looping through all the seeds. Maybe we can use a binary search?

const findSmallestLocation = (start, end) => {
  const middle = Math.floor((start + end) / 2);
  const middle_location = getLocationFromSeed(middle);
  const start_location = getLocationFromSeed(start);
  const end_location = getLocationFromSeed(end);

  if (start === end) {
    return start_location;
  } else if (start === end - 1) {
    if (start_location < end_location) return start_location;
    else return end_location;
  } else if (middle_location < smallest_location) {
    smallest_location = middle_location;
    //console.log("## smallest location updated! New value is: ", middle_location);
    //console.log("## smallest seed is: ", middle);
    return findSmallestLocation(start, middle);
  } else {
    return findSmallestLocation(middle, end);
  }
}

const result_array = [];

SEEDS_RANGE.forEach((range) => {
  const [start, length] = range;
  const end = start + length;
  const smallest_location = findSmallestLocation(start, end);
  result_array.push({ start, end, smallest_location });
});

result_array.sort((a, b) => a.smallest_location - b.smallest_location);

// console.log(result_array[0]); // { start: 6434225, end: 298276999, smallest_location: 228039921 }

// console.log("## TEST", getLocationFromSeed(263622349)) // 228039921
// console.log("## TEST", getLocationFromSeed(263622348)) // 2701109725
// console.log("## TEST", getLocationFromSeed(263622350)) // 228039922

// Okay, it was interesting but it was not the solution... I'm stuck here.
// Maybe I should try to reverse the process and start from the smallest location to find the seed, then compare it to the seeds range to see if it is a valid seed.

const getSeedFromLocation = (location) => {
  // We reverse the Almanac so we start with humidity_to_location_map
  // but we clone it first so we don't mutate the original almanac
  return [...ALMANAC].reverse().reduce((acc, map, i) => {
    if (i === 0) acc = reverseNumberMapping(location, map);
    else acc = reverseNumberMapping(acc, map);
    return acc;
  }, 0)
}

// Good, it seems to work.
//console.log(getSeedFromLocation(228.039.921)); // 263622349
//console.log(getSeedFromLocation(484023871)); // 3488598636, wrong should be 1515742281
// wait... the second one should be 1515742281, not 3488598636... I'm missing something here.
//console.log(getLocationFromSeed(1515742281)); // 484023871, Solution from part 1 is correct

// Why does it work for the first one and not the second one? A missing condition in the reverseNumberMapping function?
// Nope it was the reverse applied to the ALMANAC, if forgot that the reverse method is mutating the original array.

// Just for fun what would be the seed for a location of 0?
//console.log(getSeedFromLocation(0)); // 2.532.066.368
// 4.243.281.404

// Maybe I can simplify the SEEDS_RANGE.
const isBetweenRange = (number, range) => {
  const [start, length] = range;
  const end = start + length;
  return number >= start && number <= end;
}

// Okay, I think I have all the pieces to solve this puzzle now.
// I will start from the smallest location and find the seed that match it.
// Then I will check if this seed is between globalStart and globalEnd.

// for (let i = 0; i <= 228039921; i++) {
//   const seed = getSeedFromLocation(i);
//   const isSeedValid = SEEDS_RANGE.some((range) => isBetweenRange(seed, range));
//   if (isSeedValid) {
//     console.log(`Seed ${seed} is valid for location ${i}`);
//     break;
//   }
// } // Gave me 3439828590

console.log(getLocationFromSeed(3439828590)); // 46294175
// JavaScript Labels

// syntax 
// labelName:
//   statement



mallSearch:                 // label for outer loop
for (let floor = 1; floor < 5; floor++) {       // total 4 floor in a building
    for (let shop = 1; shop < 5; shop++) {      // 4 shop on one floor
        console.log(`Checking Floor ${floor}, Shop ${shop}`);
        if (floor === 3 && shop === 4) {
            console.log('📱 iPhone found! Leaving the mall.');
            break mallSearch;       // stop everything, item found
        }
    }
}
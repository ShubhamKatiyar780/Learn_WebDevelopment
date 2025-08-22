
let i = 1;
while (i < 10) {
    if (i === 4) {
        break;
    }
    console.log(`i: ${i}`);
    i++;
}

let j = 10;
while (j < 17) {
    if (j === 13) {
        j++;
        continue;
    }
    console.log(`j: ${j}`);
    j++;
}
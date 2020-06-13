function findPythagoreanTripletCount(tripletSum) {
    let abc = [...(Array(tripletSum || 1000).keys())]
    let tripletCount = 0;
    abc.forEach(c => {
        for (let a = 1; a <= abc.length; a++) {
            for (let b = 1; b <= abc.length; b++) {
                if (!(a + b + c === abc.length)) continue;
                if ((a * a) + (b * b) === c * c) {
                    tripletCount += 1;
                }
            }
        }
    })
    return tripletCount;
};

let numberWithMaxTriplets = [0, 0]; // [0] => max count [1] => number
for (let i = 0; i < 1000; i++) {
    let PythaCount = findPythagoreanTripletCount(i);
    if (PythaCount > numberWithMaxTriplets[0]) {
        numberWithMaxTriplets[0] = PythaCount; //set new max number
        numberWithMaxTriplets[1] = i; // set new number
    }
}
alert(numberWithMaxTriplets[1])
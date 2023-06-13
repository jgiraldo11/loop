function firstLoop (total) {
//const total = 20;
for (let i = 0; i < total; i++) {
    console.log(i);
    }
}

function fingerLoop(){
const totalFinger = 10;

for (let i = 0; i < totalFinger; i++) {
    let sentence = 'I have ' + (i+1) + ' fingers';
    console.log(sentence);
    }
}

function arrayLoop(array) {
    //const prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]

    for (let i=0; i<array.length; i++) {
        const result = array[i];
        console.log(result);
    }
}

const prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47];
arrayLoop(prime);
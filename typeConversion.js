let amount = 0;
let secondAmount = "99.45";

// change string to number
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

// change to number
secondAmount = parseFloat(secondAmount);

// change number to string
// amount = amount.toString();
// amount = String(amount);

// change number to boolean
amount = Boolean(amount);

const n = 10389382833n;

console.log(amount, typeof amount); // 100 string
console.log(n, typeof n);
console.log(secondAmount, typeof secondAmount);

const fs = require('fs');

if (!fs.existsSync('./lesson.txt')){
fs.writeFile('./lesson.txt', 'Note that primitive data types are stored in stacks and reference data types\nconsisting of object literals, functions, arrays are stored in heaps', function (err){
    if (err){
        console.log(err)
    }
    console.log('Done!')
})
} else {
fs.unlink('./lesson.txt', function (err){
    if (err){
        console.log(err);
    }
    console.log('succesfully Deleted!');
})
}

const readStream = fs.createReadStream('./read.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('write.txt')

// readStream.on('data', (chunk)=>{
//     console.log('---New Chunk---');
//     console.log(chunk);
//     writeStream.write("\nNEW CHUNK\n");
//     writeStream.write(chunk);
// })
readStream.pipe(writeStream);
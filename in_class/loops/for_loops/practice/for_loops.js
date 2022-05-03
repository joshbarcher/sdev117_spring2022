//example for loop
for (let i = 0; i < 4; i++)
{
    console.log(`Indexer i = ${i}`);
}
console.log(); //print a new line

for (let i = 4; i <= 20; i += 4)
{
    console.log(`Indexer i = ${i}`);
}
console.log(); //print a new line

//i want to produce the following sequence, what will
//the for-loop look like?
//2, 4, 8, 16, 32, 64, 128
for (let i = 2; i < 256; i *= 2)
{
    console.log(`Indexer i = ${i}`);
}
console.log();

for (let i = 2; i <= 128; i *= 2)
{
    console.log(`Indexer i = ${i}`);
}
console.log();

//i want to produce the following sequence, what will
//the for-loop look like?
//8, 7, 6, 5, 4, 3, 2, 1

for (let i = 8; i > 0; i--)
{
    console.log(`Indexer i = ${i}`);
}
console.log();










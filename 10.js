var fs = require('fs');
fs.open('Emptyfile.txt','w',function (err, file) {
  console.log('Created');
});
fs.writeFile('Newfile.txt','Hello World',function (err, file) {
  console.log('Created Again');
});
//replace
fs.writeFile('Myfile.txt','Yesterday is history, tomorrow is a mystery, today is gift of god',function (err, file) {
  console.log('Replaced');
});
//Append

fs.appendFile('Myfile.txt', 'Be the change that you wish to see in the world', function (err) {
  console.log('Appended');
});

//Rename

fs.rename('Myfile.txt', 'thisfile.txt', function (err) {
  console.log('Renamed');
});
//Append

fs.appendFile('thisfile.txt', 'Be the change that you wish to see in the world', function (err) {
  console.log('Appended');
});
//Delete
fs.unlink('thisfile.txt', function (err) {
  console.log('deleted');
});


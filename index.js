
// 1. Use the inquirer npm package to get user input.
import inquirer from "inquirer";
import qr from "qr-image"
import fs from "fs";

inquirer.prompt([
  {
    name: 'URL',
    message: 'Enter the url ?',
    type: 'input'
    
  }
]).then(answers => {
  const url = answers.URL;
   
  var qr_png = qr.image(url);
  const filename = url.replace(/https?:\/\//g, '').replace(/\//g, '_') + '.png';
  qr_png.pipe(fs.createWriteStream(filename));

  fs.appendFile('Url_list.txt',"\n" +url, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
});


// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
// 3. Create a txt file to save the user input using the native fs node module.


/**
 * Checkbox list examples
 */


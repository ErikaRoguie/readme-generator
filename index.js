// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    "What is the name of the project?",
    "What is the purpose of the project?",
    "Who is the author?",
    "Do you want pictures?",
    "Does this project have starter code?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) =>{
        fs.writeToFile('./README.md',fileContent, err =>{
             // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
    if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
        }
              // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
        ok: true,
        message: 'File created!'
            });
        });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

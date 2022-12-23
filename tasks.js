/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text.trim().startsWith("hello ") || text.trim() === "hello") {
    hello(text.trim() + "!");
  } else if (text === "help\n") {
    help();
  } else if (text === "list\n") {
    list();
  } else if (text.trim().startsWith("add ")) {
    add(text.trim());
  } else if (text.trim().startsWith("remove ") || text.trim() === "remove") {
    remove(text.trim());
  } else if (text.trim().startsWith("edit ") || text.trim() === "edit") {
    edit(text.trim());
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(inputText) {
  // Split the input string into an array of words
  const arrText = inputText.split(" ");

  // Replace the word "hello" with "hello [argument]!"
  let outputText;
  if (arrText.length > 1) {
    outputText = inputText.replace("hello", `${arrText[0]}`, 1);
  } else {
    outputText = inputText;
  }

  // Remove any leading or trailing white space from the output string
  outputText = outputText.trim();

  console.log(outputText);
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("Hassan Adawieh");

// help possible commands

function help() {
  console.log(
    `hello => hello!\nquit & exit => exit the application\n hello name => hello this name! LIKE (hello hassan!)\n remove => remove the LAST element\nremove 1 => remove the FIRST element\nremove 2 => remove the SECOND element`
  );
}
const list_name = ["Maryam", "Fatima", "Hassan"];
function list() {
  for (i = 1; i <= list_name.length; i++) {
    console.log(i + " " + list_name[i - 1]);
  }
}
function add(inputText) {
  const arrText = inputText.split(" ");
  if (arrText.length > 1) {
    list_name.push(arrText[1]);
  } else {
    console.log("yeah");
  }
  console.log(list_name);
}
function remove(inputText) {
  if (inputText === "remove") {
    list_name.pop();
    console.log(list_name);
  } else {
    arrText = inputText.split(" ");
    if (arrText.length > 1) {
      if (Number(arrText[1]) === 1) {
        list_name.shift();

        console.log(list_name);
      } else if (Number(arrText[1]) === 2) {
        list_name.splice(1, 1);

        console.log(list_name);
      } else {
        console.log("does not exist");
      }
    }
  }
}

function edit(inputText) {
  
  if (inputText === "edit") {
    console.log("error");
  
  
  } else {
    let arrText = inputText.split(" ");
  
    if (arrText.length > 1) {
      if(!parseInt(+arrText[1]) ){
      arrText.shift();
      arrText = arrText.join(" ");
      list_name[list_name.length -1] = arrText;
    
    
    }else if(typeof((+arrText[1])) === "number"){
      num = +arrText[1];
       arrText.shift();
       arrText.shift();
      arrText = arrText.join(" ");
      list_name[num-1] =  arrText;
    
    
    }else{
      console.log("error")
    }
  }
  }
}

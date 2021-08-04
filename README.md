# Logger-for-Node.js-App
A simple logger which saves the console logs in an Node.js app on a .txt file, which can be an alternative way for console.log("Hello World")

## Default Parameters : 
1. directory = './logs', the directory where the logs will be stored.
2. file_name = "general_logs.txt", the name of the file, where you want to store the logs
3. save_length = n, If n = 1, then everytime when you call the method ( clogger.log("some message") ) it is saved ; else n > 1, then once the method is hit n number of times, the logs are updated in the file specified.
4. max_length = null (or) n, if null, then the logs are stored to the .txt file undefinitely, else the logs are maintained upto a maximum length of n in the .txt files
5. console_print = true (or) false, if you want to print the outputs in the console also.
6. verbose = true (or) false, if you want to get notified whilst logs are saved to the file. It prints "Logs Saved" in the console.

## Instructions to run

```
const { Logger } = require("./logger");
let clogger = new Logger(save_length = 1, file_name = "general_logs.txt", max_length = 3);

clogger.log('Log Level - 1');
clogger.log('Log Level - 2');
clogger.log('Log Level - 3');
clogger.log('Log Level - 4');
clogger.log('Log Level - 5');
```

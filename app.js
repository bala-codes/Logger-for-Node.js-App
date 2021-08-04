const { Logger } = require("./logger");
let clogger = new Logger(save_length = 1,file_name = "general_logs.txt", max_length = 3);

clogger.log('Log Level - 1');
clogger.log('Log Level - 2');
clogger.log('Log Level - 3');
clogger.log('Log Level - 4');
clogger.log('Log Level - 5');

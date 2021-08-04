const fs = require("fs");
const fse = require('fs-extra');
var path = require('path');

class Logger{
	constructor(save_length=2, file_name="logs.txt", max_length=null, verbose=true, console_print=false){
    	this.save_length=save_length;
        this.directory = './logs';
        this.log_path = path.join(this.directory,file_name);
        this.log_list = [];
        this.max_length = max_length;
        this.console_print = console_print;
        this.verbose = verbose;
        this.create_folder();
        if(this.max_length){ 
            console.log(`For every ${save_length} logs, it will be stored here at --> ${this.log_path} and it can a contain maximum of ${this.max_length} entries`);
        }else{
            console.log(`For every ${save_length} logs, it will be stored here at --> ${this.log_path}`);
        }
    }

    create_folder(){
        fse.ensureDirSync(this.directory);
        fse.ensureFileSync(this.log_path);
    }

    log(message){
        var msg = `${new Date().toLocaleDateString() + " " +new Date().toLocaleTimeString() } --> ${message}`
        
        if(this.console_print){ console.log(msg.trim()) }
        this.log_list.push(msg);
        if(this.log_list.length >= this.save_length){
            this.save();
            this.log_list = [];
            this.cleaner();
        }
    }
    
    save(){
        fs.appendFile(this.log_path, '\n' + this.log_list.join('\n'), (err) => {
            if (err) console.log(err);
            if(this.verbose){ console.log("Logs Saved"); }
        });
    }

    cleaner(){
        if(this.max_length){
            const data = fs.readFileSync(this.log_path, 'utf8').toString().replace(/\r\n/g,'\n').split('\n')
            if (data.length > this.max_length){
                fs.writeFileSync(this.log_path, '\n' + data.slice( this.max_length * (-1) ).join('\n'), (err) => {
                    if (err) console.log(err);
                });
            }
        }
    }
}

module.exports = { Logger };





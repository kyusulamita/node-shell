var fs = require('fs');
module.exports = {
	pwd : function(){
		console.log(process.execPath);
		process.stdout.write("my_prompt > ");		
	},
	date : function(){
		var d = new Date();
		console.log(d.toString());
		process.stdout.write("my_prompt > ");
	},
	ls : function(){
		fs.readdir('.', function(err, files){
			if(err) throw err;
			files.forEach(function(file){
				process.stdout.write(file.toString() + "\n");
			});
		});

	},
	echo : function(cmd){
		cmd.shift();
		console.log(cmd.join(' '));
		process.stdout.write("my_prompt > ");
	}
}
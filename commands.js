var fs = require('fs');
module.exports = {
	pwd : function(){
		console.log(process.execPath);
		process.stdout.write("Best_team_prompt > ");		
	},
	date : function(){
		var d = new Date();
		console.log(d.toString());
		process.stdout.write("Best_team_prompt > ");
	},
	ls : function(){
		fs.readdir('.', function(err, files){
			if(err) throw err;
			files.forEach(function(file){
				process.stdout.write(file.toString() + "\n");
			});
			process.stdout.write("Best_team_prompt > ");
		});

	},
	echo : function(){
		// to_echo.shift();
		console.log(to_echo.join(' '));
		process.stdout.write("Best_team_prompt > ");
	},
	cat : function(param){
		// param = param.join(' ');
		fs.readFile(param[0], 'utf8',(err, data) => {
		  	if (err) throw err;
 		  	console.log(data);
 			process.stdout.write("Best_team_prompt > ");
		});	
	},
	head : function(param){
		fs.readFile(param[0], 'utf8',(err, data) => {
		  	if (err) throw err;
 			var data  = data.split('\n').slice(0, 5).join('\n');
 			console.log(data);
 			process.stdout.write("Best_team_prompt > ");
		});
	},
	tail : function(param){
		fs.readFile(param[0], 'utf8',(err, data) => {
		  if (err) throw err;
 			var data  = data.split('\n').slice(-5).join('\n');
 			console.log(data);
 			process.stdout.write("Best_team_prompt > ");
		});
	},
	sort : function(param){
		fs.readFile(param[0], 'utf8', (err, data) =>{
			if(err) throw err;
		});
	}
}
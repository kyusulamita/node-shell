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
			var data = data.split('\n').sort().join('\n');
			console.log(data);
			process.stdout.write("Best_team_prompt > ");
		});
	},
	wc : function(param){
		fs.readFile(param[0], 'utf8', (err, data) =>{
			if(err) throw err;
			console.log(data.split('\n').length);
			process.stdout.write("Best_team_prompt > ");		
		});
	},
	uniq : function(param){
		fs.readFile(param[0], 'utf8', (err, data) =>{
			if(err) throw err;
			function noDupe(element, index, array){
				if(index === 0)return true;
				return (array[index] !== array[index-1])
			}
			data = data.split('\n').filter(noDupe).join('\n');
			console.log(data);
			process.stdout.write("Best_team_prompt > ");	
		});
	}
}
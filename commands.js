var fs = require('fs');
var request = require('request');
var done = function(output){
	console.log(output);
	process.stdout.write("Best_team_prompt > ");
}
module.exports = {
	pwd : function(){
		// console.log(process.execPath);
		// process.stdout.write("Best_team_prompt > ");	
		done(process.execPath);	
	},
	date : function(){
		var d = new Date();
		done(d.toString());
		// console.log(d.toString());
		// process.stdout.write("Best_team_prompt > ");
	},
	ls : function(){
		var output = "";
		fs.readdir('.', function(err, files){
			if(err) throw err;
			files.forEach(function(file){
				output += file.toString() + "\n";
			});
			// process.stdout.write("Best_team_prompt > ");
			done(output);
		});

	},
	echo : function(param){
		done(param.join(' '));
		// console.log(param.join(' '));
		// process.stdout.write("Best_team_prompt > ");
	},
	cat : function(param){
		// param = param.join(' ');
		fs.readFile(param[0], 'utf8',(err, data) => {
		  	if (err) throw err;
		  	done(data);
 		 //  	console.log(data);
 			// process.stdout.write("Best_team_prompt > ");
		});	
	},
	head : function(param){
		fs.readFile(param[0], 'utf8',(err, data) => {
		  	if (err) throw err;
 			var data  = data.split('\n').slice(0, 5).join('\n');
 			done(data);
 			// console.log(data);
 			// process.stdout.write("Best_team_prompt > ");
		});
	},
	tail : function(param){
		fs.readFile(param[0], 'utf8',(err, data) => {
		  if (err) throw err;
 			var data  = data.split('\n').slice(-5).join('\n');
 			done(data);
 			// console.log(data);
 			// process.stdout.write("Best_team_prompt > ");
		});
	},
	sort : function(param){
		fs.readFile(param[0], 'utf8', (err, data) =>{
			if(err) throw err;
			var data = data.split('\n').sort().join('\n');
			done(data);
			// console.log(data);
			// process.stdout.write("Best_team_prompt > ");
		});
	},
	wc : function(param){
		fs.readFile(param[0], 'utf8', (err, data) =>{
			if(err) throw err;
			done(data.split('\n').length);
			// console.log(data.split('\n').length);
			// process.stdout.write("Best_team_prompt > ");		
		});
	},
	uniq : function(param){
		fs.readFile(param[0], 'utf8', (err, data) =>{
			if(err) throw err;
			function noDupe(element, index, array){
				if(index === 0) return true;
				return (array[index] !== array[index-1])
			}
			data = data.split('\n').filter(noDupe).join('\n');
			done(data);
			// console.log(data);
			// process.stdout.write("Best_team_prompt > ");	
		});
	},
	curl : function(param){
		var url = "http://www." + param[0];
		// url += param[0]
		request(url, (error, response, body) =>{
			if(error) console.log(error);
			done(response.body);
			// if(response) console.log(response.body);
			// process.stdout.write("Best_team_prompt > ");				
		})
	}
}
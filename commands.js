var fs = require('fs');
var request = require('request');
var done = function(output){
	console.log(output);
	process.stdout.write("Best_team_prompt > ");
}
module.exports = {
	pwd : function(){
		done(process.execPath);	
	},
	date : function(){
		var d = new Date();
		done(d.toString());
	},
	ls : function(){
		var output = "";
		fs.readdir('.', function(err, files){
			if(err) throw err;
			files.forEach(function(file){
				output += file.toString() + "\n";
			});
			done(output);
		});

	},
	echo : function(param){
		done(param.join(' '));
	},
	cat : function(param){
		fs.readFile(param[0], 'utf8',(err, data) => {
		  	if (err) throw err;
		  	done(data);
		});	
	},
	head : function(param){
		fs.readFile(param[0], 'utf8',(err, data) => {
		  	if (err) throw err;
 			var data  = data.split('\n').slice(0, 5).join('\n');
 			done(data);
		});
	},
	tail : function(param){
		fs.readFile(param[0], 'utf8',(err, data) => {
		  if (err) throw err;
 			var data  = data.split('\n').slice(-5).join('\n');
 			done(data);
		});
	},
	sort : function(param){
		fs.readFile(param[0], 'utf8', (err, data) =>{
			if(err) throw err;
			var data = data.split('\n').sort().join('\n');
			done(data);
		});
	},
	wc : function(param){
		fs.readFile(param[0], 'utf8', (err, data) =>{
			if(err) throw err;
			done(data.split('\n').length);
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
		});
	},
	curl : function(param){
		var url = "http://www." + param[0];
		request(url, (error, response, body) =>{
			if(error) console.log(error);
			done(response.body);			
		})
	}
}
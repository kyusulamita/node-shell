var commands = require('./commands');
process.stdout.write("my_prompt > ");
process.stdin.on('data', function(data){
	var cmd = data.toString().trim();
	commands[cmd]();
});

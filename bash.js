var commands = require('./commands');
process.stdout.write("my_prompt > ");
process.stdin.on('data', function(data){
	var cmd = data.toString().trim();
	if(cmd.split(' ').length > 1){
		cmd = cmd.split(' ');
		commands[cmd[0]](cmd);
	}
	commands[cmd]();
});

var commands = require('./commands');
process.stdout.write("_prompt > ");
process.stdin.on('data', function(data){
	var cmd = data.toString().trim().split(' ');
	var param = null;
	if(cmd.length > 1){
		param = cmd.slice(1);
		cmd = cmd[0];
	}
	commands[cmd](param);
});

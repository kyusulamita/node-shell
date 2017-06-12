var commands = require('./commands');
process.stdout.write("Best_team_prompt > ");
process.stdin.on('data', function(data){
	var cmd = data.toString().trim().split(' ');
	var param = (cmd.length > 1) ? cmd.slice(1) : null;
	cmd = cmd[0];
	commands[cmd](param);
});

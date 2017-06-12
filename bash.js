process.stdout.write("my_prompt > ");
process.stdin.on('data', function(data){
	var cmd = data.toString().trim();
	if(cmd === 'pwd'){
		console.log(process.execPath);
	}
	else if(cmd === 'date'){
		var d = new Date();
		console.log(d.toString());
	}
	else if(cmd === "Q" || cmd === "quit"){
		// exit ;
	}
	process.stdout.write("my_prompt > ");
});
// // input prompt pwd
// console.log(process.execPath);
// //input prompt date
// var d = new Date();
// var a = d.toString();
// console.log(d);

module.exports = {
	pwd : function(){
		console.log(process.execPath);
		process.stdout.write("my_prompt > ");		
	},
	date : function(){
		var d = new Date();
		console.log(d.toString());
		process.stdout.write("my_prompt > ");
	}
}
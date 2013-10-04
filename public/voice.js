// Let's define a command.
var commands = {
    'take off': function() {
	$.ajax('/takeoff');
	$("#takeoff").show();
	$("#land").hide();
    },
    'hello test': function(){
	console.log("TEST!!");
	$("#test").show();
    },
    'drone land': function(){
	$.ajax('/land');
	$("#takeoff").hide();
	$("#land").show();
    }
};

// Initialize annyang with our commands
annyang.init(commands);

// Start listening
annyang.start();

exports.index = function(req, res){
    res.render('index', {'title':'HI THERE'});
};

exports.land = function(client){
    return function(req, res) {
        console.log("Land!");
	client.land();
    };
};

exports.takeoff =  function(client){
    return function(req, res) {
        console.log("Takeoff!");
	client.takeoff();
    };
};


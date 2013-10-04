exports.index = function(req, res){
    res.render('index', {'title':'HI THERE'});
}

exports.takeoff = function(req, res){
    console.log("Takeoff!");
    client.takeoff();
}

exports.land = function(req, res){
    console.log("Land!");
    client.land();
}

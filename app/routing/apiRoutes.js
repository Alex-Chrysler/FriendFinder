let friendsArray = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friendsArray);
    });



   app.post("/api/friends", function(req, res) {
        var newFriend = req.body
       
        var totalDifference = 1000;

        for(let i in friendsArray){
            var diff = 0
            for (let j in friendsArray[i].answers){
                 diff += Math.abs(parseInt(friendsArray[i].answers[j])-parseInt(req.body.answers[j]));
        }
  
        if (diff < totalDifference) {
            totalDifference = diff
            var dataToSend = {name:friendsArray[i].name, image: friendsArray[i].picture} ;    
        }
}

//console.log(newFriend)
friendsArray.push(newFriend);
res.send(dataToSend)

    })

}

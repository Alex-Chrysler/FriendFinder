
let friendsData = require("../data/friends");

module.exports = function(app) {



    app.get("/api/friends", function(req, res) {
        return res.json(friendsData);
    });

/*app.post("/api/firends", function(req, res) {

    var user = req.body;

    for(var i = 0; i<user.answers.length; i++){
        user.answers[i] = parseInt(user.answers[i])
    }

    var bestFriendIndex = 0;
    var minimumDifference = 40;

    for (var i = 0; i < friendsData.length; i++) {
        var totalDifference = 0;
        for(var j = 0; j < friendsData[i].answers.length; j++){
            var difference = Math.abs(user.answers[j] - friendsData[i].answers[j]);
            totalDifference += difference;
        }
        if(totalDifference < minimumDifference) {
            bestFriendIndex = i;
            minimumDifference = totalDifference;
    }
})*/

   app.post("/api/friends", function(req, res) {
        var newFriend = req.body
        var userResponses = newFriend.answers;

        var matchName ="";
        var matchxImage = "";
        var totalDifference = 1000;

        for(let i in friendsData){

           // console.log('friend = ' + JSON.stringify(friendsData[i]));


            var diff = 0
            for (let j in userResponses){
                 diff += Math.abs(parseInt(friendsData[i].answers[j]) - parseInt(userResponses[j]));

                    /*console.log("other thing" + friendsData[i].answers[j])
                    console.log("user response" + userResponses)
                     console.log('diff = ' + diff)*/
        }
  
        if (diff < totalDifference) {
      /*console.log('Closest match found = ' + diff);
      console.log('Friend name = ' + friendsData[i].name);
      console.log('Friend image = ' + friendsData[i].picture);*/
      
        diff = totalDifference

      var dataToSend = {name:friendsData[i].name, image: friendsData[i].picture} ;
    

      console.log(dataToSend)
    
}
}

//console.log(newFriend)
friendsData.push(newFriend);
res.send(dataToSend)

    })

}

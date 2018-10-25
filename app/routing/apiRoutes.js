
let friendsData = require("../data/friends");

module.exports = function(app) {



    app.get("/api/friends", function(req, res) {
        return res.json(friendsData);
    });

app.post("/api/firends", function(req, res) {

    var user = req.body;

    for(var i = 0; i<user.answers.length; i++){
        user.answers[i] = parseInt(user.answers[i])
    }

    var bestFriendIndex = 0;
    var minimumDifference = 40;

    for (var i = 0; i < friendsData.length; i++) {
        var totalDifference = 0;
        for(var j = 0; j < friendsData[i].answers.length; j++){
            var difference = Math.abs(user.answers[j] - friendsData[i].answers[j])
        }
    }
})

   /* app.post("/api/friends", function(req, res) {
        var newFriend = req.body
        var userResponses = newFriend.answers;

        var matchName ="";
        var matchImage = "";
        var totalDifference = 1000;

        for(i in friendsData){

           // console.log('friend = ' + JSON.stringify(friendsData[i]));


            var diff = 0
            for (var j in userResponses){
                 diff += Math.abs(parseInt(friendsData[i].answers[j]) - parseInt(userResponses[j]));

                    console.log("other thing" + friendsData[i].answers[j])
                    console.log("user response" + userResponses)
                     console.log('diff = ' + diff)
        }
  
        if (diff < totalDifference) {
      console.log('Closest match found = ' + diff);
      console.log('Friend name = ' + friendsData[i].name);
      console.log('Friend image = ' + friendsData[i].photo);
      
      newFriend.totalDifference = diff;

      matchName = friendsData[i].name;
      matchImage = friendsData[i].photo;
}
}
*/
//console.log(newFriend)
friendsData.push(newFriend);
res.json(true);  

    })

}

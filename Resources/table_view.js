var data = [];
var tableView = Ti.UI.createTableView(
  {
		  data:data
	 }
);	
Ti.UI.currentWindow.add(tableView);

function updateTweet() {
    var screen_name = 'kurain';
    var xhr = Ti.Network.createHTTPClient();
    xhr.open(
        "GET",
        "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=" + 
            screen_name
    );
    
    xhr.onload = function() {
        var tweets = JSON.parse(this.responseText);
        var newData = [];
        for(var i=0;i<tweets.length;i++) {
            var row = Ti.UI.createTableViewRow();        
            var label = Ti.UI.createLabel(
                {
                    text: tweets[i].text,
                    left: 50
                }
            );
            row.add(label);
            var image = Ti.UI.createImageView(
            {
                image: tweets[i].user.profile_image_url,
                left: 0,
                width: 48,
                height: 48
            }
            );
            row.add(image);

            newData.push(row);
        }
        tableView.setData(newData);
    };
    xhr.send();
}
updateTweet();


Ti.include('tweet_post.js');


var r = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.ADD
});
r.addEventListener('click',function()
{
	tweet('Hoge!');
});
Titanium.UI.currentWindow.setRightNavButton(r);

var l = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.REFRESH
});
l.addEventListener('click',function()
{
    updateTweet();
});
Titanium.UI.currentWindow.setLeftNavButton(l);


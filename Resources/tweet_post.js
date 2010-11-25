Ti.include('oauth_adapter.js');
var oAuthAdapter = new OAuthAdapter(
        'eZ1feohsOAyfARosj1feSlKHVDFA8noQQgTCbMVk4',
        'P8aC4ksx3tkmSa7VjvKrQ',
        'HMAC-SHA1');
oAuthAdapter.loadAccessToken('twitter');

function tweet(message) {
    oAuthAdapter.send(
        'https://api.twitter.com/1/statuses/update.json',
        [['status', message]],
        'Twitter', //Message Title
        'Published.', //Succeed Message
        'Not published.' //Failed Message
    );

    if (oAuthAdapter.isAuthorized() == false) {
        var receivePin = function() {
            oAuthAdapter.getAccessToken(
                'https://api.twitter.com/oauth/access_token'
            );
            oAuthAdapter.saveAccessToken('twitter');
        };
        oAuthAdapter.showAuthorizeUI(
            'https://api.twitter.com/oauth/authorize?' +
                oAuthAdapter.getRequestToken(
                    'https://api.twitter.com/oauth/request_token'
                ),
            receivePin
        );
    }
}

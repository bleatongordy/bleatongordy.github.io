window.fbAsyncInit = function() {
    FB.init({
    appId      : '380660235405000',
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
    });

    FB.Event.subscribe('auth.authResponseChange', function(response) {
        if (response.status === 'connected') {
          alert('Connected');
        } else if (response.status === 'not_authorized') {
          FB.login(function(response){}, {scope: 'user_photos, publish_actions'});
        } else {
          FB.login(function(response) {}, {scope: 'user_photos, publish_actions'});
        }
    });
};

// Load the SDK asynchronously
(function(d){
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));

function login() {
    FB.login(function(response) {}, {scope: 'user_photos, publish_actions'});
}

function logout() {
    FB.logout(function(response) {
        alert('Logged out!');
    });
}

function send() {
    var message = document.getElementById('send').value;
    FB.ui({
        method: 'send',
        link: 'http://www.google.com'
    });
}
        

function post() {
    var capt = document.getElementById('post').value;
    FB.api(
        '/me/feed',
        'post',
        { message: capt },
        function(response) {
            if (!response || response.error) {
                alert('Error posting!' + JSON.stringify(response));
            } else {
                alert('Post ID: ' + response.id);
            }
        });
}


function Process() {
    FB.api(
        '/me/friends',
        function(response) {
            if (response.error) {
                alert(response.error.message);
            } else {
                // send Length()
                alert(JSON.stringify(response);
                processUser('me');
                for (int i = 0; i < response.data.length; i++)
                    processUser(data[i].id);
            }
        });          
}

function processUser(id) {}

/*
function processUser(id) {
    FB.api('/' + id + '?fields=id,birthday,education,gender,location,hometown,location,political,religion,favorite_teams',
           function (response0) {
               FB.api('/' + id + '/books',
                      function (response1) {
                          FB.api('/' + id + '/music',
                                 function (response2) {
                                     FB.api('/' + id + 'movies',
                                            function (response3) {
                                                FB.api('/' + id + '/television',
                                                       function (response4) {
                                                           processResponse(id, response0, response1, response2, response3, response4);
                                                       });
                                            });
                                 });
                      });
           });     
}

function processResponse(id, response0, response1, response2, response3, response4) {
    alert(response0);
    alert(response1);
    alert(response2);
    alert(response3);
    alert(response4);
    // send data
}
*/

function test() {
    FB.api(
        "/me?fields=id,birthday,education,gender,location,hometown,location,political,religion",
        function(response) {
            alert(JSON.stringify(response));
        });
}

function getPics() {
//    alert('Post!');
    FB.api(
        "/me/photos",
        function(response) {
            if (response && !response.error) {
//                alert(JSON.stringify(response));
                var num = 0;
                var ttt = document.getElementById('photonum').value;
                if (isNaN(ttt)) {
                    num = 0;
                } else {
                    num = ttt;
                }
                
                document.getElementById('picture').setAttribute('src', response.data[num].source);
            } else {
                alert(response.error.message);
            }
        });
}

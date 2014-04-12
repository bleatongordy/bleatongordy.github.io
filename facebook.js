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
          FB.login(function(response){}, {scope: 
                                           'user_birthday, friends_birthday, \
                                           user_education_history, friends_education_history, \
                                           user_hometown, friends_hometown, \
                                           user_interests, friends_interests, \
                                           user_likes, friends_likes, \
                                           user_location, friends_location, \
                                           user_religion_politics, friends_religion_politics' });
        } else {
          FB.login(function(response) {}, {scope: 
                                           'user_birthday, friends_birthday, \
                                           user_education_history, friends_education_history, \
                                           user_hometown, friends_hometown, \
                                           user_interests, friends_interests, \
                                           user_likes, friends_likes, \
                                           user_location, friends_location, \
                                           user_religion_politics, friends_religion_politics' });
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
    FB.login(function(response) {}, {scope: 
                                           'user_birthday, friends_birthday, \
                                           user_education_history, friends_education_history, \
                                           user_hometown, friends_hometown, \
                                           user_interests, friends_interests, \
                                           user_likes, friends_likes, \
                                           user_location, friends_location, \
                                           user_religion_politics, friends_religion_politics' });
}

function logout() {
    FB.logout(function(response) {
        alert('Logged out!');
    });
}

function processResponse(response0, response1, response2, response3, response4) {
        
    var data = new Array();
    
    if (response0.hasOwnProperty('name'))
        data['name'] = response0.name;
    else
        data['name'] = '';
    
    if (response0.hasOwnProperty('id'))
        data['id'] = response0.id;
    else
        data['id'] = '';
    
    if (response0.hasOwnProperty('birthday'))
        data['birthday'] = response0.birthday;
    else
        data['birthday'] = '';
    
    if (response0.hasOwnProperty('gender'))
        data['gender'] = response0.gender;
    else
        data['gender'] = '';
    
    if (response0.hasOwnProperty('education'))
    {
        data['education'] = new Array();
        for(var i = 0; i < response0.education.length; i++)
            data['education'][i] = response0.education[i].name;
    } else {
        data['education'] = '';
    }
    
    if (response0.hasOwnProperty('location'))
        data['location'] = response0.location.name;
    else 
        data['location'] = '';
    
    if (response0.hasOwnProperty('hometown'))
        data['hometown'] = response0.hometown.name;
    else
        data['hometown'] = '';
    
    if (response0.hasOwnProperty('religion'))
        data['religion'] = response0.religion;
    else
        data['religion'] = '';
    
    if (response0.hasOwnProperty('political'))
        data['politics'] = response0.political;
    else
        data['politics'] = '';
    
    if (response0.hasOwnProperty('favorite_teams'))
    {
        data['sports'] = new Array();
        for(var i = 0; i < response0.favorite_teams.length; i++)
            data['sports'][i] = response0.favorite_teams[i].name;
    } else {
        data['sports'] = '';
    }
    
    if (response1.hasOwnProperty('data'))
    {
        data['books'] = new Array();
        for(var i = 0; i < response1.data.length; i++)
            data['books'][i] = response1.data[i].name;
    } else {
        data['books'] = '';
    }
    
    if (response2.hasOwnProperty('data'))
    {
        data['movies'] = new Array();
        for(var i = 0; i < response2.data.length; i++)
            data['movies'][i] = response2.data[i].name;
    } else {
        data['movies'] = '';
    }
    
    if (response3.hasOwnProperty('data'))
    {
        data['music'] = new Array();
        for(var i = 0; i < response3.data.length; i++)
            data['music'][i] = response3.data[i].name;
    } else {
        data['music'] = '';
    }
    
    if (response4.hasOwnProperty('data'))
    {
        data['television'] = new Array();
        for(var i = 0; i < response4.data.length; i++)
            data['television'][i] = response4.data[i].name;
    } else {
        data['television'] = '';
    }
    
    alert('Before addUser()');
    addUser(data);
}

function processUser(id) {
    FB.api(
        '/' + id + '?fields=name,id,birthday,education,gender,location,hometown,location,political,religion,favorite_teams',
        function (response0) {
            FB.api(
               '/' + id + '/books',
                function (response1) {
                  FB.api(
                      '/' + id + '/music',
                     function (response2) {
                         FB.api(
                             '/' + id + '/movies',
                              function (response3) {
                                  FB.api(
                                    '/' + id + '/television',
                                    function (response4) {
                                        processResponse(response0, response1, response2, response3, response4);
                                    });
                              });
                     });
              });
        });     
}

function retrieveData() {
    FB.api(
        '/me/friends',
        function(response) {
            if (!response || response.error) {
                alert(JSON.stringify(response));
            } else {
                // send Length()
                alert(JSON.stringify(response));
                processUser('me');
//                for (var i = 0; i < response.data.length; i++)
//                    processUser(response.data[i].id);
            }
        });          
}
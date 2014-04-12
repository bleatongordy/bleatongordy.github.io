var Length = 0;
var Current = 0;
var Users = new Array();

function romanceVector(books, movies, tv) {
    return Math.random() * 0.5;
}

function comedicVector(books, movies, tv) {
    return Math.random() * 0.5;
}

function actionVector(books, movies, tv) {
    return Math.random() * 0.5;
}

function mysteryVector(books, movies, tv) {
    return Math.random() * 0.5;
}

function sportsVector(sports) {
    return Math.min(sports.length / 10, 1);
}

function ageVector(birthday) {
    var date = new Date().getFullYear();
    var age = date - birthday.split('/')[2];
    return Math.min(Math.log(age) / 2, 1);
}

function politicalVector(politics) {
    if (politics.toLowerCase().indexOf('demo') >= 0)
        return 1;
    else if (politics.toLowerCase().indexOf('repub'))
        return 0;
    else
        return 0.5;
}

function religionVector(religion) {
    return Math.random() * 0.5;
}

function educationVector(education) {
    var eduvalue = 0;
    for (var i = 0; i < education.length; i++)
    {
        if (education[i].name == 'High School' && eduvalue == 0)
            eduvalue = 0.3;
        if (education[i].name == 'College' && eduvalue <= 0.3)
            eduvalue = 0.6;
        if (education[i].name == 'Graduate School' && eduvalue <= 0.6)
            eduvalue = 1.0;
    }
    return eduvalue;
}

function loudnessVector(music) {
    return Math.random() * 0.5;
}

function popularityVector(music) {
    return Math.random() * 0.5;
}

function tempoVector(music) {
    return Math.random() * 0.5;
}

function setLength(len) {
    Length = len;
}

function addUser(data) {
    alert('Function addUser()');
    
    var Current = new Array();
    Current[0] = data['name'];
    Current[1] = data['id'];
    Current[2] = data['gender'];
    Current[3] = romanceVector(data['books'], data['movies'], data['television']);
    Current[4] = comedicVector(data['books'], data['movies'], data['television']);
    Current[5] = actionVector(data['books'], data['movies'], data['television']);
    Current[6] = mysteryVector(data['books'], data['movies'], data['television']);
    Current[7] = sportsVector(data['sports']);
    Current[8] = ageVector(data['birthday']);
    Current[9] = religionVector(data['religion']);
    Current[10] = educationVector(data['education']);
    Current[11] = loudnessVector(data['music']);
    Current[12] = popularityVector(data['music']);
    Current[13] = tempoVector(data['music']);
    
    alert(Current[0]);
    alert(Current[1]);
    alert(Current[2]);
    alert(Current[3]);
    alert(Current[4]);
    alert(Current[5]);
    alert(Current[6]);
    alert(Current[7]);
    alert(Current[8]);
    alert(Current[9]);
    alert(Current[10]);
    alert(Current[11]);
    alert(Current[12]);
    alert(Current[13]);
    // send data to graph
}

// Number of mutual friends
// Romantic
// Comedic
// Action
// Mystery
// Number of sports teams
// Age
// Conservative - Liberal
// Religion
// Education
// Loudness - music
// Popularity - music
// Tempo
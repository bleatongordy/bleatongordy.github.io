var Length = 0;
var Current = 0;
var Users = new Array();

function romanceVector(books, movies, tv) {
    count = 0;
    totalLength = movies.length + books.length + tv.length;
    for(var i = 0; i < movies.length; i++) {
        var genre = getGenre(movies[i]);
        for (var k = 0; k < genre.length; k++) {
            if (genre[k] == "Romance" || genre[k] == "romance") {
                count++;
            }
        }
    }

    return count / totalLength;
}

function comedicVector(books, movies, tv) {
    count = 0;
    totalLength = movies.length + books.length + tv.length;
    for(var i = 0; i < movies.length; i++) {
        var genre = getGenre(movies[i]);
        for (var k = 0; k < genre.length; k++) {
            if (genre[k] == "Comedy" || genre[k] == 'comedy') {
                count++;
            }
        }
    }

    return count / totalLength;
}

function actionVector(books, movies, tv) {
    count = 0;
    totalLength = movies.length + books.length + tv.length;
    for(var i = 0; i < movies.length; i++) {
        var genre = getGenre(movies[i]);
        for (var k = 0; k < genre.length; k++) {
            if (genre[k] == "Action" || genre[k] == 'action') {
                count++;
            }
        }
    }

    return count / totalLength;
}

function mysteryVector(books, movies, tv) {
    count = 0;
    totalLength = movies.length + books.length + tv.length;
    for(var i = 0; i < movies.length; i++) {
        var genre = getGenre(movies[i]);
        for (var k = 0; k < genre.length; k++) {
            if (genre[k] == "Mystery" || genre[k] == 'mystery') {
                count++;
            }
        }
    }

    return count / totalLength;
}

function sportsVector(sports) {
    count = 0;
    totalLength = movies.length + books.length + tv.length;
    for(var i = 0; i < movies.length; i++) {
        var genre = getGenre(movies[i]);
        for (var k = 0; k < genre.length; k++) {
            if (genre[k] == "Sports" || genre[k] == 'sports') {
                count++;
            }
        }
    }

    return count / totalLength;
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
    
    alert(education + education.length);
    
    var eduvalue = 0;
    for (var i = 0; i < education.length; i++)
    {
        if (education[i] == 'High School' && eduvalue == 0)
            eduvalue = 0.3;
        if (education[i] == 'College' && eduvalue <= 0.3)
            eduvalue = 0.6;
        if (education[i] == 'Graduate School' && eduvalue <= 0.6)
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
    Current[10] = politicalVector(data['politics']);
    Current[11] = educationVector(data['education']);
    Current[12] = loudnessVector(data['music']);
    Current[13] = popularityVector(data['music']);
    Current[14] = tempoVector(data['music']);
    
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
    alert(Current[14]);
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
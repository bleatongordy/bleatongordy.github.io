var url = 'http://api.themoviedb.org/3/',
        mode = 'search/movie?query=',
        input,
        movieName,
        key = '&api_key=6669c92427b48ebb7baaa7d658334c57';

    var genres = [];



    function getGenre (title) {
    	var movieGenre = [];
    	var currId = -1;
        var input = $('#movie').val(),
            //movieName = encodeURI(input);
            movieName = title;
        var r1 = $.ajax({
        	async: false,
        	cache: false,
            type: 'GET',
            url: url + mode + title + key,
            jsonpCallback: 'testing',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
            	//console.log(url + mode + title + key);
                //console.dir(json.results[0].id);
                currId = json.results[0].id;
                newMode = "movie/" + currId
                newKey = '?api_key=6669c92427b48ebb7baaa7d658334c57';

                $.ajax({
                	async: false,
                	cache: false,
                	type: 'GET',
                	url: url + newMode + newKey,
                	jsonpCallback: 'testing',
                	contentType: 'application/json',
                	dataType: 'jsonp',
                	success: function(json) {
                		//console.dir(json.genres);
                		for(i = 0; i < json.genres.length; i++)
                		{
                			movieGenre.push(json.genres[i].name);
                		}
                		//console.log(movieGenre);
                		genres = movieGenre;
                	},
                	error: function(e) {
                		//console.log(e.message);
                	}
                });
            },
            error: function(e) {
                console.log(e.message);
            }
        });

	 $(document).ajaxStop(function () {
      return genres
  	});
}

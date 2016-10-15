var request = require('request');
var fs = require('fs');

var activity;
var argument = "";


var getTweets = function() {

	var tweet = new Twitter(keys.twitterKeys);
	var user = {screen_name: "sxleal"};
	tweet.get('statuses/user_timeline',user,function(error,tweets,response){

		if(!error){
			for(vari=0; i<tweets.length;i++){
				console.log(tweets[i].created_at + " ");
				console.log(tweets[i].text);

			}
		}
	});
}

var getSpotify = function (songName){

	spotify.search({type:"track",query:songName}, function(err,data) {

		if(err) {
			console.log("error occured: " + err);
			return;
		}

		var songs = data.tracks.items;

		for(var i=0; i<songs.length; i++) {
			console.log("--------------------");
			console.log("Artist: " + songs[i].artists);
			console.log("Album: " + songs[i].album);
			console.log("Song name: " + songs[i].name);
			console.log("Preview : " + songs[i].preview_url);
			console.log("--------------------");
		}
	});
}

var getMovie = function(movieTitle) {

	if(movieName === undefined) {
		movieName = "Mr. Nobody";
	}

	var urlMovie = ('http://www.omdbapi.com/?t='+movieTitle+'&y=&plot=short&r=json');

	request(urlMovie,function(error,response,body) {

		if (!error && response.statusCode == 200) {
			movie = JSON.parse(body);

			console.log("--------------------");
			console.log("Movie title: " + movie.Title);
			console.log("Movie release date: " + movie.Released);
			console.log("IMDB rating: " + movie.imdbRating);
			console.log("Country produced: " + movie.Country);
			console.log("Movie's language: " + movie.Language);
			console.log("Plot story: " + movie.Plot);
			console.log("Actors: " + movie.Actors);
			console.log("Rotten tomatoes rating: " + moview.tomatoRating);
			console.log("Rotten tomatoes url: " + movie.tomatoURL);
			console.log("--------------------");

		}
	});
}



function action (program, argument) {
	switch(program) {
		case 'my-tweets':
			getTweets();
			break;
		case 'spotify-this-song':
			getSong();
			break;
		case 'movie-this':
			getMovie();
			break;

	}
}

action(program,);



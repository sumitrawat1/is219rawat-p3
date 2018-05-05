app.controller('HomeController', ['$scope', function($scope) {


	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    {
      title:	'The Shawshank Redemption',
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    {
      title:	'The Godfather',
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    {
      title:	'The Godfather: Part II',
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    {
      title:	'The Dark Knight',
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    {
      title:	'Schindler\'s List',
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
	{
	title:	'Avengers Infinity War',
	iscore:	9.0,
	rating:	'PG-13',
	runtime:	149,
	released:	new Date('2018', '4', '27'),
	country:	'USA',
	posters:	['img/avengers.jpg', 'img/avengers1.jpg' ],
	imdb:		'https://www.imdb.com/title/tt4154756/',
	website:	'http://marvel.com/avengers',
	likes:	23843,
	dislikes:	101,
	posterindex: 0
},
{
	title:	'Batman vs Superman: Dawn of Justice',
	iscore:	6.6,
	rating:	'PG-13',
	runtime:	151,
	released:	new Date('2016', '3', '25'),
	country:	'USA',
	posters:	['img/batmanVsSuperman.jpg', 'img/batmanVsSuperman1.jpg' ],
	imdb:		'https://www.imdb.com/title/tt2975590/',
	website:	'http://batmanvsuperman.dccomics.com/',
	likes:	530991,
	dislikes:	2001,
	posterindex: 0
},
{
	title:	'The Fate of the Furious',
	iscore:	6.7,
	rating:	'PG-13',
	runtime:	136,
	released:	new Date('2017', '4', '14'),
	country:	'USA',
	posters:	['img/fastAndFurious.jpg', 'img/fastAndFurious8.jpg' ],
	imdb:		'https://www.imdb.com/title/tt4630562/',
	website:	'http://www.fastandfurious.com/',
	likes:	159643,
	dislikes:	2643,
	posterindex: 0
}



  ];




	/* ADD VARIABLES FOR STEP 3 HERE */


	$scope.title = "IMDB + Sumit's Top 8 Movies";
	$scope.owner = "Sumit";
	$scope.github = "https://github.com/sumitrawat1/is219rawat-p3/tree/master/P3-Starter-AngularJS";







	/* ADD FUNCTIONS FOR STEP 7 HERE */

	$scope.like = function (index) {
	    $scope.movies[index].likes += 1;
	};
		$scope.dislike = function (index) {
	  $scope.movies[index].dislikes += 1;
	};
		$scope.posterClick = function (index) {
	  console.log($scope.movies[index].posterindex);
	  if ($scope.movies[index].posterindex < $scope.movies[index].posters.length-1) {
	    $scope.movies[index].posterindex += 1;
	  }
	  else {
	    $scope.movies[index].posterindex = 0;
	  }
	};
	$scope.timeText = function (minutes) {
	  return (Math.floor(minutes/60) + "h " + minutes % 60 + "m");
	};









}]);

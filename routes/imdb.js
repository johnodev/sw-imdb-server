var express = require('express');
var router = express.Router();
var request = require('request');

// http://localhost:3001/imdb/summary
router.get('/summary', function (req, res, next) {
  request('http://mysterious-peak-27876.herokuapp.com',
    function (error, response, body) {

      if (!error && response.statusCode === 200) {
       
        const movieList = JSON.parse(body);        
        res.setHeader('Content-Type', 'application/json');
        res.json( movieList);

      } else {
        res.json(error);
      }

    });
});

// The api token did not work. A preferred solution woudl be to get and map details by different imdb call or
//    make many parallel calls Promise.All
router.get('/stuball', function (req, res, next) {
  res.json(getStub())
});

function getStub() {

  const StubDetails = [
    { "Title": "Star Wars: Episode VI - Return of the Jedi", "Year": "1983", "Rated": "PG", "Released": "25 May 1983", "Runtime": "131 min", "Genre": "Action, Adventure, Fantasy", "Director": "Richard Marquand", "Writer": "Lawrence Kasdan (screenplay by), George Lucas (screenplay by), George Lucas (story by)", "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams", "Plot": "After a daring mission to rescue Han Solo from Jabba the Hutt, the rebels dispatch to Endor to destroy a more powerful Death Star. Meanwhile, Luke struggles to help Vader back from the dark side without falling into the Emperor's trap.", "Language": "English", "Country": "USA", "Awards": "Nominated for 4 Oscars. Another 20 wins & 16 nominations.", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODllZjg2YjUtNWEzNy00ZGY2LTgyZmQtYTkxNDYyOWM3OTUyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.4/10" }, { "Source": "Rotten Tomatoes", "Value": "80%" }, { "Source": "Metacritic", "Value": "53/100" }], "Metascore": "53", "imdbRating": "8.4", "imdbVotes": "766,590", "imdbID": "tt0086190", "Type": "movie", "DVD": "12 Sep 2006", "BoxOffice": "N/A", "Production": "Twentieth Century Fox", "Website": "http://www.starwars.com/episode-vi/", "Response": "True" },
    { "Title": "Star Wars: Episode IV - A New Hope", "Year": "1977", "Rated": "PG", "Released": "25 May 1977", "Runtime": "121 min", "Genre": "Action, Adventure, Fantasy", "Director": "George Lucas", "Writer": "George Lucas", "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing", "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.", "Language": "English", "Country": "USA", "Awards": "Won 6 Oscars. Another 50 wins & 28 nominations.", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDk2NmNhZDgtZDgzZS00NTRkLWFiYjUtNGMzZTYwNTFhYjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.7/10" }, { "Source": "Rotten Tomatoes", "Value": "93%" }, { "Source": "Metacritic", "Value": "92/100" }], "Metascore": "92", "imdbRating": "8.7", "imdbVotes": "1,009,663", "imdbID": "tt0076759", "Type": "movie", "DVD": "21 Sep 2004", "BoxOffice": "N/A", "Production": "20th Century Fox", "Website": "http://www.starwars.com/episode-iv/", "Response": "True" },
    { "Title": "Star Wars: Episode V - The Empire Strikes Back", "Year": "1980", "Rated": "PG", "Released": "20 Jun 1980", "Runtime": "124 min", "Genre": "Action, Adventure, Fantasy", "Director": "Irvin Kershner", "Writer": "Leigh Brackett (screenplay by), Lawrence Kasdan (screenplay by), George Lucas (story by)", "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams", "Plot": "After the rebels are overpowered by the Empire on their newly established base, Luke Skywalker begins Jedi training with Yoda. His friends accept shelter from a questionable ally as Darth Vader hunts them in a plan to capture Luke.", "Language": "English", "Country": "USA", "Awards": "Won 1 Oscar. Another 21 wins & 19 nominations.", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjk2M2FiMTEtMzFlNS00MzcyLWFjYTAtODBiMDJjMWVlZTUwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.8/10" }, { "Source": "Rotten Tomatoes", "Value": "94%" }, { "Source": "Metacritic", "Value": "81/100" }], "Metascore": "81", "imdbRating": "8.8", "imdbVotes": "937,890", "imdbID": "tt0080684", "Type": "movie", "DVD": "21 Sep 2004", "BoxOffice": "$4,548,170", "Production": "Twentieth Century Fox", "Website": "http://www.starwars.com/episode-v/", "Response": "True" },
    { "Title": "Star Wars: The Force Awakens", "Year": "2015", "Rated": "PG-13", "Released": "18 Dec 2015", "Runtime": "136 min", "Genre": "Action, Adventure, Fantasy", "Director": "J.J. Abrams", "Writer": "Lawrence Kasdan, J.J. Abrams, Michael Arndt, George Lucas (based on characters created by)", "Actors": "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver", "Plot": "Three decades after the Empire's defeat, a new threat arises in the militant First Order. Stormtrooper defector Finn and spare parts scavenger Rey are caught up in the Resistance's search for the missing Luke Skywalker.", "Language": "English", "Country": "USA", "Awards": "Nominated for 5 Oscars. Another 57 wins & 123 nominations.", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.1/10" }, { "Source": "Rotten Tomatoes", "Value": "93%" }, { "Source": "Metacritic", "Value": "81/100" }], "Metascore": "81", "imdbRating": "8.1", "imdbVotes": "695,104", "imdbID": "tt2488496", "Type": "movie", "DVD": "05 Apr 2016", "BoxOffice": "$936,658,640", "Production": "Walt Disney Pictures", "Website": "http://starwars.com/", "Response": "True" },
    { "Title": "Star Wars: Episode I - The Phantom Menace", "Year": "1999", "Rated": "PG", "Released": "19 May 1999", "Runtime": "136 min", "Genre": "Action, Adventure, Fantasy", "Director": "George Lucas", "Writer": "George Lucas", "Actors": "Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd", "Plot": "Two Jedi Knights escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory.", "Language": "English", "Country": "USA", "Awards": "Nominated for 3 Oscars. Another 26 wins & 62 nominations.", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BM2FmZGIwMzAtZTBkMS00M2JiLTk2MDctM2FlNTQ2OWYwZDZkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "6.5/10" }, { "Source": "Rotten Tomatoes", "Value": "56%" }, { "Source": "Metacritic", "Value": "51/100" }], "Metascore": "51", "imdbRating": "6.5", "imdbVotes": "588,499", "imdbID": "tt0120915", "Type": "movie", "DVD": "16 Oct 2001", "BoxOffice": "$431,000,000", "Production": "20th Century Fox", "Website": "http://www.starwars.com/episode-i/", "Response": "True" },
    { "Title": "Star Wars: Episode III - Revenge of the Sith", "Year": "2005", "Rated": "PG-13", "Released": "19 May 2005", "Runtime": "140 min", "Genre": "Action, Adventure, Fantasy", "Director": "George Lucas", "Writer": "George Lucas", "Actors": "Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid", "Plot": "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.", "Language": "English", "Country": "USA", "Awards": "Nominated for 1 Oscar. Another 25 wins & 56 nominations.", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.6/10" }, { "Source": "Rotten Tomatoes", "Value": "79%" }, { "Source": "Metacritic", "Value": "68/100" }], "Metascore": "68", "imdbRating": "7.6", "imdbVotes": "572,910", "imdbID": "tt0121766", "Type": "movie", "DVD": "01 Nov 2005", "BoxOffice": "N/A", "Production": "20th Century Fox", "Website": "http://www.starwars.com/", "Response": "True" },
    { "Title": "Star Wars: Episode II - Attack of the Clones", "Year": "2002", "Rated": "PG", "Released": "16 May 2002", "Runtime": "142 min", "Genre": "Action, Adventure, Fantasy", "Director": "George Lucas", "Writer": "George Lucas (screenplay by), Jonathan Hales (screenplay by), George Lucas (story by)", "Actors": "Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee", "Plot": "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé, while Obi-Wan investigates an assassination attempt on the Senator and discovers a secret clone army crafted for the Jedi.", "Language": "English", "Country": "USA", "Awards": "Nominated for 1 Oscar. Another 16 wins & 58 nominations.", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOWNkZmVjODAtNTFlYy00NTQwLWJhY2UtMmFmZTkyOWJmZjZiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "6.6/10" }, { "Source": "Rotten Tomatoes", "Value": "66%" }, { "Source": "Metacritic", "Value": "54/100" }], "Metascore": "54", "imdbRating": "6.6", "imdbVotes": "512,667", "imdbID": "tt0121765", "Type": "movie", "DVD": "12 Nov 2002", "BoxOffice": "$307,900,000", "Production": "20th Century Fox", "Website": "http://www.starwars.com/episode-ii/", "Response": "True" }
  ];

  const StubSummary = [
    {
      "imdbId": "tt0086190",
      "position": {
        "episode": 6,
        "release": 3,
        "machete": 5
      }
    },
    {
      "imdbId": "tt0076759",
      "position": {
        "episode": 4,
        "release": 1,
        "machete": 1
      }
    },
    {
      "imdbId": "tt0080684",
      "position": {
        "episode": 5,
        "release": 2,
        "machete": 2
      }
    },
    {
      "imdbId": "tt2488496",
      "position": {
        "episode": 7,
        "release": 7,
        "machete": 6
      }
    },
    {
      "imdbId": "tt0120915",
      "position": {
        "episode": 1,
        "release": 4,
        "machete": null
      }
    },
    {
      "imdbId": "tt0121766",
      "position": {
        "episode": 3,
        "release": 6,
        "machete": 4
      }
    },
    {
      "imdbId": "tt0121765",
      "position": {
        "episode": 2,
        "release": 5,
        "machete": 3
      }
    }
  ]

  // a little tree shaking to simplify the front end structure
  for(let i =0; i < StubSummary.length; i++){
    const detail = StubDetails.find( s => { 
      return s.imdbID === StubSummary[i].imdbId;       
    });

    StubSummary[i].Year = Number(detail.Year);
    StubSummary[i].Actors = detail.Actors;
    StubSummary[i].Title = detail.Title;
    StubSummary[i].Poster = detail.Poster;

  }

  return StubSummary;
}

module.exports = router;

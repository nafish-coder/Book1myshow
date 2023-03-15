var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
const port= 2410;
grtOrLess = "";
statecity=[];
customers = [
  
];
customerDetails = [
  {
    name: "Apoorv",
    gender: "Male",
    addressLine1: "New Ashok Nagar",
    state: "Uttar Pradesh",
    city: " Lucknow ",
    dob: "7-August-1996",
    PAN: "AQSON7890T"
  },
  {
    name: "Rachel",
    gender: "Female",
    addressLine1: "Sec-115",
    state: "Uttar Pradesh",
    city: " Noida ",
    dob: "17-September-1994",
    PAN: "AQSDN7123T"
  },
  {
    name: "Nimit",
    gender: "Male",
    addressLine1: "Sec-15",
    state: "Madhya Pradesh",
    city: " Bhopal ",
    dob: "7-Jan-1992",
    PAN: "PQLON7890P"
  },
  {
    name: "Sonia",
    gender: "Female",
    addressLine1: "Sec-62",
    state: "Uttar Pradesh",
    city: " Noida ",
    dob: "27-August-1989",
    PAN: "AQSONAS590T"
  }
];
let Movies=[
  
      {Title: "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        format:"3D",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": ["Action", "Adventure", "Fantasy"],
       "Language": ["English", "Spanish"],
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "https://wallpapercave.com/dwp1x/wp5549067.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "890,617",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True",
        "Images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
        ]
      },
      {Title: "I Am Legend",
        "Year": "2007",
        "Rated": "PG-13",
        "Released": "14 Dec 2007",
        "Runtime": "101 min",
        format:"2D",
        "Genre": ["Drama", "Horror", "Sci-Fi"],
        "Director": "Francis Lawrence",
        "Writer": "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
        "Actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
        "Plot": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
        "Language": ["English"],
        "Country": "USA",
        "Awards": "9 wins & 21 nominations.",
        "Poster": "https://w0.peakpx.com/wallpaper/431/171/HD-wallpaper-i-am-legend-will-smith-movie.jpg",
        "Metascore": "65",
        "imdbRating": "7.2",
        "imdbVotes": "533,874",
        "imdbID": "tt0480249",
        "Type": "movie",
        "Response": "True",
        "Images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
        ]
      },
   
      { Title: "The Avengers",
        "Year": "2012",
        format:"2D",
        "Released": "04 May 2012",
     
        "Genre": ["Action", "Sci-Fi", "Thriller"],
       "Language": ["English", "Hindi"],

        "Poster": "https://c4.wallpaperflare.com/wallpaper/44/81/103/avengers-infinity-war-8k-poster-wallpaper-preview.jpg",
        "Metascore": "69",
        "imdbRating": "8.1",
        "imdbVotes": "1,003,301",
        
      
      },
      {Title: "The Wolf of Wall Street",
        "Year": "2013",
        "Rated": "R",
        "Released": "25 Dec 2013",
        "Runtime": "180 min",
        format:"2D",
        "Genre": ["Biography", "Comedy", "Crime"],
        "Director": "Martin Scorsese",
        "Writer": "Terence Winter (screenplay), Jordan Belfort (book)",
        "Actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
        "Plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        "Language": ["English", "Tamil"],
        "Country": "USA",
        "Awards": "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
        "Poster": "https://e1.pxfuel.com/desktop-wallpaper/84/283/desktop-wallpaper-wolf-of-wall-street-list-the-wolf-of-wall-street-thumbnail.jpg",
        "Metascore": "75",
        "imdbRating": "8.2",
        "imdbVotes": "786,985",
        "imdbID": "tt0993846",
        "Type": "movie",
        "Response": "True",
        "Images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg"
        ]
      },
      {Title: "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        format:"3D",
        "Genre": ["Adventure", "Drama", "Sci-Fi"],
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": ["English"],
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 134 nominations.",
        "Poster": "https://picfiles.alphacoders.com/172/thumb-172823.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "937,412",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True",
        "Images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
        ]
      },
      {Title: "Game of Thrones",
        "Year": "2011–",
        "Rated": "TV-MA",
        "Released": "17 Apr 2011",
        format:"3D",
        "Runtime": "56 min",
        "Genre": ["Adventure", "Drama", "Fantasy"],
        "Director": "N/A",
        "Writer": "David Benioff, D.B. Weiss",
        "Actors": "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
        "Plot": "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
        "Language": ["Hindi"],
        "Country": "USA, UK",
        "Awards": "Won 1 Golden Globe. Another 185 wins & 334 nominations.",
        "Poster": "https://wallpaperaccess.com/full/888128.jpg",
        "Metascore": "N/A",
        "imdbRating": "9.5",
        "imdbVotes": "1,046,830",
        "imdbID": "tt0944947",
        "Type": "series",
        "totalSeasons": "7",
        "Response": "True",
        "Images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BZjZkN2M5ODgtMjQ2OC00ZjAxLWE1MjMtZDE0OTNmNGM0NWEwXkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMDk4Y2Y1MDAtNGVmMC00ZTlhLTlmMmQtYjcyN2VkNzUzZjg2XkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZjNWIzMzQtZWZjYy00ZTkwLWJiMTYtOWRkZDBhNWJhY2JmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
        ]
      },
      {Title:"Vikings",
        "Year": "2013–",
        "Rated": "TV-14",
        "Released": "03 Mar 2013",
        "Runtime": "44 min",
        "Genre": ["Action", "Drama","History"],
        "Director": "N/A",
        format:"3D",
        "Writer": "Michael Hirst",
        "Actors": "Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick",
        "Plot": "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
        "Language": ["English", "Hindi", "Tamil",'Punjabi'],
        "Country": "Ireland, Canada",
        "Awards": "Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.",
        "Poster": "https://w0.peakpx.com/wallpaper/290/26/HD-wallpaper-vikings-ragnar-viking-thumbnail.jpg",
        "Metascore": "N/A",
        "imdbRating": "8.6",
        "imdbVotes": "198,041",
        "imdbID": "tt2306299",
        "Type": "series",
        "totalSeasons": "5",
        "Response": "True",
        "Images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU2NDcxODMyOF5BMl5BanBnXkFtZTgwNDAzOTI2ODE@._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzIzOTU2M15BMl5BanBnXkFtZTgwODMzMTkyODE@._V1_SY1000_SX1500_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTQ2MDA3NF5BMl5BanBnXkFtZTgwODkxMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg"
        ]
      },
      {Title:"Gotham",
        "Year": "2014",
        "Rated": "TV-14",
        "Released": "01 Aug 2014",
        "Runtime": "42 min",
        "Genre": ["Action", "Crime", "Drama"],
        "Director": "N/A",
        format:"2D",
        "Writer": "Bruno Heller",
        "Actors": "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
        "Plot": "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
        "Language":['Punjabi'],
        "Country": "USA",
        "Awards": "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
        "Poster": "https://upload.wikimedia.org/wikipedia/en/9/9e/Gotham_%28season_5%29.jpg",
        "Metascore": "N/A",
        "imdbRating": "8.0",
        "imdbVotes": "133,375",
        "imdbID": "tt3749900",
        "Type": "series",
        "totalSeasons": "3",
        "Response": "True",
        "Images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5OTExMTIwNF5BMl5BanBnXkFtZTgwMjI5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDY2NjA3MzBeQTJeQWpwZ15BbWU4MDU0MDkzODgx._V1_SX1499_CR0,0,1499,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MzYzNDgzOV5BMl5BanBnXkFtZTgwMjQwOTM4ODE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg"
        ]
      },
     
      {Title:"Narcos",
        "Year": "2015–",
        "Rated": "TV-MA",
        "Released": "28 Aug 2015",
        "Runtime": "49 min",
        "Genre": ["Biography", "Crime", "Drama"],
        "Director": "N/A",
        format:"3D",
        "Writer": "Carlo Bernard, Chris Brancato, Doug Miro, Paul Eckstein",
        "Actors": "Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie",
        "Plot": "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
        "Language":[ "English", "Spanish"],
        "Country": "USA",
        "Awards": "Nominated for 2 Golden Globes. Another 4 nominations.",
        "Poster": "https://cdnb.artstation.com/p/assets/images/images/031/260/257/large/abhishek-mandal-narcos.jpg?1603109600",
        "Metascore": "N/A",
        "imdbRating": "8.9",
        "imdbVotes": "118,680",
        "imdbID": "tt2707408",
        "Type": "series",
        "totalSeasons": "2",
        "Response": "True",
         "Images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMDkyOTEyNV5BMl5BanBnXkFtZTgwNjY3Mjc3OTE@._V1_SY1000_SX1500_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NDUwMTU2NV5BMl5BanBnXkFtZTgwNTI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BODA1NjAyMTQ3Ml5BMl5BanBnXkFtZTgwNjI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NzQ0OTAwNl5BMl5BanBnXkFtZTgwMDAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
        ]
      },
    
      {
        "ComingSoon": true,
        Title: "Rogue One: A Star Wars Story",
        "Year": "2016",
        "Rated": "N/A",
        "Released": "16 Dec 2016",
        "Runtime": "N/A",
        format:"3D",
        "Genre": ["Action", "Adventure", "Sci-Fi"],
        "Director": "Gareth Edwards",
        "Writer": "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)",
        "Actors": "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
        "Plot": "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
        "Language": ["English"],
        "Country": "USA",
        "Awards": "1 nomination.",
        "Poster": "https://lumiere-a.akamaihd.net/v1/images/5adfd0618fdfb900016b5ca6-image_64bc2f8e.jpeg",
        "Metascore": "N/A",
        "imdbRating": "N/A",
        "imdbVotes": "N/A",
        "imdbID": "tt3748528",
        "Type": "movie",
        "Response": "True",
    
      },
      {
        "ComingSoon": true,
        Title:"Assassin's Creed",
        "Year": "2016",
        "Rated": "N/A",
        "Released": "21 Dec 2016",
        "Runtime": "N/A",
        format:"4DX",
        "Genre": ["Action", "Adventure", "Fantasy"],
        "Director": "Justin Kurzel",
        "Writer": "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)",
        "Actors": "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons",
        "Plot": "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
        "Language":[ "Hindi"],
        "Country": "UK, France, USA, Hong Kong",
        "Awards": "N/A",
        "Poster": "https://rukminim1.flixcart.com/image/1920/2341/l12h1u80/poster/m/2/b/small-assassins-creed-multicolour-photo-paper-print-poster-original-imagcqfvr39uknw4.jpeg?q=90",
        "Metascore": "N/A",
        "imdbRating": "N/A",
        "imdbVotes": "N/A",
        "imdbID": "tt2094766",
        "Type": "movie",
        "Response": "True",
       
      },
      {
        "ComingSoon": true,
        Title:"Luke Cage",
        "Year": "2016",
        "Rated": "TV-MA",
        "Released": "30 Sep 2016",
        "Runtime": "55 min",
        "Genre": ["Action", "Crime", "Drama"],
        "Director": "N/A",
        "Writer": "Cheo Hodari Coker",
        "Actors": "Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey",
        "Plot": "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
        "Language":[ "English"],
        "Country": "USA",
        "Awards": "N/A",
        "Poster": "https://picfiles.alphacoders.com/545/thumb-545294.jpg",
        "Metascore": "N/A",
        "imdbRating": "N/A",
        format:"2D",
        "Type": "series",
        "totalSeasons": "1",
        "Response": "True",
     
      }
    

]
let tickethall=[]
let ticket=[]


let theater=[{room:
  "Cinepolis: DLF Place, Saket",location:"NCR",
 time:[
  {Price:90,
      time:" 9:00 AM",t:"Morning"},
      {Price:230,
       time:"12:00 AM",t:"Morning"},
     
      {Price:290,
       time:" 1:15 PM",t:"Afternoon"},
      {Price:290,
       time:"3:45 PM",t:"Afternoon"}
      ,
      {Price:390,
       time:"5:45 PM",t:"Evening"}
      ,
      {Price:240,
       time:"10:20  PM",t:"Night"}],},
  {room:
      "Cinepolis: Janak Cinema, New Delhi",location:"NCR",
     time:[
      {Price:130,
          time:" 9:00 AM",t:"Morning"},
          {Price:230,
           time:"12:00 AM",t:"Morning"},
         
          {Price:290,
           time:" 1:15 PM",t:"Afternoon"},
          {Price:290,
           time:"3:45 PM",t:"Afternoon"}
          ,
          {Price:390,
           time:"5:45 PM",t:"Evening"}
          ,
          {Price:240,
           time:"10:20  PM",t:"Night"}],},
      {room: "Cinepolis:Pacific NSP2, Delhi",location:"NCR",
         time:[
         
              {Price:390,
               time:"5:45 PM",t:"Evening"}
]},
          {room:"Cinepolis:Savitri Complex GK2",location:"NCR",
             time:[
              {Price:130,
                  time:" 9:00 AM",t:"Morning"},
                  {Price:230,
                   time:"12:00 AM",t:"Morning"},
                 
                  {Price:290,
                   time:" 1:15 PM",t:"Afternoon"},
                  {Price:290,
                   time:"3:45 PM",t:"Afternoon"}
                  ,
                 
                  {Price:240,
                   time:"10:20  PM",t:"Night"}],},
      {room: "Cinepolis: Unity One Mall Rohini, Delhi",location:"NCR",
         time:[
          {Price:130,
              time:" 9:00 AM",t:"Morning"},
              {Price:230,
               time:"12:00 AM",t:"Morning"},
             
             
              {Price:390,
               time:"5:45 PM",t:"Evening"}
              ,
              {Price:240,
               time:"10:20  PM",t:"Night"}],},
         {room: "PVR Acropolis Ahmedabad",location:"Ahmedabad",
             time:[
              {Price:130,
                  time:" 9:00 AM",t:"Morning"},
                  {Price:230,
                   time:"12:00 AM",t:"Morning"},
                 
                  {Price:290,
                   time:" 1:15 PM",t:"Afternoon"},
                  {Price:290,
                   time:"3:45 PM",t:"Afternoon"}
                  ,
                  {Price:390,
                   time:"5:45 PM",t:"Evening"}
                  ,
                  {Price:240,
                   time:"10:20  PM",t:"Night"}],},
              {room:
                  "PVR Motera Ahmedabad",location:"Ahmedabad",
                 time:[
                  {Price:130,
                      time:" 9:00 AM",t:"Morning"},
                      {Price:230,
                       time:"12:00 AM",t:"Morning"},
                     
                      {Price:290,
                       time:" 1:15 PM",t:"Afternoon"},
                      {Price:290,
                       time:"3:45 PM",t:"Afternoon"}
                      ,
                      {Price:390,
                       time:"5:45 PM",t:"Evening"}
                      ,
                      {Price:240,
                       time:"10:20  PM",t:"Night"}],},
                  {room: "PVR Devarc Mall, Ahmedabad",location:"Ahmedabad",
                     time:[
                      {Price:130,
                          time:" 9:00 AM",t:"Morning"},
                          {Price:230,
                           time:"12:00 AM",t:"Morning"},
                         
                          {Price:290,
                           time:" 1:15 PM",t:"Afternoon"},
                          {Price:290,
                           time:"3:45 PM",t:"Afternoon"}
                          ,
                          {Price:390,
                           time:"5:45 PM",t:"Evening"}
                          ,
                          {Price:240,
                           time:"10:20  PM",t:"Night"}],},
                      {room:"Cinemax Shiv Ahmedabad",location:"Ahmedabad",
                         time:[
                          {Price:130,
                              time:" 9:00 AM",t:"Morning"},
                              {Price:230,
                               time:"12:00 AM",t:"Morning"},
                             
                              {Price:290,
                               time:" 1:15 PM",t:"Afternoon"},
                              {Price:290,
                               time:"3:45 PM",t:"Afternoon"}
                              ,
                              {Price:390,
                               time:"5:45 PM",t:"Evening"}
                              ,
                              {Price:240,
                               time:"10:20  PM",t:"Night"}],},
                  {room: "Connplex Smart Theatre Prahladnagar",location:"Ahmedabad",
                     time:[
                      {Price:130,
                          time:" 9:00 AM",t:"Morning"},
                          {Price:230,
                           time:"12:00 AM",t:"Morning"},
                         
                          {Price:290,
                           time:" 1:15 PM",t:"Afternoon"},
                          {Price:290,
                           time:"3:45 PM",t:"Afternoon"}
                          ,
                          {Price:390,
                           time:"5:45 PM",t:"Evening"}
                          ,
                          {Price:240,
                           time:"10:20  PM",t:"Night"}]},{room: "PVR Acropolis Chennai",location:"Chennai",
                      time:[
                          {Price:130,
                              time:" 9:00 AM",t:"Morning"},
                              {Price:230,
                               time:"12:00 AM",t:"Morning"},
                             
                              {Price:290,
                               time:" 1:15 PM",t:"Afternoon"},
                              {Price:290,
                               time:"3:45 PM",t:"Afternoon"}
                              ,
                              {Price:390,
                               time:"5:45 PM",t:"Evening"}
                              ,
                              {Price:240,
                               time:"10:20  PM",t:"Night"}],},
                       {room:
                           "PVR Motera Chennai",location:"Chennai",
                          time:[
                              {Price:130,
                                  time:" 9:00 AM",t:"Morning"},
                                  {Price:230,
                                   time:"12:00 AM",t:"Morning"},
                                 
                                  {Price:290,
                                   time:" 1:15 PM",t:"Afternoon"},
                                  {Price:290,
                                   time:"3:45 PM",t:"Afternoon"}
                                  ,
                                  {Price:390,
                                   time:"5:45 PM",t:"Evening"}
                                  ,
                                  {Price:240,
                                   time:"10:20  PM",t:"Night"}],},
                           {room: "PVR Devarc Mall, Chennai",location:"Chennai",
                              time:[
                                  {Price:130,
                                      time:" 9:00 AM",t:"Morning"},
                                      {Price:230,
                                       time:"12:00 AM",t:"Morning"},
                                     
                                      {Price:290,
                                       time:" 1:15 PM",t:"Afternoon"},
                                      {Price:290,
                                       time:"3:45 PM",t:"Afternoon"}
                                      ,
                                      {Price:390,
                                       time:"5:45 PM",t:"Evening"}
                                      ,
                                      {Price:240,
                                       time:"10:20  PM",t:"Night"}],},
                               {room:"Cinemax Shiv Chennai",location:"Chennai",
                                  time:[
                                      {Price:130,
                                          time:" 9:00 AM",t:"Morning"},
                                          {Price:230,
                                           time:"12:00 AM",t:"Morning"},
                                         
                                          {Price:290,
                                           time:" 1:15 PM",t:"Afternoon"},
                                          {Price:290,
                                           time:"3:45 PM",t:"Afternoon"}
                                          ,
                                          {Price:390,
                                           time:"5:45 PM",t:"Evening"}
                                          ,
                                          {Price:240,
                                           time:"10:20  PM",t:"Night"}],},
                           {room: "Connplex Smart Theatre Prahladnagar",location:"Chennai",
                              time:[
                                  {Price:130,
                                      time:" 9:00 AM",t:"Morning"},
                                      {Price:230,
                                       time:"12:00 AM",t:"Morning"},
                                     
                                      {Price:290,
                                       time:" 1:15 PM",t:"Afternoon"},
                                      {Price:290,
                                       time:"3:45 PM",t:"Afternoon"}
                                      ,
                                      {Price:390,
                                       time:"5:45 PM",t:"Evening"}
                                      ,
                                      {Price:240,
                                       time:"10:20  PM",t:"Night"}]},{room: "PVR Acropolis Banglore",location:"Banglore",
                               time:[
                                  {Price:130,
                                      time:" 9:00 AM",t:"Morning"},
                                      {Price:230,
                                       time:"12:00 AM",t:"Morning"},
                                     
                                      {Price:290,
                                       time:" 1:15 PM",t:"Afternoon"},
                                      {Price:290,
                                       time:"3:45 PM",t:"Afternoon"}
                                      ,
                                      {Price:390,
                                       time:"5:45 PM",t:"Evening"}
                                      ,
                                      {Price:240,
                                       time:"10:20  PM",t:"Night"}],},
                                {room:
                                    "PVR Motera Banglore",location:"Banglore",
                                   time:[
                                      {Price:130,
                                          time:" 9:00 AM",t:"Morning"},
                                          {Price:230,
                                           time:"12:00 AM",t:"Morning"},
                                         
                                          {Price:290,
                                           time:" 1:15 PM",t:"Afternoon"},
                                          {Price:290,
                                           time:"3:45 PM",t:"Afternoon"}
                                          ,
                                          {Price:390,
                                           time:"5:45 PM",t:"Evening"}
                                          ,
                                          {Price:240,
                                           time:"10:20  PM",t:"Night"}],},
                                    {room: "PVR Devarc Mall, Banglore",location:"Banglore",
                                       time:[
                                          {Price:130,
                                              time:" 9:00 AM",t:"Morning"},
                                              {Price:230,
                                               time:"12:00 AM",t:"Morning"},
                                             
                                              {Price:290,
                                               time:" 1:15 PM",t:"Afternoon"},
                                              {Price:290,
                                               time:"3:45 PM",t:"Afternoon"}
                                              ,
                                              {Price:390,
                                               time:"5:45 PM",t:"Evening"}
                                              ,
                                              {Price:240,
                                               time:"10:20  PM",t:"Night"}],},
                                        {room:"Cinemax Shiv Banglore",location:"Banglore",
                                           time:[
                                              {Price:130,
                                                  time:" 9:00 AM",t:"Morning"},
                                                  {Price:230,
                                                   time:"12:00 AM",t:"Morning"},
                                                 
                                                  {Price:290,
                                                   time:" 1:15 PM",t:"Afternoon"},
                                                  {Price:290,
                                                   time:"3:45 PM",t:"Afternoon"}
                                                  ,
                                                  {Price:390,
                                                   time:"5:45 PM",t:"Evening"}
                                                  ,
                                                  {Price:240,
                                                   time:"10:20  PM",t:"Night"}],},
                                    {room: "Connplex Smart Theatre ",location:"Banglore",
                                       time:[
                                          {Price:130,
                                              time:" 9:00 AM",t:"Morning"},
                                              {Price:230,
                                               time:"12:00 AM",t:"Morning"},
                                             
                                              {Price:290,
                                               time:" 1:15 PM",t:"Afternoon"},
                                              {Price:290,
                                               time:"3:45 PM",t:"Afternoon"}
                                              ,
                                              {Price:390,
                                               time:"5:45 PM",t:"Evening"}
                                              ,
                                              {Price:240,
                                               time:"10:20  PM",t:"Night"}]},{room: "PVR Acropolis Mumbai",location:"Mumbai",
                                        time:[
                                          {Price:130,
                                              time:" 9:00 AM",t:"Morning"},
                                              {Price:230,
                                               time:"12:00 AM",t:"Morning"},
                                             
                                              {Price:290,
                                               time:" 1:15 PM",t:"Afternoon"},
                                              {Price:290,
                                               time:"3:45 PM",t:"Afternoon"}
                                              ,
                                              {Price:390,
                                               time:"5:45 PM",t:"Evening"}
                                              ,
                                              {Price:240,
                                               time:"10:20  PM",t:"Night"}],},
                                         {room:
                                             "PVR Motera Mumbai",location:"Mumbai",
                                            time:[
                                              {Price:130,
                                                  time:" 9:00 AM",t:"Morning"},
                                                  {Price:230,
                                                   time:"12:00 AM",t:"Morning"},
                                                 
                                                  {Price:290,
                                                   time:" 1:15 PM",t:"Afternoon"},
                                                  {Price:290,
                                                   time:"3:45 PM",t:"Afternoon"}
                                                  ,
                                                  {Price:390,
                                                   time:"5:45 PM",t:"Evening"}
                                                  ,
                                                  {Price:240,
                                                   time:"10:20  PM",t:"Night"}],},
                                             {room: "PVR Devarc Mall, Mumbai",location:"Mumbai",
                                                time:[
                                                  {Price:130,
                                                      time:" 9:00 AM",t:"Morning"},
                                                      {Price:230,
                                                       time:"12:00 AM",t:"Morning"},
                                                     
                                                      {Price:290,
                                                       time:" 1:15 PM",t:"Afternoon"},
                                                      {Price:290,
                                                       time:"3:45 PM",t:"Afternoon"}
                                                      ,
                                                      {Price:390,
                                                       time:"5:45 PM",t:"Evening"}
                                                      ,
                                                      {Price:240,
                                                       time:"10:20  PM",t:"Night"}],},
                                                 {room:"Cinemax Shiv Mumbai",location:"Mumbai",
                                                    time:[
                                                      {Price:130,
                                                          time:" 9:00 AM",t:"Morning"},
                                                          {Price:230,
                                                           time:"12:00 AM",t:"Morning"},
                                                         
                                                          {Price:290,
                                                           time:" 1:15 PM",t:"Afternoon"},
                                                          {Price:290,
                                                           time:"3:45 PM",t:"Afternoon"}
                                                          ,
                                                          {Price:390,
                                                           time:"5:45 PM",t:"Evening"}
                                                          ,
                                                          {Price:240,
                                                           time:"10:20  PM",t:"Night"}],},
                                             {room: "Connplex Smart Theatre Prahladnagar",location:"Mumbai",
                                                time:[
                                                  {Price:130,
                                                      time:" 9:00 AM",t:"Morning"},
                                                      {Price:230,
                                                       time:"12:00 AM",t:"Morning"},
                                                     
                                                      {Price:290,
                                                       time:" 1:15 PM",t:"Afternoon"},
                                                      {Price:290,
                                                       time:"3:45 PM",t:"Afternoon"}
                                                      ,
                                                      {Price:390,
                                                       time:"5:45 PM",t:"Evening"}
                                                      ,
                                                      {Price:240,
                                                       time:"10:20  PM",t:"Night"}]},{room: "PVR Acropolis Hyderabad",location:"Hyderabad",
                                                 time:[
                                                  {Price:130,
                                                      time:" 9:00 AM",t:"Morning"},
                                                      {Price:230,
                                                       time:"12:00 AM",t:"Morning"},
                                                     
                                                      {Price:290,
                                                       time:" 1:15 PM",t:"Afternoon"},
                                                      {Price:290,
                                                       time:"3:45 PM",t:"Afternoon"}
                                                      ,
                                                      {Price:390,
                                                       time:"5:45 PM",t:"Evening"}
                                                      ,
                                                      {Price:240,
                                                       time:"10:20  PM",t:"Night"}],},
                                                  {room:
                                                      "PVR Motera Hyderabad",location:"Hyderabad",
                                                     time:[
                                                      {Price:130,
                                                          time:" 9:00 AM",t:"Morning"},
                                                          {Price:230,
                                                           time:"12:00 AM",t:"Morning"},
                                                         
                                                          {Price:290,
                                                           time:" 1:15 PM",t:"Afternoon"},
                                                          {Price:290,
                                                           time:"3:45 PM",t:"Afternoon"}
                                                          ,
                                                          {Price:390,
                                                           time:"5:45 PM",t:"Evening"}
                                                          ,
                                                          {Price:240,
                                                           time:"10:20  PM",t:"Night"}],},
                                                      {room: "PVR Devarc Mall, Hyderabad",location:"Hyderabad",
                                                         time:[
                                                          {Price:130,
                                                              time:" 9:00 AM",t:"Morning"},
                                                              {Price:230,
                                                               time:"12:00 AM",t:"Morning"},
                                                             
                                                              {Price:290,
                                                               time:" 1:15 PM",t:"Afternoon"},
                                                              {Price:290,
                                                               time:"3:45 PM",t:"Afternoon"}
                                                              ,
                                                              {Price:390,
                                                               time:"5:45 PM",t:"Evening"}
                                                              ,
                                                              {Price:240,
                                                               time:"10:20  PM",t:"Night"}],},
                                                          {room:"Cinemax Shiv Hyderabad",location:"Hyderabad",
                                                          time:[
                                                              {Price:130,
                                                                  time:" 9:00 AM",t:"Morning"},
                                                                  {Price:230,
                                                                   time:"12:00 AM",t:"Morning"},
                                                                 
                                                                  {Price:290,
                                                                   time:" 1:15 PM",t:"Afternoon"},
                                                                  {Price:290,
                                                                   time:"3:45 PM",t:"Afternoon"}
                                                                  ,
                                                                  {Price:390,
                                                                   time:"5:45 PM",t:"Evening"}
                                                                  ,
                                                                  {Price:240,
                                                                   time:"10:20  PM",t:"Night"}],},
                                                      {room: "Connplex Smart Theatre ",location:"Hyderabad",
                                                         time:[
                                                          {Price:90,
                                                              time:"9:00 AM",t:"Morning"},
                                                              {Price:230,
                                                               time:"12:00 AM",t:"Morning"},
                                                             
                                                              {Price:290,
                                                               time:" 1:15 PM",t:"Afternoon"},
                                                              {Price:290,
                                                               time:"3:45 PM",t:"Afternoon"}
                                                              ,
                                                              
                                                              {Price:240,
                                                               time:"10:20  PM",t:"Night"}]}],
bankList = ["SBI", "ICICI", "HDFC", "AXIS", "DBS", "GBI"];
amountList = ["<10000", ">10000"];


app.get("/home/location/Movies/:q", function(req, res) {

 let q=req.params.q
 let data=Movies.find((st)=>st.Title==q)
console.log("data",data)

console.log(q)
  res.send(
data
  );
});
app.get("/Movies", function(req, res) {
 

  res.send(
Movies
  );
});

app.get("/HAll", function(req, res) {
 

  res.send(
theater
  );
});


app.post("/login", function(req, res) {
  var email = req.body.email;
  
  let custRec= { email:email,role:"customer"}
  customers.length>0?customers.splice(0,1,custRec):customers.push(custRec)
  
console.log(email)
  
            res.send(custRec);
});
app.post("/ticketdata", function(req, res) {

  var body = req.body;
console.log("body",body)

  tickethall.length>0?tickethall.splice(0,1,body):tickethall.push(body)
console.log("tickethall",tickethall)
  
            res.send(tickethall);
          
});
app.post("/ticket", function(req, res) {

  var body = req.body;
console.log("body",body)

ticket.length>0?ticket.splice(0,1,body):ticket.push(body)
console.log("ticket",ticket)
  
            res.send(ticket);
          
});
app.put("/ticketdata", function(req, res) {

  var body = req.body;
console.log("body",body)

 theater[0]=body
console.log("tickethall",tickethall)
  
            res.send(tickethall);
          
});
app.get("/ticketdata", function(req, res) {


  
            res.send(tickethall);
});
app.get("/ticket", function(req, res) {


  
            res.send(ticket);
});
app.post("/userdata", function(req, res) {
  var body = req.body;
  var email = req.body.email;

  let find=customers.findIndex((st)=>st.email==email)
  let custRec= {role:"customer",...body}
  customers.length>0?customers.splice(0,1,custRec):[]


 
  console.log(customers)
            res.send(custRec);
});
app.get("/userdata", function(req, res) {

            res.send(customers);
});
app.post("/customerDetails", function(req, res) {
  const custDet = {
    name: req.body.name,
    gender: req.body.gender,
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    state: req.body.state,
    city: req.body.city,
    dob: req.body.dob,
    PAN: req.body.PAN,
  };
  console.log(custDet);
  customerDetails.push(custDet);
  res.send(custDet);
});
app.post("/nomineeDetails", function(req, res) {
  const nominee = {
    name: req.body.name,
    nomineeName: req.body.nomineeName,
    gender: req.body.gender,
    dob: req.body.dob,
    relationship: req.body.relationship,
    jointsignatory:req.body.jointsignatory
  };
  console.log(nominee);
  nomineeDetails.push(nominee);
  res.send(nominee);
});
app.post("/addPayee", function(req, res) {
  var payee = {
    name: req.body.name,
    payeeName: req.body.payeeName,
    IFSC: req.body.IFSC,
    accNumber: req.body.accNumber,
    bankName: req.body.bankName
  };
  if(payee.bankName==='')
  payee.bankName= 'GBI'
  console.log(payee);
  payeeList.unshift(payee);
  res.send(payee);
});
app.get("/getPayees/:username", function(req, res) {
  var user = req.params.username;
  var list = payeeList.filter(function(item) {
    return item.name === user;
  });
  console.log(list);
  res.send(list);
});
app.get("/getBanks", function(req, res) {
  res.send(bankList);
});
app.get("/statecity", function(req, res) {
  
  state_arr.map(function(item)
  {
    var arrMade= item.cityArr.split("|");
  console.log(arrMade);
    var body={stateName:item.stateName,cityArr:arrMade}
    statecity.push(body)
  })
  res.send(statecity);

});

app.post("/postCheque", function(req, res) {
  const cheque = {
    name: req.body.name,
    chequeNumber: req.body.chequeNumber,
    bankName: req.body.bankName,
    branch: req.body.branch,
    amount: req.body.amount
  };
  allCheques.unshift(cheque);
  res.send(cheque);
});
app.post("/postNet", function(req, res) {
  const net = {
    name: req.body.name,
    payeeName: req.body.payeeName,
    comment: req.body.comment,
    amount: req.body.amount,
    bankName: req.body.bankName
  };
  allNetTransactions.unshift(net);
  res.send(net);
});
app.get("/getAllCheques", function(req, res) {
  var bank = req.query.bank;
  let list = [];
  console.log(bank);
  var amt = req.query.amount;
  var amount;
  if (amt) {
    amount = makeAmt(amt);
   // console.log("Amount =", amount);
   // console.log(grtOrLess.charCodeAt(0));
  }

  if (bank != null && amount != null) {
    list = allCheques.filter(function(item) {
      if (grtOrLess.charCodeAt(0) === 62)
        return item.bankName === bank && item.amount > amount;
      if (grtOrLess.charCodeAt(0) === 60)
        return item.bankName === bank && item.amount < amount;
    });
  } else if (bank != null) {
    console.log("Inside only bank");
    list = allCheques.filter(function(item) {
     // console.log(item.bankName);
      return item.bankName === bank;
    });
  } else if (amount != null) {
    list = allCheques.filter(function(item) {
      if (grtOrLess.charCodeAt(0) === 62) return item.amount > amount;
      if (grtOrLess.charCodeAt(0) === 60) return item.amount < amount;
    });
  } else {
    list = allCheques;
  }
  let resArr = pagination(list, parseInt(req.query.page));
console.log(list)
  res.send({
    page: parseInt(req.query.page),
    items: list,
    totalItems: list.length,
    totalNum: list.length
  });
});
app.get("/getAllNetBankings", function(req, res) {
  var bank = req.query.bank;
  var amt = req.query.amount;
  var amount;
  var list = [];
  if (amt) {
    amount = makeAmt(amt);
    console.log("Amount =", amount);
    console.log(grtOrLess.charCodeAt(0));
  }

  if (bank != null && amount != null) {
    list = allNetTransactions.filter(function(item) {
      if (grtOrLess.charCodeAt(0) === 62)
        return item.bankName === bank && item.amount > amount;
      if (grtOrLess.charCodeAt(0) === 60)
        return item.bankName === bank && item.amount < amount;
    });
  } else if (bank != null) {
    list = allNetTransactions.filter(function(item) {
      return item.bankName === bank;
    });
  } else if (amount != null) {
    list = allNetTransactions.filter(function(item) {
      if (grtOrLess.charCodeAt(0) === 62) return item.amount > amount;
      if (grtOrLess.charCodeAt(0) === 60) return item.amount < amount;
    });
  } else {
    list = allNetTransactions;
  }
  let resArr = pagination(list, parseInt(req.query.page));
console.log(list)
  res.json({
    page: parseInt(req.query.page),
    items: list,
    totalItems: list.length,
    totalNum: list.length
  });
});
app.get("/getChequeByName/:username", function(req, res) {
  var user = req.params.username;
  var list = allCheques.filter(function(item) {
    return item.name === user;
  });
  console.log(list);

  let resArr = pagination(list, parseInt(req.query.page));

  res.json({
    page: parseInt(req.query.page),
    items: list,
    totalItems: list.length,
    totalNum: list.length
  });
});
app.get("/getNetBankingByName/:username", function(req, res) {
  var user = req.params.username;
  console.log(user);
  var list = allNetTransactions.filter(function(item) {
    console.log("item", item.name);
    return item.name === user;
  });
  console.log(list);
  let resArr = pagination(list, parseInt(req.query.page));

  res.json({
    page: parseInt(req.query.page),
    items: list,
    totalItems: list.length,
    totalNum: list.length
  });
});
app.get("/getAmount", function(req, res) {
  res.send(amountList);
});

app.get("/getNominee/:username", function(req, res) {
  var user = req.params.username;
  console.log("Username", user);
  const nomineeObj = nomineeDetails.find(function(item) {
    return item.name === user;
  });
  console.log(nomineeObj);
  res.send(nomineeObj);
});
app.get("/getCustomer/:username", function(req, res) {
  var user = req.params.username;
  console.log("Username", user);
  const custObj = customerDetails.find(function(item) {
    return item.name === user;
  });
  console.log(custObj);
  res.send(custObj);
});

app.listen(port, () => console.log(`Node app listening on port ${port}!`));

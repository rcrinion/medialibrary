/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */


    var Item = require('../api/medialib/medialib.model');

    Item.find({}).remove(function() {
      Item.create( 
  { id: 1,
    title: "The eye of the world",
    artist: "Robert Jordan",
    format: "Book",
    location: "Shelf 1 Living room",
    status: "Available",
    genre: "Fantasy",
    imageUrl: "images/eye_of_the_world.jpg",
    snippet: "The Eye Of The World: Book 1 of the Wheel of Time",
    artistweb: "http://www.dragonmount.com",
    details :{}
  },
  {   
    id: 3,
    title: "The dragon reborn",
    artist: "Robert Jordan",
    format: "Book",
    location: "Shelf 1 Living room",
    status: "On Loan",
    genre: "Fantasy",
    imageUrl: "images/dragon_reborn.jpg",
    snippet: "The Dragon Reborn: Book 3 of the Wheel of Time",
    artistweb: "http://www.dragonmount.com",
        details: 
        {
            frontcover: "",
            plotsummary: "Ba'alzamon presides over a clandestine meeting. In addition to Forsaken and Darkfriends (the antagonist's known subordinates), the meeting includes two Aes Sedai, one later identified as Liandrin.",
            format: "Paperback"
        }
  },
  {
    id: 2,
    title: "The great hunt",
    artist: "Robert Jordan",
    format: "Book",
    location: "Shelf 1 Living room",
    status: "Available", 
    genre: "Fantasy",
    imageUrl: "images/great_hunt.jpg",
    snippet: "The Great Hunt: Book 2 of the Wheel of Time",
    artistweb: "http://www.dragonmount.com"
  },
  {
    id: 4,
    title: "The shadow rising",
    artist: "Robert Jordan",
    format: "Book",
    location: "Shelf 1 Living room",
    status: "Available", 
    genre: "Fantasy",
    imageUrl: "images/shadow_rising.jpg",
    snippet: "The Shadow Rising: Book 4 of the Wheel of Time",
    artistweb: "http://www.dragonmount.com",
    details: 
        {
            frontcover: "",
            plotsummary: "",
            format: ""
        }
  },
  {
    id: 5,
    title: "The Fires Of Heaven",
    artist: "Robert Jordan",
    format: "Book",
    location: "Shelf 1 Living room",
    status: "Available", 
    genre: "Fantasy",
    imageUrl: "images/fires_of_heaven.jpg",
    snippet: "The Fires Of Heaven: Book 5 of the Wheel of Time",
    artistweb: "http://www.dragonmount.com",
    details: 
        {
            frontcover: "",
            plotsummary: "",
            format: ""
        }
  },
  {
    id: 6,
    title: "Parallel Lines",
    artist: "Blondie",
    format: "Music",
    location: "Box 2",
    status: "Available", 
    genre: "Pop",
    imageUrl: "images/parallel_lines.jpg",
    snippet: "Parallel Lines is a Masterpiece.",
    artistweb: "",
    tracks:   [
      	{
                            tracknum: 1,
                            tracktitle: "Hanging on the Telephone",
                            trackcomposer: "Jack Lee",
                            tracktime: "2:17",
                            trackartist: "Blondie"
                        },  
                        {
                            tracknum: 2,
                            tracktitle: "One Way or Another",
                            trackcomposer: "Deborah Harry, Nigel Harrison",
                            tracktime: "3:31",
                            trackartist: "Blondie"
                        },
                        {
                            tracknum: 3,
                            tracktitle: "Picture This",
                            trackcomposer: "Harry, Chris Stein, Jimmy Destri",
                            tracktime: "2:53",
                            trackartist: "Blondie"
                        },
                        {
                            tracknum: 4,
                            tracktitle: "Fade Away and Radiate",
                            trackcomposer: "Stein",
                            tracktime: "3:57",
                            trackartist: "Blondie"                            
                        },
                        {
                            tracknum: 5,
                            tracktitle: "Pretty Baby",
                            trackcomposer: "Harry, Stein",
                            tracktime: "3:16",
                            trackartist: "Blondie"                            
                        },
                        {
                            tracknum: 6,
                            tracktitle: "I Know but I Don't Know",
                            trackcomposer: "Frank Infante",
                            tracktime: "3:53",
                            trackartist: "Blondie"                            
                        },
                    	{
                            tracknum: 7,
                            tracktitle: "11:59",
                            trackcomposer: "Destri",
                            tracktime: "3:19",
                            trackartist: "Blondie"                            
                        },
                        {
                            tracknum: 8,
                            tracktitle: "Will Anything Happen?",
                            trackcomposer: "Jack Lee",
                            tracktime: "2:55",
                            trackartist: "Blondie"                            
                        },
                        {
                            tracknum: 9,
                            tracktitle: "Sunday Girl",
                            trackcomposer: "Stein",
                            tracktime: "3:01",
                            trackartist: "Blondie"                            
                        },
                        {
                            tracknum: 10,
                            tracktitle: "Heart of Glass",
                            trackcomposer: "Harry, Stein",
                            tracktime: "3:54",
                            trackartist: "Blondie"                            
                        },
                        {
                            tracknum: 11,
                            tracktitle: "I'm Gonna Love You Too",
                            trackcomposer: "Joe B. Mauldin, Niki Sullivan, Norman Petty",
                            tracktime: "2:03",
                            trackartist: "Blondie"                            
                        },
                        {
                            tracknum: 12,
                            tracktitle: "Just Go Away",
                            trackcomposer: "Harry",
                            tracktime: "3:21",
                            trackartist: "Blondie"                            
                        }                       
                    ]
  },
  {
    id: 7,
    title: "Chronicle One",
    artist: "Creedence Clearwater Revival",
    format: "Music",
    location: "Box 4",
    status: "Available", 
    genre: "Rock",
    imageUrl: "images/chronicle.jpg",
    snippet: "CCR is such a great band and they made dozens of instant classics.",
    artistweb: "",
    tracks:   [
                    {       tracknum: 1,
                            tracktitle: "Susie Q",
                            trackcomposer: "Dale Hawkins, Stan Lewis, Eleanor Broadwater",
                            tracktime: "4:36",
                            trackartist: "Creedence Clearwater Revival"}
                    ]
  },
  {
    id: 8,
    title: "Lord of the Rings: the fellowship of the ring",
    artist: "Peter Jackson",
    format: "Film",
    location: "Movies box 3",
    status: "Available", 
    genre: "Fantasy",
    imageUrl: "images/fellowship_of_the_ring.jpg",
    snippet: "A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.",
    artistweb: "",
        details: 
        {
            plotsummary: "An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign! ",
            format: "DVD, MP4"
        }
  },
  {
    id: 9,
    title: "Lord of the Rings: The two towers",
    artist: "Peter Jackson",
    format: "Film",
    location: "Movies box 3",
    status: "Available", 
    genre: "Fantasy",
    imageUrl: "images/two_towers.jpg",
    snippet: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    artistweb: "",
        details: 
        {
            plotsummary: "",
            format: ""
        }
  },
  {   
    id: 10,
    title: "Chronicle Two",
    artist: "Creedence Clearwater Revival",
    format : "Music",
    location : "Box 3",
    status: "Available", 
    genre: "Rock",
    imageUrl: "images/chronicle.jpg" ,
    snippet: "Another twenty of the best hits of Creedence Clearwater Revival on a single CD",
    tracks:   [
                    {
                    }
                    ]
  });

       });
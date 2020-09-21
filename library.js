const library = {
       tracks: { t01: { id: "t01",
                        name: "Code Monkey",
                        artist: "Jonathan Coulton",
                        album: "Thing a Week Three" },
                 t02: { id: "t02",
                        name: "Model View Controller",
                        artist: "James Dempsey",
                        album: "WWDC 2003"},
                 t03: { id: "t03",
                        name: "Four Thirty-Three",
                        artist: "John Cage",
                        album: "Woodstock 1952"}
               },
       playlists: { p01: { id: "p01",
                           name: "Coding Music",
                           tracks: ["t01", "t02"]
                         },
                    p02: { id: "p02",
                           name: "Other Playlist",
                           tracks: ["t03"]
                         }
                  }
     };
     
     /////////////////////////////
     // FUNCTIONS TO IMPLEMENT:
     /////////////////////////////
     
     // prints a list of all playlists, in the form:
     // p01: Coding Music - 2 tracks
     // p02: Other Playlist - 1 tracks
     const printPlaylists = function(library) {
              const lvl1keys = Object.values(library.playlists) // takes the values inside of Library.playslists. This gives back an Array
              const listP01 = lvl1keys[0] //accessed the index zero of the array which is the P01 object
              let tracksLenght = listP01.tracks // created a variable to access the p01 objects tracks array 
              tracksLenght = tracksLenght.length // obtained the lenght of the tracks array and stored it in previously declared variable 
             //console.log(listP01)
             console.log(`${listP01.id}: ${listP01.name} - ${tracksLenght} tracks`) // console.log with string interpolation to get required values


       //       in the example below, I used const to declare my variables as it permits each variable 
       //       to have a more meaninful name and keep it's value if I need to reuse them
             const listP02 = lvl1keys[1] 
             const p02Array = listP02.tracks // created a variable to access the p01 objects tracks array 
             const p02lenght = p02Array.length // obtained the lenght of the tracks array and stored it in previously declared variable 
             //console.log(listP02)
             console.log(`${listP02.id}: ${listP02.name} - ${p02lenght} tracks`) // console.log with string interpolation to get required values
     }

//      printPlaylists(library)
     
     
     // prints a list of all tracks, using the following format:
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     // t03: Four Thirty-Three by John Cage (Woodstock 1952)
     const printTracks = function(library) {
            const lvl1keys = Object.values(library.tracks);
              lvl1keys.map((info) => {
                     console.log(`${info.id}: ${info.name} by ${info.artist} (${info.album})`)
              })

       //      console.log(`[track number]: by [artist] ([album])`)
     
     }
     
//      printTracks(library)
     
     
     // prints a list of tracks for a given playlist, using the following format:
     // p01: Coding Music - 2 tracks
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     const printPlaylist = (playlistId) => {
       //      console.log(typeof playlistId)
            const p01List = playlistId.p01
            console.log(`${p01List.id}: ${p01List.name} - ${p01List.tracks.length} tracks`)
            for (const [key, value] of Object.entries(library.tracks)) {
                   if (key !== "t03") {
                          console.log(`${value.id}: ${value.name} by ${value.artist} (${value.album})`)
                   }

            }
     
     }

//      printPlaylist(library.playlists)
     
     
     // adds an existing track to an existing playlist
     const addTrackToPlaylist = function(trackId, playlistId) {
       playlistId.push(trackId)
       console.log(playlistId)
     }
     ///VERIFY THIS FUNCTION WITH MENTORS *****

     
     // generates a unique id
     // (already implemented: use this for addTrack and addPlaylist)
     const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     }
     
     
     // adds a track to the library
     const addTrack = function(name, artist, album) {
            const newId = generateUid()
            const t04 = { 
                   t04: {
                   Id: newId, 
                   name: name, 
                   artist: artist,
                   album: album 
                     }
              }
              const returnedTarget = Object.assign(library.tracks, t04)
       //      console.log(library.tracks) 
     }
     
     addTrack("mock test Sunday", "Lighthouse torturers", "The end of social life")
     
     
     // adds a playlist to the library
     const addPlaylist = function(name) {
       const newId = generateUid()
       const p03 = { 
              p03: {
              Id: newId, 
              name: name, 
              Tracks: [generateUid, generateUid]
                }
         }
         const returnedTarget = Object.assign(library.playlists, p03)
       console.log(library.playlists) 
     
     }

     addPlaylist("Musica de locos")
     
     // STRETCH:
     // given a query string string, prints a list of tracks
     // where the name, artist or album contains the query string (case insensitive)
     // tip: use "string".search("tri") 
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
     const printSearchResults = function(query) {
     
     }
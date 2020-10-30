const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
  printTracks: function () {
    for (let keys in this.tracks) {
      console.log(
        `${this.tracks[keys].id}: ${this.tracks[keys].name} by ${this.tracks[keys].artist} (${this.tracks[keys].album})`
      );
    }
  },
  printPlaylists: function () {
    for (let keys in this.playlists) {
      {console.log(`${this.playlists[keys].id}: ${this.playlists[keys].name} - ${this.playlists[keys].tracks.length} tracks`);}
    }
  },
  printPlaylist: function (playlistId) {
    console.log(
      `${this.playlists[playlistId].id}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks`
    );
    for (let key of this.playlists[playlistId].tracks) {
      console.log(
        `${this.tracks[key].id}: ${this.tracks[key].name} by ${this.tracks[key].artist} (${this.tracks[key].album})`
      );
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    playlistId.tracks.push(trackId.id);
    console.log("playlistId", playlistId);
  },
  addTrack: function (name, artist, album) {
    const newTrack = {
      id: generateUid(),
      name: name,
      artist: artist,
      album: album,
    };
    this.tracks[newTrack.id] = newTrack;
    console.log(this.tracks);
  },
  addPlaylist: function (name) {
    const allTracks = [];
    for (let track in this.tracks) {
      allTracks.push(track);
    }
    const newPlaylist = { id: generateUid(), name: name, tracks: allTracks };
    this.playlists[newPlaylist.id] = newPlaylist;
    console.log(this.playlists);
  }
};

// *********ALL METHOD TEST CODES*********

library.printTracks();
library.printPlaylists()
library.printPlaylist("p01")
library.addTrackToPlaylist(library.tracks.t03, library.playlists.p01)
library.addTrack("May the force", "Yoda", "Tis a war in Da Stars")
library.addPlaylist("All the Music");




// ************************** BEFORE MAKING FUNCTIONS METHODS INSIDE THE OBJECT***************************

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function () {
  const pLists = library.playlists;
  for (let keys in pLists) {
    console.log(
      `${pLists[keys].id}: ${pLists[keys].name} - ${pLists[keys].tracks.length} tracks`
    );
  }
};

//TEST CODE ---------------------------------------------------
//printPlaylists()

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function () {
  const trackList = library.tracks;
  for (let keys in trackList) {
    console.log(
      `${trackList[keys].id}: ${trackList[keys].name} by ${trackList[keys].artist} (${trackList[keys].album})`
    );
  }
};

//TEST CODE ---------------------------------------------------
//printTracks()

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
  console.log(
    `${this[playlistId].id}: ${this[playlistId].name} - ${this[playlistId].tracks.length} tracks`
  );
  for (let key of this[playlistId].tracks) {
    console.log(
      `${this.tracks[key].id}: ${this.tracks[key].name} by ${this.tracks[key].artist} (${this.tracks[key].album})`
    );
  }
};

//TEST CODE ---------------------------------------------------
// printPlaylist(library.playlists.p01)

// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
  playlistId.tracks.push(trackId.id);
  console.log("playlistId", playlistId);
};

//TEST CODE ---------------------------------------------------
// addTrackToPlaylist(library.tracks.t03, library.playlists.p01)

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)

// adds a track to the library
const addTrack = function (name, artist, album) {
  const tracks = library.tracks;
  const newTrack = {
    id: generateUid(),
    name: name,
    artist: artist,
    album: album,
  };
  tracks[newTrack.id] = newTrack;
  console.log(tracks);
};

//TEST CODE ---------------------------------------------------
// addTrack("May the force", "Yoda", "Tis a war in Da Stars")

// adds a playlist to the library
const addPlaylist = function (name) {
  const allTracks = [];
  for (let track in library.tracks) {
    allTracks.push(track);
  }
  const newPlaylist = { id: generateUid(), name: name, tracks: allTracks };
  library.playlists[newPlaylist.id] = newPlaylist;
  console.log(library.playlists);
};

//TEST CODE ---------------------------------------------------
// addPlaylist("All the Music");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {};

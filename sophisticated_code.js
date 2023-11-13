/* 
filename: sophisticated_code.js

This code is a sophisticated implementation of a web-based music player. It allows users to create and manage playlists, search for songs, play/pause songs, and skip to the next/previous track. The code utilizes modern JavaScript features and follows best practices for code structure and readability.

Note: This is a sample code and may not include all necessary dependencies or error handling.

*/

// Define global variables
let currentPlaylist = [];
let currentSongIndex = 0;

// Define Song class
class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }

  play() {
    console.log(`Playing: ${this.title} - ${this.artist}`);
  }
}

// Define Playlist class
class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong(song) {
    const songIndex = this.songs.findIndex((s) => s.title === song.title && s.artist === song.artist);
    if (songIndex !== -1) {
      this.songs.splice(songIndex, 1);
    }
  }
  
  play() {
    this.songs[currentSongIndex].play();
  }

  next() {
    currentSongIndex = (currentSongIndex + 1) % this.songs.length;
    this.songs[currentSongIndex].play();
  }

  previous() {
    currentSongIndex = (currentSongIndex - 1 + this.songs.length) % this.songs.length;
    this.songs[currentSongIndex].play();
  }
}

// Create songs
const song1 = new Song("Song 1", "Artist 1", "3:45");
const song2 = new Song("Song 2", "Artist 2", "4:12");
const song3 = new Song("Song 3", "Artist 3", "5:20");

// Create playlists
const playlist1 = new Playlist("Playlist 1");
const playlist2 = new Playlist("Playlist 2");

// Add songs to playlists
playlist1.addSong(song1);
playlist1.addSong(song2);
playlist2.addSong(song3);

// Add playlists to currentPlaylist
currentPlaylist.push(playlist1);
currentPlaylist.push(playlist2);

// Play the first song in the currentPlaylist
currentPlaylist[0].play();

// Simulate user interactions
setTimeout(() => {
  currentPlaylist[0].next();
}, 5000);

setTimeout(() => {
  currentPlaylist[0].previous();
}, 10000);
class PlayList {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;

  }
  next(){
    this.trackNum += this.trackNum;
    result = this.trackNum

  }
  playing(){
    return this.info;
  }
}

// class Media {
//   constructor(music, podcast, movies) {
//     this.music = music;
//     this.podcast = podcast;
//     this.movies = movies;
//   }
// }

class Music extends PlayList {
  constructor(name, duration, artist) {
    super (name, duration);
    this.artist = artist;
  }
}


class PodCast extends PlayList {
  constructor(name, duration) {
    super (name, duration);
    this.name = name;
    this.duration = duration;
  }

}

class Movies extends PlayList {
  constructor(name, duration, rating) {
    super(name, duration);
    this.name = name;
    this.duration = duration;
    this.rating = rating;
  }

}

var cikatriz = new Music('Melancolia', '60 min', 'Cikatriz');
var thelongnight = new PodCast('The Long Night', '1 hr.');
var dancewithwolfs = new Movies('Dance with Wolfs', '4 hrs.', 5);


// console.log(cikatriz.infoMusic());
// console.log(thelongnight.inforPodcast());
// console.log(dancewithwolfs.infoMovies());

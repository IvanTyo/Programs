class Media {
  constructor(music, podcast, movies) {
    this.music = music;
    this.podcast = podcast;
    this.movies = movies;
  }
}

class Music {
  constructor(name, duration, artist) {
    this.name = name;
    this.duration = duration;
    this.artist = artist;
  }
  info() {
    return "The name of this song is: " + this.name + ", it lasts: " + this.duration + ", and the artist is: " + this.artist;
  }
}

var cikatriz = new Music('Melancolia', '60 min', 'Cikatriz')

console.log(test1.info());



class PodCast {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }
}

class Movies {
  constructor(name, duration, rating) {
    this.name = name;
    this.duration = duration;
    this.rating = rating;
  }
}

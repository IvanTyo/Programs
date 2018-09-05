create table artist (
  artist_id serial primary key,
  first_name varchar(50),
  last_name varchar(50),
  dateof_birth date,
  cityof_birth varchar(100) not null,
  genre varchar(20)
);

create table albums (
  album_id serial primary key,
  album_title varchar(100) not null,
  release_date date,
  artist_id integer not null references artist(artist_id)
);

create table tracks (
  id serial primary key,
  track_title varchar(50) not null,
  track_length varchar(10),
  composer_name varchar(100) not null,
  album_id integer not null references albums(album_id)
);

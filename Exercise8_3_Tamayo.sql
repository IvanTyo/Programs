INSERT INTO artist (
    first_name,
    last_name,
    dateof_birth,
    cityof_birth,
    genre
  )
    VALUES (
      'Johnny',
      'Cash',
      to_date('1932-2-26', 'YYYY-MM-DD'),
      'Kingsland, AR',
      'Country'
    );

INSERT INTO artist (
    first_name,
    last_name,
    dateof_birth,
    cityof_birth,
    genre
  )
    VALUES (
      'The Beatles',
      'The Beatles', to_date('1960-1-2', 'YYYY-MM-DD'),
      'Leverpool, England',
      'Pop Rock'
  );

INSERT INTO artist (
    first_name,
    last_name,
    dateof_birth,
    cityof_birth,
    genre
  )
    VALUES (
      'Elvis',
      'Presley',
      to_date('1935-1-8', 'YYYY-MM-DD'),
      'Tupelo, Ms.',
      'Pop, Rock and Rol'
    );

INSERT INTO artist (
        first_name,
        last_name,
        dateof_birth,
        cityof_birth,
        genre
      )
        VALUES (
          'Frank',
          'Sinatra',
          to_date('1915-12-15', 'YYYY-MM-DD'),
          'Hoboken, NJ',
          'Vocal Jazz, Swing'
        );


INSERT INTO artist (
        first_name,
        last_name,
        dateof_birth,
        cityof_birth,
        genre
      )
        VALUES (
          'Tom',
          'Petty',
          to_date('1950-10-2', 'YYYY-MM-DD'),
          'Gainesville, Fl',
          'Rock'
      );


INSERT INTO albums (
      album_title,
      release_date,
      artist_id
    )
      VALUES (
        'Loving You',
        to_date('1957-7-12', 'YYYY-MM-DD'),
        '3'
      );


INSERT INTO albums (
    album_title,
    release_date,
    artist_id
  )
    VALUES (
      'The Voice of Frank Sinatra',
      to_date('1946-3-4', 'YYYY-MM-DD'),
      '4'
  );


INSERT INTO albums (
    album_title,
    release_date,
    artist_id
  )
    VALUES (
      'Abbey Road',
      to_date('1969-03-10',
        'YYYY-MM-DD'),
        '2'
      );


INSERT INTO albums (
    album_title,
    release_date, artist_id
  )
    VALUES (
      'At Folsom Prison',
      to_date('1968-05-02', 'YYYY-MM-DD'),
      '1'
  );


INSERT INTO tracks (
      track_title,
      track_length,
      composer_name,
      album_id
    )
      VALUES (
        'Folsom Prison Blues',
        '2:42',
        'Johnny Cash',
        '2'
      );


INSERT INTO tracks (
    track_title,
    track_length,
    composer_name, album_id
  )
    VALUES (
      'Come Together',
      '4:19',
      'John Lennon',
      '3'
    );


INSERT INTO tracks (
    track_title,
    track_length,
    composer_name,
    album_id
  )
    VALUES (
      'Blue Berry Hill',
      '2:38',
      'Vincent Rose, Al Lewis, Larry Stock',
      '4'
    );

INSERT INTO tracks (
    track_title,
    track_length,
    composer_name,
    album_id
  )
    VALUES (
      'Someone to Watch Over Me',
      '3:18',
      'George Gershwin,
      Ira Gershwin',
      '5'
    );


INSERT INTO tracks (
    track_title,
    track_length,
    composer_name,
    album_id
  )
    VALUES (
      'Something',
      '3:02',
      'George Harrison',
      '3'
    );


INSERT INTO tracks (
    track_title,
    track_length,
    composer_name,
    album_id
  )
    VALUES (
      'Here COmes the SUN',
      '3:05',
      'George Harrison',
      '3'
    );

INSERT INTO tracks (
    track_title,
    track_length,
    composer_name,
    album_id
  )
    VALUES (
      'You Go to My Head',
      '3:00',
      'Haven Gillespie, J. Fred Coots',
      '5'
    );

INSERT INTO tracks (
    track_title,
    track_length,
    composer_name,
    album_id
  )
    VALUES (
      'These Foolish Things',
      '3:08',
      'Holt Marvell, Jack Strachey, Harry Link',
      '5'
    );

INSERT INTO tracks (
    track_title,
    track_length,
    composer_name,
    album_id
  )
    VALUES (
      'Dark at the Dungeon',
      '3:05',
      'Merle Travis',
      '2'
    );

INSERT INTO tracks (
    track_title,
    track_length,
    composer_name,
    album_id
  )
    VALUES (
      'Cocaine Blues',
      '3:01',
      'T.J. Arnall',
      '2'
    );

INSERT INTO tracks (
    track_title,
    track_length,
    composer_name,album_id
  )
    VALUES (
      'Mean Woman Blues',
      '2:15',
      'Claude Demetrius',
      '4'
    );

INSERT INTO tracks (
    track_title,
    track_length,
    composer_name,
    album_id
  )
    VALUES (
      'True Love',
      '2:07',
      'Cole Porter',
      '4'
    );



UPDATE tracks
      SET composer_name = 'Vincent Rose, Al Lewis, Larry Stock'
      WHERE composer_name = ' Vincent Rose, Al Lewis, Larry Stock';



UPDATE tracks
      SET track_title = 'Here Comes the Sun'
      WHERE composer_name = 'George Harrison'
      and track_length = '3:05';



DELETE FROM artist WHERE artist_id = 5;

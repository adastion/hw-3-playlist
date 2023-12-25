const pathStatic = {
  pathLogo: {
    forDark: "src/assets/images/logo-dark.svg",
    forLight: "src/assets/images/logo-light.svg",
  },
  pathIsHot: "src/assets/images/hot-song.png",
};

const playlists = [
  {
    title: "Hip-Hop Hits",
    songs: [
      {
        id: 1,
        musician: "Public Enemy",
        songName: "Fight the Power",
        year: 1989,
        isHot: false,
        theBestSong: false,
        fileUrl:
          "https://s2.deliciouspeaches.com/get/cuts/69/36/6936aa1fb6855835db65456e3ce8a201/48021083/Public_Enemy_-_Fight_The_Power_b128f0d276.mp3",
        cover: "https://static.hitmcdn.com/covers/a/701/d80/7281.jpg",
        info: {
          duration: "4:42",
          totalTracksCount: 12,
        },
      },
      {
        id: 2,
        musician: "Vanilla Ice",
        songName: "Ice Ice Baby",
        year: 1990,
        isHot: true,
        theBestSong: false,
        fileUrl:
          "https://s2.deliciouspeaches.com/get/cuts/5a/2e/5a2eb044cf9eb6aa3ff2649727976ac0/63186026/Vanila_Ice_-_ice_ice_baby_b128f0d301.mp3",
        cover:
          "https://www.16bars.de/wp-content/uploads/2005/11/200px-brandnubian.jpg",
        info: {
          duration: "4:29",
          totalTracksCount: 10,
        },
      },
      {
        id: 3,
        musician: "MC Hammer",
        songName: "You Can't Touch This",
        year: 1990,
        isHot: false,
        theBestSong: false,
        fileUrl:
          "https://s2.deliciouspeaches.com/get/cuts/df/f3/dff3416ca0194cf11ab0f6869233379a/47995586/MC_Hammer_-_U_Cant_Touch_This_b128f0d260.mp3",
        cover: "https://static.hitmcdn.com/covers/a/c90/9ec/39641.jpg",
        info: {
          duration: "4:16",
          totalTracksCount: 14,
        },
      },
      {
        id: 4,
        musician: "Brand Nubian",
        songName: "Brand Nubian",
        year: 1990,
        isHot: true,
        theBestSong: true,
        fileUrl:
          "https://s2.deliciouspeaches.com/get/cuts/39/83/39839f35673ec3de32d8906eb291a71a/48269758/Brand_Nubian_-_Slow_Down_b128f0d303.mp3",
        cover: "https://static.hitmcdn.com/covers/a/dd1/7e6/2630.jpg",
        info: {
          duration: "4:35",
          totalTracksCount: 11,
        },
      },
    ],
  },
  {
    title: "Rep Hits",
    songs: [
      {
        id: 5,
        musician: "50 Cent",
        songName: "In da Club",
        year: 2003,
        isHot: false,
        theBestSong: false,
        fileUrl:
          "https://ds.cdn1.deliciouspeaches.com/get/cuts/1d/c9/1dc9bed60952bc86dc754ed6bca8f67d/47965582/50_Cent_-_In_Da_Club_b128f0d193.mp3",
        cover: "https://static.hitmcdn.com/covers/a/4d2/e7b/1199.jpg",
        info: {
          duration: "3:13",
          totalTracksCount: 16,
        },
      },
      {
        id: 6,
        musician: "DMX",
        songName: "X Gon' Give It To Ya",
        year: 2003,
        isHot: false,
        theBestSong: false,
        fileUrl:
          "https://ds.cdn13.deliciouspeaches.com/get/cuts/50/db/50db78476930c2bc60c0651c0a01e140/48021216/DMX_-_X_Gon_Give_It_To_Ya_b128f0d217.mp3",
        cover: "https://static.hitmcdn.com/covers/a/955/cb5/2054.jpg",
        info: {
          duration: "3:38",
          totalTracksCount: 15,
        },
      },
      {
        id: 7,
        musician: "U Ain't Me",
        songName: "Xzibit, Chamillionaire, Ras Kass, Strong Arm Steady",
        year: 2006,
        isHot: false,
        theBestSong: false,
        fileUrl:
          "https://ds.cdn4.deliciouspeaches.com/get/cuts/9d/80/9d8053a6f8c25afdebef1a0e510dc950/48400751/Xzibit_Chamillionaire_Ras_Kass_Strong_Arm_Steady_-_U_Aint_Me_b128f0d283.mp3",
        cover: "https://static.hitmcdn.com/covers/a/a6e/182/237141.jpg",
        info: {
          duration: "4:17",
          totalTracksCount: 18,
        },
      },
      {
        id: 8,
        musician: "Xzibit",
        songName: "Paparazzi",
        year: 2006,
        isHot: false,
        theBestSong: false,
        fileUrl:
          "https://s2.deliciouspeaches.com/get/cuts/38/23/382309782c92053d9d5ff97798746a4c/49909421/Xzibit_-_Paparazzi_b128f0d236.mp3          ",
        cover: "https://static.hitmcdn.com/covers/a/3de/502/17953.jpg",
        info: {
          duration: "4:17",
          totalTracksCount: 18,
        },
      },
      {
        id: 9,
        musician: "Real Muthaphuckkin G's",
        songName: "Eazy-E",
        year: 2006,
        isHot: false,
        theBestSong: false,
        fileUrl:
          "https://s2.deliciouspeaches.com/get/cuts/b8/03/b803d6d30bd266877cbee9b3160a09a7/53651275/Eazy-E_-_Real_Muthaphuckkin_Gs_b128f0d333.mp3",
        cover:
          "https://static.hitmcdn.com/covers/a/36f/7b9/59619.jpg          ",
        info: {
          duration: "4:17",
          totalTracksCount: 18,
        },
      },
      {
        id: 10,
        musician: "Eminem feat 50 Cent, Cashis, Lloyd Banks",
        songName: "You Don't Know",
        year: 2006,
        isHot: false,
        theBestSong: false,
        fileUrl:
          "https://ds.cdn9.deliciouspeaches.com/get/cuts/29/2a/292a03ad67db8204aa071c8e3c9baf91/48055043/Eminem_50_Cent_Lloyd_Banks_Cahis_-_You_Dont_Know_b128f0d257.mp3",
        cover: "https://static.hitmcdn.com/covers/a/a7f/43c/33098.jpg",
        info: {
          duration: "4:17",
          totalTracksCount: 18,
        },
      },
      {
        id: 11,
        musician: "Eminem",
        songName: "Rap God",
        year: 2013,
        isHot: true,
        theBestSong: true,
        fileUrl:
          "https://ds.cdn4.deliciouspeaches.com/get/cuts/53/45/5345f1c087ec56d686a21e7013474e74/47964975/Eminem_-_Rap_God_b128f0d364.mp3",
        cover: "https://static.hitmcdn.com/covers/a/0ac/6bb/9957.jpg",
        info: {
          duration: "6:03",
          totalTracksCount: 20,
        },
      },
    ],
  },
  {
    title: "Pop Hits",
    songs: [
      {
        id: 12,
        musician: "50 Cent",
        songName: "In da Club",
        year: 2003,
        isHot: false,
        theBestSong: false,
        fileUrl:
          "https://ds.cdn1.deliciouspeaches.com/get/cuts/1d/c9/1dc9bed60952bc86dc754ed6bca8f67d/47965582/50_Cent_-_In_Da_Club_b128f0d193.mp3",
        cover: "https://static.hitmcdn.com/covers/a/4d2/e7b/1199.jpg",
        info: {
          duration: "3:13",
          totalTracksCount: 16,
        },
      },
      {
        id: 13,
        musician: "DMX",
        songName: "X Gon' Give It To Ya",
        year: 2003,
        isHot: true,
        theBestSong: true,
        fileUrl:
          "https://ds.cdn13.deliciouspeaches.com/get/cuts/50/db/50db78476930c2bc60c0651c0a01e140/48021216/DMX_-_X_Gon_Give_It_To_Ya_b128f0d217.mp3",
        cover: "https://static.hitmcdn.com/covers/a/955/cb5/2054.jpg",
        info: {
          duration: "3:38",
          totalTracksCount: 15,
        },
      },
      {
        id: 14,
        musician: "Eminem feat 50 Cent, Cashis, Lloyd Banks",
        songName: "You Don't Know",
        year: 2006,
        isHot: false,
        theBestSong: false,
        fileUrl:
          "https://ds.cdn9.deliciouspeaches.com/get/cuts/29/2a/292a03ad67db8204aa071c8e3c9baf91/48055043/Eminem_50_Cent_Lloyd_Banks_Cahis_-_You_Dont_Know_b128f0d257.mp3",
        cover: "https://static.hitmcdn.com/covers/a/a7f/43c/33098.jpg",
        info: {
          duration: "4:17",
          totalTracksCount: 18,
        },
      },
      {
        id: 15,
        musician: "Eminem",
        songName: "Rap God",
        year: 2013,
        isHot: true,
        fileUrl:
          "https://ds.cdn4.deliciouspeaches.com/get/cuts/53/45/5345f1c087ec56d686a21e7013474e74/47964975/Eminem_-_Rap_God_b128f0d364.mp3",
        cover: "https://static.hitmcdn.com/covers/a/0ac/6bb/9957.jpg",
        info: {
          duration: "6:03",
          totalTracksCount: 20,
        },
      },
    ],
  },
];

export function getPlaylistWithInfo() {
  return playlists;
}

export function getPlaylist() {
  return playlists.map((list) => list.songs);
}

export function getPathStatic() {
  return pathStatic;
}

let searchTerm = "";
let subscriber = null;
let sortDirection = {
  direction: null,
  selector: "descending",
};

export function subscribe(listener) {
  subscriber = listener;
}

// getter
export function getFullListTracks() {
  const fullSongs = getPlaylist().reduce((tracks, array) => {
    return tracks.concat(array);
  }, []);

  const filteredSongs = fullSongs.filter((song) => {
    return (
      song.musician.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.songName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return filteredSongs;
}

// setter
export function setSearchTerm(newSearchTerm) {
  searchTerm = newSearchTerm;
  subscriber();
}

export function getSearchTerm() {
  return searchTerm;
}

export function setSortSongs(direction) {
  sortDirection.direction = direction;
  sortDirection.selector = direction;

  getPlaylist().forEach((playlist) => {
    playlist.sort((a, b) => {
      if (direction === "ascending") {
        return a.songName.localeCompare(b.songName);
      } else {
        return b.songName.localeCompare(a.songName);
      }
    });
  });

  subscriber();
}

export function getSortDirection() {
  return sortDirection;
}

export function createNewPlaylist(namePlaylist, urlSongs) {
  const songs = urlSongs.map((info, index) => {
    return {
      id: index + "bla",
      musician: "" || "unknown",
      songName: info.name,
      year: 1989,
      isHot: false,
      theBestSong: false,
      fileUrl: info.url,
      cover: "" || "src/assets/images/not-cover.jpg",
      info: {
        duration: "4:42",
        totalTracksCount: 12,
      },
    };
  });

  playlists.unshift({
    title: namePlaylist || "my new playlist",
    songs: songs,
  });

  subscriber();
}

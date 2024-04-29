const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjMxYzUxNzA4MmYwYzNiYTg3MjdhZWE4YWUyMDdiYSIsInN1YiI6IjY2Mjg2OTA0YWY5NTkwMDE3ZDZjNmZkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmY2uLTKrheD_tc9xHuSPO6giYrVPdOpBEjNUXv7BEg',
  },
};

// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

document.querySelector('.search-input').focus(); // 로딩 후 커서 포인터 검색 input으로
let searchBtn = document.querySelector('.search-btn');
let input = document.querySelector('.search-input');
let cardCollection = document.getElementById('cardCollection');
let up = document.querySelector('.up');

// fetch 후 서버와 통신 성공 = 카드 데이터 movies에 push
let callFunc = () => {
  return fetch(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    options
  )
    .then(function (response) {
      if (response.status != 200) {
        alert('서버와 통신에 실패했습니다.');
      } else {
        return response.json();
      }
    })
    .then(function (jsonData) {
      movies.push(...jsonData.results);
    });
};

// 서버에서 받아온 데이터를 빈 배열에 넣어준다.
let movies = [];

// 받아온 빈 배열로 카드 만들기
let makeCards = () => {
  showList = movies;

  // 카드 보여주기
  showCard(showList);
};

input.addEventListener('keyup', (e) => {
  const keyword = input.value;
});

// 검색하여 가져온 배열 바구니
let searchList;

// 검색 기능 함수
let searchMovie = () => {
  let searchData = [];

  // 영화 검책창에 '' 빈 값 확인
  if (input.value !== '') {
    removeCard();

    // 검색 기능
    movies.forEach((data) => {
      if (
        data.original_title.toLowerCase().includes(input.value.toLowerCase())
      ) {
        searchData.push(data);
      }
    });

    showList = searchData;

    // 카드 보여주기
    showCard(showList);

    searchList = searchData;
    showList = searchList;
  } else {
    // 검색한 값이 ''값이면 전체 카드 보여주기
    removeCard();
    makeCards();
  }
};

// 카드 지우기 함수
let removeCard = () => {
  cardCollection.innerHTML = '';
};

// 영화 클릭시 ID 알림 함수
let message = () => {
  newCard.addEventListener('click', () => {
    alert(`Movie ID: ${movieId}`);
  });
};

// // 검색 기능
// let search = (List) => {
//   List.forEach((data) => {
//     if (data.original_title.toLowerCase().includes(input.value.toLowerCase())) {
//       searchData.push(data);
//     }
//   });
// };

let showList = [];

// 즉시 실행 함수
callFunc().then(() => {
  makeCards();
});

// 카드 만들기  함수
let showCard = (data) => {
  data.forEach((row) => {
    let image = row['backdrop_path'];
    let title = row['original_title'];
    let releaseDate = row['release_date'];
    let overview = row['overview'];
    let average = row['vote_average'];
    let movieId = row['id'];

    let temp_html = `
      <div id="${movieId}" class="searchCards">
        <img src="https://image.tmdb.org/t/p/w500/${image}" alt="">
        <h3>${title}</h3>
        <h4>${releaseDate}</h4>
        <p>${overview}</p>
        <h4>Rating: ${average}</h4>
      </div>`;

    // 카드 div를 생성
    cardCollection.insertAdjacentHTML('beforeend', temp_html);

    // 영화 클릭시 ID 알림
    let newCard = document.getElementById(movieId);
    newCard.addEventListener('click', () => {
      alert(`Movie ID: ${movieId}`);
    });
  });
};

// 엔터키로 검색 하기
let enterKey = (e) => {
  if (e.keyCode === 13) {
    searchMovie();
  }
};

up.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

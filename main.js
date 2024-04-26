const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjMxYzUxNzA4MmYwYzNiYTg3MjdhZWE4YWUyMDdiYSIsInN1YiI6IjY2Mjg2OTA0YWY5NTkwMDE3ZDZjNmZkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmY2uLTKrheD_tc9xHuSPO6giYrVPdOpBEjNUXv7BEg'
  }
};

// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

function callFunc () {
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options).then(function(response) {
    
  if (response.status != 200) {
    alert('서버와 통신에 실패했습니다.')
  } else {
    return response.json();
  }
  }).then(function(jsonData) {
    let movieData = jsonData.results;
    // console.log(movieData);

    movieData.forEach(movieCards => {
      // console.log(movieCards);

      let image = movieCards['backdrop_path'];
      let title = movieCards['original_title'];
      let overview = movieCards['overview'];
      let average = movieCards['vote_average'];
      let movieId = movieCards['id']

      let temp_html = `
        <div id="${movieId}" class="cards">
          <img src="https://image.tmdb.org/t/p/w500/${image}" alt="">
          <h3>${title}</h3>
          <p>${overview}</p>
          <h4>Rating: ${average}</h4>
        </div>`
      
      cardCollection.insertAdjacentHTML('beforeend', temp_html);
      // cardCollection.append(temp_html);

      // 영화 클릭시 ID 알림
      let newCard = document.getElementById(movieId);
      newCard.addEventListener('click', () => {
      alert(`Movie ID: ${movieId}`);
     });

     let input = document.querySelector('.search-input');
     input.addEventListener('keyup', (e) => {
      const keyword = input.value;
     })

    //  let search = (data, keyword) => {
    //   return data.filter ((item) => item.includes(keyword))
    //  };

    //  const filterMovies = search(title, 'The');
    //  console.log(filterMovies);

    });
  })
}

document.querySelector('.search-input').focus();  // 로딩 후 커서 포인터 검색 input으로
let card = document.querySelectorAll('.cards');
// let input = document.querySelector('.search-input')
let searchBtn = document.querySelector('.search-btn');
let cardCollection = document.querySelector('#cardCollection');

// 즉시 실행 함수
callFunc();


// input.addEventListener('keyup', (e) => {
//   const keyword = input.value;
//   console.log(keyword);
// });

// 필터기능
// const searchFilter = (data, keyword) => {
//   return data.filter ((item) => item.includes(keyword));
// };
// const filterMovie = searchFilter(title, '괴')
// console.log(filterMovie);

// const movies = ['괴물', '광해', '오징어게임', '기생충', '타짜']
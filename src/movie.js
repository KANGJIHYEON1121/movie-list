export const showCard = async () => {
  const movies = await fetchMovieData();

  // 카드 만들기  함수
  movies.forEach((row) => {
    let image = row["backdrop_path"];
    let title = row["title"];
    let releaseDate = row["release_date"];
    let overview = row["overview"];
    let average = row["vote_average"];
    let movieId = row["id"];

    let temp_html = `
        <div id="${movieId}" class="searchCards">
          <img src="https://image.tmdb.org/t/p/w500/${image}" alt="">
          <h3>${title}</h3>
          <h4>${releaseDate}</h4>
          <p>${overview}</p>
          <h4>Rating: ${average}</h4>
        </div>`;

    // 카드 div를 생성
    cardCollection.insertAdjacentHTML("beforeend", temp_html);

    // 영화 클릭시 ID 알림
    let newCard = document.getElementById(movieId);
    newCard.addEventListener("click", () => {
      alert(`Movie ID: ${movieId}`);
    });
  });
};

async function fetchMovieData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjMxYzUxNzA4MmYwYzNiYTg3MjdhZWE4YWUyMDdiYSIsInN1YiI6IjY2Mjg2OTA0YWY5NTkwMDE3ZDZjNmZkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmY2uLTKrheD_tc9xHuSPO6giYrVPdOpBEjNUXv7BEg"
    }
  };
  const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options);
  const data = await response.json();
  return data.results;
}

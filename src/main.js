import { showCard } from "./movie.js";
import { keywordSearch } from "./search.js";

document.querySelector(".search-input").focus(); // 로딩 후 커서 포인터 검색 input으로
let searchBtn = document.querySelector(".search-btn");
let input = document.querySelector(".search-input");
let cardCollection = document.getElementById("cardCollection");
let up = document.querySelector(".up");

showCard();

up.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

const form = document.querySelector(".search-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  keywordSearch(input.value);
});

// 서버에서 받아온 데이터를 빈 배열에 넣어준다.
// let movies = [];

// 보여줄 카드 배열
// let showList = [];

// 받아온 빈 배열로 카드 만들기
// let makeCards = () => {
// showList = movies;

// 카드 보여주기
// showCard(showList);
// };

// input.addEventListener("keyup", (e) => {
//   const keyword = input.value;
// });

// // 검색 기능 함수
// let searchMovie = () => {
//   let searchData = [];

//   // 영화 검책창에 '' 빈 값 확인
//   if (input.value !== "") {
//     removeCard();

//     // // 검색 기능
//     // movies.forEach((data) => {
//     //   if (data.title.toLowerCase().includes(input.value.toLowerCase())) {
//     //     searchData.push(data);
//     //   }
//     // });

//     showList = searchData;

//     // 카드 보여주기
//     showCard(showList);

//     searchList = searchData;
//     showList = searchList;
//   } else {
//     // 검색한 값이 ''값이면 전체 카드 보여주기
//     removeCard();
//     makeCards();
//   }
// };

// 카드 지우기 함수
// let removeCard = () => {
//   cardCollection.innerHTML = "";
// };

// 영화 클릭시 ID 알림 함수
// let message = () => {
//   newCard.addEventListener("click", () => {
//     alert(`Movie ID: ${movieId}`);
//   });
// };

// 즉시 실행 함수
// makeCards();

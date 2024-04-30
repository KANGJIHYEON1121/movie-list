export const keywordSearch = (searchKeyword) => {
  const movieCards = document.querySelectorAll(".searchCards");

  // 검색 기능
  movieCards.forEach((card) => {
    const titleElement = card.querySelector("h3"); // h3 태그 찾기
    if (titleElement && titleElement.textContent.toLowerCase().includes(searchKeyword.toLowerCase())) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
};

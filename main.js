        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjMxYzUxNzA4MmYwYzNiYTg3MjdhZWE4YWUyMDdiYSIsInN1YiI6IjY2Mjg2OTA0YWY5NTkwMDE3ZDZjNmZkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VmY2uLTKrheD_tc9xHuSPO6giYrVPdOpBEjNUXv7BEg'
            },
          };
      
    const res = fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

console.log(res)
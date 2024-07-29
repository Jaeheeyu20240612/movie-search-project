export let movieArray = [];

export let cardMakeFunc = function () {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjY3MWU1OTQ2MjhjNjRmMzdlNDk1ZjE0NjRhNjhlNSIsIm5iZiI6MTcyMTcxODY3NS42MTY1Mywic3ViIjoiNjY5ZWZkMmFlMmJlOWZmNmFhZTUzZjRiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.jDaJ4fuJbN7vea7I18yLt9of8n6HL04Fd5M_9einYJw"
    }
  };

  fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
    .then((res) => res.json())
    .then((data) => {
      let rows = data["results"];
      rows.forEach((row) => {
        movieArray.push({
          cardTitle: row.title,
          cardOverview: row.overview,
          cardPoster_path: row.poster_path,
          cardVote_average: row.vote_average,
          cardId: row.id
        });
      });
      console.log(movieArray);

      let cardArea = document.querySelector(".cardArea");
      movieArray.forEach(function (movie) {
        let temp_html = `
        <div class="card">
            <img id="img" class="item" src="https://image.tmdb.org/t/p/w200${movie.cardPoster_path}" alt="이미지">
            <div class="pIncard">
                <p id="inCardTitle" class="item">${movie.cardTitle}</p>
                <p id="movieOvervie" class="item">${movie.cardOverview}</p>
                <p id="vote_average" class="item">Rating: ${movie.cardVote_average}</p>
            </div>
        </div>
        `;
        cardArea.insertAdjacentHTML("beforeend", temp_html);

        cardArea.lastElementChild.addEventListener("click", function () {
          alert(`영화 id: ${movie.cardId}`);
        });
      });
    })
    .catch((error) => console.error("Error fetching movie data:", error));
};

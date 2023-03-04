$(document).ready(function () {
    $.ajax({
        url: "https://yts.mx/api/v2/list_movies.jsonhttps://yts.mx/api/v2/list_movies.json?sort_by=rating",
        method: "GET",
        success: function (res) {
            console.log(res);
            firstEightMovies = res.data.movies.slice(0, 8);

            // For loop to iterate over the 8 films
            firstEightMovies.forEach(function (movie) {
                console.log(movie.title);
                console.log(movie.id);
                $("main").append(
                    `<div class="movie">
                    <a href="movie_${movie.id}.html">
                        <img src="${movie.medium_cover_image}" alt="${movie.title}">
                     </a>
                    <h3>${movie.title}</h3>
                    <p>${movie.year}</p>
                    </div`
                );
            });
        }
        });
});
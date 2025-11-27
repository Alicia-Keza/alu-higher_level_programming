-- List all shows and genres linked to show from 'hbtn_0d_tvshows'
-- If show doesn't have a genre, display NULL in genre column
-- Each record should display tv_shows.title, tv_genres.name
-- Results must be sorted in ascending order by show title
-- You can only use one SELECT statement
-- 16-shows_by_genre.sql
SELECT tv_shows.title AS title,
       tv_genres.name AS name
FROM tv_shows
LEFT JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id
LEFT JOIN tv_genres ON tv_show_genres.genre_id = tv_genres.id
ORDER BY tv_shows.title ASC, tv_genres.name ASC;


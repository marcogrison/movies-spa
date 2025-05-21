import { useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovies"

export function MovieDetail() { 
	const { id } = useParams();
	const movie = useMovie(id);
	return(
		<section>
			<h1>{movie.title}</h1>
		</section>
		
	)
}
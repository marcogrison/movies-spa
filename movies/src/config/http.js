import axios from "axios";

export const moviesApi = axios.create({
	baseURL: "https://api.themoviedb.org/3/", 
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjc5ZGRjZTg5Y2E0MjUzNGIxYTBhYTQxMTFlODcyNiIsIm5iZiI6MS43NDcwODk4MjQ5NDIwMDAyZSs5LCJzdWIiOiI2ODIyNzlhMDg5MDI1NzdkZmU1YTJlYjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-lpK6KDSsNiog_jxm5ovc2bkUtb6z-01PDbapp3H-fA'
	}
});
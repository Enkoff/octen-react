export const configThemoviedb = {
    baseURL: 'https://api.themoviedb.org/3',
    apiKey: '?api_key=0acc18ad1c5d02fb766c577ff9b870b6',
    originalImage: (imagePath) => `https://image.tmdb.org/t/p/original${imagePath}`,
    w500Image: (imagePath) => `https://image.tmdb.org/t/p/w500${imagePath}`,
    trailer: (key) => `https://www.youtube.com/embed/${key}`
};

export const category = {
    movie: '/movie',
    tv: '/tv',
    videos: '/videos',
    credits: ' /credits'
};

export const movieType = {
    upcoming: '/upcoming',
    popular: '/popular',
    top_rated: '/top_rated'
};

export const tvType = {
    popular: '/popular',
    top_rated: '/top_rated',
    on_the_air: '/on_the_air'
};


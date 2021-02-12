new Vue ({
    el: '#app',
    data: {
        moviesList: [],
        tvSeriesList: [],
        flagsList:['en', 'it', 'de', 'es', 'ja', 'pl', 'fr'],
        searchInput: ''
    },
    methods: {
        /* Creo un metodo per popolare l'array dei film: */
        searchMovie: function() {
            const self = this;
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=8f64355215adbb41301dba970e421acd&query=' + self.searchInput)
            .then(function(resp) {
                self.moviesList = resp.data.results;
            });
        },
        /* Creo un metodo per popolare l'array delle serie TV: */
        searchTvSeries: function() {
            const self = this;
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=8f64355215adbb41301dba970e421acd&query=' + self.searchInput)
            .then(function(resp) {
                self.tvSeriesList = resp.data.results;
            });
        },
        /* Unisco in un unico metodo i due metodi creati in precedenza: */
        search: function() {
            this.searchMovie()
            this.searchTvSeries()
        },
        /* Creo un metodo per dare la valutazione media sottoforma di stelle: */
        ratingStars: function(element, index) {
            const averageVote = Math.ceil(element.vote_average/2);
              if (index + 1 <= averageVote) {
                  return 'fas fa-star golden-star'
              } else {
                  return 'fas fa-star white-star'
              }
        },
        /* Creo un metodo per potermi richiamare nell'html l'immagine della bandiera della lingua: */
        getFlag: function(language) {
            return `img/${language}.png`
        },
        /* Creo un metodo per potermi richiamare nell'html il poster delle varie opere: */
        getPoster: function(element) {
            return `https://image.tmdb.org/t/p/w342${element.poster_path}`
        },
        /* Creo un metodo per impedire alla lunghezza dell'overview di superare un certo numero di caratteri: */
        truncateString: function(string, n) {
            if (string.length > n) {
                return string.substring(0, n) + '...';
            } else {
                return string;
            }
        }
    }
});
Vue.config.devtools = true;
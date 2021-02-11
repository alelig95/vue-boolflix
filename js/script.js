new Vue ({
    el: '#app',
    data: {
        movieList: [],
        tvList: [],
        flagList:['en', 'it'],
        searchInput: ''
    },
    methods: {
        search: function() {
            this.searchMovie()
            this.searchTvSeries()
        },
        searchMovie: function() {
            const self = this;
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=8f64355215adbb41301dba970e421acd&query=' + self.searchInput)
            .then(function(resp) {
                self.movieList = resp.data.results;
            });
        },
        searchTvSeries: function() {
            const self = this;
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=8f64355215adbb41301dba970e421acd&query=' + self.searchInput)
            .then(function(resp) {
                self.tvList = resp.data.results;
            });
        },
        coloredStars: function(element, index) {
            const averageVote = Math.ceil(element.vote_average/2);
              if (index + 1 <= averageVote) {
                  return 'colored-star'
              } else {
                  return 'white'
              }
        }
    
    }
});
Vue.config.devtools = true;
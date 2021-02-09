new Vue ({
    el: '#app',
    data: {
        movieList: [],
        searchInput: ''
    },
    methods: {
        searchMovie: function() {
            const self = this;
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=8f64355215adbb41301dba970e421acd&query=' + self.searchInput)
            .then(function(resp) {
                self.movieList = resp.data.results;
            });
        }
    }
});
Vue.config.devtools = true;
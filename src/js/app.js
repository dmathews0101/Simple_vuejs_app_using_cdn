new Vue({
    el: '#root',
    data: {
        quotes: '',
        showAuthor: false
    },
    methods: {
        async getQuotes() {
            const response = await fetch('https://type.fit/api/quotes');
            const data = await response.json();
            this.quotes = data;
        },
        toggleHiddenAuthor() {
            this.showAuthor = !this.showAuthor;
        }
    },
    async created() {
        console.log(this.quotes);
        await this.getQuotes();
    }

})




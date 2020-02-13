import axios from 'axios'

export default {
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      portfolio: null,
      specimen: null
    }
  },
  methods: {
    fetchData() {
      axios.get(this.baseUrl + 'portfolio.json').then(response => {
        this.portfolio = response.data;
        this.specimen = this.portfolio[this.$route.name]
      })
    },
  },
  created() {
    this.fetchData()
  },
}

<template>
  <div>
    5555
  </div>
</template>

<script>
import api from './api.js'
export default {
  name: 'Mock',
  data () {
    return {
      dataShow: []
    }
  },
  mounted() {
    this.fetchdata();
  },
  methods: {
    fetchdata() {
      this.$fetch("http://mockjs").then(res => {
        console.log(res);
        console.log(11)
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
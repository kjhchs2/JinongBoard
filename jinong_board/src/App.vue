<template>
  <!-- <div> -->

    <NavBar />
    <router-view :posts="posts"></router-view>
    
  <!-- </div> -->
</template>

<script>
import NavBar from './components/NavBar.vue'
// import List from './components/List.vue'

export default {
  name: 'App',
  data(){
    return{
      posts:[{
        id:0,
        title: 'a',
        writer: 'kk'
      }]
    }
  },
  methods : {
    // 함수 자리, 데이터 안에서 갖다 쓸거면 this.신고명 이런식으로 써야함
  },
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

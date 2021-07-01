<template>
  <!-- <div> -->

    <NavBar />
    <router-view :posts="posts"></router-view>
    
  <!-- </div> -->
</template>

<script>
import NavBar from './components/NavBar.vue'
import axios from 'axios'
let posts = [];

export default {
    name: 'App',
    data(){
        return{
            posts
        }
    },
    created(){
        axios.get('/data')
        .then(res => {
            this.posts = res.data;
            console.log(this.posts);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
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

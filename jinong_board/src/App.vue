<template>
  <!-- <div> -->

    <NavBar />
    <router-view @updateData="update" :posts="posts"></router-view>
    
  <!-- </div> -->
</template>

<script>
import NavBar from './components/NavBar.vue'
import axios from 'axios'

export default {
    name: 'App',
    data(){
        return{
            posts : []
        }
    },
    mounted(){
        this.update()
    },
    methods : {
        update(){
            axios.get('/post')
            .then(res => {
                this.posts = [...res.data];
                // this.$set(this.posts, res.data.length, res.data[res.data.length-1])
            })
            .catch(err => {
                console.log(err);
            })
        }
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

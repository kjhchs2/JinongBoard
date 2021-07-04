<template>
  <div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">글제목</span>
            <span type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" >{{title}}</span>
        </div>         
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">작성자</span>
            <span type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"> {{user}}</span>
        </div> 
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">글내용</span>
            <span style="height: 500px" type="text" class="form-control" aria-label="Sizing example textarea" aria-describedby="inputGroup-sizing-default" >{{contents}}</span>
        </div>
        <input v-model="password" type="password" style="align: center " placeholder="수정, 삭제시 비밀번호 입력"/>
        <br/>
        <button @click="editPost()" > 수정 </button>	 
        <button @click="deletePost()" > 삭제 </button>	 
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name : 'detail',
	props : {
		posts : Array,
    },
    data(){
        return {
            password : "",
            title: "",
            user: "",
            contents: ""
        }
    },
    created(){
        var id = this.$route.params.id
            axios.get("/api/post/"+id)
            .then(res =>{
                this.title=res.data[0].title;
                this.user=res.data[0].user;
                this.contents=res.data[0].contents;
            })
            .catch(err =>{
                this.$router.push('/error');
                console.log(err);
            });
    },
    methods:{
        editPost(){
            var id = this.$route.params.id
            axios.get("/api/post/"+id)
            .then(res =>{
                if (this.password === res.data[0].password) {
                    this.$router.push('/board/'+id+'/edit');
                }else{
                    alert('비밀번호를 확인해주세요.')
                }
            })
        },
        deletePost(){
            var id = this.$route.params.id
            axios.get("/api/post/"+id)
            .then(res =>{
                if (this.password === res.data[0].password) {
                    axios.delete('/api/post/'+id);
                    alert('글이 삭제되었습니다.')
                    this.updateData();
                    this.$router.push('/')
                }else{
                    alert('비밀번호를 확인해주세요.')
                }
            })
        },
        updateData() {
            this.$emit('updateData')
        }
    }
}
</script>

<style>

</style>
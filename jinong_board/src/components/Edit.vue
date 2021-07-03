<template>
      <div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">글제목</span>
            <input v-model="title" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>         
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">작성자</span>
            <input v-model="user" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div> 
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">암호화</span>
            <input v-model="password" type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="비밀번호를 입력해주세요(글 삭제, 수정 시 필요합니다.)"/>
        </div> 
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">글내용</span>
            <textarea v-model="contents" style="height: 500px" type="text" class="form-control" aria-label="Sizing example textarea" aria-describedby="inputGroup-sizing-default" placeholder="내용을 입력해주세요." />
        </div>
        <button @click="editData()" > 수정 </button>	 
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'edit',
    data(){
        return{
            title : '',
            user : '',
            password : '',
            contents : '',
            modifiedDate : new Date().toLocaleString(),
        }
    },
    mounted(){
        var id = this.$route.params.id
        axios.get("/post/"+id)
        .then(res =>{
            this.title = res.data[0].title
            this.user = res.data[0].user
            this.password = res.data[0].password
            this.contents = res.data[0].contents
        })
    },
    methods: {
        updateData(){
            this.$emit('updateData')
        },
        editData(){
            var id = this.$route.params.id
            var post = {'id': id, 'title': this.title, 'user' : this.user, 'password': this.password, 'contents' : this.contents,
                        'modifiedDate': this.modifiedDate
            };
            axios.put('/post/'+id, post)
            .then(this.updateData());
            
            alert('글 내용이 수정되었습니다.')
            this.$router.push('/board/'+id);
        }
    }

}
</script>

<style>

</style>
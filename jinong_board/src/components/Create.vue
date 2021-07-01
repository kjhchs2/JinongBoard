<template>
    <div>
        <div class="input-group mb-3">
            <!-- <input v-model="user"	placeholder="글쓴이" />
            <input v-model="title"	placeholder="제목" />
            <textarea v-model="contents"	placeholder="내용" ></textarea>
            <button @click="index !== undefined ? update():write()"	>{{index !==undefined ? "수정":"작성"}}</button>	  -->
            <span class="input-group-text" id="inputGroup-sizing-default">제목</span>
            <input v-model="title" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="제목을 입력해주세요."/>
        </div>         
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">작성자</span>
            <input v-model="user" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="작성자를 입력해주세요."/>
        </div> 
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">비밀번호</span>
            <input v-model="password" type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="비밀번호를 입력해주세요(글 삭제, 수정 시 필요합니다.)"/>
        </div> 
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">내용</span>
            <textarea v-model="contents" style="height: 500px" type="text" class="form-control" aria-label="Sizing example textarea" aria-describedby="inputGroup-sizing-default" placeholder="내용을 입력해주세요." />
        </div>
        <button @click="register">등록</button>	 
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'Create',
	data(){
		return{
            title : '',
            user : '',
            password : '',
            contents : '',
            createdDate : new Date().toLocaleString(),
            modifiedDate : new Date().toLocaleString(),
		}
    },
    methods:{
        register() {
            var post = {'title': this.title, 'user' : this.user, 'password': this.password, 'contents' : this.contents,
                        'createdDate': this.createdDate, 'modifiedDate': this.modifiedDate
            };

            axios.post('/post/create', post);
        }
    }
}
</script>

<style>

</style>
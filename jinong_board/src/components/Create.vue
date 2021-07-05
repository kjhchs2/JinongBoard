<template>
    <div>
        <div class="input-group mb-3">
            <span class="input-group-text">글제목</span>
            <input v-model="title" type="text" class="form-control" placeholder="제목을 입력해주세요.(100자 이내)"/>
        </div>         
        <div class="input-group mb-3">
            <span class="input-group-text">작성자</span>
            <input v-model="user" type="text" class="form-control" placeholder="작성자를 입력해주세요.(3~15자)"/>
        </div> 
        <div class="input-group mb-3">
            <span class="input-group-text">암호화</span>
            <input v-model="password" type="password" class="form-control" placeholder="글 수정, 삭제시 필요한 비밀번호를 입력해주세요(3~15자)"/>
        </div> 
        <div class="input-group mb-3">
            <span class="input-group-text">글내용</span>
            <textarea v-model="contents" style="height: 500px" type="text" class="form-control" placeholder="내용을 입력해주세요.(5000자 이내)"/>
        </div>
        <button @click="register()" class="btn btn-success"> 등록 </button>	 
    </div>
</template>

<script>
import axios from "axios";

export default {
    
    name:"Create",
	data(){
		return{
            title : "",
            user : "",
            password : "",
            contents : "",
            createdDate : new Date().toLocaleString(),
            modifiedDate : new Date().toLocaleString(),
		}
    },
    watch: {
        title(input, before){
            if (input.indexOf("\"")>=0) {
                alert("큰 따옴표(\")는 입력하실 수 없습니다.");
                this.title = before;
            }
        },
        user(input, before){
            if (input.indexOf("\"")>=0) {
                alert("큰 따옴표(\")는 입력하실 수 없습니다.");
                this.user = before;
            }
            if (input.indexOf(" ")>=0){
                alert("빈칸은 입력하실 수 없습니다.");
                this.user = before;
            }
        },
        password(input, before){
            if (input.indexOf("\"")>=0) {
                alert("큰 따옴표(\")는 입력하실 수 없습니다.");
                this.password = before;
            }
            if (input.indexOf(" ")>=0){
                alert("빈칸은 입력하실 수 없습니다.");
                this.password = before;
            }
        },
        contents(input, before){
            if (input.indexOf("\"")>=0) {
                alert("큰 따옴표(\")는 입력하실 수 없습니다.");
                this.contents = before;
            }
        }
    },
    methods: {
        register() {
            // 유효성 검사를 모두 통과하면
            if (this.validateTitle(this.title)
            && this.validateUserAndPw(this.user)
            && this.validateUserAndPw(this.password)
            && this.validateContents(this.contents)) {
                let id = 0;
                let post = {"title": this.title, "user" : this.user, "password": this.password, "contents" : this.contents,
                            "createdDate": this.createdDate, "modifiedDate": this.modifiedDate
                };
                axios.post("/api/post", post);
                axios.get("/api/post")
                .then(res => {
                    this.updateData();
                    id = res.data[0].id
                    this.$router.push("/board/"+id);
                })
                .catch(err => {
                    console.log(err);
                });
            }
        },
        updateData() {
            this.$emit("updateData")
        },
        validateTitle(input){
            if (input.length === 0) {
                alert("제목을 입력해주세요.");
                return false;
            } else if (input.length > 100) {
                alert("제목을 100자 이내로 입력해주세요.");
                return false;
            } else {
                return true;
            }
        },
        validateUserAndPw(input){
            if (input.length < 3 || input.length > 15) {
                alert("작성자와 비밀번호는 3~15자 사이로 입력해주세요.");
                return false;
            } else {
                return true;
            }
        },
        validateContents(input){
            if (input.length === 0) {
                alert("내용을 입력해주세요.");
                return false;
            } else if (input.length > 5000) {
                alert("내용을 5000자 이내로 입력해주세요.");
                return false;
            } else {
                return true;
            }
        }
    }
}
</script>

<style>

</style>
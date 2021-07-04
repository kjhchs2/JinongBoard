<template>
  <div>
        <div class="input-group mb-3">
            <span class="input-group-text">글제목</span>
            <span type="text" class="form-control">{{title}}</span>
        </div>         
        <div class="input-group mb-3">
            <span class="input-group-text">작성자</span>
            <span type="text" class="form-control"> {{user}}</span>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">작성일</span>
            <span type="text" class="form-control"> {{createdDate}}</span>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">수정일</span>
            <span type="text" class="form-control"> {{modifiedDate}}</span>
        </div>   
        <div class="input-group mb-3">
            <span class="input-group-text">글내용</span>
            <span type="text" class="form-control">{{contents}}</span>
        </div>
        <input v-model="password" type="password" style="align: center " placeholder="수정, 삭제시 비밀번호 입력"/>
        <br/>
        <button @click="editPost()" class="btn btn-success"> 수정 </button>	 
        <button @click="deletePost()" class="btn btn-warning"> 삭제 </button>	 
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "detail",
	props: {
		posts: Array,
    },
    data(){
        return {
            password: "",
            title: "",
            user: "",
            contents: "",
            createdDate: "",
            modifiedDate: ""
        }
    },
    created() {
        let id = this.$route.params.id;
        axios.get("/api/post/"+id)
        .then(res => {
            this.title=res.data[0].title;
            this.user=res.data[0].user;
            this.contents=res.data[0].contents;
            this.createdDate=res.data[0].createdDate;
            this.modifiedDate=res.data[0].modifiedDate;
        })
        .catch(err => {
            alert("잘못된 접근입니다.");
            this.updateData();
            this.$router.push("/");
            console.log(err);
        });
    },
    watch: {
        password(input){
            if (input.indexOf("\"")>=0) {
                alert("큰 따옴표(\")는 입력하실 수 없습니다.");
                this.password = "";
            }
        },
    },
    methods:{
        editPost(){
            let id = this.$route.params.id;
            axios.post("/api/post/"+id+"/pw", {"password":this.password})
            .then(res => {
                if (res.data) {
                    this.$router.push("/board/"+id+"/edit");
                } else {
                    alert("비밀번호를 확인해주세요.");
                }
            })
        },
        deletePost(){
            let id = this.$route.params.id;
            axios.post("/api/post/"+id+"/pw", {"password":this.password})
            .then(res => {
                if (res.data) {
                    axios.delete("/api/post/"+id);
                    alert("글이 삭제되었습니다.")
                    this.updateData();
                    this.$router.push("/");
                } else {
                    alert("비밀번호를 확인해주세요.");
                }
            })
        },
        updateData() {
            this.$emit("updateData");
        }
    }
}
</script>

<style>

</style>
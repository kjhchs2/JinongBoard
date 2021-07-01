<template>
  <div>
    {{props}}
    <table class="table">
      <thead>
        <tr>
          <th scope="col">글 번호</th>
          <th scope="col">글 제목</th>
          <th scope="col">작성자</th>
          <th scope="col">작성일자</th>
          <th scope="col">수정일자</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="$router.push('/board/'+i)" v-for="(post,i) in posts" :key=i >
          <th scope="row">{{post.id}}</th>
          <td class="tr_title" >{{post.title}}</td>
          <td>{{post.user}}</td>
          <td>{{post.createdDate}}</td>
          <td>{{post.modifiedDate}}</td>
        </tr>
      </tbody>
    </table>

    <button>
        <router-link to="/board/create" class="nav-link active">글쓰기</router-link>
    </button>
  </div>
</template>

<script>

export default {
	name : 'list',
	props : {
		posts : Array,
    },

}
</script>

<style scoped>
	.tr_title{cursor: pointer;}
</style>
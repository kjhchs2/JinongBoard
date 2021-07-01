<template>
<table class="table">
  <thead>
    <tr>
      <th scope="col">글 번호</th>
      <th scope="col">글 제목</th>
      <th scope="col">작성자</th>
      <th scope="col">작성시간</th>
    </tr>
  </thead>
  <tbody>
    <tr @click="$router.push('/detail/'+i)" v-for="(post,i) in posts" :key=i >
      <th scope="row">{{i}}</th>
      <td class="tr_title" >{{post.title}}</td>
      <td>{{post.writer}}</td>
      <!-- <td>{post.createdTime}</td> -->
    </tr>

  </tbody>
</table>

	
</template>

<script>
export default {
	name : 'list',
	props : {
		posts : Array,
	}
}
</script>

<style scoped>
	.tr_title{cursor: pointer;}
</style>
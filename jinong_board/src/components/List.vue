<template>
  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">글 번호</th>
          <th scope="col">글 제목</th>
          <th scope="col">작성자</th>
          <th scope="col">작성일</th>
          <th scope="col">수정일</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tr_cursor" @click="$router.push('/board/'+post.id)" v-for="post in paginatedData" :key="post.no" >
          <th scope="row">{{post.id}}</th>
          <td>{{post.title}}</td>
          <td>{{post.user}}</td>
          <td>{{post.createdDate}}</td>
          <td>{{post.modifiedDate}}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="posts.length!=0">
        <button :disabled="pageNum === 0" @click="prevPage">
        이전
        </button>
        <span>{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
        <button :disabled="pageNum >= pageCount - 1" @click="nextPage">
        다음
        </button>
    </div>

    <button>
        <router-link to="/board/create" class="nav-link active">글쓰기</router-link>
    </button>
  </div>
</template>

<script>

export default {
    name: "list",
    data() {
        return {
            pageNum: 0
        }
    },
	props : {
        posts: Array,
        pageSize: {
            type: Number,
            default: 10
        }
    },
    methods: {
        nextPage() {
            this.pageNum += 1;
            },
        prevPage() {
            this.pageNum -= 1;
            }
    },
    computed: {
        pageCount() {
            let listLeng = this.posts.length;
            let listSize = this.pageSize;
            let page = Math.floor(listLeng / listSize);
            if (listLeng % listSize > 0) page += 1;
            return page;
        },
        paginatedData() {
            const start = this.pageNum * this.pageSize;
            const end = start + this.pageSize;
            return this.posts.slice(start, end);
        }
    }
}
</script>

<style scoped>
	.tr_cursor{cursor: pointer;}
</style>
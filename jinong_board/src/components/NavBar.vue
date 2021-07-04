<template>
	<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <div class="container-fluid">
            <a class="navbar-brand" href="http://www.jinong.co.kr/pages/index.html">
                <img src="../assets/logo.png" alt="logo" width="118" style="margin-right: 0vw">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active" aria-current="page">글보기</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/board/create" class="nav-link active">글쓰기</router-link>
                    </li>
                </ul>
            </div>
        </div>
	</nav>
</template>

<script>
export default {
	
}
</script>

<style scoped>
</style>
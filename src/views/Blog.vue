<script setup>
import { ref, reactive } from "vue";
import { getPosts } from "/src/firebase"
import PostCard from "../components/PostCard.vue";
import PostTagsFilers from "../components/PostTagFilters.vue";
import PostSearch from "../components/PostSearch.vue";
import theLoader from "../components/TheLoader.vue"

const loading = ref(true)
const posts = ref([])

getPosts().then( blogPosts => { 
  
  loading.value = false;
  posts.value = blogPosts;


})

const tags = reactive(["research", "JavaScript", "WebG", "vue"]);
const searchQuery = ref("");
</script>

<template>
  
  <the-loader v-if="loading" />

  <template v-else>
    <div class="blog-header">
   
      <div class="wrapper wrapper--flex">
        <h1 class="title title--small" :style="{ 'white-space': 'nowrap' }">Blog Posts</h1>
        <post-search v-model="searchQuery" />
      </div>
      <post-tags-filers :tags="tags" />
    </div>
  
    <div class="posts" v-for="post in posts">

      <post-card :post-data="post"/>
    
    </div>

  </template>

</template>

<style lang="scss">
.blog-header {
  position: sticky;
  top: $navigation-height;
  background: $color_background;
  padding: 1em 0;
}
.posts {
  // display: grid;
  // grid-template-columns: repeat( auto-fill, minmax(380px, 1fr) )
  padding: 0 1em;
}
</style>

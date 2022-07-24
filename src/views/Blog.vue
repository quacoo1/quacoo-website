<script setup>
import { ref, reactive } from "vue";
import PostCard from "../components/PostCard.vue";
import PostTagsFilers from "../components/PostTagFilters.vue";
import PostSearch from "../components/PostSearch.vue";

const tags = reactive(["research", "JavaScript", "WebG", "vue"]);
const searchQuery = ref("sing");
</script>

<template>
  <div class="blog-header">
    <div class="wrapper wrapper--flex">
      <h1 class="title title--small" :style="{ 'white-space': 'nowrap' }">Blog Posts</h1>
      <post-search v-model="searchQuery" />
    </div>
    <post-tags-filers :tags="tags" />
  </div>
  <div class="posts">
    <post-card />
    <post-card />
    <post-card />
  </div>
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

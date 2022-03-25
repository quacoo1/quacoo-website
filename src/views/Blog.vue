<script setup>
    import { ref, reactive } from "vue"
    import PostCard from '../components/PostCard.vue'
    import PostTagsFilers from "../components/PostTagFilters.vue";

    const tags = reactive(['research','JavaScript', 'WebG','vue'])

</script>

<template>
    <div class="blog-header">
        <h1 class="title">Blog Posts</h1>
        <post-tags-filers :tags="tags"/>
    </div>
    <div class="posts">
        <post-card />
        <post-card />
        <post-card />
    </div>

</template>

<style lang="scss">
    .blog-header{
        position: sticky;
        top: $navigation-height;
        background: $color_background;
        padding:2em 0;
    }
    .posts{
        // display: grid;
        // grid-template-columns: repeat( auto-fill, minmax(380px, 1fr) )
        padding:0 1em;
    }
</style>
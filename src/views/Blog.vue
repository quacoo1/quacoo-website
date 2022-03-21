<script setup>
    import { ref, reactive } from "vue"
    import PostCard from '../components/PostCard.vue'
    import PostTagsFilers from "../components/PostTagFilters.vue";

    const tags = reactive(['one','two', 'three','Four', 'Five', 'Six', 'Seven', 'eight', 'nine', 'ten', 'eleven'])

</script>

<template>
    <h1 class="title">Blog Posts</h1>
    <post-tags-filers :tags="tags"/>
    <div class="posts">
        <post-card />
        <post-card />
        <post-card />
    </div>

</template>

<style lang="scss">
    .posts{
        display: grid;
        grid-template-columns: repeat( auto-fill, minmax(380px, 1fr) );
        padding: 3em 0;
    }
</style>
<script setup>
  import { toRefs } from "vue";

  const props = defineProps({
    postData: Object,
  })

  const { postData } = toRefs(props)

  const date = new Date(postData.value.date.seconds)


</script>

<template>
  <div class="postcard">
    <div>
      <figure class="postcard__image">
        <img src="https://via.placeholder.com/150" alt="" width="150" height="150" />
      </figure>
    </div>
    <div class="postcard__content">
      <a href="#" class="postcard__name">{{ postData.name }}</a>
      <p class="postcard__description"> <span class="postcard__date">
        {{ date }}
      </span> </p>
      <!-- <span class="postcard__tag">tag</span> -->
      <p class="postcard__description">
        {{ postData.content }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.postcard {
  display: grid;
  grid-template-columns: 150px auto;

  border: solid 1px rgba($color_grey, 0.25);
  padding: 1em;
  margin-bottom: 2em;

  &__image {
    display: flex;
    overflow: hidden;
    height: max-content;
  }

  &__content {
    padding: 0 1em;
  }
  &__description {
    margin-bottom: 1em;
  }

  &__tag {
    background: #e78587;
    display: inline-block;
    padding: 0 1em;
    border-radius: 100em;
  }
  &__date {
  }
  &__name {
    display: inline-block;
    color: $color_primary;
    font-weight: bold;
    font-size: 1.5em;
    text-decoration: none;
    margin-bottom: 0.5em;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

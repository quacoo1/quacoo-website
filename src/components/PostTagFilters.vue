<script setup>
import { ref, reactive, toRefs } from "vue";

const props = defineProps({
  tags: { type: Array, default: [] },
});

const postTagsRef = ref(null);

const seletedTags = reactive([...props.tags]);

const isSelectedTag = (tagName) => seletedTags.includes(tagName);

const toggleSelected = (tagName, index) => {
  if (isSelectedTag(tagName)) seletedTags[index] = "";
  else seletedTags[index] = tagName;
};

const onScrollTags = (event) => {
  postTagsRef.value.scrollLeft += event.deltaY;
};

const scrollTagsLeft = () => {
  postTagsRef.value.scrollLeft -= 70;
};

const scrollTagsRight = () => {
  postTagsRef.value.scrollLeft += 70;
};
</script>

<template>
  <div class="wrapper wrapper--bordered">
    <button class="post-tags__button post-tags__button--left" @click="scrollTagsLeft">
      <i class="fas fa-chevron-left"></i>
    </button>
    <div class="post-tags" ref="postTagsRef" @wheel.prevent="onScrollTags">
      <div
        class="post-tag"
        :class="{ 'post-tag--selected': isSelectedTag(tag) }"
        v-for="(tag, index) in tags"
        :key="index"
        @click="toggleSelected(tag, index)"
      >
        {{ tag }}
      </div>
    </div>
    <button class="post-tags__button post-tags__button--right" @click="scrollTagsRight">
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<style lang="scss">
.post-tags {
  display: flex;

  padding: 0.5em 2em;

  align-items: center;

  overflow-x: scroll;
  scroll-behavior: smooth;

  text-transform: capitalize;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &__button {
    cursor: pointer;
    color: $color_grey;
    background: $color_background;
    border: none;
    position: absolute;

    display: flex;
    width: 3em;
    justify-content: center;
    align-items: center;

    top: 0;
    bottom: 0;

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
}

.post-tag {
  background: rgba($color_grey, 0.15);
  border: solid 1px rgba($color_grey, 0.25);
  margin: 0 0.5em;
  padding: 0.25em 1.25em;

  &--selected {
    color: $color_background;
    background: rgba($color_grey, 0.75);
  }
}
</style>

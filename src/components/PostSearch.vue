<script setup>
import { ref } from "vue";

const emits = defineEmits(["update:modelValue"]);

const searchRevealed = ref(false);
</script>

<template>
  <div class="post-search">
    <input
      class="post-search__input"
      v-show="searchRevealed"
      type="text"
      placeholder="search"
      :value="$attrs.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button
      class="post-search__close"
      v-show="searchRevealed"
      @click="searchRevealed = false"
    >
      <i class="fas fa-times-circle"></i>
    </button>
    <button
      class="button button__icon"
      v-show="!searchRevealed"
      @click="searchRevealed = true"
    >
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<style lang="scss">
.post-search {
  position: relative;
  margin-left: auto;
  flex-shrink: 1;
  padding-left: 1em;

  &__input {
    font-family: $font_base_type;
    font-size: 1rem;
    color: rgba($color_grey, 0.75);
    padding: 0 1em;
    border: solid 1px;
    border-radius: 0.5em;
    border: none;
    background: rgba($color_secondary, 0.25);
    height: 2.25rem;
    &:focus {
      outline: none;
    }
  }

  &__close {
    color: $color_danger;
    font-size: 1rem;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    right: 0;
    border: none;
    background: transparent;
    padding: 0 0.5em;
  }
}
</style>

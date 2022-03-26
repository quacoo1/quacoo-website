<script setup>
import { ref, reactive } from "vue";
import TheNavigationBar from "./components/TheNavigationBar.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <the-navigation-bar />
  <div class="content"><router-view /></div>
  <the-footer />
</template>

<style lang="scss">
#app {
  color: $color_grey;
  font: 100% $font_base_type;
  background: $color_background;
  min-height: 100%;
}

.content {
  max-width: 1024px;
  margin: 0 auto;
}

.wrapper {
  position: relative;
  overflow: hidden;

  &--flex {
    display: flex;
    align-items: center;
  }

  &--bottom-space {
    padding-bottom: $space-medium;
  }

  &--bordered-radius {
    border: $seperator;
    border-radius: 100em;
  }
}

.title {
  font-size: 2em;
  font-weight: bold;
  text-transform: capitalize;
}

.button {
  cursor: pointer;
  color: $color_grey;

  font-weight: bold;
  letter-spacing: 1px;

  background: $color_secondary;
  border: none;
  border-radius: 0.5em;
  padding: 1em 2em;

  text-transform: capitalize;

  &:hover {
    background: rgba($color_secondary, 0.75);
    transition: background 0.3s ease-out;
  }

  &__icon {
    display: flex;
    align-items: center;
    padding: 0 1em;
    height: 2.25rem;
  }
}
</style>

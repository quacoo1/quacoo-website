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
body{
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
}

#app {
  color: $color_grey;
  font: 100% $font_base_type;
  background: $color_background;
  min-height: 100%;
}

.content {
  max-width: 1228px;
  margin: 0 auto;
}

.wrapper {
  position: relative;
  overflow: hidden;

  &--flex {
    display: flex;
    align-items: center;
  }
  &--bordered{
    margin-top:.5em;
    border: $seperator;
  }
}

.title {
  font-size: 2em;
  font-weight: bold;
  text-transform: capitalize;

  &--small{
    font-size: 1.25em;
  }
}

.button {
  cursor: pointer;
  color: $color_grey;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;

  background: $color_secondary;
  border: solid 1px $color_secondary;
  padding: 1em 2em;

  text-transform: capitalize;

  &:hover {
    background: rgba($color_secondary, 0.75);
    transition: background 0.3s ease-out;
  } 

  &__icon {
    background: transparent;
    border:none;
    display: flex;
    align-items: center;
    padding: 0 1em;
    height: 2.25rem;
  }
}
</style>

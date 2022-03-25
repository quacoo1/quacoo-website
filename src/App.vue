<script setup>
  import { ref, reactive } from "vue"
  import TheNavigationBar from "./components/TheNavigationBar.vue"
  import TheFooter from "./components/TheFooter.vue"

  
</script>

<template>
  <the-navigation-bar />
  <div class="content"><router-view /></div>
  <the-footer />
</template>

<style lang="scss"> 
  #app{
    color: $color_grey;
    font:100% $font_base_type;
    background: $color_background;
    min-height:100%;
    
  }

  .content{
    max-width:1024px;
    margin: 0 auto;
  }

  .wrapper{
    position: relative;
    overflow: hidden;

    &--bordered-radius{
      border: $seperator;
      border-radius: 100em;
    }
  }

  .title {
    font-size:2em;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom:1em;
  }

  .button{
    cursor: pointer;
    color:$color_grey;

    font-family:$font_base_type;
    font-weight: bold;
    letter-spacing: 1px;
  
    background: $color_secondary;
    border:none;
    border-radius: .5em;
    padding: 1em 2em;

    text-transform: capitalize;

    &:hover{
      background: rgba($color_secondary,.75);
      transition: background .3s ease-out;
    }
  }
</style>

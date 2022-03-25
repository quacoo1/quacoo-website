<template>
    <nav class="navigation">
        <div class="navigation__name">Quacoo👽</div>
        <ul class="navigation__links">
            <li><router-link class="navigation__link" :to="{name:'Home'}">Home</router-link></li>
            <li><router-link class="navigation__link" :to="{name:'Blog'}">Blog</router-link></li>
            <!-- <li><router-link class="navigation__link" :to="{name:'Projects'}">Projects</router-link></li> -->
            <li><router-link class="navigation__link" :to="{name:'Contact'}">Contact</router-link></li>
        </ul>
       
    </nav>
</template>

<style lang="scss">
    %flex-full-height{
        display:flex;
        height:100%;
    }

    .navigation{
        position: sticky;
        top:0;

        height: $navigation-height;
        display: flex;
        padding:0 2em;
       
        background: $color_background;
        border-bottom: solid 1px rgba($color_grey,.25);

        z-index: 999;

        &__name{
            @extend %flex-full-height;
            padding:0 1em;
            align-items: center;
            
        }

        &__links{
            @extend %flex-full-height;
            margin-left: auto;
        }

        &__link{
            @extend %flex-full-height;
            cursor: pointer;
            color: $font_color_link;
            text-decoration:none;

            justify-content: center;
            align-items: center;
            
            padding:0 1em;
            min-width: 5em;

            border-bottom: solid 2px transparent;

            &:hover{
                background: $color_background_hover;
                transition: background .3s ease;
            }
        }

    }

    .router-link-active{
        color:$font_color;
        border-bottom: solid 2px $color_primary;
    }
</style>
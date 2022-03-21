<script>

</script>

<template>

    <div class="postcard">
        
        <p class="postcard__description"> <span class="postcard__date">12/05/21</span>  <span class="postcard__tag">tag</span></p>
        
        <a href="#" class="postcard__name">Blog Name</a>
        
        <p class="postcard__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem in nam, consectetur, obcaecati quam sit ipsa eveniet recusandae placeat, cum illo eos ducimus neque beatae explicabo et sapiente cupiditate laboriosam.
        </p>
    </div> 

</template>

<style lang="scss">
    .postcard{
        border: solid 1px rgba($color_grey,.25);
        padding:1em;
        margin:.5em;
        border-radius: .5em;

        &__description{
            margin-bottom: 1em;
        }


        &__tag{
            background: #E78587;
            display:inline-block;
            padding:0 1em;
            border-radius: 100em;
        }
        &__date{
           
        }
        &__name{
            display: inline-block;
            color:$color_primary;
            font-weight: bold;
            font-size: 1.5em;
            text-decoration: none;
            margin-bottom: .5em;

            &:hover{
                text-decoration: underline;
            }
        }
    }
</style>
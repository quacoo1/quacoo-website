<script>

</script>

<template>
    <footer class="footer">
        <p>&copy; 2022 Kwaku Boateng</p>
        <ul class="footer__links">
            <li><a class="footer__link" href="http://github.com/quacoo1"><i class="fa-brands fa-github"></i></a></li>
            <li><a class="footer__link" href=""><i class="fa-brands fa-twitter"></i></a></li>
            <li><a class="footer__link" href=""><i class="fa-brands fa-instagram"></i></a></li>
        </ul>
    </footer>
</template>

<style lang="scss">
    .footer{
        padding: 2em;
         text-align: center;


        &__links{
            width:min-content;
            margin:0 auto;
            display: flex;

            li{
                padding:1em;
            }
        
        }

        &__link{
            font-size: 1.5em;
            color: $font_color_link;
            text-decoration: none;

            &:hover{
                color: $color-primary;
            }
        }
    }
</style>
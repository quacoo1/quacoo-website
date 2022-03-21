<template>
    <div class="hero">
        <div class="hero__wrapper hero__wrapper--center">
            <div class="hero__avatar">
                <img src="../assets/images/avatar.jpg" alt="avatar">
            </div>
        </div>
        <h1 class="hero__title">Hello! I'm <span class="hero__fullname">kwaku boateng</span>,</h1>
        <p class="hero__about">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nulla possimus accusantium nostrum? Eligendi, beatae eum non exercitationem officiis nesciunt soluta et officia,
            pariatur ipsum, ab sapiente voluptatem adipisci blanditiis alias.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nulla possimus accusantium nostrum? Eligendi, beatae eum non exercitationem officiis nesciunt soluta et officia,
            pariatur ipsum, ab sapiente voluptatem adipisci blanditiis alias.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nulla possimus accusantium nostrum? Eligendi, beatae eum non exercitationem officiis nesciunt soluta et officia,
            pariatur ipsum, ab sapiente voluptatem adipisci blanditiis alias.
            Nulla possimus accusantium nostrum? Eligendi, beatae eum non exercitationem officiis nesciunt soluta et officia,
            pariatur ipsum, ab sapiente voluptatem adipisci blanditiis alias.
            
        </p>
        <button class="button">get in touch</button>
        
    </div>
</template>

<style lang="scss">
    .hero{
    
        padding:3em 2em;
        // padding-top: 0;
        border-bottom: solid 1px rgba($color_grey,.25);

        &__wrapper{
            display: flex;
            align-items: center;

            &--center{
                justify-content: center;
            }
        }

        &__avatar{
            width:164px;
            height: 164px;
            display: flex;
            border-radius: 50%;
            overflow: hidden;
            border: $seperator;
            margin-bottom:2em;
        }

        &__title{
            text-transform: capitalize;
            font-size: 4em;
            margin-bottom:1rem;
        }
        &__fullname{
            color:$color_primary;
        }

        &__about{
            line-height: 250%;
            margin-bottom: 2rem;
        }
        //research how to create resable button components
    }
</style>
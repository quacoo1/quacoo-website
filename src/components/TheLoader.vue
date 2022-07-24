<template>
	<div class="wrapper wrapper--loader"><span class="loader"> </span></div>
</template>

<style lang="scss">
	
	$size: 48px;

	.loader{
   		width : $size;
    	height: $size;
   		border: 5px solid $color_grey;
    	border-bottom-color: $color_primary;
    	border-radius: 50%;
    	display: inline-block;
    	animation: rotation 1s linear infinite;
  	}

  	@keyframes rotation {
    	0% { transform: rotate(0deg) }
    	100% { transform: rotate(360deg) }
  	}

</style>
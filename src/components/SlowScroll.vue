<template>
    <div ref="devref" id=slowscroll>
        <div class="imgdiv"><img ref="imgref" style="width: 100%; transform: scale(1.3);" :src="require(`../assets/${imgsrc}`)" alt="HIBA Building"></div>
    </div>
</template>

<script>
export default {
    name: 'slow-scroll',
    props: ["viewport", "imgsrc"],
    watch:{
        pageOffset(){
            const devref = this.$refs['devref']
            const imgref = this.$refs['imgref']
            if (devref.getBoundingClientRect().top< window.innerHeight&&devref.getBoundingClientRect().top>-imgref.clientHeight){
                imgref.style.marginTop = -devref.getBoundingClientRect().top/2+window.innerHeight/8+'px';
            }
        }
    },
    computed:{
        pageOffset: function (){
            return this.viewport.offset
        }
    }
}
</script>
<style scoped>
#slowscroll{
    height: 100%;
}
.imgdiv{
    opacity: 1;
    height: 100%;
    max-height: 30vmax;
    overflow: hidden;
}
</style>
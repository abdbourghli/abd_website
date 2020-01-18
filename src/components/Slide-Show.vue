<template>
    <div style="height: 30vw; position: relative;">
        
            <div v-for="(imgData, imgIndex) in imgsData.imgs" :key="imgIndex">
                <transition name="slide-fade2"><img class="img-slide" :key="imgIndex" v-if="imgIndex===imgOnIndex" :src="require(`../assets/${imgsData.path}${imgData}`)" alt="slide img"></transition>
            </div>
        
    </div>
</template>

<script>
export default {
    name: "slide-show",
    props: ["imgsData"],
    data(){
        return{
            imgOnIndex: 0
        }
    },
    mounted(){
        const _this = this
        setInterval(()=>{
            if(_this.imgOnIndex===_this.imgsData.imgs.length-1){
                _this.imgOnIndex = 0
            }
            else{
                _this.imgOnIndex++
            }
        },3000)
    }
}
</script>

<style scoped>
.img-slide{
    position: absolute;
    height: 100%;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
}
.slide-fade2-enter-active {
  transition: all .5s ease;
}
.slide-fade2-leave-active {
  transition: all .5s ease;
}
.slide-fade2-enter{
  top: 0%;
  opacity: 0;
}
.slide-fade2-leave-to{
    top: 100%;
    opacity: 0;
}
</style>
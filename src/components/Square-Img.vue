<template>
    <div id="sqr" @mouseenter="addHover" @mouseleave="removeHover" @click="clicked" :style="{width: 21*sqrData.size+'%'}">
        <img class="sqr-img" ref="sqrImg" :src="require(`../assets/${sqrData.img}`)" :alt="sqrData.title">
        <div class="img-tint" ref="sqrTint" :style="{backgroundColor: sqrData.color}"></div>
        <div class="sqr-title">{{sqrData.title}}</div>
    </div>
</template>

<script>
export default {
    name: "square-img",
    props:["sqrData"],
    methods:{
        addHover(){
            // document.getElementsByClassName('ext-box')[0].className = 'ext-box'
            this.$refs["sqrImg"].classList.add('hovered')
            this.$refs["sqrTint"].style.opacity = 0
        },
        removeHover(){
            this.$refs["sqrImg"].className = 'sqr-img'
            this.$refs["sqrTint"].style.opacity = 1
        },
        clicked(){
            this.$emit('clicked')
        }
    }
}
</script>

<style scoped>
#sqr{
    overflow: hidden;
    height: 21vw;
    margin: 0.3vw;
    position: relative;
    cursor: pointer;
}
.img-tint{
    width: 100%;
    height: 100%;
    position: absolute;
    transition: opacity 0.5s ease;
    mix-blend-mode: overlay;
}
.sqr-img{
    height: 100%;
    position: absolute;
    transform: translate(-50%, -50%) scale(1.5);
    top: 50%;
    left: 50%;
    filter: grayscale(1);
    transition: all 0.5s ease;
}
.hovered{
    transform: translate(-50%, -50%) scale(1);
    filter: grayscale(0);
}
.sqr-title{
    position: absolute;
    transform: translate(-50%, -50%) scale(1.5);
    top: 50%;
    left: 50%;
    font-size: 2vw;
    color: white;
    width: 100%;
    background-color: rgba(0,0,0,0.3);
}
</style>
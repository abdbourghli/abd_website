<template>
    <div class="expanded-img" @click="closeImg">
        <div class="expanded-img-back" ></div>
        <iframe v-if="imgPath.data.video" class="sqr-vid" :src="`${imgPath.data.link}`" frameborder="0" allowfullscreen></iframe>
        <img v-else class="sqr-img" ref="sqrImg" :src="require(`../assets/${imgPath.root}${imgPath.data.img}`)" alt="Full Image">
    </div>
</template>

<script>
export default {
    name: "full-screen-img",
    props: ["imgPath", "isVideo"],
    methods:{
        closeImg(){
            this.$emit('closeImg')
        }
    }
}
</script>

<style scoped>
.expanded-img{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    z-index: 800;
}
.sqr-img{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    height: 80%;
}
.sqr-vid{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    height: 80%;
    width: 80%;
}
</style>
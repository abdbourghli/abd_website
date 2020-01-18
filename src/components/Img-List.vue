<template>
    <div id="img-list" @click="clicked">
       <img class="img-box" :src="require(`../assets/${imgPath}tn/${imgData.img}`)" :alt="imgData.img">
       <img v-if="imgData.video" class="play-btn" src="../assets/play-btn.svg" alt="Full Image">
    </div>
</template>

<script>
export default {
    name: "img-list",
    props: ["imgData", "imgPath"],
    methods: {
        clicked(){
            this.$emit('imgClicked', {root: this.imgPath, data: this.imgData})
        }
    }
}
</script>

<style scoped>
#img-list{
    padding: 0.5%;
    position: relative;
}
.img-box{
    border: 1px rgb(107, 107, 107) solid;
    width: 100%;
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    transition: border .3s;
}
.img-box:hover{
    border: 1px white solid;
}
.play-btn{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    height: 80%;
    cursor: pointer;
}
</style>
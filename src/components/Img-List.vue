<template>
    <div ref="imgList" v-cloak id="img-list" :style="shrink?{width: '14vw'}:{}" @click="clicked">
       <img @load="loadedx" ref="thumbImg" class="img-box" :src="require(`../assets/${imgPath}tn/${imgData.img}`)" :alt="imgData.img">
       <img v-if="imgData.video" class="play-btn" src="../assets/play-btn.svg" alt="Full Image">
    </div>
</template>

<script>
export default {
    name: "img-list",
    props: ["imgData", "imgPath", "shrink"],
    methods: {
        clicked(){
            this.$emit('imgClicked', {root: this.imgPath, data: this.imgData})
        },
        loadedx(){
            if(this.shrink){
                if (this.$refs.thumbImg.getBoundingClientRect().height>this.$refs.thumbImg.getBoundingClientRect().width){
                    this.$refs.thumbImg.style.height = '14vw';
                }
                else{
                    this.$refs.thumbImg.style.width = '14vw';
                }
            }
            else if (this.$refs.thumbImg.getBoundingClientRect().width>this.$refs.thumbImg.getBoundingClientRect().height){
                this.$refs.thumbImg.style.width = '100%';
            }
            else{
                this.$refs.thumbImg.style.height = '100%';
            }
        }
    },
    mounted(){
        // const _this = this
        // setTimeout(()=>{
        //     console.log(_this.$refs.thumbImg.getBoundingClientRect())
        // },500)
        
    }
}
</script>

<style scoped>
#img-list{
    padding: 0.5%;
    position: relative;
    width: 20vw;
    height: 20vw;
    margin: 2vh 0;
}
.img-box{
    border: 1px rgb(107, 107, 107) solid;
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    transition: border .3s;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}
.img-box:hover{
    border: 1px white solid;
}
.play-btn{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    height: 50%;
    cursor: pointer;
}
</style>
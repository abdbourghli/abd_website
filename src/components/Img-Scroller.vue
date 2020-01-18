<template>
    <div id="img-scroller">
        <div
            v-for="(imgData, imgIndex) in imgsData"
            :key="imgData.img"
            class="img-slide"
            :style="{left: imgIndex*15-15+'vw'}"
        >
            <img-list
                :imgData="imgData" :imgPath="imgPath"
                v-on:imgClicked="imgClicked($event)"
                style="margin: 5px; width: 15vw;"
            ></img-list>
        </div>
    </div>
</template>

<script>
export default {
    name: "img-scroller",
    props: ["imgsData","imgPath","imgSelected"],
    methods:{
        imgClicked(iPath){
            this.$emit('imgClicked',iPath)
        }
    },
    created(){
       const _this = this
        setInterval(()=>{
            if (!_this.imgSelected){
                const slideHold = _this.imgsData[0]
                _this.imgsData.shift()
                _this.imgsData.push(slideHold)
            }
        },3000)
    },
    imgClosed(){

    }
}
</script>

<style scoped>
#img-scroller{
    position: relative;
    width: 100%;
    height: 17vw;
    overflow: hidden;
    background-color: rgba(0,0,0,0.1);
}
.img-slide{
    position: absolute;
    transition: left 1s ease;
}
</style>
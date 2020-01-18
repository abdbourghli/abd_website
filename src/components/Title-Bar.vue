<template>
    <div>
        <div ref="titleBox" :on="titleTop<viewport.offset?postTitle():preTitle()"
        :class="titleIndex===titleOnDisplay&&fixed?'fix-title':'title-bar'" :style="{backgroundColor: titleData.color, zIndex: titleIndex}">
            <div class="title-box" :style="{backgroundColor: titleData.color}"><span class="title-text">{{titleData.text}}</span></div>
            <div v-if="skillSelected&&backBtn" class="skill-back-btn" @click="backClicked">
                <img class="arrow-img" src="../assets/left-arrow.svg" alt="back button">
            </div>
        </div>
        
        <div class="title-hold">
            
        </div>
        
    </div>
</template>

<script>
export default {
    name:"title-bar",
    props:["titleData", "viewport", "titleOnDisplay", "skillSelected", "backBtn"],
    data(){
        return {
            titleTop: 1,
            fixed: false,
            titleIndex: 10
        }
    },
    methods:{
        postTitle(){
            if(!this.fixed){
                this.fixed = true
                this.titleIndex = this.titleOnDisplay+1
                this.$emit('addTitleIndex')
            }
        },
        preTitle(){
            if(this.fixed){
                this.fixed = false
                this.$emit('removeTitleIndex')
            }
        },
        backClicked(){
            this.$emit("backClicked")
        }
    },
    mounted(){
        const _this = this
        const titleEl = _this.$refs['titleBox']
            _this.titleTop = titleEl.getBoundingClientRect().top + _this.viewport.offset
    },
    watch:{
        
    }
}
</script>

<style scoped>
.title-bar{
    position: absolute;
    width: 100%;
    height: 6vw;
}
.fix-title{
    position: fixed;
    top: 0;
    width: 100%;
    height: 6vw;
    box-shadow: -1px 4px 6px #00000033;
    z-index: 10;
}
.title-box{
    position: absolute;
    transform: translate(-50%, 0);
    left: 50%;
    border-bottom: 0.5vw #ffffff solid;
    padding: 0.6vw 4vw;
    display: inline-block;
    cursor: default;
    border-radius: 2.5vw;
}
.title-text{
    color: white;
    font-size: 5vw;
}
.title-hold{
    height: 10vw;
    width: 100%;
}
.skill-back-btn{
    position: absolute;
    left: 2vw;
    top: 2vw;
    width: 14vh;
    height: 14vh;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
}
.arrow-img{
    width: 95%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}
</style>
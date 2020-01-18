<template>
    <div class="cir-cont" style="margin: 1.5vw 3vw;">
        <div class="back-cir" :style="{borderColor: cirData.color, backgroundColor: isJpg==='true'?'rgba(0,0,0,0.1)':'rgba(0,0,0,0)'}">
            <img class="cir-img" :src="require(`../assets/${cirData.img}`)" :alt="cirData.title">
        </div>
        <div class="cir-title" :style="{color: cirData.color}">
            {{cirData.title}}
        </div>
    </div>
</template>

<script>
export default {
    name: "circle-img",
    props: ["cirData","isJpg"]
}
</script>

<style scoped>
.back-cir{
    display: inline-table;
    position: relative;
    height: 10vw;
    width: 10vw;
    border-radius: 50%;
    border: 0.4vw white solid;
    background-color: rgba(0,0,0,0.1);
}
.cir-img{
    height: 6vw;
    width: 6vw;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}
.cir-title{
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    cursor: default;
    margin-top: 2vw;
    font-size: 3vw;
        width: 20vw;
}
.cir-cont{
    width: inherit;
    position: relative;
    height: 15vw;
    width: 15vw;
}
</style>
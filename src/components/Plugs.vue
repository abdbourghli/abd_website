<template>
    <div>
        <div style="position: absolute; right: -18px; height: 100%; border-right: 6px white solid;"></div>
        <transition name="slide-fade">
            <div class="plug-unit" v-if="selectedPlug===0" :key ='11'>
                <div class="plug-title" style="background-color: rgba(10, 38, 58, 0.7);">{{plugs[selectedPlug].title}}</div>
                <div class="plug-des" v-for="(des, desIndex) in plugs[selectedPlug].descriptions" :key="desIndex">
                    {{des}}
                </div>
            </div>
            <div class="plug-unit" v-if="selectedPlug===1" :key ='12'>
                <div class="plug-title" style="background-color: rgba(47, 152, 208, 0.7);">{{plugs[selectedPlug].title}}</div>
                <div class="plug-des" v-for="(des, desIndex) in plugs[selectedPlug].descriptions" :key="desIndex">
                    {{des}}
                </div>
            </div>
            <div class="plug-unit" v-if="selectedPlug===2" :key ='13'>
                <div class="plug-title" style="background-color: rgba(173, 24, 24, 0.7);">{{plugs[selectedPlug].title}}</div>
                <div class="plug-des" v-for="(des, desIndex) in plugs[selectedPlug].descriptions" :key="desIndex">
                    {{des}}
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "plugs",
    data(){
        return{
            selectedPlug: 0,
            plugs: [
                {
                    title: `9 Years Business Student`,
                    descriptions:
                    [
                        `Degree in business administration`,
                        `Bachelor's degree in management information systems`,
                        `Masters in E-business`
                    ]
                },
                {
                    title: `Ambitious programmer`,
                    descriptions:
                    [
                        `Full-stack developer`,
                        `.Net programmer`,
                        `Always open to learning new tech`
                    ]
                },
                {
                    title: `Professional Graphic Designer`,
                    descriptions:[
                        `2D/3D design and animation`,
                        `Photo manipulation`,
                        `Video editing and montage`
                    ]
                }
            ]
        }
    },
    created(){
        const _this = this
        setInterval(()=>{
            if(_this.selectedPlug>=_this.plugs.length-1){
                _this.selectedPlug = 0
            }
            else{
                _this.selectedPlug++
            }
        },3000)
    }
}
</script>

<style scoped>
.plug-unit{
    position: absolute;
    right: 10px;
    cursor: default;
}
.plug-title{
    text-align: right;
    padding: 4px 12px;
    font-size: 22px;
    margin-bottom: 10px;
    color: white;
    border-radius: 15px 0 15px 0;
}
.plug-des{
    text-align: right;
    font-size: 13px;
    color: white;
}

</style>
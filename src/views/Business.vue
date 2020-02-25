<template>
    <div id="dev-page">
        <br>
        <div class="des-conainer">
            <slow-scroll :viewport='viewport' :imgsrc="'hiba1.jpg'" class="des-block" :style="{width: dywidth}"></slow-scroll>
            <div  class="des-block" :style="{width: dywidth}">
                <div class="des-p">
                    <div class="des-title" style="color: #4b8cb4;">Preparatory Certificate in Management</div>
                    <div class="des-text">In 2011 I passed the admission test and had the privilege to enter the Higher Institute of Business Administration (HIBA) and learn the fundamentals of market research, team leading, and business management.</div>
                </div>
            </div>
        </div>
        <div class="sep"></div>
        <div class="des-conainer">
            <div class="des-block" :style="{width: dywidth}">
                <div class="des-p">
                    <div class="des-text">In 2014 I got my  Preparatory Certificate in Management which allowed me to continue and specialize in different fields of business administration sciences.</div>
                </div>
            </div>
            <div class="des-block" style="width: 90vmin;" :style="{width: dywidth}"><img class="des-img" style="width:100%;" src="../assets/hiba2.png" alt="HIBA logo"></div>
        </div>
        <div class="sep"></div>
        <div class="des-conainer">
            <div class="des-block" :style="{width: dywidth}"><img class="des-img" :style="dyratio" src="../assets/mis.jpg" alt="MIS"></div>
            <div class="des-block" :style="{width: dywidth}">
                <div class="des-p">
                    <div class="des-title" style="color: #4b8cb4;">Bachelor Degree in MIS</div>
                    <div class="des-text">In 2014 I continued studying in the Higher Institute of Business Administration, And due to my growing interest in technology and e-business I decided to specialize in Management Information System.</div>
                </div>
            </div>
        </div>
        <div class="sep"></div>
        <div class="des-conainer">
            <slow-scroll :viewport='viewport' style="position: absolute; width: 100%; z-index: 0;" :imgsrc="'grad1.jpg'" class="des-block"></slow-scroll>
            <div class="des-block" :style="{width: dywidth}" style="z-index: 1;">
                <div class="des-p" style="background-color: #0a263ad1; padding: 3%;">
                    <div class="des-text" style="color: white;">In 2017 I graduated and got my degree in Management Information System (MIS), and carried greate knowledge in integrating management, information, and technologies pertinent to it and enabling them to use information systems and applications in running managerial operations and making the decisions based on informatics and developed base.</div>
                </div>
            </div>
        </div>
        <div class="sep"></div>
        <div class="des-conainer">
            <div class="des-block" :style="{width: dywidth}"><img class="des-img" :style="dyratio" style="padding: 0;" src="../assets/araeb.jpg" alt="MIS"></div>
            <div class="des-block" :style="{width: dywidth}">
                <div class="des-p">
                    <div class="des-title" style="color: #4b8cb4;">Masters in e-business</div>
                    <div class="des-text">After graduating and getting my MIS degree my interest only grew bigger and I started seeking further education around the online and electronic business, In December 2017 I was accepted for master's program at the Arab Academy of E-business after passing the admission test/interview and started there at the beginning of 2018.</div>
                </div>
            </div>
        </div>
        <div class="sep"></div>
        <div class="des-conainer">
            <div  class="des-block" :style="{width: dywidth}">
                <div class="des-p">
                    <div class="des-text">In 2019 I got awarded by ARAEB for performance excellence.</div>
                </div>
            </div>
            <slow-scroll :viewport='viewport' :imgsrc="'award.jpg'" class="des-block" :style="{width: dywidth}"></slow-scroll>
        </div>
        <div class="sep"></div>
        <div class="des-conainer">
            <slow-scroll :viewport='viewport' :imgsrc="'grad2.jpg'" class="des-block" :style="{width: dywidth}"></slow-scroll>
            <div  class="des-block" :style="{width: dywidth}">
                <div class="des-p">
                    <div class="des-text">In February 2020 I presented and defended my Master thesis and earned my master's degree with an excellent grade.</div>
                </div>
            </div>
        </div>
        <div class="sep"></div>
        <info-page :viewport='viewport'
        ></info-page>
    </div>
</template>

<script>
export default {
    name: 'business-page',
    props: ["viewport"],
    data(){
        return{

        }
    },
    computed:{
        dywidth(){
            if(this.viewport.height>this.viewport.width){
                return ('100%')
            }
            else return('50%')
        },
        dyratio(){
            if(this.viewport.height>this.viewport.width){
                return ({height: 'inherit'})
            }
            else return({width: '90%'})
        }
    }
}
</script>

<style scoped>
#dev-page{
    position: absolute;
    top: 100%;
    background-color: rgb(10, 38, 58);
    width: 100%;
}
.sep{
    display: inline-block;
    width: 60%;
    margin: 3% 0;
    border-top: 2px rgba(255, 255, 255, 0.4) solid;
}
</style>
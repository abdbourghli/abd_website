<template>
    <div ref="desPage" id="des-page">
        <title-bar :viewport='viewport' :titleData="{text:'Software', color:'rgb(173, 24, 24)'}"
        v-on:addTitleIndex="addTitleIndex" v-on:removeTitleIndex="removeTitleIndex" :titleOnDisplay="titleOnDisplay"></title-bar>
        <div class="des-sws">
            <circle-img 
            v-for="(cirData, dataIndex) in cirsData"
            :key="dataIndex"
            :cirData="cirData"></circle-img>
        </div>
        <div class="sep"></div>
        <title-bar :viewport='viewport' :titleData="{text:'Projects', color:'rgb(173, 24, 24)'}"
        v-on:addTitleIndex="addTitleIndex" v-on:removeTitleIndex="removeTitleIndex" :titleOnDisplay="titleOnDisplay"></title-bar>
        <div class="des-conainer">
            <slow-scroll :viewport='viewport' :imgsrc="'hajjiri.jpg'" class="des-block" :style="{width: dywidth}"></slow-scroll>
            <div  class="des-block" :style="{width: dywidth}">
                <div class="des-p">
                    <div class="des-title" style="color: #ff5858;"><span>HAJJIRI Foundation</span></div>
                    <div class="des-text" style="color: white;">HAJJIRI Foundation is an Online educational platform that gives insights into healthcare and health education.
I have the role of creating many educational videos/infographics and promotional contents.</div>
                </div>
            </div>
            <img-scroller :imgsData="portData.portHajjiri.list" :imgPath="portData.portHajjiri.path" :imgSelected="imgSelected" v-on:imgClicked="imgClicked($event)"></img-scroller>
        </div>
        <div class="sep"></div>
        <div class="des-conainer">
            <slow-scroll :viewport='viewport' :imgsrc="'fatabyyano.jpg'" class="des-block" :style="{width: dywidth}"></slow-scroll>
            <div  class="des-block" :style="{width: dywidth}">
                <div class="des-p">
                    <div class="des-title" style="color: #ff5858;"><span>Fatabyyano Platform</span></div>
                    <div class="des-text" style="color: white;">Fatabyyano is an independent fact-checking group and it's considered the leading Arabic platform in that field.
I've been working with them since 2014 and created many videos and designs including a music video and promotional content.
                    </div>
                </div>
            </div>
            <img-scroller :imgsData="portData.portFatabyyano.list" :imgPath="portData.portFatabyyano.path" :imgSelected="imgSelected" v-on:imgClicked="imgClicked($event)"></img-scroller>
        </div>
        <div class="sep"></div>
        <title-bar :backBtn="true" :skillSelected="skillSelected" :viewport='viewport' :titleData="{text:'Portfolio', color:'rgb(173, 24, 24)'}" v-on:backClicked="backClicked"
        v-on:addTitleIndex="addTitleIndex" v-on:removeTitleIndex="removeTitleIndex" :titleOnDisplay="titleOnDisplay"></title-bar>
        <transition name="vanish" >
            <div v-if="!skillSelected" ref="des-skills" class="des-skills" key="portList"> 
                <square-img 
                v-for="sqrData in sqrsData"
                :key="sqrData.Index"
                :sqrData="sqrData"
                v-on:clicked="sqrClicked(sqrData.Index)"></square-img>
            </div>
            <div class="img-list" v-if="selectedPort===0" key="3dList">
                <img-list
                v-for="(imgData, imgIndex) in portData.port3d.list"
                :key="imgIndex"
                :imgData="imgData" :imgPath="portData.port3d.path"
                v-on:imgClicked="imgClicked($event)"
                ></img-list>
            </div>
            <div class="img-list" v-if="selectedPort===1" key="graphicsList">
                <img-list
                v-for="(imgData, imgIndex) in portData.portGraphics.list"
                :key="imgIndex"
                :imgData="imgData" :imgPath="portData.portGraphics.path"
                v-on:imgClicked="imgClicked($event)"
                ></img-list>
            </div>
            <div class="img-list" v-if="selectedPort===2" key="logoList">
                <img-list
                v-for="(imgData, imgIndex) in portData.portLogo.list"
                :key="imgIndex"
                :imgData="imgData" :imgPath="portData.portLogo.path"
                v-on:imgClicked="imgClicked($event)"
                ></img-list>
            </div>
            <div class="img-list" v-if="selectedPort===4" key="veList">
                <img-list
                v-for="(imgData, imgIndex) in portData.portVe.list"
                :key="imgIndex"
                :imgData="imgData" :imgPath="portData.portVe.path"
                v-on:imgClicked="imgClicked($event)"
                ></img-list>
            </div>
            <div class="img-list" v-if="selectedPort===5" key="psList">
                <img-list
                v-for="(imgData, imgIndex) in portData.portPs.list"
                :key="imgIndex"
                :imgData="imgData" :imgPath="portData.portPs.path"
                v-on:imgClicked="imgClicked($event)"
                ></img-list>
            </div>
        </transition>
        <transition name="fade">
            <full-screen-img v-if="imgSelected" :imgPath="selectedImgPath" v-on:closeImg="closeImg"></full-screen-img>
        </transition>
        <info-page :viewport='viewport'
        v-on:addTitleIndex="addTitleIndex" v-on:removeTitleIndex="removeTitleIndex" :titleOnDisplay="titleOnDisplay"></info-page>
    </div>
</template>

<script>
export default {
    name: "des-page",
    props: ["viewport"],
    data(){
        return{
            selectedPort: null,
            cirsData:[
                {title: "Photoshop", img: "des-sw/ps-cir.png", color: "#03c7fc"},
                {title: "Animate", img: "des-sw/an-cir.png", color: "#fd3615"},
                {title: "Illustrator", img: "des-sw/ai-cir.png", color: "#ff7c00"},
                {title: "3ds Max", img: "des-sw/3d-cir.jpg", color: "rgb(33, 208, 214)"},
                {title: "V.ray", img: "des-sw/vr-cir.png", color: "#91b6e2"},
                {title: "Premiere", img: "des-sw/pr-cir.png", color: "#e976fc"},
                {title: "After Effects", img: "des-sw/ae-cir.png", color: "#d291ff"}
            ],
            sqrsData:[
                {title: "3D", img: "des-skills/3d.jpg", color: "rgb(74, 242, 255)", size:2, Index: 0},
                {title: "Graphics", img: "des-skills/graphics.jpg", color: "rgb(76, 189, 24)", size:1, Index: 1},
                {title: "Logo", img: "des-skills/logo.jpg", color: "rgb(255, 0, 0)", size:1, Index: 2},
                {title: "Emotes", img: "des-skills/emotes.jpg", color: "rgb(202, 46, 171)", size:1, Index: 3},
                {title: "Video Editing", img: "des-skills/ve.jpg", color: "rgb(64, 52, 197", size:2, Index: 4},
                {title: "Photo Editing", img: "des-skills/pe.jpg", color: "rgb(179, 121, 1);", size:1, Index: 5}
            ],
            portData: {
                port3d: {path: "des-skills/3d/", list: [
                    {img:"wkc0EYqn4js.jpg", video: true, link:'https://www.youtube.com/embed/wkc0EYqn4js'},
                    {img:"c2hm_hQHkNU.jpg", video: true, link:'https://www.youtube.com/embed/c2hm_hQHkNU'},
                    {img:"vnMFepylABw.jpg", video: true, link:'https://www.youtube.com/embed/vnMFepylABw'},
                    {img:"XRiRBFAWFc.jpg", video: true, link:'https://www.youtube.com/embed/XRiRBFAWFcY'},
                    {img:"GwJDK85RWEI.jpg", video: true, link:'https://www.youtube.com/embed/GwJDK85RWEI'},
                    {img:"3d1.jpg", video: false},
                    {img:"3d2.jpg", video: false},
                    {img:"3d3.jpg", video: false},
                    {img:"3d4.jpg", video: false},
                    {img:"3d5.jpg", video: false},
                    {img:"3d6.jpg", video: false},
                    {img:"3d7.jpg", video: false},
                    {img:"3d8.jpg", video: false},
                    {img:"3d9.jpg", video: false},
                    {img:"3d11.jpg", video: false},
                    {img:"3d12.jpg", video: false},
                    {img:"3d13.jpg", video: false}
                ]},
                portGraphics: {path: "des-skills/graphics/", list: [
                    {img:"graphics1.jpg", video: false},
                    {img:"graphics2.jpg", video: false},
                    {img:"graphics3.jpg", video: false},
                    {img:"graphics4.jpg", video: false},
                    {img:"graphics5.jpg", video: false},
                    {img:"graphics6.jpg", video: false},
                    {img:"graphics7.jpg", video: false},
                    {img:"graphics8.jpg", video: false},
                    {img:"graphics9.jpg", video: false},
                    {img:"graphics10.jpg", video: false},
                    {img:"graphics11.jpg", video: false},
                    {img:"graphics12.jpg", video: false},
                    {img:"graphics13.jpg", video: false},
                    {img:"graphics14.jpg", video: false},
                    {img:"graphics15.jpg", video: false},
                    {img:"graphics16.jpg", video: false},
                    {img:"graphics17.jpg", video: false},
                    {img:"graphics18.jpg", video: false},
                    {img:"graphics19.jpg", video: false},
                    {img:"graphics20.jpg", video: false},
                    {img:"graphics21.jpg", video: false},
                    {img:"graphics22.jpg", video: false},
                    {img:"graphics23.jpg", video: false},
                    {img:"graphics24.jpg", video: false},
                    {img:"graphics25.jpg", video: false},
                    {img:"graphics26.jpg", video: false}
                ]},
                portLogo: {path: "des-skills/logo/", list: [
                    {img:"logo1.jpg", video: false},
                    {img:"logo2.jpg", video: false},
                    {img:"logo3.jpg", video: false},
                    {img:"logo4.jpg", video: false},
                    {img:"logo5.jpg", video: false},
                    {img:"logo6.jpg", video: false},
                    {img:"logo7.jpg", video: false},
                    {img:"logo8.jpg", video: false},
                    {img:"logo9.jpg", video: false},
                    {img:"logo10.jpg", video: false},
                    {img:"logo11.jpg", video: false},
                    {img:"logo12.jpg", video: false},
                    {img:"logo13.jpg", video: false},
                    {img:"logo14.jpg", video: false},
                    {img:"logo15.jpg", video: false},
                    {img:"logo16.jpg", video: false},
                    {img:"logo17.jpg", video: false}
                ]},
                portEmotes: {path: "", list:[]},
                portVideo: {path: "", list:[]},
                portPhotoshop: {path: "", list:[]},
                portHajjiri: {path: "des-skills/hajjiri/", list: [
                    {img:"img1.jpg", video: false},
                    {img:"img2.jpg", video: false},
                    {img:"img3.jpg", video: false},
                    {img:"img4.jpg", video: false},
                    {img:"img5.jpg", video: false},
                    {img:"img6.jpg", video: false},
                    {img:"img7.jpg", video: false},
                    {img:"img8.jpg", video: false},
                    {img:"img9.jpg", video: false},
                    {img:"img10.jpg", video: false},
                    {img:"vid1.jpg", video: true, link: `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FHajjiri%2Fvideos%2F10157690399548624%2F&show_text=0&width=560`}
                ]},
                portFatabyyano: {path: "des-skills/fatabyyano/", list: [
                    {img:"img1.jpg", video: false},
                    {img:"img2.jpg", video: false},
                    {img:"img3.jpg", video: false},
                    {img:"img4.jpg", video: false},
                    {img:"img5.jpg", video: false},
                    {img:"vid2.jpg", video: true, link: `https://www.youtube.com/embed/dyIMUI6Bmsk`},
                    {img:"img6.jpg", video: false},
                    {img:"img7.jpg", video: false},
                    {img:"img8.jpg", video: false},
                    {img:"img9.jpg", video: false},
                    {img:"vid1.jpg", video: true, link: `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFatabyyano%2Fvideos%2F762341750621665%2F&show_text=0&width=560`}
                ]},
                portPs: {path: "des-skills/ps/", list: [
                    {img:"ps1.jpg", video: false},
                    {img:"ps2.jpg", video: false},
                    {img:"ps3.jpg", video: false},
                    {img:"ps4.jpg", video: false},
                    {img:"ps5.jpg", video: false},
                    {img:"ps6.jpg", video: false},
                    {img:"ps7.jpg", video: false},
                    {img:"ps8.jpg", video: false},
                    {img:"ps9.jpg", video: false},
                    {img:"ps10.jpg", video: false},
                    {img:"ps11.jpg", video: false},
                    {img:"ps12.jpg", video: false},
                    {img:"ps13.jpg", video: false},
                    {img:"ps14.jpg", video: false},
                    {img:"ps15.jpg", video: false},
                    {img:"ps16.jpg", video: false}
                ]},
                portVe: {path: "des-skills/ve/", list: [
                    {img:"ve1.jpg", video: true, link: `https://www.youtube.com/embed/dyIMUI6Bmsk`},
                    {img:"ve2.jpg", video: true, link: `https://www.youtube.com/embed/3w7JW1D7ft4`},
                    {img:"ve3.jpg", video: true, link: `https://www.youtube.com/embed/0CoRwzRzpnk`},
                    {img:"ve4.jpg", video: true, link: `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FHajjiri%2Fvideos%2F10157690399548624%2F&show_text=0&width=560`}
                ]},
            },
            sqrsOgData: [],
            skillSelected: false,
            imgSelected: false,
            selectedImgPath: 'des-skills/3d/3d1.jpg',
            titleOnDisplay: 9
        }
    },
    methods:{
        sqrClicked(sIndex){
            this.skillSelected = true
            this.selectedPort = sIndex
        },
        backClicked(){
            this.skillSelected = false
        },
        imgClicked(clickedImgPath){
            this.selectedImgPath = clickedImgPath
            this.imgSelected = true
        },
        closeImg(){
            this.imgSelected = false
        },
        addTitleIndex(){
            this.titleOnDisplay++
        },
        removeTitleIndex(){
            this.titleOnDisplay--
        }
    },
    mounted(){
        this.sqrsOgData = this.sqrsData
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
#des-page{
    position: absolute;
    top: 100%;
    background-color: rgb(173, 24, 24);
    width: 100%;
}
.des-sec-title{
    font-size: 5vw;
    border-bottom: 0.5vw #ffffff solid;
    padding: 0.6vw 4vw;
    display: inline-block;
    color: white;
    cursor: default;
    border-radius: 1.5vw;
 }
.des-sws{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.des-skills{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5vh 0;
}
.img-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2%;
    background-color: #171717;
    padding-top: 4vw;
}
.sep{
    display: inline-block;
    width: 60%;
    margin: 3% 0;
    border-top: 2px rgba(255, 255, 255, 0.7) solid;
}
.vanish-enter-to{
    transform: scale(1);
    opacity: 1;
}
.vanish-enter-active {
  transition: transform .3s ease , opacity .3s ease;
}
.vanish-leave-active {
position: absolute;
  transition: transform .5s ease , opacity .2s;
}
.vanish-enter{
  
  transform: scale(2);
    opacity: 0;
}
.vanish-leave-to{
    transform: scale(0);
    opacity: 0;
}

</style>
<template>
    <div id="dev-page">
        <title-bar :viewport="viewport" :titleData="{text:'Skills', color:'rgb(47, 152, 208)'}"
        v-on:addTitleIndex="addTitleIndex" v-on:removeTitleIndex="removeTitleIndex" :titleOnDisplay="titleOnDisplay"></title-bar>
        <div class="des-sws">
            <circle-img 
            v-for="(cirData, dataIndex) in cirsData"
            :key="dataIndex"
            :cirData="cirData"
            :isJpg='true'></circle-img>
        </div>
        <title-bar :viewport="viewport" :titleData="{text:'Projects', color:'rgb(47, 152, 208)'}"
        v-on:addTitleIndex="addTitleIndex" v-on:removeTitleIndex="removeTitleIndex" :titleOnDisplay="titleOnDisplay"></title-bar>
        <div class="des-conainer">
            <div class="des-block" :style="{width: dywidth}"><slide-show :imgsData="extImgs"></slide-show></div>
            <div class="des-block" :style="{width: dywidth}">
                <div class="des-p">
                    <div class="des-title" style="color: rgb(255, 219, 45);">SwiftsBot Twitch Extension</div>
                    <div class="des-text">This is a Twitch.tv extension custom made for switfor channel, it's like a dashboard that enables users to view their virtual loyalty points and ranking and provides many capabilities to utilize their points in an easy way. There is a mobile version and a video overlay version for the extension, And it's well optimized to run perfectly on different screen sizes.</div>
                </div>
            </div>
        </div>
        <div class="sep"></div>
        <div class="des-conainer">
            <div class="des-block" :style="{width: dywidth}">
                <div class="des-p">
                    <div class="des-title" style="color: rgb(255, 219, 45);">Stream Overlay</div>
                    <div class="des-text">In this project, I created a dynamic overlay for live online broadcasts that serves multiple functionalities like displaying notifications, Running polls, Wheel raffles, Timer, and many other features.</div>
                </div>
            </div>
            <div class="des-block" :style="{width: dywidth}"><iframe :style=" {width: '100%', height: '100%'}" :src="`https://www.youtube.com/embed/xxTaHiqEU5o`" frameborder="0" allowfullscreen></iframe></div>
        </div>
        <div class="sep"></div>
        <div class="des-conainer">
            <div class="des-block" :style="{width: dywidth}"><iframe :style=" {width: '100%', height: '100%'}" src='./'></iframe></div>
            <div class="des-block" :style="{width: dywidth}">
                <div class="des-p">
                    <div class="des-title" style="color: rgb(255, 219, 45);">This Website</div>
                    <div class="des-text">I created this website from scratch using Vue frontend framework. <br>If you are interested, you can check the source code <a href="https://github.com/abdbourghli/abd_website" target="_blank">Here.</a></div>
                </div>
            </div>
        </div>
        <div class="sep"></div>
        <div class="des-conainer">
            <div class="des-block" :style="{width: dywidth}">
                <div class="des-p">
                    <div class="des-title" style="color: rgb(255, 219, 45);">Live stream performance tracker</div>
                    <div class="des-text">This system tracks many twitch streams performance by gathering live numbers and logging chat, It has the ability to understand and sort chat lines to determine the general experience of the audience, Also provides an easy to understand statistics and visual presentation of stream performance on many different levels.</div>
                </div>
            </div>
            <div class="des-block" :style="{width: dywidth}"><slide-show :imgsData="plusImgs"></slide-show></div>
        </div>
        <div class="sep"></div>
        <div class="des-conainer">
            <div class="des-block" :style="{width: dywidth}"><iframe :style=" {width: '100%', height: '100%'}" :src="`https://www.youtube.com/embed/cI7-7YpPfOc`" frameborder="0" allowfullscreen></iframe></div>
            <div class="des-block" :style="{width: dywidth}">
                <div class="des-p">
                    <div class="des-title" style="color: rgb(255, 219, 45);">Boss Intro Game</div>
                    <div class="des-text">This is a 2D boss fight game, it might seem like a normal game but its made to be played by thousands for players at the same time by typing commands the chat of a live stream, the purpose of the game is to replace the typical intros by entertaining audiences before the live stream starts.</div>
                </div>
            </div>
        </div>
        <div class="sep"></div>
        <div class="des-conainer">
            <div class="des-block" :style="{width: dywidth}">
                <div class="des-p">
                    <div class="des-title" style="color: rgb(255, 219, 45);">SwiftorLand.com</div>
                    <div class="des-text">This is a custom made website that allows users to see and use their virtual loyalty points, It was made using Vue framework and Vuex for state management.</div>
                </div>
            </div>
            <div class="des-block" :style="{width: dywidth}"><slide-show :imgsData="swiftorlandImgs"></slide-show></div>
        </div>
        <div class="sep"></div>
        <info-page :viewport='viewport'
        v-on:addTitleIndex="addTitleIndex" v-on:removeTitleIndex="removeTitleIndex" :titleOnDisplay="titleOnDisplay"></info-page>
    </div>
</template>

<script>
export default {
    props:["viewport"],
    data(){
        return{
            cirsData:[
                {title: "JavaScript", img: "dev-sw/js.jpg", color: "rgb(255,255,255)"},
                {title: "ActionScript3", img: "dev-sw/as3.jpg", color: "rgb(255,255,255)"},
                {title: "C#", img: "dev-sw/csharp.jpg", color: "rgb(255,255,255)"},
                {title: "NodeJS", img: "dev-sw/nodejs.jpg", color: "rgb(255,255,255)"},
                {title: "Vue", img: "dev-sw/vue.jpg", color: "rgb(255,255,255)"},
                {title: "HTML5", img: "dev-sw/html5.jpg", color: "rgb(255,255,255)"},
                {title: "CSS3", img: "dev-sw/css3.jpg", color: "rgb(255,255,255)"},
                {title: "Scoket.io", img: "dev-sw/socketio.jpg", color: "rgb(255,255,255)"},
                {title: "CreateJS", img: "dev-sw/createjs.jpg", color: "rgb(255,255,255)"},
                {title: "SQL Server", img: "dev-sw/sqlserver.jpg", color: "rgb(255,255,255)"},
                {title: "MySQL", img: "dev-sw/mysql.jpg", color: "rgb(255,255,255)"}
            ],
            extImgs:{
                path:"dev-ext/",
                imgs:[
                    "ext-mob1.jpg",
                    "ext-mob2.jpg",
                    "ext-mob3.jpg",
                    "ext-mob4.jpg",
                    "ext-vo1.jpg",
                    "ext-vo2.jpg",
                    "ext-vo3.jpg",
                    "ext-vo4.jpg",
                    "ext-mob5.jpg",
                    "ext-mob6.jpg",
                    "ext-mob7.jpg",
                    "ext-mob8.jpg",
                    "ext-vo5.jpg",
                    "ext-vo6.jpg",
                    "ext-vo7.jpg",
                    "ext-vo8.jpg"
                ]
            },
            plusImgs:{
                path:"dev-plus/",
                imgs:[
                    "aplus1.jpg",
                    "aplus2.jpg",
                    "aplus3.jpg",
                    "aplus4.jpg",
                    "aplus5.jpg",
                    "aplus6.jpg",
                    "aplus7.jpg",
                    "aplus8.jpg"
                ]
            },
            swiftorlandImgs:{
                path:"dev-swiftorland/",
                imgs:[
                    "swiftorland1.jpg",
                    "swiftorland2.jpg",
                    "swiftorland3.jpg",
                    "swiftorland4.jpg"
                ]
            },
            titleOnDisplay: 9
        }
    },
    methods:{
        addTitleIndex(){
            this.titleOnDisplay++
        },
        removeTitleIndex(){
            this.titleOnDisplay--
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
    background-color: rgb(47, 152, 208);
    width: 100%;
}
.des-sws{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.sep{
    display: inline-block;
    width: 60%;
    margin: 3% 0;
    border-top: 2px rgba(255, 255, 255, 0.7) solid;
}
</style>
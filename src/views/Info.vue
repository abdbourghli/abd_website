<template>
    <div id="info-page"  ref="infoBox" :on="titleTop<viewport.offset+viewport.height/5?postTitle():preTitle()">
        <div id="personal" class="info-title">Personal Info</div>
        <table class="personal-table">
            <tr>
                <td class="info-q">Name</td>
                <td class="info-a">Abd Alrazzak Bourghli</td>
                <td rowspan="4"><div class="info-img"><img style="width: 100%;" src="../assets/portrait.jpg" alt=""></div></td>
            </tr>
            <tr>
                <td class="info-q">Age</td>
                <td class="info-a">26</td>
            </tr>
            <tr>
                <td class="info-q">Marital Status</td>
                <td class="info-a">Single</td>
            </tr>
            <tr>
                <td class="info-q">Nationality</td>
                <td class="info-a">Syrian</td>
            </tr>
        </table>
        
        <div id="about" class="info-title">About</div>
        <div style="margin: 2vh 20vw;"><span class="about-text">Since I was a child I've been curious to figure out how this world works, Disassembled all my toys and broke my computer countless times and the fact that there's a new experience to learn always peaked my curious soul to a new level.<br><br>
I'm Syrian born and bred, While I lived a lovely childhood, There's no doubt that the bast 9 years were quite challenging, but I believe it shaped me to be a more resilient person, It kept me locked in my home most of the time but I took it as a chance to better myself and learn new skills online. Being able to work as a freelancer is a gift I will always be grateful for because I got to join many awesome communities and helped me find myself.<br><br>
I define my skills in three categories: Business, IT, and Design. While it seems like a weird mix but I believe it's the perfect trifecta to build a successful modern business, And throughout my life, I worked hard and took every chance I had to learn more about them, I'm always seeking to get better education especially about the things I'm passionate about.</span>
        </div>
        <div id="contact" class="info-title">Contacts</div>
        <div class="contact-area"> 
            <table style="width: 50%;">
                <tr>
                    <td><img class="contact-icon" src="../assets/icons/mail.svg" alt=""></td>
                    <td class="contact-title">Email:</td>
                    <td class="contact-text">abdbourghli@gmail.com</td>
                </tr>
                <tr>
                    <td><img class="contact-icon" src="../assets/icons/twitter.svg" alt=""></td>
                    <td class="contact-title">Twitter:</td>
                    <td class="contact-text"><a href="https://twitter.com/abd_new">@abd_new1</a></td>
                </tr>
                <tr>
                    <td><img class="contact-icon" src="../assets/icons/skype.svg" alt=""></td>
                    <td class="contact-title">Skype:</td>
                    <td class="contact-text"><a>abdnew3</a></td>
                </tr>
                <tr>
                    <td><img class="contact-icon" src="../assets/icons/youtube.svg" alt=""></td>
                    <td class="contact-title">Youtube:</td>
                    <td class="contact-text"><a href="https://youtube.com/abd_new">/abd_new</a></td>
                </tr>
                <tr>
                    <td><img class="contact-icon" src="../assets/icons/reddit.svg" alt=""></td>
                    <td class="contact-title">Reddit:</td>
                    <td class="contact-text"><a href="http://reddit.com/u/abd_new">/u/abd_new</a></td>
                </tr>
                <tr>
                    <td><img class="contact-icon" src="../assets/icons/pph.svg" alt=""></td>
                    <td class="contact-title">PPH:</td>
                    <td class="contact-text"><a href='https://www.peopleperhour.com/freelancer/video-photo-audio/abd-bourghli-graphic-designer-zynqavn'>Abd B.</a></td>
                </tr>
            </table>
           <Timeline widget-class="mt-3 my-custom-class" id="abd_new1" sourceType="profile" :options="{ width:viewport.width/3, theme: 'dark'}"/>

        </div>
        <div id="feedback" class="info-title">Feedback</div>
        <br>
        <table style="width: 45%; float:left">
            <tr>
                <td class="info-q">Name</td>
                <td><input class="feedback-input" type="text" placeholder="Name or organization (optional)"></td>
            </tr>
            <tr>
                <td class="info-q">email</td>
                <td><input class="feedback-input" type="email" placeholder="email (optional)"></td>
            </tr>
            <tr>
                <td class="info-q">Feedback</td>
                <td><textarea class="feedback-input feedback-area"  placeholder="Feedback"></textarea></td>
            </tr>
            <tr>
                <td></td>
                <td><div class="submit-btn">Submit</div></td>
            </tr>
        </table>
        <div class="feedback-a">I'm not perfect by any means and I'll take any advice I can get to better myself. If you're a potential employer or an expert or just stumbled across this website and you think that there's something I lack or I can improve then I would really appreciate it if you can take a few seconds and submit your feedback, Thank you :)</div>
        
    </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'
const VueScrollTo = require('vue-scrollto')
export default {
    name:"info-page",
    props:["viewport", "titleOnDisplay", "scrollRequest"],
    data(){
        return {
            titleTop: 1,
            fixed: false,
            titleIndex: 10
        }
    },
    components:{
        Timeline
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
        }
    },
    mounted(){
        const _this = this
        const titleEl = _this.$refs['infoBox']
        _this.titleTop = titleEl.getBoundingClientRect().top + _this.viewport.offset
        if (_this.scrollRequest!=null){
            _this.$emit('clearScrollRequest')
            const navEl = document.getElementById(_this.scrollRequest)
            VueScrollTo.scrollTo(navEl, 500, {
                easing: 'ease',
                offset: 5,
                force: true,
                cancelable: true,
                x: false,
                y: true
            })
        }
    },
    watch:{
        scrollRequest(val){
        if (val!=null){
            this.$emit('clearScrollRequest')
            const navEl = document.getElementById(val)
            VueScrollTo.scrollTo(navEl, 500, {
                easing: 'ease',
                offset: 5,
                force: true,
                cancelable: true,
                x: false,
                y: true
            })
        } 
        }
    }
}
</script>

<style scoped>
.my-custom-class{
    max-height: 27vw;
    overflow: auto;
    display: inline-block;
    margin: 2vh 0;
}
#info-page{
    position: absolute;
    top: 100%;
    width: 100%;
    background-color: rgb(235, 235, 235);
    background-image: url('../assets/info-background.jpg');
    background-size:  cover;
    background-attachment: fixed;
    padding-top: 2vw; 
}
.personal-table{
    font-size: 2vw;
    text-align: left;
    border-collapse: separate;
    border-spacing: 1vw;
    margin: 1vh 10vw;
    display: inline-block;
}
td{
    padding: 0.3vw 0.8vw;
    text-align: left;
}
.info-title{
    color: #DDDDDD;
    font-size: 3vw;
    background-color: rgba(0, 0, 0, 0.3);
}
.info-q{
    text-align: center;
    color: #DDDDDD;
    border-left: 0.4vw #DDDDDD solid; 
    background-color: rgba(0, 0, 0, 0.3);
}
.info-a{
    color: gray;
    font-size: 1.6vw;
}
a:link, a:visited{
    color: gray;
}
.info-img{
    height: 13vw;
    width: 13vw;
    border: 0.4vw #122029 solid;
    border-radius: 50%;
    overflow: hidden;
}
.about-text{
    width: 100%;
    text-align: center;
    color: rgb(160, 160, 160);
    font-size: 1.4vw;
}
.twitter-timeline{
    display: inline-block;
}
.contact-icon{
    width: 2.5vw;
}
.contact-title{
    color: #DDDDDD;
}
.contact-text{
    color: gray;
    font-size: 1.5vw;
}
input, select, textarea{
    color: #ffffff;
}
.contact-area{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.feedback-input{
    width: 36vw;
    font-size: 1vw;
    padding: 1vh 1vw;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px gray solid;
    border-radius: 2px;
    color: white;
}
textarea{
    vertical-align: top;
}
.feedback-area{
    height: 20vh;
}
.feedback-a{
    float: right;
    width: 40%;
    color: lightgray;
    font-size: 1.6vw;
    padding: 1vh 5%;
}
.submit-btn{
    margin: 1vh 0;
    color: white;
    font-size: 1.8vw;
    width: 50%;
    display: inline-block;
    padding: 1vh 2vw;
    border: 1px white solid;
    border-radius: 2px;
    background-color: rgba(255,255,255, 0.1);
    cursor: pointer;
    transition: background-color 0.3s;
    text-align: center;
}
.submit-btn:hover{
    background-color: rgba(255,255,255, 0.3);
}
</style>
<template>
  <div id="app">
    <div v-show="!welcomeOn">
      <div class="body-back">
        <img class="banner-img" src="./assets/banner.jpg" alt="banner">
      </div>
      <div class="body-top-shade"></div>
      <div class="nav-bar">
          <div class="nav-btn" @click="navAbout">About</div>
          <div class="nav-btn" @click="navContact">Contact</div>
          <div class="nav-btn" @click="navFeedback">Feedback</div>
        </div>
      <div class="banner-content" :style="{transform: 'translate(0%,-50%) scale('+((window.width>window.height)?window.height*0.002:window.width*0.002)+')'}">
        <div class="banner-msg">
          <div style="font-size: 80px;">Hi! I'm</div>
          <div style="font-size: 22.2px;">Abd Alrazzak Bourghli</div>
        </div>
        <plugs v-if="window.width*0.8>window.height" class='plugs'></plugs>
      </div>
      <div class="square-cont">
        <div class="top-square-1" :style="{width: window.width/3 + 'px', height: window.width/3 + 'px'}"></div>
        <div class="top-square-2" :style="{width: window.width/3 + 'px', height: window.width/3 + 'px'}"></div>
      </div>
      <div class="img-circle">
        <transition name="fade">
          <img v-if="expanded" key="arrow" style="width: 100%; cursor: pointer;" src="./assets/left-arrow.svg" alt="" @click="tabsReset(true), tabsResetVer(true)">
          <div v-if="!expanded" key="profileImg" class="prof-img"><img style="width: 100%;" src="./assets/portrait.jpg" alt="" @click="tabsReset(true)"></div>
        </transition>
      </div>
      <!-- PC -->
      <div v-show="window.width*0.8>window.height" class="tabs-cont" @mouseleave="tabsReset(false)">
        <div class="des-tab" ref="des">
          <div class="tab-cont"  @mouseenter="desExpand()" @click="desClick" style="background-color: rgb(173, 24, 24);">
            <div class="tab-top" style="background-color: rgb(144, 16, 16);"></div>
          </div>
          <div ref="des-text" class="tab-intro" style="left: 35%;">
            <div class="tab-im"  @mouseenter="desExpand()" @click="desClick">I'm a</div>
            <div class="tab-title"  @mouseenter="desExpand()" @click="desClick">Graphic Designer</div>
            
          </div>
          <img ref="des-char"  @mouseenter="desExpand()" @click="desClick" class="char-img" style="left: 35%; width: 38%;" src="./assets/des-char.png" alt="">
        </div>
        <div class="bis-tab" ref="bis">
          <div class="tab-cont" @mouseenter="bisExpand()" @click="bisClick" style="background-color: rgb(10, 38, 58);">
            <div class="tab-top" style="background-color: rgb(7, 27, 41);"></div>
          </div>
          <div ref="bis-text" class="tab-intro" style="left: 69%;">
            <div class="tab-im" style="color: #4885b1;" @mouseenter="bisExpand()" @click="bisClick">I'm a</div>
            <div class="tab-title" style="color: #4885b1;" @mouseenter="bisExpand()" @click="bisClick">Business Student</div>
            
          </div>
          <img ref="bis-char" @mouseenter="bisExpand()" @click="bisClick" class="char-img" style="left: 66%; width: 38%;" src="./assets/bis-char.png" alt="">
        </div>
        <div class="dev-tab" ref="dev">
          <div class="tab-cont"  @mouseenter="devExpand()" @click="devClick" style="transform: skewX(-10deg);  background-color: rgb(47, 152, 208);">
            <div class="tab-top" style="background-color: rgb(35, 114, 156);"></div>
          </div>
          <div ref="dev-text" class="tab-intro" style="left: 50%;">
            <div class="tab-im" style="color: rgb(22, 63, 84);" @mouseenter="devExpand()" @click="devClick">I'm a</div>
            <div class="tab-title" style="color: rgb(22, 63, 84);" @mouseenter="devExpand()" @click="devClick">Programmer</div>
          </div>
          <img ref="dev-char" @mouseenter="devExpand()" @click="devClick" class="char-img" style="left: 50%; width: 55%;" src="./assets/dev-char.png" alt="">
        </div>
        <img v-if="expanded" @click="scrollToRouter" class="down-arrow" src="./assets/down-arrow.svg" alt="down">
      </div>
      <!-- Mobile -->
      <div v-show="window.width*0.8<window.height" class="tabs-cont" @mouseleave="tabsResetVer(false)">
        <div class="des-tab-ver" ref="ver-des">
          <div class="tab-cont"  @mouseenter="desExpandVer()" @click="desVerClick" style="background-color: rgb(173, 24, 24);">
            <div class="tab-top" style="background-color: rgb(144, 16, 16);"></div>
          </div>
          <div ref="des-text-ver" class="tab-intro-ver">
            <div class="tab-im" style="font-size: 5vw;"  @mouseenter="desExpandVer()" @click="desVerClick">I'm a</div>
            <div class="tab-title" style="font-size: 7vw;" @mouseenter="desExpandVer()" @click="desVerClick">Graphic Designer</div>
            
          </div>
          <img ref="des-char-ver"  @mouseenter="desExpandVer()" @click="desVerClick" class="char-img-ver" src="./assets/des-char.png" alt="">
        </div>
        <div class="bis-tab-ver" ref="ver-bis">
          <div class="tab-cont" @mouseenter="bisExpandVer()" @click="bisVerClick" style="background-color: rgb(10, 38, 58);">
            <div class="tab-top" style="background-color: rgb(7, 27, 41);"></div>
          </div>
          <div ref="bis-text-ver" class="tab-intro-ver">
            <div class="tab-im" style="color: #4885b1; font-size: 5vw;" @mouseenter="bisExpandVer()" @click="bisVerClick">I'm a</div>
            <div class="tab-title" style="color: #4885b1; font-size: 7vw;" @mouseenter="bisExpandVer()" @click="bisVerClick">Business Student</div>
            
          </div>
          <img ref="des-char-ver" @mouseenter="bisExpandVer()" @click="bisVerClick" class="char-img-ver" src="./assets/bis-char.png" alt="">
        </div>
        <div class="dev-tab-ver" ref="ver-dev">
          <div class="tab-cont"  @mouseenter="devExpandVer()" @click="devVerClick" style="background-color: rgb(47, 152, 208);">
            <div class="tab-top" style="background-color: rgb(35, 114, 156);"></div>
          </div>
          <div ref="dev-text" class="tab-intro-ver">
            <div class="tab-im" style="color: rgb(22, 63, 84); font-size: 5vw;" @mouseenter="devExpandVer()" @click="devVerClick">I'm a</div>
            <div class="tab-title" style="color: rgb(22, 63, 84); font-size: 7vw;" @mouseenter="devExpandVer()" @click="devVerClick">Programmer</div>
          </div>
          <img ref="des-char-ver" @mouseenter="devExpandVer()" @click="devVerClick" class="char-img-ver" src="./assets/dev-char.png" alt="">
        </div>
        <img v-if="expanded" @click="scrollToRouter" class="down-arrow" src="./assets/down-arrow.svg" alt="down">
      </div>
    </div>
    <router-view ref="routerView" v-bind:viewport="window" :scrollRequest="scrollRequest"/>
    <div v-if="welcomeOn" class="welcome-screen">
      <div class="w-c-back"></div>
      <div class="w-w-back skew-full"></div>
      <div class="w-o-back skew-full"></div>
      <div class="w-b-back skew-full"></div>
    </div>
    <div class="welcome-text">{{welcomeMessage}}</div>
    
  </div>
</template>

<script>
import plugs from './components/Plugs'
const VueScrollTo = require('vue-scrollto')
/*
colors:
bis: rgb(10, 38, 58)
dev: rgb(47, 152, 208)
des: rgb(173, 24, 24)
*/
export default {
  data(){
    return{
      welcomeMessage: 'Welcome!',
      welcomeOn: true,
      window: {
        width: 0,
        height: 0,
        offset:0
      },
      expanded: false,
      scrollRequest: null
    }
  },
  components: {
    plugs
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    bisExpand(){
      if(!this.expanded){
        this.$refs['bis'].style.width= '65%'
        this.$refs['dev'].style.width= '25%'
        this.$refs['des'].style.width= '35%'
        this.$refs['dev'].style.left= '35%'
        this.$refs['dev-char'].style.width= '55%'
        this.$refs['bis-char'].style.mixBlendMode= 'normal'
        this.$refs['bis-char'].style.filter= 'grayscale(0)'
      }
    },
    devExpand(){
      if(!this.expanded){
        this.$refs['dev'].style.width= '60%'
        this.$refs['bis'].style.width= '40%'
        this.$refs['des'].style.width= '40%'
        this.$refs['dev'].style.left= '50%';
        this.$refs['dev-char'].style.width=  '35%'
        this.$refs['dev-char'].style.mixBlendMode= 'normal'
        this.$refs['dev-char'].style.filter= 'grayscale(0)'
      }
    },
    desExpand(){
      if(!this.expanded){
        this.$refs['des'].style.width= '65%'
        this.$refs['bis'].style.width= '35%'
        this.$refs['dev'].style.width= '25%'
        this.$refs['dev'].style.left= '65%'
        this.$refs['dev-char'].style.width= '55%'
        this.$refs['des-char'].style.mixBlendMode= 'normal'
        this.$refs['des-char'].style.filter= 'grayscale(0)'
      }
    },
    tabsReset(btnClickx){
      if (!this.expanded||btnClickx===true){
        this.$refs['des'].style.width= '50%'
        this.$refs['bis'].style.width= '50%'
        this.$refs['dev'].style.width= '33%'
        this.$refs['des'].style.height= '100%'
        this.$refs['bis'].style.height= '100%'
        this.$refs['dev'].style.height= '100%'
        this.$refs['dev'].style.left= '50%'
        this.$refs['dev-char'].style.width= '55%'
        this.$refs['bis-char'].style.width= '38%'
        this.$refs['des-char'].style.width= '38%'
        this.$refs['bis-char'].style.left= '66%'
        this.$refs['des-char'].style.left= '35%'
        this.$refs['dev-char'].style.mixBlendMode= 'overlay'
        this.$refs['dev-char'].style.filter= 'grayscale(1)'
        this.$refs['des-char'].style.mixBlendMode= 'overlay'
        this.$refs['des-char'].style.filter= 'grayscale(1)'
        this.$refs['bis-char'].style.mixBlendMode= 'overlay'
        this.$refs['bis-char'].style.filter= 'grayscale(1)'
        this.$refs['des-text'].style.left= '35%'
        this.$refs['bis-text'].style.left= '69%'
        this.expanded = false
      }
      if(btnClickx){
        this.$router.push('/')
      }
    },
    devClick(){
      this.$refs['des'].style.width= '0%'
      this.$refs['bis'].style.width= '0%'
      this.$refs['dev'].style.width= '120%'
      this.$refs['dev'].style.left= '50%'
      this.$refs['dev-char'].style.width= '20%'
      this.expanded = true
      this.$router.push('/developer')
    },
    bisClick(){
      this.$refs['des'].style.width= '0%'
      this.$refs['bis'].style.width= '100%'
      this.$refs['dev'].style.width= '0%'
      this.$refs['dev'].style.left= '0%'
      this.$refs['bis-char'].style.width= '20%'
      this.$refs['bis-char'].style.left= '50%'
      this.$refs['bis-text'].style.left= '50%'
      this.expanded = true
      this.$router.push('/business')
    },
    desClick(){
      this.$refs['des'].style.width= '100%'
      this.$refs['bis'].style.width= '0%'
      this.$refs['dev'].style.width= '0%'
      this.$refs['dev'].style.left= '100%'
      this.$refs['des-char'].style.width= '20%'
      this.$refs['des-char'].style.left= '50%'
      this.$refs['des-text'].style.left= '50%'
      this.expanded = true
      this.$router.push('/designer')
    },
    bisExpandVer(){
      if(!this.expanded){
        this.$refs['ver-bis'].style.height= '50%'
        this.$refs['ver-dev'].style.height= '25%'
        this.$refs['ver-des'].style.height= '25%'
        this.$refs['ver-bis'].style.width= '100%'
        this.$refs['ver-dev'].style.width= '100%'
        this.$refs['ver-des'].style.width= '100%'
      }
    },
    devExpandVer(){
      if(!this.expanded){
        this.$refs['ver-bis'].style.height= '25%'
        this.$refs['ver-dev'].style.height= '50%'
        this.$refs['ver-des'].style.height= '25%'
        this.$refs['ver-bis'].style.width= '100%'
        this.$refs['ver-dev'].style.width= '100%'
        this.$refs['ver-des'].style.width= '100%'
      }
    },
    desExpandVer(){
      if(!this.expanded){
        this.$refs['ver-bis'].style.height= '25%'
        this.$refs['ver-dev'].style.height= '25%'
        this.$refs['ver-des'].style.height= '50%'
        this.$refs['ver-bis'].style.width= '100%'
        this.$refs['ver-dev'].style.width= '100%'
        this.$refs['ver-des'].style.width= '100%'
      }
    },
    tabsResetVer(btnClickx){
      if (!this.expanded||btnClickx===true){
        this.$refs['ver-bis'].style.height= '33.3%'
        this.$refs['ver-dev'].style.height= '33.3%'
        this.$refs['ver-des'].style.height= '33.3%'
        this.$refs['ver-bis'].style.width= '100%'
        this.$refs['ver-dev'].style.width= '100%'
        this.$refs['ver-des'].style.width= '100%'
        this.expanded = false
      }
      if(btnClickx){
        this.$router.push('/')
      }
    },
    devVerClick(){
      this.$refs['ver-bis'].style.height= '0%'
      this.$refs['ver-dev'].style.height= '100%'
      this.$refs['ver-des'].style.height= '0%'
      
      this.expanded = true
      this.$router.push('/developer')
    },
    bisVerClick(){
      this.$refs['ver-bis'].style.height= '100%'
      this.$refs['ver-dev'].style.height= '0%'
      this.$refs['ver-des'].style.height= '0%'
      this.expanded = true
      this.$router.push('/business')
    },
    desVerClick(){
      this.$refs['ver-bis'].style.height= '0%'
      this.$refs['ver-dev'].style.height= '0%'
      this.$refs['ver-des'].style.height= '100%'
      this.expanded = true
      this.$router.push('/designer')
    },
    scrollToRouter(){
      const desPage = this.$refs.routerView
      VueScrollTo.scrollTo(desPage, 500, {
        easing: 'ease',
        offset: this.window.height,
        force: true,
        cancelable: true,
        x: false,
        y: true
      })
    },
    navAbout(){
      this.scrollRequest = 'about'
      if(this.$router.currentRoute.path!='/info'){
        this.$router.push('/info')
      }
    },
    navContact(){
      this.scrollRequest = 'contact'
      if(this.$router.currentRoute.path!='/info'){
        this.$router.push('/info')
      }
    },
    navFeedback(){
      this.scrollRequest = 'feedback'
      if(this.$router.currentRoute.path!='/info'){
        this.$router.push('/info')
      }
    },
    clearScrollRequest(){
      this.scrollRequest = null
    }
  },
  mounted(){
    const _this = this
    setTimeout(()=>{
      this.welcomeOn= false
    },3100)
    const s1 = document.getElementsByClassName('banner-img')[0]
    parallax()
    function parallax () {
      _this.window.offset = window.pageYOffset
      if (window.pageYOffset < window.innerWidth * 2) {
        s1.style.top = 15 + window.pageYOffset * (window.innerWidth * 0.00007) + '%'
      }
      if(window.pageYOffset===0){
        if(_this.window.width*0.8>_this.window.height){
          _this.tabsReset(true)
        }
        else{
          _this.tabsResetVer(true)
        }
        
      }
    }
    window.addEventListener('scroll', function () {
      parallax()
    })
  }
}
</script>

<style>
body{
  margin: 0px;
}
#app {
  font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.prof-img{
    top: 50%;
    left: 50%;
    width: 8vw;
    height: 8vw;
    min-width: 42px;
    min-height: 42px;
    transform: translate(-50%, -50%) scale(1.8);
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
}
.body-back{
  overflow: hidden;
  background-color: #c3e5e7;
  position: absolute;
  width: 100%;
  height: 0%;
  transform: translate(-50%,-50%);
  left: 50%;
  top: 100%;
  animation: expand-up 0.7s cubic-bezier(0.25,0.1,0.25,1) 0s forwards;
}
.banner-content{
    position: absolute;
    transform-origin: right;
    width: 100%;
    right: 20px;
    top: 20%;
}
.banner-img{
  position: absolute;
  transform: translate(-50%,-50%);
  left: 50%;
  width: 100%;
  top: 20%;
  min-width: 500px;
  filter: blur(3px);
}
.banner-msg{
  float: right;
  text-align: right;
  color: white;
  cursor: default;
  margin-top: -15px;
}
.plugs{
  position: absolute;
  transform: translate(0%, -50%);
  top: 50%;
  right: 250px;
  width: 100%;
  height: 104px;
  margin-top: 6px;
}
.body-top-shade{
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  height: 40%;
  width: 100%
}
.square-cont{
  position: absolute;
  transform: translate(-50%, -50%);
  left: 0%;
  top: 20%;
}
.top-square-1{
  position: absolute;
  border: 3px #0098cc solid;
  border-radius: 9%;
  transform: translate(-50%,-50%) rotateZ(45deg);
  min-width: 200px;
  min-height: 200px; 
}
.top-square-2{
  position: absolute;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 9%;
  transform: translate(-50%,-50%) rotateZ(55deg);
  min-width: 200px;
  min-height: 200px; 
}
.img-circle{
  width: 15vw;
  height: 15vw;
  position: absolute;
  transform: translate(-50%, -50%);
  min-width: 80px;
  min-height: 80px;
  top: 20%;
  left: 10%;
  background-color: white;
  border-radius: 50%;
}
.tabs-cont{
  position: absolute;
  top: 40%;
  height: 60%;
  width: 100%;
  overflow: hidden;
}
.dev-tab{
  position: absolute;
  transform: translate(-50%,0%);
  width: 33%;
  top: 100%;
  left: 50%;
  height: 100%;
  transition: all 0.5s ease;
  animation: slide-up 0.5s cubic-bezier(0.25,0.1,0.25,1) 0.5s forwards;
}
.des-tab{
  position: absolute;
  width: 50%;
  top: 100%;
  left: 0px;
  height: 100%;
  transition: all 0.5s ease;
  animation: slide-up 0.5s cubic-bezier(0.25,0.1,0.25,1) 0.6s forwards;
}
.bis-tab{
  position: absolute;
  width: 50%;
  top: 100%;
  right: 0px;
  height: 100%;
  transition: all 0.5s ease;
  animation: slide-up 0.5s cubic-bezier(0.25,0.1,0.25,1) 0.7s forwards;
}
.dev-tab-ver{
  position: relative;
  height: 33%;
  width: 100%;
  overflow: hidden;
  transition: all 0.5s ease;
  animation: slide-up 0.5s cubic-bezier(0.25,0.1,0.25,1) 0.5s forwards;
}
.des-tab-ver{
  position: relative;
  height: 33%;
  width: 100%;
  overflow: hidden;
  transition: all 0.5s ease;
  animation: slide-up 0.5s cubic-bezier(0.25,0.1,0.25,1) 0.6s forwards;
}
.bis-tab-ver{
  position: relative;
  height: 33%;
  width: 100%;
  overflow: hidden;
  transition: all 0.5s ease;
  animation: slide-up 0.5s cubic-bezier(0.25,0.1,0.25,1) 0.7s forwards;
}
.char-img{
  position: absolute;
  width: 30%;
  transform: translate(-50%, -50%);
  top: 40vh;
  filter: grayscale(1);
  mix-blend-mode: overlay;
  transition: all 0.5s ease;
  cursor: pointer;
}
.char-img-ver{
  position: absolute;
  width: 25%;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 80%;
  filter: grayscale(1);
  mix-blend-mode: overlay;
  transition: all .5s ease;
  cursor: pointer;
}
.tab-top{
  width: 100%;
  height: 5%;
  
}
.tab-cont{
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.tab-intro{
  position: absolute;
  transform: translate(-50%, 0%);
  width: 100%;
  overflow: hidden;
  top: 5%;
  cursor: default;
  transition: left 0.5s ease;
}
.tab-intro-ver{
  position: absolute;
  transform: translate(-50%, -50%);
  width: 100%;
  left: 30%;
  overflow: hidden;
  top: 50%;
  cursor: default;
  transition: left 0.5s ease;
}
.tab-im{
  color: rgba(0,0,0,0.3);
  font-size: 2vw;
  cursor: pointer;
}
.tab-title{
  color: rgba(0,0,0,0.4);
  font-size: 3vw;
  cursor: pointer;
}
.w-c-back{
  position: fixed;
  width: 180%;
  height: 100%;
  transform: translate(-50%,-50%) skewX(20deg);
  left: 50%;
  top: 50%;
  background-color: rgb(47, 152, 208);
  animation: sweep-full-left 2s ease 1.2s forwards;
}
.w-w-back{
  background-color: #c3e5e7;
  animation: sweep-full-left 2s ease 0.8s;
}
.w-o-back{
  background-color: rgb(173, 24, 24);
  animation: sweep-full-left 2s ease 0.9s;
}
.w-b-back{
  background-color: rgb(10, 38, 58);
  animation: sweep-full-left 2s ease 1s;
}
.skew-full{
  position: fixed;
  height: 100%;
  width: 100%;
  transform: translate(-50%,-50%) skewX(20deg);
  left: 230%;
  top: 50%;
  overflow: hidden;
}
.welcome-text{
  position: fixed;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  font-size: 8vw;
  mix-blend-mode:color-dodge;
  clip-path: polygon(0% 0%, 135% -100%, 150% 100%, 0% 100%);
  animation: clip-sweep 1s ease 3s forwards;
}
.des-conainer{
    position: relative;
    display: flex;
    flex-wrap: wrap;
}
.des-block{
    width: 50%;
    height: 30vmax;
    position: relative;
    overflow: hidden;
}
.des-p{
    position: absolute;
    transform: translate(0%, -50%);
    top: 50%;
    text-align: left;
}
.des-title{
    font-size: 5vmin;
    padding: 0 10%;
}
.des-text{
    font-size: 3vmin;
    color: #FFFFFF88;
    padding: 0 10%;
}
.des-img{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}
.down-arrow{
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 0vh;
  left: 50%;
  height: 6vh;
  cursor: pointer;
}
.nav-bar{
  position: absolute;
  color: white;
  float: right;
  top: 5px;
  right: 10px;
}
.nav-btn{
  display: inline-block;
  padding: 5px 15px;
  font-size: 14px;
  letter-spacing: 1px;
  background-color: rgba(0,0,0,0.2);
  cursor: pointer;
  transition: background-color 0.3s;
}
.nav-btn:hover{
  background-color: rgba(255, 255, 255, 0.2)
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
.fade-enter-active, .fade-leave-active{
    transition: opacity .3s;
}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter{
  transform: translateY(-50px);
  opacity: 0;
}
.slide-fade-leave-to{
    transform: translateY(50px);
    opacity: 0;
}
.spin-fade-enter-active, .spin-fade-leave-active{
  transition: all 0.5s ease;
}
.spin-fade-enter, .spin-fade-leave-to{
  transform: rotate(90deg);
  opacity: 0;
}
.spin-fade-enter-to{
  transform: rotate(0deg);
  opacity: 1;
}
@keyframes clip-sweep {
  to{
    clip-path: polygon(-100% 0%, -80% -100%, -50% 100%, -100% 100%);
  }
}
@keyframes sweep-full-left {
  to{
    left: -130%;
  }
}
@keyframes expand-up {
  to{
    top: 50%;
    height: 100%;
  }
}
@keyframes slide-up {
  to{
    top: 0%;
  }
}

::-webkit-scrollbar {
  width: 10px;
  position: absolute;
}

/* Track */
::-webkit-scrollbar-track {
  background: #333333; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #777777; 
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 1);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance:textfield;
}

</style>

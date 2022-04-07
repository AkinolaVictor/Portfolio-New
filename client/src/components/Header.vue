<template>
    <div class="nav-container">
        <div class="logo">
            <div class="right-logo">
                <img src="/favicon.ico" style="width:35px; height: 35px; border-radius: 18px"  alt="">
            </div>
            <div class="logo-title">
                <h4 style="margin: 0; padding: 0;">Akinola Victor</h4>
                <span class="role">Dev. Portfolio</span>
            </div>
        </div>

        <div class="nav">
            <div class="mobile">
                <i v-if="mobileNav==false" @click="closeNavModal" class="fa-solid fa-bars"></i>
                <i v-if="mobileNav" @click="closeNavModal" class="fas fa-times" style="font-size: 25px"></i>
            </div>
            
            <div class="links-container">
                        <router-link class="Home each-nav-container" to="/">
                            <div class="link-and-line">
                                <p class="link-name">Home</p>
                                <hr v-if=" $route.name=='Home'" class="link-line" />
                            </div>
                        </router-link>

                        <router-link class="Project each-nav-container" @click="closeNavModal" to="/projects">
                            <div class="link-and-line">
                                <p class="link-name">Projects</p>
                                <hr v-if=" $route.name=='Project'" class="link-line" />
                            </div>
                        </router-link>

                        <router-link class="Project each-nav-container" @click="closeNavModal" to="/about">
                            <div class="link-and-line">
                                <p class="link-name">About</p>
                                <hr v-if=" $route.name=='About'" class="link-line" />
                            </div>
                        </router-link>

                        <router-link class="Project each-nav-container" @click="closeNavModal" to="/contact">
                            <div class="link-and-line">
                                <p class="link-name">Contact</p>
                                <hr v-if=" $route.name=='Contact'" class="link-line" />
                            </div>
                        </router-link>
            </div>
        </div>

        <div v-if="mobileNav" class = "mobile-nav">
            <router-link class="Home" :class="{clickedNav: $route.name=='Home'}" @click="closeNavModal" to="/">Home</router-link>
            <router-link class="Project" :class="{clickedNav: $route.name=='Project'}" @click="closeNavModal" to="/projects">Projects</router-link>
            <router-link class="About" :class="{clickedNav:  $route.name=='About'}" @click="closeNavModal" to="/about">About</router-link>
            <router-link class="Contact" :class="{clickedNav:  $route.name=='Contact'}" @click="closeNavModal" to="/contact">Contact</router-link>
        </div>
    </div>
</template>

<script>

export default {
    // setup() {
        
    // },

    data () {
        return {
            mobileNav: false,
        }
    },
    methods: {
        closeNavModal: function(){
            this.mobileNav = !this.mobileNav
        }
    }
}
</script>


<style lang="scss" scoped>
.nav-container{
    width: calc(100% - 40px);
    height: 60px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    position: absolute;
    top: 0;
    z-index: 10;
    box-shadow: 0px 2px 5px #888888;
    // font-size: 11px !important;

    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: auto;

        .right-logo{
            width: 35px;
            height: 35px;
            // background: rgb(63, 61, 61);
            border-radius: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .logo-title {
            margin-left: 10px;
            text-align: start;
            font-family: Ubuntu;
            font-size: 12px;
        }
    }


    .nav {
        display: flex;
        justify-content: center;
        align-items: center;

        .links-container{
            display: flex;
            justify-content: center;
            align-items: center;

            .each-nav-container{
                display: flex;
                justify-content: center;
                align-items: center;
                width: auto;
                height: 60px;
                padding: 0 10px;
                // background: #12b139;
                margin: 0;

                &:hover{
                    background: #F5E3E3;
                    transition: all 1s;
                }

                .link-and-line{
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    // background: #12b139;
                    
                    .link-line{
                        position: absolute;
                        bottom: 12px;
                        width: 100%;
                        height: 5px;
                        border: 0px;
                        border-radius: 5px;
                        background: #4949F3;
                    }
                }
            }
        }

        .mobile {
            margin: 0 10px;
            display: none;

            i {
                font-size: 18px;
            }
        }

        a {
            margin: 0px 10px;
            text-decoration: none;
            color: black;
            font-weight: 600;
            font-size: 14px;
        }

        .clickedNav{
            color: aliceblue;
        }

        @media (max-width: 768px) {
            .links-container{
                display: none;
            }

            .mobile {
                display: block;
            }

            a {
                display: none;
            }
        }
    }

    .mobile-nav{
        display: none;
    }

    @media (max-width:768px){
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: auto;

            .right-logo{
                width: 35px;
                height: 35px;
                // background: rgb(63, 61, 61);
                // border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .logo-title {
                margin-left: 10px;
                text-align: start;
                font-family: Ubuntu;
                font-size: 12px;
            }
        }

        .mobile-nav{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            background: #ffffff9f;
            position: absolute;
            top: 60px;
            z-index: 30;
            height: calc(100vh);
            backdrop-filter: blur(15px);

            a{
                text-decoration: none;
                color: black;
                margin: 20px 0;
                font-size: 20px;
                font-weight: 600;
            }

            .clickedNav{
                color: #4949F3;
            }

        }
    }
}
</style>
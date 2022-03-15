<template>
    <div class="nav-container">
        <div class="logo">
            <div class="right-logo">
                PT
            </div>
            <div class="logo-title">
                <h4 style="margin: 0; padding: 0;">Akinola Victor</h4>
                <span style="font-size: 14px;">Software Dev.</span>
            </div>
        </div>

        <div class="nav">
            <div class="mobile">
                <i v-if="mobileNav==false" @click="closeNavModal" class="fa-solid fa-bars"></i>
                <i v-if="mobileNav" @click="closeNavModal" class="fas fa-times" style="font-size: 25px"></i>
            </div>
            
            <router-link class="Home" :class="{clickedNav: $route.name=='Home'}" to="/">Home</router-link>
            <router-link class="Project" :class="{clickedNav: $route.name=='Project'}" to="/projects">Projects</router-link>
            <router-link class="About" :class="{clickedNav:  $route.name=='About'}" to="/about">About</router-link>
            <router-link class="Contact" :class="{clickedNav:  $route.name=='Contact'}" to="/contact">Contact</router-link>
            <!-- <router-link to="/">Admin</router-link> -->
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
    height: 70px;
    background: #cce0ed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: auto;

        .right-logo{
            width: 50px;
            height: 50px;
            background: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .logo-title {
            margin-left: 20px;
            text-align: start;
            font-family: Ubuntu;
            // height: 40px;
            // background: #c5db98c0;
        }
    }


    .nav {
        display: flex;
        justify-content: center;
        align-items: center;

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
        }

        .clickedNav{
            color: aliceblue;
        }

        @media (max-width: 768px) {
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
        .mobile-nav{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: calc(100% - 70px);
            background: #10110ec0;
            position: absolute;
            top: 70px;
            z-index: 2;
            backdrop-filter: blur(6px);

            a{
                text-decoration: none;
                color: rgb(18, 177, 57);
                margin: 20px 0;
                font-size: 20px;
                font-weight: 600;
            }

            .clickedNav{
                color: rgb(200, 213, 226);
            }
        }
    }
}
</style>
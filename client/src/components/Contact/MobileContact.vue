<template>
    <div class="contact-information-mobile">
        <div class="controls">
            <div class="buttons">
                <i @click="toggle('E-mail', 'akinolavictor26@gmail.com')" class="fa-solid fa-envelope E-mail" :class="{clicked: data.name=='E-mail'}"></i>
                <i @click="toggle('Phone', '+2348101700105')" class="fa-solid fa-phone phone" :class="{clicked: data.name=='Phone'}"></i>
                <i @click="toggle('Location', 'Ondo state, Nigeria.')" class="fa-solid fa-location-dot location" :class="{clicked: data.name=='Location'}"></i>
                <i @click="toggle('Github', 'githhubub.com/AkinolaVictor')" class="fab fa-github git" :class="{clicked: data.name=='Github'}"></i>
                <i @click="toggle('Facebook', 'facebook.com/lekanvictor.akinola')" class="fa-brands fa-facebook-f facebook" :class="{clicked: data.name=='Facebook'}"></i>
            </div>
            <div class="pages">
                <div class="name">
                    <hr class="line" />
                    <h4>{{data.name}}</h4>
                </div>
                <p class="content">
                   {{data.value}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: { },
    name: 'MobileContact',
    data (){
        return {
            // clicked: 'E-mail',
            // value: 'akinolavictor26@gmail.com',
            data: {
                name: 'E-mail',
                value: 'akinolavictor26@gmail.com'
            }
        }
    },
    methods: {
        toggle(name, data) {
            // let check = e.target.classList.contains(val);
            // console.log(val);
            this.data.name = name;
            this.data.value = data
        }
    }
}
</script>

<style lang='scss' scoped>


@media (max-width: 650px){

    .contact-information-mobile{
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ED4AFF;
        width: 350px;
        height: 100%;
        border-radius: 5px;
    }

    .controls{
        // background: orange;
        color: white;
        // width: 300px;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // flex-direction: column;
        .buttons{
            display: flex;
            justify-content: center;
            align-items: center;
            // height: 40px;
            height: auto;
            padding: 7px 0;
            // background: orange;

            i{
                margin: 0 15px;
                padding: 3px;
                font-size: 10px;
                color: white;
                cursor:pointer;
            }

            .clicked{
                background: #E4F6D5;
                border-radius: 500px;
                padding: 10px;
                color: black;
            }
        }

        .pages{
            // display: flex;
            // justify-content: center;
            // align-items: center;
            // background: orange;
            font-size: 13px;
            padding: 0 0 10px 0 ;
            color: white;

            // .name{
                // width: 30;
                // max-width: 90px;
            // }

            h4{
                padding: 10px 0;
            }
            .line{
                height: 1px;
                // color: white;
                background: white;
            }
        }
    }

}
// @media (max-width: 650px){

//     .contact-information-mobile{
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background: #ED4AFF;
//         width: 350px;
//         height: 100%;
//         border-radius: 5px;
//     }

//     .controls{
//         // background: orange;
//         color: white;
//         // width: 300px;
//         // display: flex;
//         // justify-content: center;
//         // align-items: center;
//         // flex-direction: column;
//         .buttons{
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             // height: 40px;
//             height: auto;
//             padding: 7px 0;
//             // background: orange;

//             i{
//                 margin: 0 15px;
//                 padding: 3px;
//                 font-size: 10px;
//                 color: white;
                //    cursor:pointer;
//             }

//             .clicked{
//                 background: #E4F6D5;
//                 border-radius: 50%;
//                 padding: 10px;
//                 color: black;
//             }
//         }

//         .pages{
//             // display: flex;
//             // justify-content: center;
//             // align-items: center;
//             // background: orange;
//             padding: 0 0 10px 0 ;
//             color: white;

//             // .name{
//                 // width: 30;
//                 // max-width: 90px;
//             // }
//             .line{
//                 height: 1px;
//                 // color: white;
//                 background: white;
//             }
//         }
//     }
// }
</style>
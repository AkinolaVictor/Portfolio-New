<template>
  <div class="contact-container">
    <div class="title-and-description">
      <h1>Contact</h1>
      <p>Any questions or remarks? Write a message!!!</p>
    </div>
    <div class="contact">
        <div class="contact-information">
            <div class="title" style="text-align: start">
                <p style="font-size: 14px; font-weight: 700;">Contact Information</p>
                <p style="font-size: 11px;; opacity: 0.6;">You can reach me on any of these</p>
            </div>
            <div class="contact-list">
                <div class="each-list">
                    <i class="fa-solid fa-envelope"></i>
                    <p style="margin: 0 5px 5px 8px">akinolavictor26@gmail.com</p>
                </div>

                <div class="each-list">
                    <i class="fa-solid fa-phone"></i>
                    <p style="margin: 0 5px 5px 8px">+2348101700105</p>
                </div>

                <div class="each-list">
                    <i class="fa-solid fa-location-dot"></i>
                    <p style="margin: 0 5px 5px 8px">Ondo state, Nigeria.</p>
                </div>

                <div class="each-list">
                    <i class="fab fa-github"></i>
                    <p style="margin: 0 5px 5px 8px">github.com/AkinolaVictor</p>
                </div>

                <div class="each-list">
                    <i class="fa-brands fa-facebook-f"></i>
                    <p style="margin: 0 5px 5px 8px">facebook.com/lekanvictor.akinola</p>
                </div>
            </div>
        </div>

        <div class="contact-information-mobile">

        </div>

        <div class="form">
            <form action="" class="form-container">
                <div class="grid">
                    <EachForm />
                    <EachForm />
                    <EachForm />
                    <EachForm />
                </div>
                <div class="message">
                    <Message />
                </div>
                <button @click.prevent="">send</button>
            </form>
        </div>
    </div>
  </div>

</template>

<script>
import EachForm from '../components/Contact/EachForm.vue'
import Message from '../components/Contact/Message.vue'

export default {
  name: 'Projects',
  components: {
    EachForm,
    Message
    // EachTimer
  },
  props: ['theme'],
  data (){
    return{
      
    }
  },
  methods: {

  },
  mounted(){

  }
  
}
</script>


<style lang='scss' scoped>
.contact-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 30px;
//   height: 100%;
}

.title-and-description{
  text-align: start;
  align-self: flex-start;

  p{
    opacity: .7;
  }
}

.contact{
    width: auto;
    height: 100%;
    border: 1px solid #00000025;
    border-radius: 8px;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
}

.contact-information{
    width: 220px;
    height: 300px;
    background: linear-gradient(180deg, #ED4AFF, #6F1A78);
    // background: #d866e5;
    color: white;
    padding: 15px;
    border-radius: 8px;
    // display: flex;
}

.contact-information-mobile{
    display: none;
}

.contact-list{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 22px;
    // background: greenyellow;
}

.each-list{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    margin: 15px 0 0 0;
}

.form{
    height: 100%;
    .form-container{
        width: auto;
        // height: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        // padding: 15px;
        flex-direction: column;
        // background: #ED4AFF;

        .grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            // background: green;
            margin-bottom: auto;
        }

        .message{
            // background: #4949F3;
        }

        button{
            font-size: 12px;
            padding: 4px 10px;
            border: none;
            background: #4949F3;
            margin: 10px;
            border-radius: 4px;
            color: white;

            
            &:hover{
                background: #cfe091;
                cursor: pointer;
                color: black;
                transition: .7s all;
            }
        }
    }
}

@media (max-width: 650px){
    .contact-information{
        display: none;
    }

    .contact-information-mobile{
        
    }
}
</style>
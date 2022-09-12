<template>
    <div>
        
        <!-- using v-model to update temp storage of what's entered -->
        <!-- this works as long as the entered string isnt too short -->
        <input v-model="user.user_email" placeholder="email" ref="entered_email">
        
        <input v-model="user.user_pw" placeholder="password">
        <br><br>
        <button @click="try_login()" ref="button_page">Log in</button><br><br>
        {{this.error_msg}}
    </div>
</template>

<script>
import axios from "axios"
import Cookies from "vue-cookies"

    export default {
        
        data() {
            return {
                user: {
                    user_email: "",

                    user_pw: "",

                },
                token: "",
                client_id: "",
                error_msg: "",
            }
        },
  methods: {
    
        
    
  
            try_login() {
               

                axios.request({
                
                url: `https://innotechfoodie.ml/api/client-login`,
                headers: {
                    'x-api-key': `HKqygKStIXKqtPxphGeT`
                },
                method: `POST`,
                data: {
                    email: this.user[`user_email`],
                    
                    password: this.user[`user_pw`],
                }
            }).then((success)=>{
                success
                this.token = success[`data`][`token`];
                Cookies.set(`token`, this.token);
                this.client_id = success[`data`][`client_id`];
                Cookies.set(`client_id`, this.client_id);
                
                if(this.token.length > 5) {
                    setTimeout(()=> this.$router.push('/client/profile'), 1000);
                    

                }else {
                    this.$refs.button_page.insertAdjacentElement(`afterend`, `<p>Try again</p>`)
                }
                
               
                

                
            }).catch((error)=>{
                error
                // sending the network error response back to a variable
               
                this.error_msg = error.response.data
                
                
            })
        },
        name: 'user-login'
    }
    }
    
</script>

<style scoped>

</style>
<template>
    <div>
        <!-- modify from log in button with changes to key name -->
        <!-- using v-model to update temp storage of what's entered -->
        <!-- this works as long as the entered string isnt too short -->
         <input v-model="user.user_pw" placeholder="password">      
        <button @click="try_delete()" ref="button_page">Delete User Account</button>
    </div>
</template>

<script>
import axios from "axios"
import Cookies from "vue-cookies"

    export default {
        
        data() {
            return {
                token: Cookies.get(`token`),
                 user: {
  
                    user_pw: "",

                },
                
            }
        },
  methods: {
    
        
    
  
            try_delete() {
               

                axios.request({
                
                url: `https://innotechfoodie.ml/api/client`,
                headers: {
                    'x-api-key': `HKqygKStIXKqtPxphGeT`,
                    token: this.token,
                },
                method: `DELETE`,
                data: {
                    password: this.user.user_pw
                }
            }).then((success)=>{
                success
                 this.$refs.button_page.insertAdjacentElement(`afterend`, `<p>account deleted</p>`)
                 Cookies.remove(`client_id`);
                 Cookies.remove(`token`)
                
               
                    setTimeout(()=> this.$router.push('/'), 1000);
                    

                
               
                

                
            }).catch((error)=>{
                error
                // this.$refs.entered_email.insertAdjacentHTML(`beforebegin`, `<p>error</p>`)
            })
            this.$refs.button_page.insertAdjacentHTML(`afterend`, `<p>account deleted</p>`)
            Cookies.remove(`client_id`);
            Cookies.remove(`token`)
        },
        name: 'delete-user'
    }
    }
    
</script>

<style scoped>

</style>
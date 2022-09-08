<template>
    <div>
       <!-- this is similar to the signup component but modified axios request -->
        <!-- using v-model to update temp storage of what's entered -->
        <!-- this works as long as the entered string isnt too short -->
        <!-- have to use v-bind on placeholder here to allow it to use variable as a value -->
        <h1>All needs to be filled</h1>
        <input v-model="user.user_email" placeholder="email" ref="entered_email">
        <input v-model="user.user_first_name" :placeholder="user_first_name">
        <input v-model="user.user_last_name" :placeholder="user_last_name">
        <input v-model="user.user_image_url" :placeholder="user_image_url">
        <input v-model="user.user_username" :placeholder="user_username">
        <input v-model="user.user_pw" placeholder="Enter new password">
        
        <button @click="try_login()" ref="button_page">submit Changes</button>
    </div>
</template>

<script>
import axios from "axios"
import Cookies from "vue-cookies"

    export default {
        mounted () {
            this.$root.$on(`user_profile`, this.transfer_profile);
        },
        
        data() {
            return {
                user: {
                    user_email: "",
                    user_first_name: "",
                    user_last_name: "",
                    user_image_url: "",
                    user_username: "",
                    user_pw: "",

                },
                token: Cookies.get(`token`),
                client_id: Cookies.get(`client_id`)
            }
        },
        methods: {
            transfer_profile(i){
                console.log(i)
               this.user.user_first_name = i.first_name;
               this.user.user_last_name = i.last_name;
               this.user.user_image_url = i.image_url;
               this.user.user_username = i.username;
               
            },
            try_login() {
               

                axios.request({
                
                url: `https://innotechfoodie.ml/api/client`,
                headers: {
                    "token": this.token,
                    'x-api-key': `HKqygKStIXKqtPxphGeT`,
                    

                },
                method: `PATCH`,
                data: {
                    email: this.user[`user_email`],
                    first_name: this.user[`user_first_name`],
                    last_name: this.user[`user_last_name`],
                    image_url: this.user[`user_image_url`],
                    username: this.user[`user_username`],
                    password: this.user[`user_pw`],
                }
            }).then((success)=>{
                success
             
                this.$refs.entered_email.insertAdjacentHTML(`beforebegin`, `<p>successfully updated</p>`)
                // this.$refs.button_page.insertAdjacentHTML(`afterend`,  `<p><br>token id: ${success[`data`][`token`]} signed in <br><br>
                // Loading to gaming page in 3 seconds<p>`)
                // this.token = success[`data`][`token`]
                // Cookies.set(`token`, this.token);
                // // setting 3 second delay to loading to next page
                // setTimeout(()=> this.$router.push('/numberduel'), 3000);
                 
                

                
            }).catch((error)=>{
                error
                 this.$refs.entered_email.insertAdjacentHTML(`beforebegin`, `<p>error, failed to update</p>`)
            })
        },
        name: 'modify-profile'
    }
    }
</script>

<style scoped>

</style>
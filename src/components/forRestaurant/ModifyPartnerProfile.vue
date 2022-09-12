<template>
    <div>
       <!-- this is similar to the signup component but modified axios request -->
        <!-- using v-model to update temp storage of what's entered -->
        <!-- this works as long as the entered string isnt too short -->
        <!-- have to use v-bind on placeholder here to allow it to use variable as a value -->
        <h2 ref= "h1_header">All needs to be filled and either enter your old password or a new password to submit</h2>
        <h3>Email: <input v-model="user.user_email" :placeholder="user_email" ref="entered_email"></h3>
        <h3> First Name: <input v-model="user.user_first_name" :placeholder="user_first_name"> </h3>
        <h3> Last Name: <input v-model="user.user_last_name" :placeholder="user_last_name"> </h3>
        <h3> Image: <input v-model="user.user_image_url" :placeholder="user_image_url"> </h3>
        <h3> Username: <input v-model="user.user_username" :placeholder="user_username"> </h3>
        <h3> Password: <input v-model="user.user_pw" placeholder="Enter new or old password"> </h3>
        
        <button @click="try_login()" ref="button_page">submit Changes</button>
    </div>
</template>

<script>
import axios from "axios"
import Cookies from "vue-cookies"

    export default {
        mounted () {
            this.$root.$on(`user_profile_partner`, this.transfer_profile);
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
                token: Cookies.get(`partner_token`),
                client_id: Cookies.get(`client_id_restaurant`)
            }
        },
        methods: {
            transfer_profile(i){
                console.log(i)
                
               this.user.user_first_name = i.first_name;
               this.user.user_last_name = i.last_name;
               this.user.user_image_url = i.image_url;
               this.user.user_username = i.username;
               this.user.user_email = i.email
               
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
             
                this.$refs.h1_header.insertAdjacentHTML(`afterend`, `<h1>successfully updated</h1>`)
                // this.$refs.button_page.insertAdjacentHTML(`afterend`,  `<p><br>token id: ${success[`data`][`token`]} signed in <br><br>
                // Loading to gaming page in 3 seconds<p>`)
                // this.token = success[`data`][`token`]
                // Cookies.set(`token`, this.token);
                // // setting 3 second delay to loading to next page
                // setTimeout(()=> this.$router.push('/numberduel'), 3000);
                 
                

                
            }).catch((error)=>{
                error
                 this.$refs.h1_header.insertAdjacentHTML(`afterend`, `<h1>error, failed to update</h1>`)
            })
        },
        name: 'modify-partner-profile'
    }
    }
</script>

<style scoped>

</style>
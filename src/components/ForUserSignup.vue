<template>
    <div>
        <!-- use one of these for log in: george.bluth@reqres.in janet.weaver@reqres.in emma.wong@reqres.in and any password -->
        <!-- using v-model to update temp storage of what's entered -->
        <!-- this works as long as the entered string isnt too short -->
        <input v-model="user.user_email" placeholder="email" ref="entered_email">
        <input v-model="user.user_first_name" placeholder="First Name">
        <input v-model="user.user_last_name" placeholder="Last Name">
        <input v-model="user.user_image_url" placeholder="image_url">
        <input v-model="user.user_username" placeholder="username">
        <input v-model="user.user_pw" placeholder="password">
        
        <button @click="try_login()" ref="button_page">Submit</button>
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
                    user_first_name: "",
                    user_last_name: "",
                    user_image_url: "",
                    user_username: "",
                    user_pw: "",

                },
                token: "",
                client_id: "",
            }
        },
        methods: {
            try_login() {
               

                axios.request({
                
                url: `https://innotechfoodie.ml/api/client`,
                headers: {
                    'x-api-key': `HKqygKStIXKqtPxphGeT`
                },
                method: `POST`,
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
                this.token = success[`data`][`token`];
                Cookies.set(`token`, this.token);
                this.client_id = success[`data`][`client_id`];
                Cookies.set(`client_id`, this.client_id);
                
                // this.$refs.button_page.insertAdjacentHTML(`afterend`,  `<p><br>token id: ${success[`data`][`token`]} signed in <br><br>
                // Loading to gaming page in 3 seconds<p>`)
                // this.token = success[`data`][`token`]
                // Cookies.set(`token`, this.token);
                // // setting 3 second delay to loading to next page
                // setTimeout(()=> this.$router.push('/numberduel'), 3000);
                 
                

                
            }).catch((error)=>{
                error
                // this.$refs.entered_email.insertAdjacentHTML(`beforebegin`, `<p>error</p>`)
            })
        },
        name: 'for-user-signup'
    }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <!-- This is mostly the same as the one used for normal user, since api url is the same, but
        i changed the cookie key to be different to make a distinction -->
        <!-- using v-model to update temp storage of what's entered -->
        <!-- this works as long as the entered string isnt too short -->
        <input v-model="user.user_email" placeholder="email" ref="entered_email">
        <input v-model="user.user_first_name" placeholder="First Name">
        <input v-model="user.user_last_name" placeholder="Last Name">
        <input v-model="user.user_image_url" placeholder="image_url">
        <input v-model="user.user_username" placeholder="username">
        <input v-model="user.user_pw" placeholder="password">
        <br><br>
        
        <button @click="try_login()" ref="button_page">Submit</button><br><br>
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
                    user_first_name: "",
                    user_last_name: "",
                    user_image_url: "",
                    user_username: "",
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
                // changed the cookies key to differentiate between restaurant and normal users
                success
                this.token = success[`data`][`token`];
                Cookies.set(`partner_token`, this.token);
                this.client_id = success[`data`][`client_id`];
                Cookies.set(`client_id_restaurant`, this.client_id);
                this.$refs.button_page.insertAdjacentHTML(`afterend`,  `<p>Thank You for signing up user: ${this.user.user_username} </p>`)
               
                setTimeout(()=> this.$router.push('/partner/profile'), 1000);
                 
                

                
            }).catch((error)=>{
                error
                this.error_msg = error.response.data
                // this.$refs.entered_email.insertAdjacentHTML(`beforebegin`, `<p>error</p>`)
            })
        },
        name: 'partner-signup'
    }
    }
</script>

<style scoped>

</style>
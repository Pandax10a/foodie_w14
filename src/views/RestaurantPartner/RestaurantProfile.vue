<template>
    <div>
        <!-- setting v-if to check the existence of client id. the profile will show if it's there in cookie -->
         <article v-if="(this.current_cookie) !== NaN" @click="isShown = !isShown">
        <h1>User profile Setting</h1>
        <p>account created on: {{user.created_at}}</p>
        <p>Name: {{user.first_name}} {{user.last_name}}</p>
        <p>Username: {{user.username}}</p>
        <img :src="user.image_url">
        <br><br>
       
            <button>Edit Profile placeholder for modifyprofile.vue</button>
        </article>
        <!-- this will show if client id is no longer in cookie. ie blocked cookie -->
        <article v-else>
            <p>Please try to log in again</p>
            <router-link to="/partner/login">Log in page</router-link>
        </article>
        <!-- using v-show to just hide the edit options together with @click in article to do show/hide -->
        <section v-show="isShown">
            <br>
            <modify-profile></modify-profile>
        </section>
        
        
       
        
    </div>
</template>

<script>
import axios from "axios"
import Cookies from "vue-cookies"
import ModifyProfile from "@/components/ModifyProfile.vue"

    export default {
        components: {
            ModifyProfile,
        },
        data() {
            return {
                user: {
                created_at: "",
                email: "",
                first_name: "",
                last_name:  "",
                id: "",
                image_url: "",
                username: "",
            },
            current_cookie: Cookies.get(`client_id_restaurant`),
            isShown: false
        }
        },
        mounted () {
            
                axios.request({
                
                url: `https://innotechfoodie.ml/api/client`,
                headers: {
                    'x-api-key': `HKqygKStIXKqtPxphGeT`
                },
                method: `GET`,
                params: {
                    client_id: this.current_cookie
                }
            }).then((success)=>{
                success
                // storing successful returned data from from api, into above object, user in data this is to be displayed
                this.user[`created_at`] = success.data[0].created_at;
                this.user.first_name = success.data[0].first_name;
                this.user.last_name = success.data[0].last_name;
                this.user.id = success.data[0].id;
                this.user.image_url = success.data[0].image_url;
                this.user.username = success.data[0].username;
                this.user.email = success.data[0].email
                

                // emit data so modifyprofile.vue component has access

                this.$root.$emit(`user_profile`, this.user)


                
                

                
            }).catch((error)=>{
                error
                // this.$refs.entered_email.insertAdjacentHTML(`beforebegin`, `<p>error</p>`)
            })
        },
        
    }
</script>

<style  scoped>

</style>
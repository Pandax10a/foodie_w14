<template>
    <div>
        <!-- set condition that both cookies, client id and token, has to exist to show this button-->
        <button ref="button_page" @click="clear_token"
        v-show="(this.user_cookie.token.length > 2) && (this.user_cookie.client_id !== NaN)" 
        >Partner Log out</button>
        
    </div>
</template>

<script>
import Cookies from "vue-cookies"
export default {
data() {
    return {
        user_cookie: {
            token: Cookies.get(`partner_token`),
            client_id: Cookies.get(`client_id_restaurant`),

        }
    }
},
    
        methods: {
            clear_token() {
                Cookies.remove(`partner_token`)
                Cookies.remove(`client_id_restaurant`)
                this.$router.push('/')
                this.$refs.button_page.insertAdjacentHTML(`afterend`, `<p>logged out successfully</p>`)
                
            }
        },
        name: 'partner-logout'
        
    }
</script>

<style scoped>

</style>
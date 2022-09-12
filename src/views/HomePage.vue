<template>
    <div>
        
        <section>
        <h1>Fantuan Delivery</h1>
        
        <button><router-link to="/client/">for user</router-link></button>
        <button><router-link to ="/partner/">Restaurant owners</router-link></button>
        </section>
        <br><br>
        <router-link to="/restaurant/menu">Best Fried Chicken - Menu</router-link>
    

    </div>
</template>

<script>
import Cookies from "vue-cookies"

    export default {
        data() {
            return {
        user_cookie: Cookies.get(`token`),
        partner_cookie: Cookies.get(`partner_cookie`)
            }
        },
        
        
    }
</script>

<style scoped>

</style>
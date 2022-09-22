<template>
    <div>
        
        <input v-model="section_one_name" placeholder="section name">
        <input v-model="section_one.image_url" placeholder="img url">
        <input v-model="section_one.name" placeholder="name">
        <input v-model="section_one.the_disc" placeholder="the description">
        <input v-model="section_one.price" placeholder="price">
        
        
        <button @click="add_to_menu()">submit</button>

        <section v-for="(section_item, index) in section_one" :key="index">
        <!-- <h3><img :src="section_item[index].image_url"></h3> -->
        <h3>{{section_item.name}}</h3>

        </section>
    </div>
</template>

<script>
import Cookies from "vue-cookies"

    export default {
        methods: {
            add_to_menu() {
                let section_one_json=JSON.stringify(this.section_one);
                Cookies.set('menu', section_one_json);
                
            }
        },
        data() {
            return {
                section_one:[{
                    img_url: "",
                    name: "",
                    the_disc: "",
                    price: "",
                }],
                section_one_name: "",

            }
        },
        name: 'section-one'
    }
</script>

<style scoped>

</style>
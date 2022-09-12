<template>
    <div>
        <input v-model="this.section_one_name" placeholder="section name">
    </div>
</template>

<script>
    export default {
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
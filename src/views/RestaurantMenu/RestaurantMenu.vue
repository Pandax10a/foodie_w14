<template>
    <div>
        <p>The Menu Page</p>
        <section-one></section-one>
        <items-list></items-list>
    </div>
</template>

<script>
import SectionOne from '@/components/forRestaurant/MenuEdit/SectionOne.vue'
import ItemsList from '@/components/forRestaurant/MenuEdit/ItemsList.vue'

    export default {
  components: { SectionOne, ItemsList },
        
    }
</script>

<style scoped>

</style>
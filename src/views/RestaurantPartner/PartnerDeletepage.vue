<template>
<!-- adding final warning for user about deleting account -->
    <div>
        <p>Warning: click if you really want to delete this account.  The restaurant partner account will not be retrievable once clicked</p>
       <partner-delete></partner-delete>
    </div>
    
</template>

<script>

import PartnerDelete from '@/components/forRestaurant/PartnerDelete.vue'
    export default {
  components: { PartnerDelete },
        
    }
</script>

<style scoped>

</style>
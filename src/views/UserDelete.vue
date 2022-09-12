<template>
<!-- adding final warning for user about deleting account -->
    <div>
        <p>Warning: click if you really want to delete this account.  The user's account will not be retrievable once clicked</p>
        <delete-user></delete-user>
    </div>
    
</template>

<script>
import DeleteUser from '@/components/DeleteUser.vue'
    export default {
  components: { DeleteUser },
        
    }
</script>

<style scoped>

</style>
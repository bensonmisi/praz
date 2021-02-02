<template>
     <v-snackbar
                v-model="snackbar"
                timeout=3000
                :color="color"
                top
                
                >
                {{ message }}         
                </v-snackbar>
</template>
<script>
export default {
    props:['snackbar','color','message']
}
</script>
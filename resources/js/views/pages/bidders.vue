
<template>
    <div>
        <h2>Bidders</h2>
    </div>
</template>
<script>
import * as welcome from '../../services/welcome'
export default {
    data(){
        return{
            categories:[]
        }
    },methods:{
        getBidders(){
            welcome.getSuppliers().then(response=>{
                this.categories = response.data.categories
            })
        }
    }
}
</script>
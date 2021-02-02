<template>
    <div>
  <v-breadcrumbs
      :items="items"
      large
    ></v-breadcrumbs>
   
              <documents></documents>
     

    </div>
</template>
<script>
 import documents from '../../../components/user/documents.vue'
export default {
    data(){
        return{
            items: [
                {
                text: 'Dashboard',
                disabled: false,
                href: '/Bidders-Dashboard/',
                },
                {
                text: 'Documents Upload',
                disabled: true,
                href: 'breadcrumbs_link_2',
                },
            ],
         
        }
    },components:{
        documents
    }
}
</script>
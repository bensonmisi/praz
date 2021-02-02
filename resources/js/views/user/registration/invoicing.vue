<template>
    <div>
       <v-breadcrumbs
      :items="items"
      large
    ></v-breadcrumbs>
       <invoicing></invoicing>
    </div>
</template>
<script>
import invoicing from '../../../components/user/invoicing/invoice.vue'
export default {
    components:{
      invoicing
    },
    data(){
        return{
             items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/Bidders-Dashboard/',
        },
        {
          text: 'Document Upload',
          disabled: false,
          href: '/Bidders-Dashboard/Registration/Documents',
        },
        {
          text: 'Invoicing',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
        }
    }
}
</script>
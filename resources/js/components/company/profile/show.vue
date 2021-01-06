<template>
         <v-card class="ma-1">
                                    <v-card-title>
                                            <div>
                                Details
                                    </div>
                                    <v-spacer></v-spacer>
                                    <div class="d-flex">
                                        <edit :company="comp"></edit>
                                     </div>
                                    </v-card-title>
                                    <v-card-text>
                                <v-simple-table>
                                    <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>{{comp.name}}</td>
                                    </tr>
                                    <tr>
                                        <th>Reg number</th>
                                        <td>{{comp.regnumber}}</td>
                                    </tr>
                                    <tr>
                                        <th>Country</th>
                                        <td>{{comp.country}}</td>
                                    </tr>
                                    <tr>
                                        <th>City</th>
                                        <td>{{comp.city}}</td>
                                    </tr>
                                    <tr>
                                        <th>Account type</th>
                                        <td>
                                            <template v-if="comp.accounttype">
                                            {{comp.accounttype.name}}
                                            </template>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>
                                            <template v-if="comp.accounttype">
                                            {{comp.contacts.emails}}
                                            </template>
                                        </td>
                                    </tr>
                                        <tr>
                                        <th>Phone</th>
                                        <td>
                                            <template v-if="comp.accounttype">
                                            {{comp.contacts.phones}}
                                            </template>
                                        </td>
                                        </tr>
                                        <tr>
                                        <th>Address</th>
                                        <td>
                                            <template v-if="comp.accounttype">
                                            {{comp.contacts.address}}
                                            </template>
                                        </td>
                                        </tr>
                                    </tbody>
                                </v-simple-table>
                                    </v-card-text>
                                </v-card>
</template>
<script>
import edit from './edit'
export default {
    props:['comp'],
    components:{
        edit
    }
}
</script>
<template>
  <div class="oneway">
   <div class="content">
     <b-row>
       <b-col cols="5">
         <div class="one_descript">
           <p style="margin-top:45px;">Book a car,</p>
           <h3 style="">We guarantee,<br>The Best Price Always</h3>
           <p>Your anytime travel  partner in any city across India<br> Choose from range of categories
              With Morya One-Way.
           </p>

         </div>
         <form @submit.prevent="processForm">
           <b-form-select 
             v-model="selected" 
             :options="options" 
             text="Select city" size="md" 
             class="mt-3">
           </b-form-select>
           <b-form-select v-model="selected2" :options="options2" size="md" class="mt-3"></b-form-select>
           <b-row >
             <b-col>
               <b-form-datepicker 
                  id="example-datepicker" 
                  v-model="date" 
                  
                  class="mt-3"
                  
                 >
               </b-form-datepicker>
             </b-col>
             <b-col cols="0"></b-col>
             <b-col><b-form-timepicker v-model="time" locale="en" class="mt-3"></b-form-timepicker></b-col>
           </b-row>
           <b-button variant="outline-primary" type="submit" value="Submit">Submit</b-button>
         </form>
       </b-col>
       <b-col>
       </b-col>
       <b-col>
       </b-col>
     </b-row>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {required} from 'vuelidate'
export default {
  name: 'Oneway',
  components: {
  
  },
  data(){
    return{
       selected: null,
       options: [
         { value: null, text: 'Select Pickup Cityy' },
         { value: 'Pune',text: 'Pune' },
         { value: 'Mumbai', text: 'Mumbai' },
         { value: 'Ahamadnagar', text: 'Ahamadnagar' },
         { value: 'Lonavla', text: 'lonavla'}
        ],
        selected2:null,
        options2: [
         { value: null, text: 'Select Pickup City' },
         { value: 'Pune',text: 'Pune' },
         { value: 'Mumbai', text: 'Mumbai' },
         { value: 'Ahamadnagar', text: 'Ahamadnagar' },
         { value: 'Lonavla', text: 'lonavla'}                                                              
        ],
        date:'',
        time:''

    }
  },
  

  
  methods:{
    processForm:function(){
      console.log({pickupCity:this.selected, destinationCity:this.selected2, date:this.date, time:this.time });
      alert('processing')
    }
  }
}
</script>
<style scoped>
.oneway{
  background-color: #D9DBFF;
  background-image:url(../assets/car1.png);
  background-repeat: no-repeat;
  background-position:104% 25%;
  background-size: 595px 450px;


  width:(100% - 250px);
  margin-top:60px;
  padding:40px;
  margin-left:250px;
  height:100vh;
  transition: 0.5s;
}
.one_descript{
  line-height:110%;
  
}




/*@media screen and (max-width: 780px){
  /*.oneway{
    margin-left: 0;
    margin-top: 0;
    padding: 10px 20px;
    transition: 0s;
  }

  
  
  .content{
    margin-left: 0;
    margin-top: 0;
    padding: 10px 20px;
    transition: 0s;
  }

}*/


</style>

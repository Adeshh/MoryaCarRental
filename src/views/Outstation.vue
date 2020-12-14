<template>
  <div class="outstation">
    <div class="content">
      <form @submit.prevent="">
        <h3 class="aa">Book a car to your destination across India</h3>
        <div class="form1">
          <b-form-select v-model="selected" :options="options" size="md" class="mt-3"></b-form-select>
        </div>
        <div class="form2">
          <b-form-select v-model="selected2" :options="options2" size="md" class="mt-3"></b-form-select>
        </div>
        <div class="D&T">
          <b-row >
            <b-col><b-form-datepicker id="example-datepicker" v-model="Dvalue" class="mt-3"></b-form-datepicker></b-col>
            <b-col cols="0"></b-col>
            <b-col><b-form-timepicker v-model="Tvalue" locale="en" class="mt-3"></b-form-timepicker></b-col>
          </b-row>
        </div>
        <b-form-select v-model="selected3" :options="options3" size="sm" class="mt-3"></b-form-select>
        <b-button variant="outline-primary" type="submit" value="Submit">Submit</b-button>

      </form>

    </div>
    
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Outstation',
  components: {
  
  },
  data(){
    return{
      selected: null,
      options: [
        { value: null, text: 'Select Pickup City' },
        { value: 'a', text: 'Pune' },
        { value: 'b', text: 'Mumbai' },
        { value: { C: '3PO' }, text: 'Ahamadnagar' },
        { value: 'd', text: 'lonavla'}
      ],
        selected2:null,
        options2: [
         { value: null, text: 'Select Destination City' },
         { value: 'a', text: 'Pune' },
         { value: 'b', text: 'Mumbai' },
         { value: { C: '3PO' }, text: 'Ahamadnagar' },
         { value: 'd', text: 'lonavla'}
        ],
        Dvalue:'',
        Tvalue:'',
        selected3:null,
        options3: [
         { value: null, text: 'Select no of days' },
         { value: 'a', text: 1 },
         { value: 'b', text: 2 },
         { value: { C: '3PO' }, text: 3},
         { value: 'd', text:4}
        ],

    }
    
  }
}
</script>
<style scoped>
.outstation{
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

.content{
  padding: 1rem 2rem;
}
</style>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { reactive, ref } from "vue";
import { RouterLink } from "vue-router";
import useStudent from "../../composables/studentApi";

// import useStudent from '../../composables/studentApi';
// export function validName(fname,lname){
//   let validNamePattern =  new RegExp ("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
//   if(validNamePattern.test(name)){
//     return true;
//   }
//   return false;
// }
export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      form: {
        fname: '',
        lname: '',
        email: '',
        nmls: '',
      },

    }
  },
  validations() {
    return {
      form: {
        fname: {
          required,
          min: minLength(2)
          // $message:'Invalid Name'


        },
        lname: {
          required,
          min: minLength(2)
        },
        email: {
          required, email
        },
        nmls: {
          required
        },
      },
    }
  },
  methods: {
    handleAddStudentForm: async (form) => {
    
      await createStudent(form)
        window.location.href = '/list'
      

    },
    Disabled(form) {
      
      // console.log(form);

      return form.fname == "" || form.lname == "" || form.email == "" || form.nmls == "";
    },

  },
};

const { createStudent } = useStudent();

</script>

<template>
  <div class="shadow-md pb-6">
    <div class="bg-indigo-600 p-4">
      <h1 class="text-3xl font-bold underline">Add Student</h1>
    </div>
  </div>
  <form @submit.prevent="handleAddStudentForm(form)">
    <!-- Firstname -->
    <div class="form-group" :class="{ error: v$.form.fname.$errors.length }">

      <label for="fname">FirstName: </label>

      <input type="text" class="form-control" id="fname" placeholder="Enter your firstname"
        v-model.trim="v$.form.fname.$model" :rules="required">
      <div class="pre-icon os-icon os-icon-user-male-circle"></div>
      <!-- error message -->
      <div class="input-errors" v-for="(error, index) of v$.form.fname.$errors" :key="index">
        <div class="error-msg" style="textColor: red">{{ error.$message }}</div>
      </div>
    </div>

    <!-- lastname -->
    <div class="form-group" :class="{ error: v$.form.lname.$errors.length }">

      <label for="lname">LastName: </label>
      <input type="text" class="form-control" placeholder="enter your lastname" v-model="v$.form.lname.$model"
        :rules="required">
      <div class="pre-icon os-icon os-icon-user-male-circle"></div>
      <!-- error message -->
      <div class="input-errors" v-for="(error, index) of v$.form.lname.$errors" :key="index">
        <div class="error-msg" style="textColor: red">{{ error.$message }}</div>
      </div>
    </div>

    <!-- email -->
    <div class="form-group" :class="{ error: v$.form.email.$errors.length }">

      <label for="email">EMAIL: </label>
      <input type="email" class="form-control" placeholder="enter your email" v-model="v$.form.email.$model"
        :rules="required">
      <div class="pre-icon os-icon os-icon-user-male-circle"></div>
      <!-- error message -->
      <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
        <div class="error-msg" style="textColor: red">{{ error.$message }}</div>
      </div>
    </div>

    <!-- nmls -->
    <div class="form-group" :class="{ error: v$.form.nmls.$errors.length }">

      <label for="nmls">NMLS: </label>
      <input type="number" class="form-control" placeholder="enter your NMLS code" v-model="v$.form.nmls.$model"
        :rules="required">
      <div class="pre-icon os-icon os-icon-user-male-circle"></div>
      <!-- error message -->
      <div class="input-errors" v-for="(error, index) of v$.form.nmls.$errors" :key="index">
        <div class="error-msg" style="textColor: red">{{ error.$message }}</div>
      </div>
    </div>
    <div class="input-errors">
      <div class="error-msg" style="textColor: red">{{ error }}</div>
    </div>
    <!-- buttons -->
    <!-- <div class="buttons-w">
                        <button :disabled="v$.form.$invalid" class="btn btn-primary">Login</button>
                      </div> -->
    <div class="m-8 flex justify-center">
      <!-- <RouterLink :to="{ name: 'List' }"> -->
      <button type="submit" :disabled="Disabled(form)"
        class="bg-purple-700 text-white font-medium py-2 rounded-md px-6 hover:bg-purple-800 mr-6">
        Add
      </button>
      <!-- </RouterLink> -->
      

      <RouterLink :to="{ name: 'List' }">
        <button type="button" class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800">
          Back
        </button>
      </RouterLink>
    </div>
  </form>
  <!-- </form> -->
</template>

<style scoped></style>

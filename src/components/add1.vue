<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import useStudent from "../../composables/studentApi";
// import useStudent from '../../composables/studentApi';
const {studentData,error, createStudent} = useStudent();
const formData = reactive({
  fname: "",
  lname: "",
  email: "",
  nmls: "",
});
const handleAddStudentForm = async () => {
  await createStudent (formData);
  // console.log("Form Submitted", formData);
};

</script>

<template>
  <div class="shadow-md pb-6">
    <div class="bg-indigo-600 p-4">
      <h1 class="text-3xl font-bold underline">Add Student</h1>
    </div>

    <form
      @submit.prevent="handleAddStudentForm"
      class="w-full"
      id="AddStudentForm"
    >
      <!-- Firstname -->
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="fname">FirstName</label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="fname"
            v-model.trim="formData.fname"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="Write here.."
          />
        </div>
      </div>
      <!-- lastname -->
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="fname">LastName </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="lname"
            v-model.trim="formData.lname"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="Write here.."
          />
        </div>
      </div>
      <!-- email -->
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="fname">Email-ID</label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="email"
            v-model.trim="formData.email"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="Write here.."
          />
        </div>
      </div>

      <!-- nmls -->
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="fname">NMLS</label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="nmls"
            v-model.trim="formData.nmls"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="Write here.."
          />
        </div>
      </div>

      <!-- buttons -->
      <div class="m-8 flex justify-center">
        <button
          type="submit"
          class="bg-purple-700 text-white font-medium py-2 rounded-md px-6 hover:bg-purple-800 mr-6"
        >
          Add
        </button>

        <RouterLink :to="{ name: 'List' }">
          <button
            type="button"
            class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800"
          >
            Back
          </button>
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<style scoped></style>

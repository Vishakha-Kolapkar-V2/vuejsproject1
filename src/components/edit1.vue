<script setup>
import useStudent from "../../composables/studentApi";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
const { studentData, error, getSingleStudent,updateStudent } = useStudent();
const { params } = useRoute();
onMounted(() => {
  getSingleStudent(params.id);
});

function handleUpdateStudentForm() {
  updateStudent(params.id, studentData.value);
}
</script>

<template>
  <div class="shadow-md pb-6">
    <div class="bg-indigo-600 p-4">
      <h1 class="text-3xl font-bol text-center text-white">Edit Student</h1>
    </div>
  </div>
  <form @submit.prevent="handleUpdateStudentForm" class="w-full">
    <div class="flex item-center m-6">
      <div class="w-1/5">
        <label class="font-medium" for="studid">ID:</label>
      </div>
      <div class="w-4/5">
        <input
          type="text"
          id="stuid"
          class="border-2 border-gray-200 w-full py-2 px-4 readonly disabled"
          v-model.trim="studentData.id"
        />
      </div>
    </div>
    <!--  -->
    <div class="flex item-center m-6">
      <div class="w-1/5">
        <label class="font-medium" for="fname">FirstName:</label>
      </div>
      <div class="w-4/5">
        <input
          type="text"
          id="fname"
          class="border-2 border-gray-200 w-full py-2 px-4 readonly disabled"
          v-model.trim="studentData.fname"
        />
      </div>
    </div>
    <!--  -->
    <div class="flex item-center m-6">
      <div class="w-1/5">
        <label class="font-medium" for="lname">LastName:</label>
      </div>
      <div class="w-4/5">
        <input
          type="text"
          id="lname"
          class="border-2 border-gray-200 w-full py-2 px-4 readonly disabled"
          v-model.trim="studentData.lname"
        />
      </div>
    </div>
    <!--  -->
    <div class="flex item-center m-6">
      <div class="w-1/5">
        <label class="font-medium" for="email">Email-ID:</label>
      </div>
      <div class="w-4/5">
        <input
          type="text"
          id="email"
          class="border-2 border-gray-200 w-full py-2 px-4 readonly disabled"
          v-model.trim="studentData.email"
        />
      </div>
    </div>
    <!--  -->
    <div class="flex item-center m-6">
      <div class="w-1/5">
        <label class="font-medium" for="nmls">NMLS:</label>
      </div>
      <div class="w-4/5">
        <input
          type="text"
          id="nmls"
          class="border-2 border-gray-200 w-full py-2 px-4 readonly disabled"
          v-model.trim="studentData.nmls"
        />
      </div>
    </div>
    <!--  -->
    <div class="m-8 flex justify-center">
      <button
        type="submit"
        class="bg-purple-700 text-white font-medium py-2 rounded-md hover:ng-purple-800 px-4 mr-5"
      >
        Save
      </button>
      <RouterLink :to="{ name: 'List' }">
        <button
          type="button"
          class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800"
        >
          Back To Home
        </button>
      </RouterLink>
    </div>
  </form>
</template>

<style scoped></style>

<script setup>
import useStudent  from '../../composables/studentApi';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const {studentData, error, getSingleStudent} = useStudent();
const route = useRoute();
onMounted(()=>{
    getSingleStudent(route.params.id);
});
</script>

<template>
  <div class="shadow-md pb-6">
    <table class="table-auto w-full">
        <!-- <thead class="bg-state-600 text-white"> -->
            <tr>
                <th class="py-1">ID</th>
                <th class="py-1">FirstName</th>
                <th class="py-1">LastName</th>
                <th class="py-1">Email-ID</th>
                <th class="py-1">NMLS</th>
            </tr>
        <!-- </thead> -->
        <tbody class="text-center">
            <tr>
                <td class="py-2">{{ studentData.id}}</td>
                <td class="py-2">{{ studentData.fname}}</td>
                <td class="py-2">{{ studentData.lname}}</td>
                <td class="py-2">{{ studentData.email }}</td>
                <td class="py-2">{{ studentData.nmls }}</td>
            </tr>
        </tbody>
    </table>
    <div class="m-8 flex justify-center">
        <RouterLink :to="{ name: 'List'}">
        <button type="button" class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800">
            Back to home
        </button>
        </RouterLink>
    </div>
  </div>
  
</template>

<style scoped>

</style>

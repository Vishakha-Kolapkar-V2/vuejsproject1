<script setup>
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/vue/24/solid";
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import useStudent from "../../composables/studentApi";

const { studentData, error,statusCode, getAllStudent, destroyStudent } = useStudent();
onMounted(getAllStudent);

const deleteStudent = async (id) => {
  if (!window.confirm("Are you sure!")) {
    return;
  }
  await destroyStudent(id);
  await getAllStudent();
};
</script>

<template>
  <div>
    <div class="bg-orange-600 p-4 grid grid-cols-9">
      <div class="col-span-6 md:col-span-8">
        <h1 class="text-3xl font-bold underline">List of student</h1>
      </div>
      <div class="text-right">
        <RouterLink :to="{ name: 'add' }"
          ><button
            class="text-white text-md bg-green-700 hover:bg-green-800 font-medium rounded-lg p-2 px-6"
          >
            <UserPlusIcon />Add
          </button></RouterLink
        >
      </div>
    </div>
  </div>
<div v-if="error">{{ error.message }}</div>
  <table class="table-auto w-full" v-else-if="studentData">
    <thead class="bg-slate-600 text-white">
      <tr>
        <th class="py-1">No</th>
        <th class="py-1">FirstName</th>
        <th class="py-1">LastName</th>
        <th class="py-1">Email-ID</th>
        <th class="py-1">NMLS</th>
        <th class="py-1">Action</th>
      </tr>
    </thead>

    <tbody class="text-center">
      <tr
        v-for="({ id, fname, lname, email, nmls }, i) in studentData"
        :key="id"
      >
        <td class="py-2">{{ ++i }}</td>
        <td class="py-2">{{ fname }}</td>
        <td class="py-2">{{ lname }}</td>
        <td class="py-2">{{ email }}</td>
        <td class="py-2">{{ nmls }}</td>
        <td class="py-2">
          <RouterLink :to="{ name: 'view', params: { id: id } }">
            <EyeIcon class="text-blue-500 h-6 w-6 inline"
          /></RouterLink>
          <RouterLink :to="{ name: 'edit', params: { id: id } }"
            ><PencilIcon class="text-emerald-500 h-6 w-6 mx-6 inline"
          /></RouterLink>
          <TrashIcon
            class="text-red-500 h-6 w-6 inline cursor-pointer"
            @click="deleteStudent(id)"
          />
        </td>
      </tr>
    </tbody>
  </table>
  <div v-if="statusCode === 200">Student deleted Succesully</div>
</template>

<style scoped></style>

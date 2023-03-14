import {ref} from'vue';
import axios from 'axios'

export default function useStudent(){
    const url = 'http://localhost:3000/students/'
    const studentData = ref([])
    const error = ref(null)
    const statusCode = ref(null)
    //get all student data

    const getAllStudent = async()=>{
        studentData.value = []
        error.value = null
        try{
            const res= await axios(url)
            // console.log(res.data)   
            studentData.value = res.data
        }catch(err){
            // console.log(err)
            error.value = err
        }
    }
    // Get single student data
    const getSingleStudent = async(id)=>{
        studentData.value = []
        error.value = null
        try{
            // const res = await axios(url + id)
            // studentData.value = res.data
            const res  = await axios(url + id)
            console.log('res,', res.data)
            studentData.value = res.data
            console.log(1, studentData)
            console.log(2, url)
        }catch(err){
            error.value= err 
        }
    }
    // post/add student data
    const createStudent = (formData)=>{
        studentData.value = []
        error.value = null 
        try{
            const config = {
                method:'POST',
                url:url,
                headers:{
                    'Content-Type':'application/json'
                },
                data:JSON.stringify(formData)
            }
            return axios(config)
                .value =res.data
        }catch(err){
            error.value = err
        }  
    }
    //Update student data
    const updateStudent =  async(id,data)=>{
        studentData.value=[]
        error.value = null
        try{
            const config = {
                method:'PUT',
                url:url + id,
                headers:{
                    'Content-Type': 'application/json'
                },
                data:JSON.stringify(data)
            }
            const res= await axios (config)
            studentData.value = res.data
        }catch(err){
            error.value= err
        }
    }
    // delete student
    const destroyStudent =  async(id)=>{
        studentData.value=[]
        error.value = null
        try{
            const config = {
                method:'DELETE',
                url: url + id,
                headers:{
                    'Content-Type': 'application/json'
                }
            }
            const res= await axios (config)
            // console.log(res)
            statusCode.value = res.status
            // console.log(res.data)
        }catch(err){
            error.value= err
        }
    }
    return {
        studentData,
        error,
        statusCode,
        getAllStudent,
        getSingleStudent,
        createStudent,
        updateStudent,
        destroyStudent
    }
}
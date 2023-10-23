<template>
    <div class="row">
      <div class="right-container m-3 px-5">
        <div class="card bg-info-subtle  text-center">
                    <h2>Estudiantes-Asignaturas</h2> 
                </div>
        <div>
          <table class="table table-bordered table-striped">
           <thead>
            <tr>
              <th>#</th>
              <th>Nombre Estudiante</th>
              <th>Asignatura</th>
              <th>Creditos</th>
              <th>Profesor</th>
              
            </tr>
           </thead>
           <tbody class="table.group-divider" id="contenido">
            <tr v-if="this.charging">
              <td colspan="6"> <h3>Cargando...</h3> </td>
            </tr>
            <tr v-else v-for="ss , i in this.student_subject" >
              <td v-text="(i+1)"></td>
              <td v-text="ss.students.name"></td>
              <td v-text="ss.subjects.nameA"></td>
              <td v-text="ss.subjects.credits"></td>
              <td v-text="ss.subjects.teachers.name"></td>
              <td>
                <router-link :to="{path:'edit/'+ss.id}" class="btn btn-warning">
                  <i class="fa-solid fa-edit">
                  </i>
                </router-link>
                
                <button class="btn btn-danger" v-on:click=" delete(sbj.id,tch.name)">
                  <i class="fa-solid fa-trash">
                  </i>
                </button>
              </td>
  
  
            </tr>
           </tbody>
  
          </table>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import {confirm} from '../functions'
  
  export default{
    data(){
      return{
        student_subject:null, 
        charging:false
      }
    },
    mounted(){
      this.getStudentSubject();
    },
    methods:{
      getStudentSubject(){
        this.charging =true;
        axios.get('http://127.0.0.1:8000/api/v1/student_subject').then(
        res =>{
          this.student_subject= res.data;
          this.charging=false;
        }
        );
      },
      delete(id,name){
        confirm('http://127.0.0.1:8000/api/v1/subject',id,'Eliminar Profesor', ' Realmente desea eliminar a'+name+ '?')
      this.charging=false;
      }
      //getTeacherName(teacherId) {
    //  const teacher = this.teacher.find(teacher => teacher.id === teacherId);
      //return teacher ? teacher.name : 'Desconocido';
    //},
  }
  }
  </script>

<style>
.card{
  background-color: rgb(52, 192, 238); /* Define el color de fondo azul claro */
      color: black;
}
.bg-dark-blue {
    background-color: rgb(3, 58, 77); /* Define el color de fondo azul claro */
    color: black;
  }

h2{
  font-family: 'AlfaSlabOne';
  font-size: 1.4rem;
  color: #0b1165;
}

.texto-azul {
  color: blue;
}

</style>
  
<template>
    <div class="row">
      <div class="right-container m-3 px-5">
        <div class="card bg-info-subtle  text-center">
                    <h2>Lista de Asignaturas</h2> 
                </div>
        <div>
          <table class="table table-bordered table-striped">
           <thead>
            <tr>
              <th>#</th>
              <th>ID </th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Creditos</th>
              <th>Area de conocimiento</th>
              <th>Tipo de Curso</th>
              <th>Profesor</th>
              <th>Creado</th>
            </tr>
           </thead>
           <tbody class="table.group-divider" id="contenido">
            <tr v-if="this.charging">
              <td colspan="6"> <h3>Cargando...</h3> </td>
            </tr>
            <tr v-else v-for="sbj , i in this.subject">
              <td v-text="(i+1)"></td>
              <td v-text="sbj.id"></td>
              <td v-text="sbj.nameA"></td>
              <td v-text="sbj.description"></td>
              <td v-text="sbj.credits"></td>
              <td v-text="sbj.knowledge_area"></td>
              <td v-text="sbj.type_of_course"></td>
              <td v-text="sbj.teachers.name"></td>
              <td v-text="new Date(sbj.created_at).toLocaleDateString()"></td>
              <td>
                <router-link :to="{path:'edit/'+sbj.id}" class="btn btn-warning">
                  <i class="fa-solid fa-edit">
                  </i>
                </router-link>
                &nbsp;
                <button class="btn btn-danger" @click=" deleteSj(sbj.id,sbj.nameA)">
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
        subject:null, 
        charging:false
      }
    },
    mounted(){
      this.getSubjects();
    },
    methods:{
        getSubjects(){
        this.charging =true;
        axios.get('http://127.0.0.1:8000/api/v1/subject').then(
        res =>{
          this.subject= res.data;
          this.charging=false;
        }
        );
      },
      deleteSj(id,name){
        confirm('http://127.0.0.1:8000/api/v1/subject',id,'Eliminar Asignatura', ' Realmente desea eliminar a'+name+ '?')
      this.charging=false;
      }
    
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
  
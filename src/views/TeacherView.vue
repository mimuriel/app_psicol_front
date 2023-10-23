<template>
    <div class="row">
      <div class="right-container m-3 px-5">
        <div class="card bg-info-subtle text-center">
                    <h2>Lista de Profesores</h2>
                </div>
        <div>
          <table class="table table-bordered table-striped">
           <thead>
            <tr>
              <th>#</th>
              <th>ID </th>
              <th>Documento</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>Dirección</th>
              <th>Creado</th>
            </tr>
           </thead>
           <tbody class="table.group-divider" id="contenido">
            <tr v-if="this.charging">
              <td colspan="6"> <h3>Cargando...</h3> </td>
            </tr>
            <tr v-else v-for="tch , i in this.teacher">
              <td v-text="(i+1)"></td>
              <td v-text="tch.id"></td>
              <td v-text="tch.document"></td>
              <td v-text="tch.name"></td>
              <td v-text="tch.phone"></td>
              <td v-text="tch.address"></td>
              <td v-text="tch.city"></td>
              <td v-text="new Date(tch.created_at).toLocaleDateString()"></td>
              <td>
                <router-link :to="{path:'edit/'+tch.id}" class="btn btn-warning">
                  <i class="fa-solid fa-edit">
                  </i>
                </router-link>
                &nbsp;
                <button class="btn btn-danger" @click=" deleteT(tch.id,tch.name)">
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
        teacher:null, 
        charging:false
      }
    },
    mounted(){
      this.getTeachers();
    },
    methods:{
      getTeachers(){
        this.charging =true;
        axios.get('http://127.0.0.1:8000/api/v2/teacher').then(
        res =>{
          this.teacher= res.data;
          this.charging=false;
        }
        );
      },
      deleteT(id,name){
        confirm('http://127.0.0.1:8000/api/v2/teacher',id,'Eliminar Profesor', ' Realmente desea eliminar a '+name+ '?')
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
.bg-light-blue {
    background-color: rgb(115, 208, 240); /* Define el color de fondo azul claro */
  }

h5{
  color: black;
}
</style>
  
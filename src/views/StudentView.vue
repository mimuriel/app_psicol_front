<template>
  <div class="row">
    <div class="right-container m-3 px-5">
      <div class="card bg-info-subtle text-center">
        <h2>Lista de Estudiante</h2>
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
              <th>Semestre</th>
              <th>Creado</th>
            </tr>
          </thead>
          <tbody class="table.group-divider" id="contenido">
            <tr v-if="this.charging">
              <td colspan="6">
                <h3>Cargando...</h3>
              </td>
            </tr>
            <tr v-else v-for="stu, i in this.student">
              <td v-text="(i + 1)"></td>
              <td v-text="stu.id"></td>
              <td v-text="stu.document"></td>
              <td v-text="stu.name"></td>
              <td v-text="stu.phone"></td>
              <td v-text="stu.address"></td>
              <td v-text="stu.city"></td>
              <td v-text="stu.semester"></td>
              <td v-text="new Date(stu.created_at).toLocaleDateString()"></td>
              <td>

                <router-link :to="{ path: 'edit/' + stu.id }" class="btn btn-warning">
                  <i class="fa-solid fa-edit">
                  </i>
                </router-link>
                &nbsp;
                <button class="btn btn-danger" @click="deleteSt(stu.id, stu.name)">
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
import { confirm } from '../functions'

export default {
  data() {
    return {
      student: null,
      charging: false
    }
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    getStudents() {
      this.charging = true;
      axios.get('http://127.0.0.1:8000/api/v1/student').then(
        res => {
          this.student = res.data;
          this.charging = false;
        }
      );
    },
    deleteSt(id, name) {

      confirm('http://127.0.0.1:8000/api/v1/student/' + id, 'Eliminar Registro', 'Realmente desea eliminar a ' + name + '?');
      this.charging = false;
    }

  }
}
</script>
  
<style>
.card {
  background-color: rgb(52, 192, 238);
 
  color: black;
}

.bg-dark-blue {
  background-color: rgb(3, 58, 77);
  color: black;
}

h2 {
  font-family: 'AlfaSlabOne';
  font-size: 1.4rem;
  color: #0b1165;
}

.texto-azul {
  color: blue;
}
</style>
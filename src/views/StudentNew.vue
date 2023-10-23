<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-info-subtle  text-center">
                    <h3>Registrar Estudiante</h3>
                </div>
                <div class="card-body">
                    <form @click="saveSt">
                        <div class="right-container m-3 px-5">
                            <div className="row my-3">
                                <div class="col-lg-6 form-group">
                                    <label>Nombre completo</label>
                                    <input type="text" v-model="name" id="name" placeholder="Ingrese su nombre" required
                                        maxlength="30" class="form-control">
                                </div>
                                <div class="col-lg-6 form-group">
                                    <label>Documento</label>
                                    <input type="text" v-model="document" id="document" placeholder="Ingrese su Documento"
                                        required maxlength="30" class="form-control">
                                </div>
                            </div>
                            <div className="row my-3">
                                <div class="col-lg-6 form-group">
                                    <label>Correo</label>
                                    <input type="text" v-model="email" id="email" placeholder="Ingrese su correo" required
                                        maxlength="30" class="form-control">
                                </div>
                                <div class="col-lg-6 form-group">
                                    <label>Telefono</label>
                                    <input type="text" v-model="phone" id="phone" placeholder="Ingrese su Telefono" required
                                        maxlength="30" class="form-control">
                                </div>
                            </div>
                            <div className="row my-3">

                                <div class="col-lg-6 form-group">
                                    <label>Dirección</label>
                                    <input type="text" v-model="address" id="address" placeholder="Ingrese su Dirección"
                                        required maxlength="30" class="form-control">
                                </div>
                                <div class="col-lg-6 form-group">
                                    <label>Ciudad</label>
                                    <input type="text" v-model="city" id="city" placeholder="Ingrese su Ciudad" required
                                        maxlength="30" class="form-control">
                                </div>

                            </div>
                            <div className="row my-3">
                                <div class="col-lg-6 form-group">
                                    <label>Semestre</label>
                                    <input type="text" v-model="semester" id="semester" placeholder="Ingrese su semestre"
                                        required maxlength="30" class="form-control">
                                </div>
                                <div class="col-lg-6 form-group">
                                <label>Asignaturas</label>
                                <select  v-model="valueMultiple" name="subject_id" id="" required maxlength="30" class="form-control" >
                                    <option v-for="subject in subjects" :key="subject.id" :value="subject.id">
                                        {{ subject.name }}
                                    </option>
                                </select>
                            </div>

                            </div>
                            <div class="container">
                                <button class="bg-info "> <i class=" fa  fa-floppy-disk"> Registar</i></button>
                            </div>
                            
                        </div>
                    </form>

                </div>



            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { show_alert, sendRequest } from '../functions'

export default {
    data() {
        return {
            name: '',
            document: '',
            phone: '',
            email: '',
            address: '',
            city: '',
            semester: '',
            url: 'http://127.0.0.1:8000/api/v1/student',
            charging: false
        }
    }
    ,
    mounted() {
        // Realiza una solicitud para obtener la lista de profesores desde tu API
        axios.get('http://127.0.0.1:8000/api/v1/subject') // Ajusta la URL a tu API
       
        .then(response => { 
                this.subjects = response.data; // Asigna la lista de profesores a la propiedad teachers
            })
            .catch(error => {
                console.error('Error al obtener la lista de profesores', error);
            });
    },
    methods: {
        saveSt() {
            event.preventDefault();

                var params = {
                    name: this.name.trim(), document: this.document.trim(), phone: this.phone.trim(), email: this.email.trim(),
                    address: this.address.trim(), city: this.city.trim(), semester: this.semester.trim(), subject_id: this.subject_id ? this.subject_id.trim() : ''
                }
                sendRequest('POST', params, this.url, 'Estudiante Registrado')
            }
        }

    }


</script>

<style>

.container {
  text-align: center;
}
h3{
font-family: 'AlfaSlabOne';
  font-size: 2rem;
  color: black;

}
.fa{
    font-family: 'AlfaSlabOne';
}

</style>

  
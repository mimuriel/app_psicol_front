<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    Actualizar Estudiante
                </div>
                <div class="card-body">
                    <form @click="updateSt">
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
                            <button class="btn btn-success"> <i class="fa-solid fa-floppy-disk"> Registar</i></button>
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
import { useRoute } from 'vue-router';

export default {
    data() {
        return {
            id:0,
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
        const route=useRoute();
        this.id=route.params.id;
        this.url += '/'+this.id;
        this.getStudent();
    },
    methods: {
        getStudent(){
            axios.get(this.url).then();
            res=>{
                this.name =res.data.data.name;
                this.document =res.data.data.document;
                this.phone =res.data.data.phone;
                this.email =res.data.data.email;
                this.address =res.data.data.address;
                this.city =res.data.data.city;
                this.semester =res.data.data.semester;

            }
        },
        updateSt() {
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

  
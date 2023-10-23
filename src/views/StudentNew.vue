<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-info-subtle  text-center">
                    <h3>Registrar Estudiante</h3>
                </div>
                <div class="card-body">
                    <form>
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
                                    <div style="display: flex;">
                                        <select v-model="idSubject" name="subject_id" id="" required maxlength="30"
                                        class="form-control">
                                        <option  v-for="subject in subjects" :key="subject" :value="subject">
                                            {{ subject.nameA }}
                                        </option>
                                    </select>
                                    <button style="margin-left: 1rem;" @click="onSaveSubjects(subject)" class="bg-info "> <i class=" fa  fa-plus">
                                        </i></button>
                                    </div>
                                </div>
                                <div  class="col-lg-6 form-group">
                                    <label v-if="multiple_subjects.length" for="">Lista de asignaturas</label>
                                    <div v-if="multiple_subjects.length" class="form-control">
                                        <div style="display: flex;" class="container-list-risk__items " v-for="(item, nKey) in multiple_subjects"
                                            :key="nKey">
                                            <p class="container-list-risk__items--description me-4">{{
                                                item.name }}</p>
                                            <button class="btn btn-sm btn-danger container-list-risk__items--btn"
                                                @click="onDeletSubject(nKey)">
                                                <i class="fa fa-trash container-list-risk__items--icon"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="container">
                                <button @click="saveSt()" class="bg-info "> <i class=" fa  fa-floppy-disk">
                                        Registar</i></button>
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
            multiple_subjects: [],
            idSubject:null,
            subjects:null,
            url: 'http://127.0.0.1:8000/api/v1/student',
            charging: false
        }
    }
    ,
    mounted() {
        
        axios.get('http://127.0.0.1:8000/api/v1/subject') 

            .then(response => {
                this.subjects = response.data; 
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
                address: this.address.trim(), city: this.city.trim(), semester: this.semester.trim(), subject_id: this.multiple_subjects
            }
            console.log(params);
            sendRequest('POST', params, this.url, 'Estudiante Registrado')
        },
        onSaveSubjects() {
            console.log(this.idSubject);
            const oForm = {
                "name": this.idSubject.nameA,
                "idUnico": this.idSubject.id
            }
            this.multiple_subjects.push(oForm)
            this.idSubject = ''
        },
        onDeletSubject(id){
            this.multiple_subjects = this.multiple_subjects.filter((subject,key) => key != id)
        }
    }

}


</script>

<style>
.container {
    text-align: center;
}

h3 {
    font-family: 'AlfaSlabOne';
    font-size: 2rem;
    color: black;

}

.fa {
    font-family: 'AlfaSlabOne';
}
</style>

  
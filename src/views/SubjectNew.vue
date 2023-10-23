<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-info-subtle text-center">
                   <h3>Registrar Asignaturas</h3> 
                </div>
                <div class="card-body">
                    <form>
                        <div className="row my-3">
                            <div class="col-lg-6 form-group">
                                <label>Nombre</label>
                                <input type="text" v-model="nameA" id="nameA" placeholder="Ingrese una nombre" required
                                    maxlength="30" class="form-control">
                            </div>
                            <div class="col-lg-6 form-group">
                                <label>Descripcion</label>
                                <input type="text" v-model="description" id="description"
                                    placeholder="Ingrese una descripción" required maxlength="80" class="form-control">
                            </div>

                        </div>
                        <div className="row my-3">
                            <div class="col-lg-6 form-group">
                                <label>Creditos</label>
                                <input type="text" v-model="credits" id="credits"
                                    placeholder="Ingrese la cantidad de creditos" required maxlength="30"
                                    class="form-control">
                            </div>
                            <div class="col-lg-6 form-group">
                                <label>Area de conocimiento</label>
                                <input type="text" v-model="knowledge_area" id="knowledge_area"
                                    placeholder="Ingrese el area de conocimiento" required maxlength="30"
                                    class="form-control">
                            </div>

                        </div>
                        <div className="row my-3">
                            <div class="col-lg-6 form-group">
                                <label>Tipo de Curso</label>
                                <select v-model="type_of_course" name="type_of_course" id="" required maxlength="30" class="form-control">
                                    <option value=0 hidden>
                                        Selecciona el tipo de asignatura
                                    </option>
                                    <option value=1>Obligatoria</option>
                                    <option value=2>Electiva</option>
                                </select>
                            </div>
                            <div class="col-lg-6 form-group">
                                <label>Profesor</label>
                                <select v-model="idTeacher" name="teacher_id" id="" required maxlength="30" class="form-control" >
                                    <option v-for="teacher in teachers" :key="teacher.id" :value="teacher.id">
                                        {{ teacher.name }}
                                    </option>
                                </select>
                            </div>
                            
                        </div>
                        <div class="container">
                            <button @click="saveSj()" class="bg-info"><i class=" fa  fa-floppy-disk">Registar</i>
                            </button>

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
            nameA: '',
            description: '',
            credits: '',
            knowledge_area: '',
            type_of_course: null,
            teachers: [],
            url: 'http://127.0.0.1:8000/api/v1/subject',
            charging: false,
            idTeacher: null
        }
    },
    mounted() {
       
        axios.get('http://127.0.0.1:8000/api/v2/teacher') 
       
        .then(response => { 
                this.teachers = response.data; 
            })
            .catch(error => {
                console.error('Error al obtener la lista de profesores', error);
            });
    },
    methods: {
        onSave() {

        },
        saveSj() {
            event.preventDefault();

            var params = {
                nameA: this.nameA.trim(), description: this.description.trim(), credits: this.credits.trim(), knowledge_area: this.knowledge_area.trim(),
                type_of_course: this.type_of_course.trim(),teacher_id: this.idTeacher
            }
            sendRequest('POST', params, this.url, 'Asignatura Registrada')
        }
    }
}


</script>

<style>

</style>

  
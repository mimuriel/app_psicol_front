<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-info-subtle text-center">
                    <h3>Actualizar Profesores</h3>
                </div>
                <div class="card-body">
                    <form >
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
                        <div class="container">
                            <button @click="updateTc" class="bg-info "> <i class=" fa  fa-floppy-disk"> 
                                Actualizar</i></button>
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
            id: null,
            name: '',
            document: '',
            phone: '',
            email: '',
            address: '',
            city: '',
            url: 'http://127.0.0.1:8000/api/v2/teacher',
            charging: false
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.url += '/'+this.id;
        this.getTeachers();
    },
    methods: {
        updateTc() {
            event.preventDefault();
            const oForm = {
                name: this.name,
                document: this.document,
                phone: this.phone,
                email: this.email,
                address: this.address,
                city: this.city
            };
            console.log(oForm)    
            axios.put(this.url, oForm).then(
                res => {
                    show_alert('Profesor actualizado', 'success');
                    this.$router.push({ path: '/viewT' });
                }
            ).catch(
                err => {
                    console.log(err);
                    show_alert('Error al actualizar el profesor', 'danger');
                }
            );
        },

        getTeachers() {
            axios.get(this.url).then(
                res => {
                    this.name = res.data.data.name;
                    this.document = res.data.data.document;
                    this.phone = res.data.data.phone;
                    this.email = res.data.data.email;
                    this.address = res.data.data.address;
                    this.city = res.data.data.city;
                }
            ).catch(
                err => {
                    console.log(err);
                    this.charging = false;
                }
            );
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

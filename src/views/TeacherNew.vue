<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-info-subtle text-center">
                    <h3>Registrar Profesores</h3>
                </div>
                <div class="card-body">
                    <form @click="saveTc">
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
                            <button class="bg-info "> <i class=" fa  fa-floppy-disk"> 
                                Registar</i></button>

                        </div>

                    </form>
                </div>



            </div>
        </div>
    </div>
</template>

<script>
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
            url: 'http://127.0.0.1:8000/api/v2/teacher',
            charging: false
        }
    },
    methods: {
        saveTc() {
            event.preventDefault();

            var params = {
                name: this.name.trim(), document: this.document.trim(), phone: this.phone.trim(), email: this.email.trim(),
                address: this.address.trim(), city: this.city.trim()
            }
            sendRequest('POST', params, this.url, 'Profesor Registrado')
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

  
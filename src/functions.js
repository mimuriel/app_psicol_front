import Swal from "sweetalert2";
import axios from "axios";
import { icon, text } from "@fortawesome/fontawesome";

export function show_alert(title, icon, foco = ''){
    if (foco!=''){
        document.getElementById(foco).focus();
    }

    Swal.fire({
        title:title,
        icon:icon,
        customClass:{confirmButton:'btn btn-primary', popup:'animated zoonIn'},
        buttonsStyling:false
    });
}

export function confirm(urlWithSlash,title,message){
    const swalWithBootstrapButton = Swal.mixin({
        customClass:{confirmButton:'btn btn-success me-3',cancelButton:'btn btn-danger '}
    });
    swalWithBootstrapButton.fire({
        title:title,
        text:message,
        icon: 'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Si,eliminar',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar', }).then((res)=>{
            if(res.isConfirmed){
                axios.delete(urlWithSlash).then((res) => {
                    show_alert('El registro se eliminó correctamente','success');
                    window.setTimeout(function(){
                        location.reload();
                    },3000);
                }).catch((error) => {
                    const message = error.response.data.rErrors[0][1]
                    show_alert(message,'error');
                })                
            }
            else{
                show_alert('Operación Cancelada', 'info');
            }
        });

    
}

export function sendRequest(method,parameters,url, message){
    axios({method:method,url:url,data:parameters}).then(function(res){
        var status=res.status;
        if(status == 200){
            show_alert(message,'success');
            window.setTimeout(function(){
                window.location.href='/viewSS'
            },1000);
        }else{
            show_alert('No se pudo recuperar la respuesta','error');
        }
    }).catch(function(error){
        show_alert('Error de servidor','error');
    })
}

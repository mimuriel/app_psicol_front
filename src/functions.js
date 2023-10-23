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

export function confirm(urlWithSlash,id,title,message){
    var url=urlWithSlash+id;
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
                sendRequest('DELETE',{id:id},url,'Eliminado con Exito');
                Swal.fire({
                    title:title,
                    icon:icon,
                    customClass:{confirmButton:'btn btn-primary', popup:'animated zoonIn'},
                    buttonsStyling:false
                });
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



import Swal from "sweetalert2"

export const AuthNoti = (name,type="success") => {
    if (type=="success") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: name
          })
    } else {
        Swal.fire({
            icon: 'error',
            title: name,
            text: 'Please try again !',
          })
    }
}
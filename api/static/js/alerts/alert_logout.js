document.getElementById('logout-button').addEventListener('click', function () {
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Perderás tu sesión actual',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'no'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = ' /logout/';
        }
    });
});
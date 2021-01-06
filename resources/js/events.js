    window.livewire.on('add',id=>{
        $('#toast').toast('show')
    })
    window.livewire.on('close',id=>{
        $("#myModal").on('hide.bs.modal', function(){
            $('.modal-backdrop').remove()
        });
    })
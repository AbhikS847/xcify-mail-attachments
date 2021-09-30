$(document).ready(function(){
    $('[data-name="file"]').on('change',function(){
        
        // replace the .text below with getStrRes("upload")

        if($ ('[data-name="file"]')[0].files.length === 0){
            return;
        }
        else{
            let $attachment = $(
                '<div class="col-4 col-sm-2">' +
                  '<div class="mail-attachment-box">' + 
                    '<button class="btn" data-name="btnremove"><i class="fas fa-times"></i></button>' +
                    '<button class="btn"><i class="fas fa-paperclip"></i></button>' +
                    '<div data-name="prompt">Filename</div>' +
                  '</div>'+
                '</div>'
            );
            $('.mail-attachments').append($attachment);
            if($attachment.find($('[data-name="prompt"]')).text($('[data-name="file"]').val().length > 5)) $attachment.find($('[data-name="prompt"]')).text($('[data-name="file"]').val().replace(/^.*\\/, "").slice(0,7).concat('..'));
            $attachment.find($('[data-name="btnremove"]')).on('click',function(){$attachment.remove()});
        }
    })
});
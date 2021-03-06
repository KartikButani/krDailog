jQuery.fn.extend({
    krDailog: function(k) {
        var id = this[0].id;

        if(k.hasOwnProperty('open') != false) {
            if(k.open == true) {
                open(id);
            }

        } else {
            var title = "My Title";
            if(k.hasOwnProperty('title') != false)
                title = k.title;
            var showCloseButton = true;
            if(k.hasOwnProperty('closeButton') != false)
                showCloseButton = k.closeButton;
            var colButton = true;
            if(k.hasOwnProperty('collapseButton') != false)
                colButton = k.collapseButton;
            var str = '';
            str += '<div class="kpannel-con" id="kpannel-'+id+'">';
            str += '<div class="kpannel-wrp col-'+id+'" id="kpannel-con-wrp">' + $('#'+id).html()+ '</div>';
            str += '</div>';
            str += '<div class="kpannel-title-con" id="kpannel-title-'+id+'">';
            str += '<div class="ktitle">'+ title +'</div>';
            str += '<div class="coll-kbox">';
            if(colButton)
                str += '<span class="glyphicon glyphicon-minus"  data-toggle="collapse" data-target=".col-'+id+'"></span>';
            else
                str += '&nbsp;';
            str += '</div>';
            if(showCloseButton)
                str += '<div class="kclose-'+id+'"><span class="glyphicon glyphicon-remove"></span></div>';
            str += '</div>';


            $('#'+id).html(str);

            $('.col-'+id).collapse();

            if(k.hasOwnProperty('show') != false) {
                show(k.show,id);
            } else {
                show(true,id);
            }

            if(k.hasOwnProperty('height')!= false) {
                $('#kpannel-'+id).css('height',k.height.toString());
                $('#kpannel-'+id+ ' #kpannel-con-wrp').css('height',($('#kpannel-'+id).height() - 40));
                responsive('kpannel-'+id,'kpannel-con-wrp');
            }

            if(k.hasOwnProperty('width') != false) {
                $('#kpannel-'+id).css('width',k.width);
                $('#kpannel-title-'+id).css('width',k.width);
            }

            if(k.hasOwnProperty('top')!= false) {
                $('#kpannel-'+id).css('top',k.top);
                $('#kpannel-title-'+id).css('top',k.top);
            }

            if(k.hasOwnProperty('left')!= false) {
                $('#kpannel-'+id).css('left',k.left);
                $('#kpannel-title-'+id).css('left',k.left);
            }

            if(k.hasOwnProperty('right')!= false) {
                $('#kpannel-'+id).css('right',k.right);
                $('#kpannel-title-'+id).css('right',k.right);
            }

            if(k.hasOwnProperty('bottom')!= false) {
                $('#kpannel-'+id).css('bottom',k.bottom);
                $('#kpannel-title-'+id).css('bottom',k.bottom);
            }


            createpanel('kpannel-title-'+id,'kpannel-'+id);
            close('kclose-'+id,id);

        }
    }
});
function show(showDailog,id) {
    if(showDailog == true)
        $('#'+id).show();
    else
        $('#'+id).hide();
}
function responsive(id,changes) {

   $(window).resize(function() {
        $('#'+ id + ' #'+changes).css('height',($('#'+id).height() - 40));
    });
}
function open(id) {
    $('#'+id).show();
}
function close(pannel,id) {
    $('.'+pannel).click(function(){
        $('#'+id).hide();
    });
}
function createpanel(pan1,pan2) {
    $('#'+ pan1).draggable({
        drag: function(event,ui){
            $('#' + pan2).css('left',ui.offset.left);
            $('#' + pan2).css('top',ui.offset.top);
        }
    });
}

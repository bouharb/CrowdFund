/**
 * Created by wael on 07/03/2016.
 */
Template.summer.rendered = function() {
    $('#summernote').summernote({
      height: 200,   // set editable area's height
      focus: true   // set focus editable area after Initialize summernote
      /*
       toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'italic', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'hr']],
            ['view', ['fullscreen', 'codeview']],
            ['help', ['help']]
        ]*/
      //  fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New']

      /*  toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']]
        ]*/
    });
},
    Template.summer.events({

   'click #saveText' : function()
   {
       var source = $('#summernote').summernote('code');;
       console.log("aaaaaaaa",source);
       alert(source);
   }

    });
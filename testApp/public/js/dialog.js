$(document).ready(function(){
  $( "#dialog1, #dialog2" ).dialog({
        autoOpen: false,
        modal: false,
        buttons: {
          "はい": function() {
            $( this ).dialog( "close" );
          },
          "いいえ": function() {
            $( this ).dialog( "close" );
          }
        }
      });
  // $( "#dialog2" ).dialog({
  //       autoOpen: false,
  //       modal: false,
  //       buttons: {
  //         "はい": function() {
  //           $( this ).dialog( "close" );
  //         },
  //         "いいえ": function() {
  //           $( this ).dialog( "close" );
  //         }
  //       }
  //     });
	
		$('#button1').click(function(){
        $('#dialog1').dialog('open');
    });
    $('#button2').click(function(){
        $('#dialog2').dialog('open');
    });
});


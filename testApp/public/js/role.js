$(document).ready(function(){
	$('.tab-group').tab();
	$('.mod-tab-nav').tab();


    $('.roleList').click(function() {
    	var role_co = $(this).closest('tr').children("td")[0].innerText;
    	$('#roleList_role_co').val(role_co);
    	document.roleList.submit();
    })
		

});


<!DOCTYPE html>
<html>
<head>
	<title>test</title>
	<!-- CSS -->
	<link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
	<link href="{{ asset('css/role.css') }}" rel="stylesheet">
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />

	<!-- JavaScript -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="{{ asset('js/bootstrap.min.js') }}"></script>
	
  	<script src="http://code.jquery.com/jquery-1.12.4.js"></script>
  	<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="{{ asset('js/dialog.js') }}"></script>
</head>
<body>
	<form method="post" action="./dialog/foo">
		@csrf
	<div id="dialog1" title="ダイヤログ1">
	<p>
	  <input type="text" name=""><br>
	  <input type="radio" name="">
	</p>
	</div>
	<input type="submit" name="foo" value="foo">
	
	</form>

	<form method="post" action="./dialog/bar">
		@csrf
	<div id="dialog2" title="ダイヤログ2">
	<p>
	  <input type="text" name=""><br>
	  <input type="radio" name="">
	</p>
	</div>
	<input type="submit" name="bar" value="bar">
	</form>

	<button name="foo" id="button1">クリック1</button>
	<button name="bar" id="button2">クリック2</button>
	
	
</body>
<script type="text/javascript">
	
	
</script>
</html>
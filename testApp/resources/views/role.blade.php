<!DOCTYPE html>
<html>
<head>
	<title>test</title>
	<!-- CSS -->
	<link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
	<link href="{{ asset('css/role.css') }}" rel="stylesheet">

	<!-- JavaScript -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="{{ asset('./js/sweetalert.js') }}"></script>
	<script src="{{ asset('js/bootstrap.min.js') }}"></script>
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
  <script src="http://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="http://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="{{ asset('js/jquery.tab.js') }}"></script>
	<script src="{{ asset('js/role.js') }}"></script>
</head>
<body>
	<div class="container search">
		<div class="row">
			<div class="col-4">
				<form action="./role" method="get">
					ロール名：<input type="text" name="name" value=""><br>

					<input type="hidden" name="del_flg" value="0">
					削除：<input type="checkbox" name="del_flg" value="1">
					<input type="submit" value="検索">
					<div id="dialogdemo1">
					<input type="button" value="ダイヤログ">
					</div>
				</form>
			</div>
			<div class="col-8">
				<form name="roleList" action="./role" method="get">
				<table class="table">
					<tr><th>role_co</th><th>ロール名</th><th>削除</th><th>ch</th></tr>
					@foreach($items as $item)
					<tr class="roleList"><td>{{$item->role_co}}</td><td>{{$item->name}}</td><td>{{$item->del_flg}}</td><td>{{$item->ch}}</td></tr>
					@endforeach
				</table>
				
				<input id="roleList_role_co" type="text" name="roleList_role_co" value="">
				</form>
				{{$items->appends(request()->input())->links() }}
			</div>
			<div id="dialog-confirm" title="タイトル">
    <p>
      <span class="ui-icon ui-icon-alert" style="float: left; margin: 0 7px 20px 0;"></span>
      ここに内容を書く
    </p>
  </div>
			</div>
		</div>
	</div>
	<div class="contents">
		<form action="./role" method="post">
	    	{{ csrf_field() }}
	    	ロール名：<input type="text" name="name" value="{{$role->name}}">
			<div class="container-fluid oya_tab">
				<div class="row">
					<div class="col-9">
						
						<ul class="tab-group">
							@foreach($tabs_name as $tab_name)
							<li class="tab"><a href="#ref5_{{$tab_name}}">{{$tab_name}}</a></li>
							@endforeach
						</ul>
						<div class="panel-group">
							@foreach($tabs_name as $key=>$tab_name)
							


							<div id="ref5_{{$tab_name}}" class="panel">
								<div class="container-fluid">
									<div class="row">
										<div class="col-9">
											<ul class="mod-tab-nav tab-group">

												@foreach($ref_creates as $ref_create)
												<li class="tab"><a href="#{{$tab_name}}_{{$ref_create->ref_create_id}}">{{$ref_create->name}}</a></li>
												@endforeach
											</ul>

											<div class="mod-tab-contents panel-group2">
												@foreach($ref_creates as $ref_create)
												<div id="{{$tab_name}}_{{$ref_create->ref_create_id}}">
													
													<input type="hidden" name="refn_ch1_{{$tab_name}}_{{$ref_create->ref_create_id}}" value="0">
													refn_ch1：<input type="checkbox" name="refn_ch1_{{$tab_name}}_{{$ref_create->ref_create_id}}" value="1" 
													<?php if($ref_name_chs[$key]['refn_ch1'] == 1): ?> checked <?php endif; ?>><br>
													<input type="hidden" name="refn_ch2_{{$tab_name}}_{{$ref_create->ref_create_id}}" value="0">
													refn_ch2：<input type="checkbox" name="refn_ch2_{{$tab_name}}_{{$ref_create->ref_create_id}}" value="1"
													<?php if($ref_name_chs[$key]['refn_ch2'] == 1): ?> checked <?php endif; ?>>
													{{$key}}
													<!-- <?php var_dump($ref_name_chs[$key]["ref_crate_id"]) ?> -->
													
												</div>
												
												@endforeach
											</div>
										</div>

										<div class="col-3">
											<input type="hidden" name="ref_ch1_{{$tab_name}}" value="0">
											ref_ch1：<input type="checkbox" name="ref_ch1_{{$tab_name}}" value="1" <?php if($ref5s[$key]['ref_ch1'] == 1): ?> checked <?php endif; ?>><br>
											<input type="hidden" name="ref_ch2_{{$tab_name}}" value="0">
											ref_ch2：<input type="checkbox" name="ref_ch2_{{$tab_name}}" value="1" <?php if($ref5s[$key]['ref_ch2'] == 1): ?> checked <?php endif; ?>>
										</div>
									</div>
								</div>
							</div>
							@endforeach
						</div>
					
					</div>
					
					<div class="col-3">
						<input type="hidden" name="del_flg" value="0">
					削除：<input type="checkbox" name="del_flg" value="1" <?php if($role->del_flg == 1): ?> checked <?php endif; ?>>
						<input type="hidden" name="ch" value="0"><br>
					ch：<input type="checkbox" name="ch" value="1" <?php if($role->ch == 1): ?> checked <?php endif; ?>>
					
					</div>
				</div>
			</div>
			<input type="submit" value="登録">
		</form>
	</div>
	
<script type="text/javascript">
	
	
</script>
</html>
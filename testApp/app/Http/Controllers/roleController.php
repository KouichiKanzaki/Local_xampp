<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;
use App\Ref5;
use App\Ref_name_ch;
use App\Ref_create;
use Illuminate\Support\Facades\DB;

class roleController extends Controller
{

	public static $tabs_name = ['A', 'B', 'C', 'D', 'E'];

    public function index(Request $request){
    	
    	$name = $request->input('name');
    	$del_flg = $request->del_flg;
    	$ref_creates = Ref_create::all();
    	$role = new Role;
    	$ref5s = new Ref5;
    	$ref_name_chs = new Ref_name_ch;
    	

    	$items = Role::orderBy('role_co', 'desc')->paginate(4);
        if(!empty($name)){
            $items = Role::where('name', 'LIKE', '%'.$name.'%')->paginate(4);
        }
        if(!empty($del_flg)){
            $items = Role::where('del_flg', 'LIKE', '%'.$del_flg.'%')->paginate(4);
        }
        $roleList_role_co = intval($request->input('roleList_role_co'));

        // ロールリストクリック
        if($roleList_role_co != null){
        	
    		$role = Role::find($roleList_role_co);
        	$ref5s = Role::find($roleList_role_co)->ref5s()->get()->toArray();
        	$ref_name_chs = Role::find($roleList_role_co)->ref_name_chs()->get()->toArray();

        	
   
    	}
        
        

    	return view('role', ['items' => $items, 'tabs_name' => $this::$tabs_name, 'ref_creates'  => $ref_creates, 'role'  => $role,
    				'ref5s' => $ref5s, 'ref_name_chs' => $ref_name_chs,
    				]);
    }

    public function create(Request $request){
    	DB::beginTransaction();
	    try {

	    	$ref_creates = Ref_create::all();
	    	// ロール登録
	    	$role = new Role;
	        $form = $request->all();
	        unset($form['_token']);
	        $role->name = $request->name;
	        $role->del_flg = $request->del_flg;
	        $role->ch = $request->ch;
	        $role->save();

	        // ref5登録
	        $i = 0;
	        foreach($this::$tabs_name as $tab_name) {
	        	$ref5 = new Ref5;
	        	$ref5->role_co = $role->role_co;
	        	$i++;
	        	$ref5->ref_id = $i;

	        	$ref_ch1 = 'ref_ch1_'.$tab_name;
	        	$ref_ch2 = 'ref_ch2_'.$tab_name;

	        	$ref5->ref_ch1 = $request->$ref_ch1;
	        	$ref5->ref_ch2 = $request->$ref_ch2;
	        	
	        	$ref5->save();

	        	// ref_name_ch登録
	        	
	        	foreach($ref_creates as $ref_create) {
	        		$ref_name_ch = new Ref_name_ch;
	        		$ref_name_ch->role_co = $role->role_co;
	        		$ref_name_ch->ref_id = $ref5->ref_id;
	        		
	        		$ref_name_ch->ref_crate_id = $ref_create->ref_create_id;

	        		$refn_ch1 = 'refn_ch1_'.$tab_name.'_'.$ref_create->ref_create_id;
	        		$refn_ch2 = 'refn_ch2_'.$tab_name.'_'.$ref_create->ref_create_id;

	        		$ref_name_ch->refn_ch1 = $request->$refn_ch1;
	        		$ref_name_ch->refn_ch2 = $request->$refn_ch2;


	        		$ref_name_ch->save();
	        		
	        	}

	        }
	        




	        //exit(0);





			DB::commit();
	    	return redirect('/role');
    	} catch (\PDOException $e){
        	DB::rollBack();
        	return false;
    	}
    }
}

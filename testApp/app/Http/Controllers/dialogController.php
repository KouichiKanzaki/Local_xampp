<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;
use App\Ref5;
use App\Ref_name_ch;
use App\Ref_create;
use Illuminate\Support\Facades\DB;

class dialogController extends Controller
{

    public function index(Request $request){
    	return view('dialog', []);
    }
    public function create(Request $request){

	    if ($request->input('foo')){
	        $this->foo();
	        
	    }elseif ($request->input('bar')){
	    	$this->bar();
	        
	    }
	    return view('dialog', []);
	}

    public function foo(){
    	dd("A");
	}

	public function bar(){
	    dd("B");
	}


}

	

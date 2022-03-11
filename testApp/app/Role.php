<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Role extends Model
{
    protected $table = 'role';
    protected $primaryKey = 'role_co';
    protected $fillable = ['name', 'del_flg', 'ch'];
    public $timestamps = false;

    Public function ref5s(){
    	return $this->hasMany('App\Ref5', 'role_co', 'role_co');
	}
	Public function ref_name_chs(){
    	return $this->hasMany('App\Ref_name_ch', 'role_co', 'role_co');
	}
}
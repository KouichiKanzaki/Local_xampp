<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Ref5 extends Model
{

    protected $table = 'ref5';
    
    protected $fillable = ['role_co', 'ref_id', 'ref_ch1', 'ref_ch2'];
    public $timestamps = false;

    
	
}
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class One extends Model
{
	protected $table = 'one_info';
    protected $guarded = ['id'];
}

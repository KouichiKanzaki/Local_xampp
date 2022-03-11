<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class State extends Model
{
    protected $table = 'state_info';
    protected $guarded = ['id'];
}

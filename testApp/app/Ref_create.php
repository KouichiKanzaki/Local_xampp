<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Ref_create extends Model
{
    protected $table = 'ref_create';
    protected $fillable = ['name', 'biko'];
    public $timestamps = false;
}
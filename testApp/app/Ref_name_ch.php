<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Ref_name_ch extends Model
{
    protected $table = 'ref_name_ch';
    protected $fillable = ['ref_crate_id', 'refn_ch1', 'refn_ch2'];
    public $timestamps = false;
}
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class GSMS extends Model
{
    protected $table = 'game_soft_info';
    protected $guarded = ['id'];
    public static $rules = [
       'title' => 'required',
       'model' => 'required',
    ];
    public static $messages = [
        'title.required' => 'タイトル名がありません',
        'model.required' => '機種名がありません',
    ];
    public function errors()
    {
        return $this->errors;
    }
    public function state()
    {
    	return $this->hasOne('App\State', 'id', 'state_id');
    }
    public function genre()
    {
    	return $this->hasOne('App\Genre', 'id', 'genre_id');
    }
}

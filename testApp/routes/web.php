<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('role', 'roleController@index');
Route::post('role', 'roleController@create');

Route::get('dialog', 'dialogController@index');
Route::post('dialog/foo', 'dialogController@create');
Route::post('dialog/bar', 'dialogController@create');
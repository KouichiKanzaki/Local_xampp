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
// index
Route::get('GSMS', 'GSMSController@index');
Route::post('GSMS', 'GSMSController@page_kensu');

// create
Route::get('GSMS/add', 'GSMSController@add');
Route::post('GSMS/add', 'GSMSController@create');

// update
Route::get('GSMS/edit', 'GSMSController@edit');
Route::post('GSMS/edit', 'GSMSController@update');

// delete
Route::get('GSMS/del', 'GSMSController@delete');
Route::post('GSMS/del', 'GSMSController@remove');

// game info
Route::get('GSMS/gameinfo', 'GSMSController@gameinfo');

// login
Auth::routes();

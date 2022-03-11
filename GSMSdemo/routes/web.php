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
Route::get('GSMSdemo', 'GSMSdemoController@index');
Route::post('GSMSdemo', 'GSMSdemoController@page_kensu');

// create
Route::get('GSMSdemo/add', 'GSMSdemoController@add');
Route::post('GSMSdemo/add', 'GSMSdemoController@create');

// update
Route::get('GSMSdemo/edit', 'GSMSdemoController@edit');
Route::post('GSMSdemo/edit', 'GSMSdemoController@update');

// delete
Route::get('GSMSdemo/del', 'GSMSdemoController@delete');
Route::post('GSMSdemo/del', 'GSMSdemoController@remove');

// game info
Route::get('GSMSdemo/gameinfo', 'GSMSdemoController@gameinfo');
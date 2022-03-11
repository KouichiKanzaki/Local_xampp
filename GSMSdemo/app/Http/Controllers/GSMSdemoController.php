<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\GSMSdemo;
use App\State;
use App\Genre;
use App\One;
use Illuminate\Support\Facades\DB;

class GSMSdemoController extends Controller
{
    static $page_kensu1 = 10;
    static $page_kensu2 = 20;
    static $page_kensu3 = 50;

    // トップページ
    public function index(Request $request)
    {
        $search = false;
        $one = One::first();
        $page_kensu = $one->page_kensu;
        $sort = $request->sort;
        if(!$sort){
            $items = GSMSdemo::paginate($page_kensu);
        }else{
            if($sort=="memo"){
                $items = GSMSdemo::orderBy($sort, 'desc')->paginate($page_kensu);
            }else{
                $items = GSMSdemo::orderBy($sort, 'asc')->paginate($page_kensu);
            }
        }
        // 検索ロジック
        $keyword = $request->input('keyword');
        if(!empty($keyword))
        {
            $search = true;
            // (タイトル、機種、ジャンル、状況、メモ)検索
            $items = GSMSdemo::where('title', 'LIKE', '%'.$keyword.'%')
                            ->orWhere('model', 'LIKE', '%'.$keyword.'%')
                            ->orWhere('memo', 'LIKE', '%'.$keyword.'%')
                                ->orWhereHas('genre', function($query) use ($keyword) {
                    $query->where('genre', 'LIKE', '%'.$keyword.'%');
                })->orWhereHas('state', function($query) use ($keyword) {
                    $query->where('state', 'LIKE', '%'.$keyword.'%');
                })->get();
        }
        return view('GSMSdemo.index', 
            [
                'search' => $search,
                'items' => $items, 'sort' => $sort, 
                'page_kensu' => $page_kensu,
                'page_kensu1' => self::$page_kensu1,
                'page_kensu2' => self::$page_kensu2,
                'page_kensu3' => self::$page_kensu3,
            ]);
    }
    public function page_kensu(Request $request)
    {
        $one = One::find($request->id);
        $form = $request->all();
        unset($form['_token']);
        $one->fill($form)->save();
        return redirect('/GSMSdemo');
    }
    // タイトル追加
    public function add(Request $request)
    {
        $state_names = State::get();
        $genre_names = Genre::get();
        return view('GSMSdemo.add', ['state_names' => $state_names, 'genre_names' => $genre_names]);
    }
    public function create(Request $request)
    {
        $this->validate($request, GSMSdemo::$rules, GSMSdemo::$messages);
        $items = new GSMSdemo;
        $form = $request->all();
        unset($form['_token']);
        $items->fill($form)->save();
        return redirect('/GSMSdemo');
    }
    // 更新
    public function edit(Request $request)
    {
        $state_names = State::get();
        $genre_names = Genre::get();
        $items = GSMSdemo::find($request->id);
        return view('GSMSdemo.edit', ['form' => $items, 'state_names' => $state_names, 'genre_names' => $genre_names]);
    }
    public function update(Request $request)
    {
        $this->validate($request, GSMSdemo::$rules, GSMSdemo::$messages);
        $items = GSMSdemo::find($request->id);
        $form = $request->all();
        unset($form['_token']);
        $items->fill($form)->save();
        return redirect('/GSMSdemo');
    }
    // 削除
    public function delete(Request $request)
    {
        $items = GSMSdemo::find($request->id);
        $state_names = State::find($items->state_id);
        $genre_names = Genre::find($items->genre_id);
        return view('GSMSdemo.del', ['form' => $items, 'state_name' => $state_names, 'genre_name' => $genre_names]);
    }
    public function remove(Request $request)
    {
        GSMSdemo::find($request->id)->delete();
        return redirect('/GSMSdemo');
    }
    // ゲーム情報
    public function gameinfo(Request $request)
    {
        $items = GSMSdemo::all();
        $state_names = new State;
        $counts = DB::select('select model, count(model) as model_count from game_soft_info_demo GROUP BY model');
        $clear_count = DB::select('select count(model) as clear_count from game_soft_info_demo where state_id = 3');
        $clearall_count = DB::select('select count(model) as clear_count from game_soft_info_demo where state_id = 4');
        $all_count = DB::select('select count(id) as all_count from game_soft_info_demo');
        if($all_count[0]->all_count == 0){
            $clear_rate = 0;
        }else{
            $clear_rate = number_format(($clear_count[0]->clear_count / $all_count[0]->all_count) * 100, 2);
        }
        if($all_count[0]->all_count == 0){
            $clearall_rate = 0;
        }else{
            $clearall_rate = number_format(($clearall_count[0]->clear_count / $all_count[0]->all_count) * 100, 2);
        }
        return view('GSMSdemo.gameinfo',
        [
            'counts' => $counts, 
            'clear_count' => $clear_count[0]->clear_count, 
            'clearall_count' => $clearall_count[0]->clear_count,
            'all_count' => $all_count[0]->all_count,
            'clear_rate' => $clear_rate,
            'clearall_rate' => $clearall_rate,
        ]);
    }
}

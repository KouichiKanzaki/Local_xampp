<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>GSMS</title>
        <!--リセットCSS-->
        <link rel="stylesheet" type="text/css" href={{ asset('css/reset.css') }}>

        <!--commonCSS-->
        <link rel="stylesheet" type="text/css" href={{ asset('css/common.css') }}>

        <!--jquery使用-->
        <!-- <script src={{ asset('js/jquery-3.0.0.min.js') }}></script> -->
        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>
        <style type="text/css">
            ul {
                list-style: none;
                font-weight: bold;
                padding: 50px;
                padding-bottom: 20px;
                float: left;
            }
            form {
                float: left;
                padding: 20px 0 20px 30px;
            }
            ul li {
                margin-right: 20px; 
                display: inline-block;
            }
            ul li a {
                background: transparent;
                color: #fff;
            }
            table {
                margin: 0 50px 10px;
                width: 80%;
            }
            th {
                width: 10px;
                border: solid 1px #fff;
                padding: 5px 10px;
                color: #000;
            }
            td {
                width: 100px;
                border: solid 1px #fff;
                color: #000;
                padding: 5px 10px;
            }
            .operation_icon {
                font-size: 20px;
                width: 10px;
                text-align: center;
            }
            .operation_icon a {
                text-decoration: none;
            }
            table tr th a {
                color: #000;
                text-decoration: none;
            }
            input[type="submit"] {
                cursor: pointer;
            }
            #page_kensu {
                width: 60px;
                height: 30px;
            }
            .dropdown-item {
                padding-left: 40px;
            }
        </style>
    </head>
    <body>
        <h2>Game Soft Management System</h2>
        <ul>
            <li><a href="./GSMS/add">タイトル追加</a></li>
            <li><a href="./GSMS/gameinfo">ゲーム情報</a></li>
            <li>
                <a class="dropdown-item" href="{{ route('logout') }}"
                onclick="event.preventDefault();
                document.getElementById('logout-form').submit();">
                {{ __('Logout') }}
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
                </form> 
            </li>
            <li>
                <form action="./GSMS">
                    <input type="text" name="keyword" value="" placeholder="検索文字を入力">
                    <input type="submit" value="検索">
                </form>
            </li>
        </ul>
        <form action="./GSMS" method="post">
            {{ csrf_field() }}
            <input type="hidden" name="id" value="1">
            <select name="page_kensu" id="page_kensu">
                <option @if($page_kensu==$page_kensu1)selected @endif name="page_kensu" 
                value="{{$page_kensu1}}">{{$page_kensu1}}件</option>
                <option @if($page_kensu==$page_kensu2)selected @endif name="page_kensu" 
                value="{{$page_kensu2}}">{{$page_kensu2}}件</option>
                <option @if($page_kensu==$page_kensu3)selected @endif name="page_kensu" 
                value="{{$page_kensu3}}">{{$page_kensu3}}件</option>
            </select>
            <input type="submit" value="表示">
        </form>
        <table>
           <tr><th>変更</th><th>タイトル<a href="./GSMS?sort=title">🔼</a></th>
            <th>機種<a href="./GSMS?sort=model">🔼</a></th>
            <th>ジャンル<a href="./GSMS?sort=genre_id">🔼</a></th>
            <th>状況<a href="./GSMS?sort=state_id">🔼</a></th>
            <th>メモ<a href="./GSMS?sort=memo">🔽</a></th><th>削除</th></tr>
           @foreach($items as $item)
               <tr>
                    <td class="operation_icon"><a href="./GSMS/edit?id={{$item->id}}">🔄</a></td>
                    <td>{{$item->title}}</td>
                    <td>{{$item->model}}</td>
                    <td>{{$item->genre->genre}}</td>
                    <td>{{$item->state->state}}</td>
                    <td>{{$item->memo}}</td>
                    <td class="operation_icon"><a href="./GSMS/del?id={{$item->id}}">☒</a></td>
               </tr>
           @endforeach
        </table>
        @if(!$search)
        {{$items->appends(['sort' => $sort])->links()}}
        @endif
    </body>
</html>

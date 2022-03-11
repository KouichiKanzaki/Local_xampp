<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>GSMS</title>
        <!--リセットCSS-->
        <link rel="stylesheet" type="text/css" href={{ asset('css/reset.css') }}>
        <!--jquery使用-->
        <!-- <script src={{ asset('js/jquery-3.0.0.min.js') }}></script> -->
        <style type="text/css">
            html {
                background: linear-gradient(to bottom, royalblue, lightblue);
                height: auto;
                min-height: 100%;
            }
            h2 {
                font-size: 24px;
                padding: 50px;
                padding-bottom: 20px;
                color: #fff;
            }
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
        </style>
    </head>
    <body>
        <h2>Game Soft Management System</h2>
        <ul>
            <li><a href="./GSMSdemo/add">タイトル追加</a></li>
            <li><a href="./GSMSdemo/gameinfo">ゲーム情報</a></li>
            <li>
                <form action="./GSMSdemo">
                    <input type="text" name="keyword" value="" placeholder="検索文字を入力">
                    <input type="submit" value="検索">
                </form>
            </li>
        </ul>
        <form action="./GSMSdemo" method="post">
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
           <tr><th>変更</th><th>タイトル<a href="./GSMSdemo?sort=title">🔼</a></th>
            <th>機種<a href="./GSMSdemo?sort=model">🔼</a></th>
            <th>ジャンル<a href="./GSMSdemo?sort=genre_id">🔼</a></th>
            <th>状況<a href="./GSMSdemo?sort=state_id">🔼</a></th>
            <th>メモ<a href="./GSMSdemo?sort=memo">🔽</a></th><th>削除</th></tr>
           @foreach ($items as $item)
               <tr>
                    <td class="operation_icon"><a href="./GSMSdemo/edit?id={{$item->id}}">🔄</a></td>
                    <td>{{$item->title}}</td>
                    <td>{{$item->model}}</td>
                    <td>{{$item->genre->genre}}</td>
                    <td>{{$item->state->state}}</td>
                    <td>{{$item->memo}}</td>
                    <td class="operation_icon"><a href="./GSMSdemo/del?id={{$item->id}}">☒</a></td>
               </tr>
           @endforeach
        </table>
        @if(!$search)
        {{$items->appends(['sort' => $sort])->links()}}
        @endif
    </body>
</html>

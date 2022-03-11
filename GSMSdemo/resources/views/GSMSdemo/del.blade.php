<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>GSMS</title>
        <!--リセットCSS-->
        <link rel="stylesheet" type="text/css" href={{ asset('css/reset.css') }}>
        <style type="text/css">
            html {
                background: linear-gradient(to bottom, royalblue, lightblue);
                height: auto;
                min-height: 100%;
            }
            h2{
                font-size: 24px;
                padding: 50px;
                padding-bottom: 20px;
                color: #fff;
            }
            table {
                margin: 0 50px 10px;
                width: 50%;
            }
            th {
                width: 100px;
                border: solid 1px #fff;
                padding: 5px 10px;
                color: #000;
            }
            td {
                width: 150px;
                border: solid 1px #fff;
                color: #000;
                padding: 5px 10px;
            }
            input {
                cursor: pointer;
            }
            #back_button {
                padding: 5px 10px;
                margin: 30px auto 0;
                display: block;
            }
        </style>
    </head>
    <body>
        <h2>削除</h2>
        <table>
            <form action="./del" method="post">
                {{ csrf_field() }}
                <input type="hidden" name="id" value="{{$form->id}}">
                <tr><th>タイトル</th><td>{{$form->title}}</td></tr>
                <tr><th>機種</th><td>{{$form->model}}</td></tr>
                <tr><th>ジャンル</th><td>{{$genre_name->genre}}</td></tr>
                <tr><th>状況</th><td>{{$state_name->state}}</td></tr>
                <tr><th>メモ</th><td>{{$form->memo}}</td></tr>
                <tr><th></th><td><input type="submit" value="削除"></td></tr>
            </form>
        </table>
        <input id="back_button" type="button" value="戻る" onclick="TopPageBack()" />
    </body>
    <script>
    function TopPageBack(){
        window.location.href = "/GSMSdemo/public/GSMSdemo";
    }
    </script>
</html>

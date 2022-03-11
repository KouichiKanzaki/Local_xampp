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
            ul {
                margin: 0 50px 10px;
                width: 50%;
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
                width: 30%;
                border: solid 1px #fff;
                color: #000;
                padding: 5px 10px;
            }
            input[type="text"] {
                width: 300px;
            }
            textarea {
                vertical-align: middle;
                width: 300px;
                height: 100px;
            }
            input[type="submit"] {
                cursor: pointer;
            }
            #back_button {
                padding: 5px 10px;
                margin: 30px auto 0;
                display: block;
                cursor: pointer;
            }
            .error_message {
                padding: 5px 0 5px;
                color: crimson;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <h2>更新</h2>
        <table>
            <form action="./edit" method="post">
                {{ csrf_field() }}
                <input type="hidden" name="id" value="{{$form->id}}">
                <tr><th>タイトル</th><td>
                    @if($errors->has('title'))
                        <p class="error_message">{{$errors->first('title')}}</p>
                    @endif
                    <input type="text" name="title" value="{{$form->title}}"></td></tr>
                <tr><th>機種</th><td>
                    @if($errors->has('model'))
                        <p class="error_message">{{$errors->first('model')}}</p>
                    @endif
                    <input type="text" name="model" value="{{$form->model}}"></td></tr>
                <tr><th>ジャンル</th><td><select name="genre_id">
                    @foreach($genre_names as $genre_name)
                    <option @if($form->genre_id==$genre_name->id)selected @endif name="genre_id" value="{{$genre_name->id}}">{{$genre_name->genre}}</option>
                    @endforeach
                </select></td></tr>
                <tr><th>状況</th><td><select name="state_id">
                    @foreach($state_names as $state_name)
                    <option @if($form->state_id==$state_name->id)selected @endif name="state_id" value="{{$state_name->id}}">{{$state_name->state}}</option>
                    @endforeach
                </select></td></tr>
                <tr><th>メモ</th><td><textarea name="memo">{{$form->memo}}</textarea></tr>
                <tr><th></th><td><input type="submit" value="更新"></td></tr>
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


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

        <style type="text/css">
            table {
                margin: 0 50px 30px;
                margin-right: 0;
                width: 40%;
                float: left;
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
            #back_button {
                clear: left;
                padding: 5px 10px;
                margin: 30px auto 0;
                display: block;
                cursor: pointer;
            }
            table tr td {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h2>ゲーム情報</h2>
        <table>
           <tr><th>機種</th><th>ソフト合計</th></tr>
           @foreach ($counts as $count)
               <tr>
                    <td>{{$count->model}}</td>
                    <td>{{$count->model_count}}</td>
               </tr>
           @endforeach
        </table>
        <table>
            <tr><th>集計</th><th></th></tr>
                <tr>
                    <td>完了数</td>
                    <td>{{$clear_count}}</td>
                </tr>
                <tr>
                    <td>やり込み完了数</td>
                    <td>{{$clearall_count}}</td>
                </tr>
                <tr>
                    <td>ソフト総数</td>
                    <td>{{$all_count}}</td>
                </tr>
                <tr>
                    <td>完了率</td>
                    <td>{{$clear_rate}} %</td>
                </tr>
                <tr>
                    <td>やり込み率</td>
                    <td>{{$clearall_rate}} %</td>
                </tr>
        </table>
        <input id="back_button" type="button" value="戻る" onclick="TopPageBack()" />
    </body>
    <script>
    function TopPageBack(){
        window.location.href = "/GSMS/public/GSMS";
    }
    </script>
</html>

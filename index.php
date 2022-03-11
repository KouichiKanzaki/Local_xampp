<?php
//エラーを画面に表示(1を0にすると画面上にはエラーは出ない)
ini_set('display_errors',1);
require_once(__DIR__ . '/PHP/functions.php');
require_once(__DIR__ . '/PHP/class.php');
$cal = new Calendar();
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="target-densitydpi=device-dpi, width=device-width, initial-scale=1.0, minimum-scale=1">
    <meta name="author" content="神﨑幸逸">
    <meta name="keywords" content="kanzakikouichi,portfolio site,神﨑幸逸,ポートフォリオサイト">
    <meta name="description" content="神﨑幸逸 ポートフォリオサイト">
    <!--リセットCSS-->
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <!--スタイルCSS-->
    <link rel="stylesheet" type="text/css" href="css/portfolio.css">
    <!--jquery使用-->
    <script src="JavaScript/jquery-3.0.0.min.js"></script>
    <!--ファビコン指定-->
    <link rel="shortcut icon" href="src/portfolio/K_logo.png" type="image/x-icon">
    <title>神﨑幸逸 ポートフォリオサイト</title>
</head>
<body>
    <noscript>
        javascriptを有効にしてください。
    </noscript>
    <header>
        <div class="title">
            <p>Kanzaki Kouichi<br>Portfolio site</p>
        </div>
        <nav id="media3">
            <ul>
                <li class="media_pointer media3_works">Works</li>
                <li class="media_pointer media3_mysoft">MySoft</li>
                <li class="media_pointer media3_app">Calendar</li>
                <li class="media_pointer media3_contact">Contact</li>
                <li><div id="width_type"></div></li>
            </ul>
        </nav>
        <nav id="media1">
            <ul>
                <li class="media_pointer media1_works">Works</li>
                <li class="media_pointer media1_mysoft">MySoft</li>
                <li class="media_pointer media1_app">Calendar</li>
                <li class="media_pointer media1_contact">Contact</li>
                <li><div id="width_type2"></div></li>
            </ul>
        </nav>
    </header>
    <main>
    <!--#################　works　#################-->
    <div id="works" class="pagebox">
        <h2>Works</h2>
        <div class="works-left">
            <a href="home.html" target="_blank"><img src="src/portfolio/top_img.png" alt="TOPページ"></a>
        </div>
        <div class="works-right">
            <table>
                <tr>
                    <th>制作場所</th>
                    <td>WEBスクール </td>
                </tr>
                <tr>
                    <th>制作開始時期</th>
                    <td>２０１５年 </td>
                </tr>
                <tr>
                    <th>制作期間</th>
                    <td>6カ月 (企画/設計/実装) </td>
                </tr>
                <tr>
                    <th>ブラウザ</th>
                    <td>Google Chrome ,Fire fox</td>
                </tr>
                <tr>
                    <th>画面サイズ</th>
                    <td>1920×1080</td>
                </tr>
                <tr>
                    <th>レスポンシブ</th>
                    <td>全ページ対応</td>
                </tr>
                <tr>
                    <th>企画書</th>
                    <td><a href="src/portfolio/kikakusyo.pdf" target="_blank">企画書はこちら(PDF)</a></td>
                </tr>
                <tr>
                    <th>作品URL</th>
                    <td><a href="home.html" target="_blank">http://kanzaki-kouichi.work//home.html</a></td>
                </tr>
                <tr>
                    <th>ソースコードURL</th>
                    <td><a href="https://bitbucket.org/KouichiKanzaki/local_xampp/src/master/" target="_blank">https://bitbucket.org/KouichiKanzaki/local_xampp/src/master/</a></td>
                </tr>
            </table>
        </div>
    </div>
    <!--#################　MySoft　#################-->
    <div id="mysoft" class="pagebox">
        <h2>MySoft</h2>
        <ul>
            <li><a href="./GSMSdemo/public/GSMSdemo" target="_blank">Game Soft Mamagement System(demo)</a></li>
            <li><a href="./src/portfolio/テーブル定義書.xlsx">demo版テーブル定義書書</a></li>
            <li><a href="./GSMS/public/GSMS" target="_blank">Game Soft Mamagement System(mine)</a></li>
        </ul>
    </div>
    <!--#################　calendar　#################-->
    <div id="app" class="pagebox">
        <h2>Calendar</h2>
        <div id="calendar">
            <table>
                <thead>
                    <tr>
                        <th colspan="7"><?php echo h($cal->title_yearMonth); ?></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>日</td>
                        <td>月</td>
                        <td>火</td>
                        <td>水</td>
                        <td>木</td>
                        <td>金</td>
                        <td>土</td>
                    </tr>
                    <tr>
                        <?php $cal->show(); ?>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!--#################　contact　#################-->
    <div id="contact" class="pagebox">
        <h2>Contact</h2>
        <p>お問い合わせ・ご用件のある方は、下記までご連絡お願い致します。</p>
        <p>
            <img src="src/portfolio/mail_icon.jpg" alt="E-mail">
            <a href="mailto:likfsm4@gmail.com">likfsm4@gmail.com</a>
        </p>
    </div>
    </main>
    <footer>
        <p>All Rights Reserved<br>
            Copyright c Kanzaki</p>
    </footer>
</body>
<!--トラッキングコード-->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-82194452-1', 'auto');
ga('send', 'pageview');
</script>
<script src="JavaScript/portfolio.js"></script> <!--自作JavaScriptファイル--> 
</html>
<?php
// Example for a simple client

// Load the settings from the central config file
include_once('config.php');
// Load the CAS lib
include_once('CAS.php');

// Uncomment to enable debugging
phpCAS::setDebug();

// Initialize phpCAS
phpCAS::client(CAS_VERSION_2_0, $cas_host, $cas_port, $cas_context);

// For production use set the CA certificate that is the issuer of the cert
// on the CAS server and uncomment the line below
//phpCAS::setCasServerCACert($cas_server_ca_cert_path);

// For quick testing you can disable SSL validation of the CAS server.
// THIS SETTING IS NOT RECOMMENDED FOR PRODUCTION.
// VALIDATING THE CAS SERVER IS CRUCIAL TO THE SECURITY OF THE CAS PROTOCOL!
phpCAS::setNoCasServerValidation();

// logout if desired
if (isset($_REQUEST['logout'])) {
	phpCAS::logout();
	//phpCAS::logout(array('service'=>'https://www.map4.jp/sandbox/'));
}

// force CAS authentication
phpCAS::forceAuthentication();

// at this step, the user has been authenticated by the CAS server
// and the user's login name can be read with phpCAS::getUser().


// for this test, simply print that the authentication was successfull
?>
<html lang="ja">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>NU Maps</title>
    <!-- BootstrapのCSS読み込み -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Londrina+Shadow" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&display=swap" rel="stylesheet">
    <script src="js/jquery-1.5.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- BootstrapのJS読み込み -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <!-- default（Safariと同じ） / black（黒） / black-translucent（ステータスバーをコンテンツに含める） -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <!-- ホーム画面に表示されるアプリ名 -->
    <meta name="apple-mobile-web-app-title" content="NU-Maps">
    <!-- ホーム画面に表示されるアプリアイコン -->

    <link rel="apple-touch-icon" href="images/img.png">
    <script type="text/javascript" src="hum_icon.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="manifest" href="manifest.json">
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }

      /* Optional: Makes the sample page fill the window. */
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }

      #floating-panel {
        width: 100%;
        background: #4ad5ff;




      }
  #floating-panel:before {

}


      }

    </style>
    <script>
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    function successCallback(position) {
      $('#lat').val(String(position.coords.latitude));
      $('#log').val(String(position.coords.longitude));
    }

    function errorCallback(error) {
      alert("名古屋大学駅を始点にします")
      $('#error').val("error");

    }
</script>
<script>
//setTimeout("location.href='https://auth.nagoya-u.ac.jp/cas/login'");
</script>
  </head>


    <header style="background-color: #4BACBB;">

      <nav style="　background-color: #fff;">
        <div style="text-align:center;">
          <div id="hamburger">
            <div class="icon-animation type-1">
              <span class="top"></span>
              <span class="middle"></span>
              <span class="bottom"></span>
            </div>
          </div>
          <div class="nav_sp">
            <div style="color:#fff;"class="nav_sp_top"><a href="#"></a></div>
            <ul class="clearfix">
              <li><a id="label1" href="index.html">お知らせ</a></li>
              <li><a id="label2" href="#">NU-Mapsの使い方</a></li>
              <li><a id="label3" href="#" onClick="JavaScript:testSelect();">言語/Language</a></li>
              <li><a id="label4" href="login.php">ログイン</a></li>
            </ul>
            </div>
          <div id="wrapper"></div>

          <a href="index.html" class="title">NU Maps</a>
        </div>
      </nav>

  </header>
    <body>
      <div id="labelCode_2"  value="100"></div>

      <div style="background-image : url(images/4.jpg); height:100%;" id="floating-panel">
        <div
         style="font-size: 22px;height:100px; background-color:#fcfcfc ;  margin-top: 44px;">

        </div>
        <div style="text-align: center;">
          <div id="label5" style="font-size: 22px; margin-top: -92px;margin-bottom: 7px;color:#4BACBB;">出発地</div>
        </div>
        <div style="margin-right:10px;margin-left:10px;">
        <select style="margin-right:15px;border-top-left-radius: 6px;border-bottom-left-radius: 6px;border-top-right-radius: 6px;border-bottom-right-radius: 6px;"class="custom-select" id="start" name="building">
          <option value="名古屋大学駅">現在地</option>
          <option value="現在地">Present location</option>
        </select>
       </div>
            <div
             style="font-size: 22px;height:150px; background-color:#fcfcfc ;  margin-top: 50px;  ">

            </div>
            <div style="text-align: center;">
              <div id="label6" style="font-size: 22px; margin-top: -140px;margin-bottom: 7px;color:#4BACBB; ">目的地</div>
            </div>
            <div style="margin-right:10px;margin-left:10px;">
            <select style="border-top-left-radius: 6px;border-bottom-left-radius: 6px;border-top-right-radius: 6px;border-bottom-right-radius: 6px;"id="building" class="custom-select">
              <option value="">建物名を選択してください</option>
              <option value="全学教育棟本館">全学教育棟本館</option>
              <option value="全学教育棟A館">全学教育棟A館</option>
              <option value="名古屋大学 文系総合館">文系総合館</option>
              <option value="名古屋大学附属図書館">名古屋大学附属図書館</option>
              <option value="名古屋大学本部学務部 教養教育院全学教育教務掛">教養教育院全学教育教務課</option>
              <option value="名古屋大学 生協北部食堂">生協北部食堂</option>
              <option value="名古屋大学 生協南部書籍店">生協南部書籍店</option>
              <option value="豊田講堂">豊田講堂</option>
              <option value="名古屋大学 博物館">名古屋大学 博物館</option>
              <option value="ナショナルイノベーションコンプレックス">NIC</option>
              <option value="ファミリーマート 名古屋大学店">Lファミリーマート 名古屋大学店</option>
              <option value="-">Please select a building name</option>
            </select>
            </div>
            <div style="margin-top:12px;margin-right:10px;margin-left:10px;">
            <select style="border-top-left-radius: 6px;border-bottom-left-radius: 6px;border-top-right-radius: 6px;border-bottom-right-radius: 6px;"class="custom-select" id="room" name="room">
              <option value="">部屋名を選択してください</option>
              <option value="-">Please select a room name</option>
            </select>
            </div>
            <div style="text-align:center;">
              <button id="btn" style="background-color:#4BACBB; width:250px;margin-top:60px;border-top-left-radius: 5px;border-bottom-left-radius: 5px;border-top-right-radius: 5px;border-bottom-right-radius: 5px;" type="button" class="btn btn-outline-light"onclick="clickBtn1()">
                <div id="label10" style="font-size: 22px;color:#fff;">検索</div>
              </button>
            </div>
</div>
  </div>
      <!--<div id="right-panel"<button id="btn" style="background-color:#ffffff; width:160px;" type="button" class="btn btn-secondary btn-lg" onclick="clickBtn1()">
        <div style="color:#00bfff;">検索</div>
      </button>></div>-->




      <div id="map"></div>
      <div id="lat" value=""></div>
      <div id="log" value=""></div>
      <div id="error" value=""></div>

      <script>
      //初期表示は非表示
      document.getElementById("floating-panel").style.display ="block";

      function clickBtn1(){
        var end = document.getElementById('building').value;
      	const p1 = document.getElementById("floating-panel");
        if(end == ""){
          alert('目的地が選択されていません。')
        }else if(end == "-"){
          alert('No destination selected')
        }else{
      	if(p1.style.display=="block"){
      		// noneで非表示
      		p1.style.display ="none";
      	}else{
      		// blockで表示
      		p1.style.display ="block";
      	}
      }
    }
      </script>

      <script>
      function testSelect() {

      	if (document.getElementById("labelCode_2").value == '999') {
      		document.getElementById("labelCode_2").value = '000';
      		document.getElementById("label1").innerText = 'お知らせ';
          document.getElementById("label2").innerText = 'NU-Mapsの使い方';
          document.getElementById("label3").innerText = '言語/Language';
          document.getElementById("label4").innerText = 'ログイン';
          document.getElementById("label5").innerText = '現在地';
          document.getElementById("label6").innerText = '目的地';
          document.getElementById("building").value = '';
          document.getElementById("room").value = '';
          document.getElementById("start").value = '名古屋大学駅';
          document.getElementById("label10").innerText = '検索';

      	} else {
      		document.getElementById("labelCode_2").value = '999';
      		document.getElementById("label1").innerText = 'News';
          document.getElementById("label2").innerText = 'How to use NU-Maps';
          document.getElementById("label3").innerText = '言語/Language';
          document.getElementById("label4").innerText = 'Login';
          document.getElementById("label5").innerText = 'Present location';
          document.getElementById("label6").innerText = 'Destination';
          document.getElementById("building").value = '-';
          document.getElementById("room").value = '-';
          document.getElementById("start").value = '名古屋大学駅/';
          document.getElementById("label10").innerText = 'Search';

      	}


      	return true;
      }
      </script>



      <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCf-1L_AYDveGBZ_a5cU3BjQx8r68Qjpo&callback=initMap">
      </script>
      <script>
        <!-- service workerの登録関係
        -->
        if
        ('serviceWorker'
        in
        navigator)
        {
        navigator.serviceWorker.register('service_worker.js').then(function (registration)
        {
        console.log('ServiceWorker
        registration
        successful
        with
        scope:
        ',
        registration.scope);
        }).catch(function (err)
        {
        console.log('ServiceWorker
        registration
        failed:
        ',
        err);
        });
        }
      </script>

    </body>

</html>

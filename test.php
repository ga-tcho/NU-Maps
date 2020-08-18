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
	//phpCAS::logout(array('service'=>'http://mysite/'));
}

// force CAS authentication
phpCAS::forceAuthentication();

// at this step, the user has been authenticated by the CAS server
// and the user's login name can be read with phpCAS::getUser().


// for this test, simply print that the authentication was successfull
?>
<html>
  <head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>phpCAS simple client</title>
  </head>
  <body>
    <h1>Successfull Authentication!</h1>
    <?php include 'script_info.php' ?>
    <p>the user's login is <b><?php echo phpCAS::getUser(); ?></b>.</p>
    <p>phpCAS version is <b><?php echo phpCAS::getVersion(); ?></b>.</p>
    <p><a href="?logout=">Logout</a></p>



    <?php

    //属性の取得
    $attributes = phpCAS::getAttributes();
    print ("cas:attributes_開始<br>");
    foreach ($attributes as $key => $value) {
    	print ("----".$key."＝".$value."<br>");
    }
    print ("cas:attributes_終了<br><br>");


    //所属の取得
    $syozokuList = phpCAS::getSyozokuList();
    print ("cas:syozoku_group_開始<br>");
    foreach ($syozokuList as $tmp){

    	print ("----cas:syozoku_開始<br>");
    	foreach ($tmp as $key => $value) {
    		print ("--------".$key."＝".$value."<br>");
    	}
    	print ("----cas:syozoku_終了<br>");
    }
    print ("cas:syozoku_group_終了<br><br>");



    //ロールの取得
    $roleIdList = phpCAS::getRoleIdList();
    print ("cas:roles_開始<br>");
    foreach ($roleIdList as $tmp){

    	print ("----cas:role_開始<br>");
    	foreach ($tmp as $key => $value) {
			if($key == "id") {
				// ロールIDから、在籍か確認する
				$roleEnrollment = phpCAS::getEnrollmentByRole($value);
				print("------------- 在籍状態：".$roleEnrollment."<br>");
			}
			if($key == "syozoku_id_group"){
				if(is_array($tmp[$key])){
					foreach($value as $key2 => $value2){
						print("-------------".$key2."＝".$value2."<br>");
					}
				} else {
	    				print ("--------".$key."＝".$value."<br>");
				}
			} else {
	    			print ("--------".$key."＝".$value."<br>");
			}
    	}
    	print ("----cas:role_終了<br>");
    }
    print ("cas:roles_終了<br><br>");



    //ロールホルダーIDの取得
	$roleHoldIdList = phpCAS::getRoleHoldIdList();
    print ("cas:roleHolders_開始<br>");
    foreach ($roleHoldIdList as $tmp){

    	print ("----cas:role_開始<br>");
    	foreach ($tmp as $key => $value) {

			if($key == "id") {
				// ロールホルダーIDから、在籍か確認する
				$roleHolderEnrollment = phpCAS::getEnrollmentByRoleHolder($value);
				print("-------- 在籍状態：".$roleHolderEnrollment."<br>");
			}

    		print ("--------".$key."＝".$value."<br>");
    	}
    	print ("----cas:role_終了<br>");
    }
    print ("cas:roleHolders_終了<br><br>");

	// ログインユーザが認証成功しているか
	$authenticationSuccess = phpCAS::isAuthenticationSuccess();
	if ($authenticationSuccess == true) {
	    print ("ログインユーザ認証成功<br><br>");
	} else {
	    print ("ログインユーザ認証失敗<br><br>");
	}

	// ログインユーザの在籍状態
	$enrollment = phpCAS::getEnrollment();
	print ("ログインユーザの在籍状態：".$enrollment."<br><br>");

	// 委譲元ユーザの取得
    print ("[委譲元ユーザ]<pre>");
    $ijyoUser = phpCAS::getIjyoUserList();
    var_dump($ijyoUser);
    print ("\n<pre>");



    ?>
  </body>
</html>

window.onload = function () {
  // 部屋の選択肢
  room = document.getElementById("room");
  // ジャンルの選択肢が変更された際の動作
  building = document.getElementById("building");
  building.onchange = changeCategory;
};

var marker;

// ジャンルの選択肢が変更された際の動作

function changeCategory() {
  // 変更後のカテゴリを取得
  var changedCategory = building.value;
  if (changedCategory == "全学教育棟本館") {

    setZengakukyoikuto();
  } else if (changedCategory == "全学教育棟A館") {

    Zengakukyoikuto();
  } else if (changedCategory == "名古屋大学 文系総合館") {

    gakukyoikuto();
  }else if (changedCategory == "名古屋大学附属図書館") {

    kyoikuto();
  }else if (changedCategory == "名古屋大学本部学務部 教養教育院全学教育教務掛") {

    setSample2();
  }else {

    setEuropeFoods();
  }
}

// 全学教育等の選択肢を設定する

function setZengakukyoikuto() {
  //選択肢を空にする
  room.textContent = null;
  //選択肢
  var rooms = [
    { cd: "", label: "選択して下さい" },
    { cd: "C10", label: "C10" },
    { cd: "C11", label: "C11" },
    { cd: "C12", label: "C12" },
    { cd: "C13", label: "C13" },
    { cd: "C14", label: "C14" },
    { cd: "C15", label: "C15" },
    { cd: "C20", label: "C20" },
    { cd: "C21", label: "C21" },
    { cd: "C22", label: "C22" },
    { cd: "C23", label: "C23" },
    { cd: "C24", label: "C24" },
    { cd: "C25", label: "C25" },
    { cd: "C30", label: "C30" },
    { cd: "C31", label: "C31" },
    { cd: "C32", label: "C32" },
    { cd: "C33", label: "C33" },
    { cd: "C34", label: "C34" },
    { cd: "C35", label: "C35" },
    { cd: "C36", label: "C36" },
    { cd: "C40", label: "C40" },
    { cd: "C41", label: "C41" },
    { cd: "C42", label: "C42" },
    { cd: "C43", label: "C43" },
  ];

  rooms.forEach(function (value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    room.appendChild(op);
  });
}

//選択肢を設定する
function Zengakukyoikuto() {
  //選択肢を空にする
  room.textContent = null;
  //選択肢
  var rooms = [
    { cd: "", label: "選択して下さい" },
    { cd: "A11", label: "A11" },
    { cd: "A12", label: "A12" },
    { cd: "A13", label: "A13" },
    { cd: "A14", label: "A14" },
    { cd: "A15", label: "A15" },
    { cd: "A21", label: "A21" },
    { cd: "A26", label: "A26" },
    { cd: "A27", label: "A27" },
    { cd: "A28", label: "A28" },
    { cd: "A31", label: "A31" },
    { cd: "A32", label: "A32" },
    { cd: "A33", label: "A33" },
    { cd: "A34", label: "A34" },
  ];

  rooms.forEach(function (value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    room.appendChild(op);
  });
}

function gakukyoikuto() {
  //選択肢を空にする
  room.textContent = null;
  //選択肢
  var rooms = [
    { cd: "", label: "選択して下さい" },
    { cd: "0", label: "B10" },
    { cd: "1", label: "B11" },
    { cd: "2", label: "B12" },
    { cd: "2", label: "B13" },
    { cd: "2", label: "sample" },
  ];

  rooms.forEach(function (value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    room.appendChild(op);
  });
}

function kyoikuto() {
  //選択肢を空にする
  room.textContent = null;
  //選択肢
  var rooms = [
    { cd: "", label: "選択して下さい" },
    { cd: "2", label: "sample" },
  ];

  rooms.forEach(function (value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    room.appendChild(op);
  });
}



//search.html ルーティング

var map;


  function initMap() {
    var directionsRenderer = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var btn = document.getElementById('btn');
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: {
        lat: 35.154639,
        lng: 136.966778
      },
      //ここからコントロールの設
    zoomControl:　false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false
    });
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById('right-panel'));


    var control = document.getElementById('floating-panel');
    control.style.display = 'block';
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

    var onChangeHandler = function () {
      var error = document.getElementById('error').value;
      if(error == "error"){
      calculateAndDisplayRoute1(directionsService, directionsRenderer);
    }else{
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    }

    // 現在地の表示のための初期化
    initCurrentPosition();
    // 現在地を1000m秒ごとに更新
    setInterval(updateCurrentPosition, 300);

      if(marker){
        marker.setMap(null);
      }
      var end = document.getElementById('building').value;
      var room = document.getElementById('room').value;
      if(end == "全学教育棟本館"){
      marker = new google.maps.Marker({
        position: {
          lat: 35.154293,
          lng: 136.962515
        },
        map: map
      });
    //  if (document.getElementById("labelCode_2").value == '999')
    if(room == "C10") {
        var box = '<div class="box">' +
              '<a href="mapC10.html">建物内表示</a>' +
          '</div>'
        } else if (room == "C11"){
        var box = '<div class="box">' +
              '<a href="mapC11.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C12"){
        var box = '<div class="box">' +
              '<a href="mapC12.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C13"){
        var box = '<div class="box">' +
              '<a href="mapC13.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C14"){
        var box = '<div class="box">' +
              '<a href="mapC14.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C15"){
        var box = '<div class="box">' +
              '<a href="mapC15.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C20"){
        var box = '<div class="box">' +
              '<a href="mapC20.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C21"){
        var box = '<div class="box">' +
              '<a href="mapC21.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C22"){
        var box = '<div class="box">' +
              '<a href="mapC22.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C23"){
        var box = '<div class="box">' +
              '<a href="mapC23.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C24"){
        var box = '<div class="box">' +
              '<a href="mapC24.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C25"){
        var box = '<div class="box">' +
              '<a href="mapC25.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C30"){
        var box = '<div class="box">' +
              '<a href="mapC30.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C31"){
        var box = '<div class="box">' +
              '<a href="mapC31.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C32"){
        var box = '<div class="box">' +
              '<a href="mapC32.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C33"){
        var box = '<div class="box">' +
              '<a href="mapC33.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C34"){
        var box = '<div class="box">' +
              '<a href="mapC34.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C35"){
        var box = '<div class="box">' +
              '<a href="mapC35.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C36"){
        var box = '<div class="box">' +
              '<a href="mapC36.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C40"){
        var box = '<div class="box">' +
              '<a href="map40.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C41"){
        var box = '<div class="box">' +
              '<a href="map41.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C42"){
        var box = '<div class="box">' +
              '<a href="map42.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C43"){
        var box = '<div class="box">' +
              '<a href="map43.html">建物内表示</a>' +
          '</div>'
        }
        var infowindow = new google.maps.InfoWindow({
          content: box
        });
        infowindow.open(map, marker);
      }else if(end == "全学教育棟A館"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.155299,
            lng: 136.962008
          },
          map: map
        });

        if (document.getElementById("labelCode_2").value == '999') {
          var box = '<div class="box">' +
                '<a href="map.html">Display in building</a>' +
            '</div>'
          } else {
          var box = '<div class="box">' +
                '<a href="map.html">建物内表示</a>' +
            '</div>'
          }
          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "名古屋大学 文系総合館"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.153710,
            lng: 136.963742
          },
          map: map
        });

        if (document.getElementById("labelCode_2").value == '999') {
          var box = '<div class="box">' +
                '<a href="map.html">Display in building</a>' +
            '</div>'
          } else {
          var box = '<div class="box">' +
                '<a href="map.html">建物内表示</a>' +
            '</div>'
          }
          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "名古屋大学 文系総合館"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.154639,
            lng: 136.966778
          },
          map: map
        });

        if (document.getElementById("labelCode_2").value == '999') {
          var box = '<div class="box">' +
                '<a href="map.html">Display in building</a>' +
            '</div>'
          } else {
          var box = '<div class="box">' +
                '<a href="map.html">建物内表示</a>' +
            '</div>'
          }
          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }

    };
    //document.getElementById('start').addEventListener('change', onChangeHandler);
    //document.getElementById('end').addEventListener('change', onChangeHandler);
    btn.addEventListener('click', onChangeHandler);
    }

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    //var start = document.getElementById('start').value;
    var end = document.getElementById('building').value;
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;
        directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: end,
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }
  function calculateAndDisplayRoute1(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;
    var end = document.getElementById('building').value;

        directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }



  // 現在位置の表示
  var currentPosition;
  function initCurrentPosition() {
    console.log("Init current position")
    // 半径10mの円で現在位置を表示
    currentPosition = new google.maps.Circle({
      map: map,
      radius: 2,	// 半径（m）
    	fillColor:"#00BFFF" , 		// 塗りつぶし色
    	fillOpacity: 0.5,		// 塗りつぶし透過度（0: 透明 ⇔ 1:不透明）
    	strokeColor: "#00BFFF",		// 外周色
    	strokeOpacity: 1.0,	// 外周透過度（0: 透明 ⇔ 1:不透明）
    	strokeWeight: 10		// 外周太さ
    });
  }

  function updateCurrentPosition() {
    // console.log("Update current position");
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          currentPosition.setCenter(pos);
        }, function() {
          // 位置情報が取得できなかった場合の処理
          // 名古屋大学駅の位置をセット
          var pos = {
            lat: 35.1547342,
            lng: 136.9665566
          };

          currentPosition.setCenter(pos);
          // handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
  }


//建物名に応じて部屋名の変更ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
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
  } else {
    kyoikuto();
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


function kyoikuto() {
  //選択肢を空にする
  room.textContent = null;
  //選択肢
  var rooms = [
    { cd: "", label: "ー" },
  ];

  rooms.forEach(function (value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    room.appendChild(op);
  });
}



//search.html ルーティングーーーーーーーーーーーーーーーーーーーーーーーーーーーー

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
      var end = document.getElementById('building').value;

      if(end == "愛知県名古屋市千種区宮東町 全学教育棟A館"){
        calculateAndDisplayRoute2(directionsService, directionsRenderer);
      }else if(end == "全学教育棟本館"){
        calculateAndDisplayRoute3(directionsService, directionsRenderer);
      }else if(end == "名古屋大学 文系総合館"){
        calculateAndDisplayRoute4(directionsService, directionsRenderer);
      }else if(end == "名古屋大学附属図書館"){
        calculateAndDisplayRoute5(directionsService, directionsRenderer);
      }else if(end == "スターバックスコーヒー 名古屋大学附属図書館店"){
        calculateAndDisplayRoute6(directionsService, directionsRenderer);
      }else if(end == "名古屋大学 生協北部食堂"){
        calculateAndDisplayRoute7(directionsService, directionsRenderer);
      }else if(end == "名古屋大学 生協南部書籍店"){
        calculateAndDisplayRoute8(directionsService, directionsRenderer);
      }else if(end == "豊田講堂"){
        calculateAndDisplayRoute9(directionsService, directionsRenderer);
      }else if(end == "名古屋大学 博物館"){
        calculateAndDisplayRoute10(directionsService, directionsRenderer);
      }else if(end == "ナショナルイノベーションコンプレックス"){
        calculateAndDisplayRoute11(directionsService, directionsRenderer);
      }else if(end == "ファミリーマート 名古屋大学店"){
        calculateAndDisplayRoute12(directionsService, directionsRenderer);
      }else if(end == "名古屋大学内郵便局"){
        calculateAndDisplayRoute13(directionsService, directionsRenderer);
      }else if(end == "学生会館"){
        calculateAndDisplayRoute14(directionsService, directionsRenderer);
      }else if(end == "ＩＢ電子情報館"){
        calculateAndDisplayRoute15(directionsService, directionsRenderer);
      }else if(end == "工学部1号館"){
        calculateAndDisplayRoute16(directionsService, directionsRenderer);
      }

        if(error == "error" && end == "愛知県名古屋市千種区宮東町 全学教育棟A館"){
          calculateAndDisplayRoute2e(directionsService, directionsRenderer);
        }else if(error == "error" && end == "全学教育棟本館"){
          calculateAndDisplayRoute3e(directionsService, directionsRenderer);
        }else if(error == "error" && end == "名古屋大学 文系総合館"){
          calculateAndDisplayRoute4e(directionsService, directionsRenderer);
        }else if(error == "error" && end == "名古屋大学附属図書館"){
          calculateAndDisplayRoute5e(directionsService, directionsRenderer);
        }else if(error == "error" && end == "スターバックスコーヒー 名古屋大学附属図書館店"){
          calculateAndDisplayRoute6e(directionsService, directionsRenderer);
        }else if(error == "error" && end == "名古屋大学 生協北部食堂"){
          calculateAndDisplayRoute7e(directionsService, directionsRenderer);
        }else if(error == "error" && end == "名古屋大学 生協南部書籍店"){
          calculateAndDisplayRoute8e(directionsService, directionsRenderer);
        }else if(error == "error" && end == "豊田講堂"){
          calculateAndDisplayRoute9e(directionsService, directionsRenderer);
        }else if(error == "error" && end == "名古屋大学 博物館"){
          calculateAndDisplayRoute10e(directionsService, directionsRenderer);
        }else if(error == "error" && end == "ナショナルイノベーションコンプレックス"){
          calculateAndDisplayRoute11e(directionsService, directionsRenderer);
        }else if(error == "error" && end == "ファミリーマート 名古屋大学店"){
          calculateAndDisplayRoute12e(directionsService, directionsRenderer);
        }else if(error == "error" && end == "名古屋大学内郵便局"){
          calculateAndDisplayRoute13e(directionsService, directionsRenderer);
        }else if(error == "error" && end == "学生会館"){
          calculateAndDisplayRoute14e(directionsService, directionsRenderer);
        }else if(error == "error" && end == "ＩＢ電子情報館"){
          calculateAndDisplayRoute15e(directionsService, directionsRenderer);
        }else if(error == "error" && end == "工学部1号館"){
          calculateAndDisplayRoute16(directionsService, directionsRenderer);
        }




    // 現在地の表示のための初期化
    initCurrentPosition();
    // 現在地を1000m秒ごとに更新
    setInterval(updateCurrentPosition, 1000);

      if(marker){
        marker.setMap(null);
      }
      var end = document.getElementById('building').value;
      var room = document.getElementById('room').value;

      if(end == "全学教育棟本館"){
      marker = new google.maps.Marker({
        position: {
          lat: 35.154364,
          lng: 136.962709
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
              '<a href="mapC40.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C41"){
        var box = '<div class="box">' +
              '<a href="mapC41.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C42"){
        var box = '<div class="box">' +
              '<a href="mapC42.html">建物内表示</a>' +
          '</div>'
        }else if (room == "C43"){
        var box = '<div class="box">' +
              '<a href="mapC43.html">建物内表示</a>' +
          '</div>'
        }else{
        var box = '<div class="box">' +
                '<a href="map.html">建物外観</a>' +
            '</div>'

        }
        var infowindow = new google.maps.InfoWindow({
          content: box
        });
        infowindow.open(map, marker);
      }else if(end == "愛知県名古屋市千種区宮東町 全学教育棟A館"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.154984,
            lng: 136.962147
          },
          map: map
        });
          var box = '<div class="box">' +
                '<a href="a.html">建物外観</a>' +
            '</div>'
          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "名古屋大学 文系総合館"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.153985,
            lng: 136.964197
          },
          map: map
        });
          var box = '<div class="box">' +
                '<a href="sougoukann.html">建物外観</a>' +
            '</div>'

          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "名古屋大学附属図書館"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.154903,
            lng: 136.964121
          },
          map: map
        });
          var box = '<div class="box">' +
                '<a href="toshokann.html">建物外観</a>' +
            '</div>'

          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "スターバックスコーヒー 名古屋大学附属図書館店"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.154903,
            lng: 136.964121
          },
          map: map
        });
          var box = '<div class="box">' +
                '<a href="sutaba.html">建物外観</a>' +
            '</div>'

          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "名古屋大学 生協北部食堂"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.156664,
            lng: 136.965586
          },
          map: map
        });
          var box = '<div class="box">' +
                '<a href="hokubu.html">建物外観</a>' +
            '</div>'

          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "名古屋大学 生協南部書籍店"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.153227,
            lng: 136.962995
          },
          map: map
        });
          var box = '<div class="box">' +
                '<a href="nannbu.html">建物外観</a>' +
            '</div>'

          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "豊田講堂"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.153437,
            lng: 136.967830
          },
          map: map
        });
          var box = '<div class="box">' +
                '<a href="toyota.html">建物外観</a>' +
            '</div>'

          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "名古屋大学 博物館"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.153183,
            lng: 136.966964
          },
          map: map
        });
          var box = '<div class="box">' +
                '<a href="hakubutukann.html">建物外観</a>' +
            '</div>'

          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "ナショナルイノベーションコンプレックス"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.155496,
            lng: 136.966932
          },
          map: map
        });
          var box = '<div class="box">' +
                '<a href="nic.html">建物外観</a>' +
            '</div>'

          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "ファミリーマート 名古屋大学店"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.154084,
            lng: 136.963135
          },
          map: map
        });
          var box = '<div class="box">' +
                '<a href="famima.html">建物外観</a>' +
            '</div>'

          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "名古屋大学内郵便局"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.154921,
            lng: 136.966842
          },
          map: map
        });
          var box = '<div class="box">' +
                '<a href="yuubinn.html">建物外観</a>' +
            '</div>'

          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "学生会館"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.157174,
            lng: 136.965849
          },
          map: map
        });
          var box = '<div class="box">' +
                '<a href="kaikann.html">建物外観</a>' +
            '</div>'

          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "ＩＢ電子情報館"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.154934,
            lng: 136.965784
          },
          map: map
        });
          var box = '<div class="box">' +
                '<a href="ib.html">建物外観</a>' +
            '</div>'

          var infowindow = new google.maps.InfoWindow({
            content: box
          });
          infowindow.open(map, marker);

      }else if(end == "工学部1号館"){
        marker = new google.maps.Marker({
          position: {
            lat: 35.156470,
            lng: 136.964536
          },
          map: map
        });
          var box = '<div class="box">' +
                '<a href="kou_1.html">建物外観</a>' +
            '</div>'

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

  function calculateAndDisplayRoute2(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.154984, 136.962147),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }

  function calculateAndDisplayRoute3(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.154466, 136.962991),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }

  function calculateAndDisplayRoute4(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.153985,136.964197),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute5(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.154903, 136.964121),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute6(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.154903, 136.964121),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute7(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.156664, 136.965586),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute8(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.154984, 136.962147),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute9(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.154984, 136.962147),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute10(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.153179, 136.966967),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute11(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.155496, 136.966932),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute12(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.154084, 136.963135),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute13(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.154921, 136.966842),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute14(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.157052, 136.965753),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }

  function calculateAndDisplayRoute15(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.154841, 136.965729),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute16(directionsService, directionsRenderer) {
    var lat = document.getElementById('lat').value;
    var log = document.getElementById('log').value;

    directionsService.route({
      origin: new google.maps.LatLng(lat,log), //start,
      destination: new google.maps.LatLng(35.156314, 136.964458),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }

  //名古屋大学ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  function calculateAndDisplayRoute2e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;

    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.154984, 136.962147),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }

  function calculateAndDisplayRoute3e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;

    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.154466, 136.962991),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute4e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;

    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.153985,136.964197),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute5e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;
    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.154903, 136.964121),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute6e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;

    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.154903, 136.964121),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute7e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;

    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.156664, 136.965586),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute8e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;

    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.154984, 136.962147),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute9e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;

    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.154984, 136.962147),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute10e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;

    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.153179, 136.966967),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute11e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;

    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.155496, 136.966932),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute12e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;
    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.154084, 136.963135),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute13e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;

    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.154921, 136.966842),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute14e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;

    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.157052, 136.965753),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute15e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;

    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.154841, 136.965729),
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {

      }
    });

  }function calculateAndDisplayRoute16e(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;

    directionsService.route({
      origin: start,
      destination: new google.maps.LatLng(35.156314, 136.964458),
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

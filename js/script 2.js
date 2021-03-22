
//建物名に応じた部屋名の変更処理（search.html）ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

window.onload = function () {
  room = document.getElementById("room");
  building = document.getElementById("building");
  building.onchange = changeCategory;
};

function changeCategory() {   //建物名の選択肢が変更された際の動作
  var changedCategory = building.value; //変更後の建物名を取得
  if (changedCategory == "全学教育棟本館") {
    setZengakukyoikuto();
  }else if (changedCategory == "愛知県名古屋市千種区宮東町 全学教育棟A館") {
    setZengakuA();
  } else {
    otherbuilding();
  }
}

function setZengakukyoikuto() { // 全学教育等の選択肢
  room.textContent = null; //選択肢を空にする
  var rooms = [ //選択肢
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

  ];
  rooms.forEach(function (value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    room.appendChild(op);
  });
}

function setZengakuA() { // 全学教育等の選択肢
  room.textContent = null; //選択肢を空にする
  var rooms = [ //選択肢
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

function otherbuilding() { //選択肢を空にする
  room.textContent = null;
  var rooms = [ //選択肢
    { cd: "", label: "ー" },
  ];
  rooms.forEach(function (value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    room.appendChild(op);
  });
}


//建物までのルーティング（search.html）ーーーーーーーーーーーーーーーーーーーーーーーーーーーー

var map;
function initMap() { //Googleマップの設定
  var directionsRenderer = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
  var btn = document.getElementById('btn');
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {
      lat: 35.154639,
      lng: 136.966778
    },
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

//現在地から建物までのルーティング
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
//名大駅から建物までのルーティング
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
//建物内表示のためのマーカー
var marker;
if(marker){
  marker.setMap(null);
}
var end = document.getElementById('building').value;
var room = document.getElementById('room').value;
//建物内表示
if(end == "全学教育棟本館"){
marker = new google.maps.Marker({
  position: {
    lat: 35.154364,
    lng: 136.962709
  },
  map: map
});
if(room == "C10") {
  var box = '<div class="box">' +
        '<a href="asset/mapC10.html">建物内表示</a>' +
    '</div>'
  } else if (room == "C11"){
  var box = '<div class="box">' +
        '<a href="asset/mapC11.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C12"){
  var box = '<div class="box">' +
        '<a href="asset/mapC12.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C13"){
  var box = '<div class="box">' +
        '<a href="asset/mapC13.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C14"){
  var box = '<div class="box">' +
        '<a href="asset/mapC14.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C15"){
  var box = '<div class="box">' +
        '<a href="asset/mapC15.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C20"){
  var box = '<div class="box">' +
        '<a href="asset/mapC20.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C21"){
  var box = '<div class="box">' +
        '<a href="asset/mapC21.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C22"){
  var box = '<div class="box">' +
        '<a href="asset/mapC22.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C23"){
  var box = '<div class="box">' +
        '<a href="asset/mapC23.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C24"){
  var box = '<div class="box">' +
        '<a href="asset/mapC24.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C25"){
  var box = '<div class="box">' +
        '<a href="asset/mapC25.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C30"){
  var box = '<div class="box">' +
        '<a href="asset/mapC30.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C31"){
  var box = '<div class="box">' +
        '<a href="asset/mapC31.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C32"){
  var box = '<div class="box">' +
        '<a href="asset/mapC32.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C33"){
  var box = '<div class="box">' +
        '<a href="asset/mapC33.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C34"){
  var box = '<div class="box">' +
        '<a href="asset/mapC34.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C35"){
  var box = '<div class="box">' +
        '<a href="asset/mapC35.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C36"){
  var box = '<div class="box">' +
        '<a href="asset/mapC36.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C40"){
  var box = '<div class="box">' +
        '<a href="asset/mapC40.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C41"){
  var box = '<div class="box">' +
        '<a href="asset/mapC41.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C42"){
  var box = '<div class="box">' +
        '<a href="asset/mapC42.html">建物内表示</a>' +
    '</div>'
  }else if (room == "C43"){
  var box = '<div class="box">' +
        '<a href="asset/mapC43.html">建物内表示</a>' +
    '</div>'
  }else{
  var box = '<div class="box">' +
          '<a href="asset/map.html">建物外観</a>' +
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
    if(room == "A11") {
      var box = '<div class="box">' +
            '<a href="asset/mapA11.html">建物内表示</a>' +
        '</div>'
      }else if(room == "A12"){
        var box = '<div class="box">' +
              '<a href="asset/mapA12.html">建物内表示</a>' +
          '</div>'
      }else if(room == "A13"){
        var box = '<div class="box">' +
              '<a href="asset/mapA13.html">建物内表示</a>' +
          '</div>'
      }else if(room == "A14"){
        var box = '<div class="box">' +
              '<a href="asset/mapA14.html">建物内表示</a>' +
          '</div>'
      }else if(room == "A15"){
        var box = '<div class="box">' +
              '<a href="asset/mapA15.html">建物内表示</a>' +
          '</div>'
      }else if(room == "A21"){
        var box = '<div class="box">' +
              '<a href="asset/mapA21.html">建物内表示</a>' +
          '</div>'
      }else if(room == "A26"){
        var box = '<div class="box">' +
              '<a href="asset/mapA26.html">建物内表示</a>' +
          '</div>'
      }else if(room == "A27"){
        var box = '<div class="box">' +
              '<a href="asset/mapA27.html">建物内表示</a>' +
          '</div>'
      }else if(room == "A28"){
        var box = '<div class="box">' +
              '<a href="asset/mapA28.html">建物内表示</a>' +
          '</div>'
      }else if(room == "A31"){
        var box = '<div class="box">' +
              '<a href="asset/mapA31.html">建物内表示</a>' +
          '</div>'
      }else if(room == "A32"){
        var box = '<div class="box">' +
              '<a href="asset/mapA32.html">建物内表示</a>' +
          '</div>'
      }else if(room == "A33"){
        var box = '<div class="box">' +
              '<a href="asset/mapA33.html">建物内表示</a>' +
          '</div>'
      }else if(room == "A34"){
        var box = '<div class="box">' +
              '<a href="asset/mapA34.html">建物内表示</a>' +
          '</div>'
      }else{
        var box = '<div class="box">' +
            '<a href="asset/a.html">建物外観</a>' +
        '</div>'
      }
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
            '<a href="asset/sougoukann.html">建物外観</a>' +
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
            '<a href="asset/toshokann.html">建物外観</a>' +
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
            '<a href="asset/sutaba.html">建物外観</a>' +
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
            '<a href="asset/hokubu.html">建物外観</a>' +
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
            '<a href="asset/nannbu.html">建物外観</a>' +
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
            '<a href="asset/toyota.html">建物外観</a>' +
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
            '<a href="asset/hakubutukann.html">建物外観</a>' +
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
            '<a href="asset/nic.html">建物外観</a>' +
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
            '<a href="asset/famima.html">建物外観</a>' +
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
            '<a href="asset/yuubinn.html">建物外観</a>' +
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
            '<a href="asset/kaikann.html">建物外観</a>' +
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
            '<a href="asset/ib.html">建物外観</a>' +
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
            '<a href="asset/kou_1.html">建物外観</a>' +
        '</div>'
      var infowindow = new google.maps.InfoWindow({
        content: box
      });
      infowindow.open(map, marker);
  }
};
btn.addEventListener('click', onChangeHandler);
}

//GoogleMapAPIによるルーティング
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
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
    }
  });

}function calculateAndDisplayRoute9(directionsService, directionsRenderer) {
  var lat = document.getElementById('lat').value;
  var log = document.getElementById('log').value;

  directionsService.route({
    origin: new google.maps.LatLng(lat,log), //start,
    destination: new google.maps.LatLng(35.153423, 136.967801),
    travelMode: 'WALKING'
  }, function (response, status) {
    if (status === 'OK') {
      directionsRenderer.setDirections(response);
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
      destination: new google.maps.LatLng(35.153423, 136.967801),
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

  //----現在位置の表示(search.html)--------------------------------------------------

  var currentPosition;
  function initCurrentPosition() {// 半径10mの円で現在位置を表示
    console.log("Init current position")
    currentPosition = new google.maps.Circle({
      map: map,
      radius: 2,
    	fillColor:"#00BFFF" ,
    	fillOpacity: 0.5,
    	strokeColor: "#00BFFF",
    	strokeOpacity: 1.0,
    	strokeWeight: 10
    });
  }

  function updateCurrentPosition() {//位置情報更新
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          currentPosition.setCenter(pos);
        }, function() {// 位置情報が取得できなかった場合の処理、名古屋大学駅の位置をセット
          var pos = {
            lat: 35.1547342,
            lng: 136.9665566
          };
          currentPosition.setCenter(pos);
        });
      } else {
        handleLocationError(false, infoWindow, map.getCenter());
      }
  }

 //-------ハンバーガーメニュー(search.html)--------------------------
  var navigationOpenFlag = false;
  var navButtonFlag = true;
  var focusFlag = false;

  $(function(){
    $(document).on('click','.el_humburger',function(){
      if(navButtonFlag){
        spNavInOut.switch();
        //一時的にボタンを押せなくする
        setTimeout(function(){
          navButtonFlag = true;
        },200);
        navButtonFlag = false;
      }
    });
    $(document).on('click touchend', function(event) {
      if (!$(event.target).closest('.bl_header,.el_humburger').length && $('body').hasClass('js_humburgerOpen') && focusFlag) {
        focusFlag = false;
        //scrollBlocker(false);
        spNavInOut.switch();
      }
    });
  });

  //ナビ開く処理
  function spNavIn(){
    $('body').removeClass('js_humburgerClose');
    $('body').addClass('js_humburgerOpen');
    setTimeout(function(){
      focusFlag = true;
    },200);
    setTimeout(function(){
      navigationOpenFlag = true;
    },200);
  }

  //ナビ閉じる処理
  function spNavOut(){
    $('body').removeClass('js_humburgerOpen');
    $('body').addClass('js_humburgerClose');
    setTimeout(function(){
      $(".uq_spNavi").removeClass("js_appear");
      focusFlag = false;
    },200);
    navigationOpenFlag = false;
  }

  //ナビ開閉コントロール
  var spNavInOut = {
    switch:function(){
      if($('body.spNavFreez').length){
        return false;
      }
      if($('body').hasClass('js_humburgerOpen')){
       spNavOut();
      } else {
       spNavIn();
      }
    }
  };

  function header(){
  $.ajax({
      url: "header.html",
      cache: false,
      success: function(html){
          document.write(html);
      }
  });
}



//---------floating-panelの表示処理（search.html）----------------------------
document.getElementById('floating-panel').style.display = 'block';

function clickBtn1() {
  var end = document.getElementById('building').value;
  const p1 = document.getElementById('floating-panel');
  if (end == '') {
    alert('目的地が選択されていません。');
  } else if (end == '-') {
    alert('No destination selected');
  } else {
    if (p1.style.display == 'block') {
      // noneで非表示
      p1.style.display = 'none';
    } else {
      // blockで表示
      p1.style.display = 'block';
    }
  }
}

function clickBtn2() {
  const p1 = document.getElementById('floating-panel');
  if (p1.style.display == 'block') {
    location.href = 'index.html';
  } else {
    location.href = 'search.html';
  }
}

var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('tabl')) {
    var createTable = registerSVG('tabl', 'images/cassandra/internals/partitions/create-table.png', 400, 190, 100, 100);
    var insertOne = registerSVG('tabl', 'images/cassandra/internals/partitions/insert-one.png', 645, 70, 0, 130);
    var insertMany = registerSVG('tabl', 'images/cassandra/internals/partitions/insert-many.png', 650, 280, 0, 60);
    var tableEmpty = registerSVG('tabl', 'images/cassandra/internals/partitions/table-empty.png', 400, 45, 650, 0);
    var tableOne = registerSVG('tabl', 'images/cassandra/internals/partitions/table-one-row.png', 400, 88, 650, 0);
    var tableFull = registerSVG('tabl', 'images/cassandra/internals/partitions/table-full.png', 400, 415, 650, 0);
    createTable.image.opacity(0);
    insertOne.image.opacity(0);
    insertMany.image.opacity(0);
    tableEmpty.image.opacity(0);
    tableOne.image.opacity(0);
    tableFull.image.opacity(0);
    addAnimation('tabl', function() {
      createTable.image.animate(animationSpeed).opacity(1).after(function(){
        tableEmpty.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('tabl', function() {
      createTable.image.animate(animationSpeed).opacity(0).after(function(){
        insertOne.image.animate(animationSpeed).opacity(1).after(function() {
          tableOne.image.animate(animationSpeed).opacity(1);
        });
      });
    });
    addAnimation('tabl', function() {
      insertOne.image.animate(animationSpeed).opacity(0).after(function() {
          insertMany.image.animate(animationSpeed).opacity(1).after(function() {
            tableFull.image.animate(animationSpeed).opacity(1);
          });
      });
    });
    addAnimation('tabl', function() {
      tableEmpty.image.opacity(0);
      tableOne.image.opacity(0);
      insertMany.image.animate(animationSpeed).opacity(0).after(function(){
        tableFull.image.animate(animationSpeed).move(425, 0);
      });
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('parts')) {
    var cluster = registerSVG('parts', 'images/cassandra/internals/partitions/cluster.svg', 497, 493, 600, -20);
    var backgroundTexas = registerSVG('parts', 'images/cassandra/internals/partitions/background-texas.svg', 420, 189, 395, 0);
    var backgroundNewYork = registerSVG('parts', 'images/cassandra/internals/partitions/background-new-york.svg', 425, 145, 395, 195);
    var backgroundCalifornia = registerSVG('parts', 'images/cassandra/internals/partitions/background-california.svg', 435, 155, 390, 320);
    var rowHead = registerSVG('parts', 'images/cassandra/internals/partitions/row-0-header.png', 390, 41, 410, 0);
    var row1Tx1 = registerSVG('parts', 'images/cassandra/internals/partitions/row-1-tx-1.png', 390, 41, 410, 41);
    var row2Ca1 = registerSVG('parts', 'images/cassandra/internals/partitions/row-2-ca-1.png', 390, 41, 410, 82);
    var row3Ny1 = registerSVG('parts', 'images/cassandra/internals/partitions/row-3-ny-1.png', 390, 41, 410, 123);
    var row4Tx2 = registerSVG('parts', 'images/cassandra/internals/partitions/row-4-tx-2.png', 390, 41, 410, 164);
    var row5Tx3 = registerSVG('parts', 'images/cassandra/internals/partitions/row-5-tx-3.png', 390, 41, 410, 205);
    var row6Ny2 = registerSVG('parts', 'images/cassandra/internals/partitions/row-6-ny-2.png', 390, 41, 410, 246);
    var row7Ca2 = registerSVG('parts', 'images/cassandra/internals/partitions/row-7-ca-2.png', 390, 41, 410, 287);
    var row8Tx4 = registerSVG('parts', 'images/cassandra/internals/partitions/row-8-tx-4.png', 390, 41, 410, 328);
    var row9Ny3 = registerSVG('parts', 'images/cassandra/internals/partitions/row-9-ny-3.png', 390, 41, 410, 369);
    var keyTx = registerSVG('parts', 'images/cassandra/internals/partitions/key-tx.svg', 70, 70, 300, 60);
    var keyNy = registerSVG('parts', 'images/cassandra/internals/partitions/key-ny.svg', 70, 70, 300, 235);
    var keyCa = registerSVG('parts', 'images/cassandra/internals/partitions/key-ca.svg', 70, 70, 300, 365);
    var arrow1 = registerSVG('parts', 'images/cassandra/internals/partitions/arrow2.svg', 150, 25, 385, 80);
    var arrow2 = registerSVG('parts', 'images/cassandra/internals/partitions/arrow2.svg', 150, 25, 385, 255);
    var arrow3 = registerSVG('parts', 'images/cassandra/internals/partitions/arrow2.svg', 150, 25, 385, 385);

    var pkState = registerSVG('parts', 'images/cassandra/internals/partitions/primary-key-state.svg', 260, 29, 70, 155);
    var pkStateId = registerSVG('parts', 'images/cassandra/internals/partitions/primary-key-state-id.svg', 294, 29, 80, 155);

    pkState.image.opacity(0);
    pkStateId.image.opacity(0);

    var token1 = registerSVG('parts', 'images/cassandra/internals/partitions/token-24.svg', 70, 70, 110, 160);
    var token2 = registerSVG('parts', 'images/cassandra/internals/partitions/token-58.svg', 70, 70, 110, 160);
    var token3 = registerSVG('parts', 'images/cassandra/internals/partitions/token-83.svg', 70, 70, 110, 160);
    var partitioner = registerSVG('parts', 'images/cassandra/internals/partitions/partitioner.svg', 190, 100, 80, 150);
    var tokens = [token1, token2, token3];
    partitioner.image.opacity(0);
    tokens.forEach(function(t){ t.image.opacity(0); });

    var backgrounds = [backgroundTexas, backgroundNewYork, backgroundCalifornia];
    var rows = [row1Tx1, row2Ca1, row3Ny1,
               row4Tx2, row5Tx3, row6Ny2,
               row7Ca2, row8Tx4, row9Ny3];
    var allItems = rows.concat(backgrounds);
    var keys = [keyTx, keyNy, keyCa, arrow1, arrow2, arrow3];
    backgrounds.forEach(function(b){ b.image.opacity(0); });
    keys.forEach(function(k) { k.image.opacity(0); });
    cluster.image.opacity(0);

    addAnimation('parts', function() {
      var speed = animationSpeed * 3;
      rowHead.image.animate(speed).opacity(0);

      row1Tx1.image.animate(speed).move(410, 15);
      row4Tx2.image.animate(speed).move(410, 55);
      row5Tx3.image.animate(speed).move(410, 95);
      row8Tx4.image.animate(speed).move(410, 135);

      row3Ny1.image.animate(speed).move(410, 206);
      row6Ny2.image.animate(speed).move(410, 246);
      row9Ny3.image.animate(speed).move(410, 286);

      row2Ca1.image.animate(speed).move(410, 357);
      row7Ca2.image.animate(speed).move(410, 397).after(function() {
        backgrounds.forEach(function(b){
          b.image.animate(animationSpeed).opacity(1);
        });
      });
    });

    addAnimation('parts', function() {
      allItems.forEach(function(i){
        i.image.animate(animationSpeed).translate(150, 0);
      });
      keys.forEach(function(k) {
        k.image.animate(animationSpeed, '<>', animationSpeed).opacity(1);
      });
    });

    addAnimation('parts', function() {
      partitioner.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('parts', function() {
      tokens.forEach(function(t){ t.image.opacity(1); });

      // Don't hate!
      keyTx.image.animate(300, '-').move(0, 60).after(function(){
        keyTx.image.animate(150, '-').move(0, 165).after(function() {
          keyTx.image.animate(150, '-').move(110, 160).after(function(){
            token1.image.animate(150, '-').move(300, 160).after(function(){
              token1.image.animate(150, '-').move(300, 60).after(function() {

                keyNy.image.animate(300, '-').move(0, 235).after(function(){
                  keyNy.image.animate(150, '-').move(0, 165).after(function() {
                    keyNy.image.animate(150, '-').move(110, 160).after(function(){
                      token2.image.animate(150, '-').move(300, 160).after(function(){
                        token2.image.animate(150, '-').move(300, 235).after(function() {

                          keyCa.image.animate(300, '-').move(0, 365).after(function(){
                            keyCa.image.animate(150, '-').move(0, 165).after(function() {
                              keyCa.image.animate(150, '-').move(110, 160).after(function(){
                                token3.image.animate(150, '-').move(300, 160).after(function(){
                                  token3.image.animate(150, '-').move(300, 365).after(function() {});
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });

    addAnimation('parts', function() {
      keyTx.image.opacity(0);
      keyCa.image.opacity(0);
      keyNy.image.opacity(0);
      partitioner.image.animate(animationSpeed).opacity(0).after(function() {
        pkState.image.animate(animationSpeed).opacity(1);
      });
    });

    addAnimation('parts', function() {
      pkState.image.animate(animationSpeed).opacity(0).after(function(){
        pkStateId.image.animate(animationSpeed).opacity(1);
      });
    });


    addAnimation('parts', function() {
      token1.image.animate(animationSpeed).opacity(0);
      token2.image.animate(animationSpeed).opacity(0);
      token3.image.animate(animationSpeed).opacity(0);
      partitioner.image.animate(animationSpeed).opacity(0);
      arrow1.image.animate(animationSpeed).opacity(0);
      arrow2.image.animate(animationSpeed).opacity(0);
      arrow3.image.animate(animationSpeed).opacity(0);
      pkStateId.image.animate(animationSpeed).opacity(0).after(function() {
        rows.forEach(function(row) { row.image.animate(animationSpeed).move(-125, row.image.y()); });
        backgrounds.forEach(function(b) { b.image.animate(animationSpeed).move(-140, b.image.y()) ; });
        cluster.image.animate(animationSpeed).opacity(1);
      });
    });

    addAnimation('parts', function() {
      rows.forEach(function(r) { r.image.animate(animationSpeed / 2).opacity(0); });
      backgroundTexas.image.animate().move(620, 75).during(function(theta){
        var decrease = (189 - 25) * (1 - theta);
        backgroundTexas.image.height(25 + decrease);
      });
      backgroundNewYork.image.animate().move(482, 155).during(function(theta){
        var decrease = (425 - 50) * (1 - theta);
        backgroundNewYork.image.width(50 + decrease);
      });
      backgroundCalifornia.image.animate().move(665, 336).during(function(theta){
        var decrease = (435 - 65) * (1 - theta);
        backgroundCalifornia.image.width(65 + decrease);
      });
    });
  }
});

var animationSpeed = 600;

Animation.animate(function () {
  if(registerCanvas('prt')) {
    // I know this is copy paste hell. In a hurry.
    var partition = registerSVG('prt', 'images/cassandra/internals/clustering-columns/partition.svg', 654, 411, 300, 0);
    var row1 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-1-houston.png', 423, 40, 500, 30);
    var row2 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-2-dallas.png', 423, 40, 500, 69);
    var row3 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-3-snyder.png', 423, 40, 500, 108);
    var row4 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-4-austin.png', 423, 40, 500, 147);
    var row5 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-5-dallas.png', 423, 40, 500, 186);
    var row6 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-6-el-paso.png', 423, 40, 500, 225);
    var row7 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-7-austin.png', 423, 40, 500, 264);
    var row8 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-8-san-antonio.png', 423, 40, 500, 303);
    var row9 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-9-houston.png', 423, 40, 500, 342);

    var row1City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-1-houston-city.png', 423, 40, 500, 225);
    var row2City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-2-dallas-city.png', 423, 40, 500, 108);
    var row3City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-3-snyder-city.png', 423, 40, 500, 342);
    var row4City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-4-austin-city.png', 423, 40, 500, 30);
    var row5City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-5-dallas-city.png', 423, 40, 500, 147);
    var row6City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-6-el-paso-city.png', 423, 40, 500, 186);
    var row7City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-7-austin-city.png', 423, 40, 500, 69);
    var row8City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-8-san-antonio-city.png', 423, 40, 500, 303);
    var row9City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-9-houston-city.png', 423, 40, 500, 264);

    var row1Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-1-houston-name.png', 423, 40, 500, 186);
    var row2Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-2-dallas-name.png', 423, 40, 500, 69);
    var row3Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-3-snyder-name.png', 423, 40, 500, 264);
    var row4Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-4-austin-name.png', 423, 40, 500, 225);
    var row5Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-5-dallas-name.png', 423, 40, 500, 30);
    var row6Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-6-el-paso-name.png', 423, 40, 500, 303);
    var row7Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-7-austin-name.png', 423, 40, 500, 147);
    var row8Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-8-san-antonio-name.png', 423, 40, 500, 342);
    var row9Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-9-houston-name.png', 423, 40, 500, 108);

    var row1StateName = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-1-houston-city-name.png', 423, 40, 500, 264);
    var row2StateName = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-2-dallas-city-name.png', 423, 40, 500, 147);
    var row4StateName = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-4-austin-city-name.png', 423, 40, 500, 69);
    var row5StateName = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-5-dallas-city-name.png', 423, 40, 500, 108);
    var row7StateName = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-7-austin-city-name.png', 423, 40, 500, 30);
    var row9StateName = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-9-houston-city-name.png', 423, 40, 500, 225);

    var row1Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-1-houston-id.png', 423, 40, 500, 264);
    var row2Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-2-dallas-id.png', 423, 40, 500, 147);
    var row3Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-3-snyder-id.png', 423, 40, 500, 342);
    var row4Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-4-austin-id.png', 423, 40, 500, 69);
    var row5Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-5-dallas-id.png', 423, 40, 500, 108);
    var row6Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-6-el-paso-id.png', 423, 40, 500, 186);
    var row7Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-7-austin-id.png', 423, 40, 500, 30);
    var row8Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-8-san-antonio-id.png', 423, 40, 500, 303);
    var row9Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-9-houston-id.png', 423, 40, 500, 225);

    var rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
    var rowCities = [row1City, row2City, row3City, row4City, row5City, row6City, row7City, row8City, row9City];
    var rowNames = [row1Name, row2Name, row3Name, row4Name, row5Name, row6Name, row7Name, row8Name, row9Name];
    var rowStateNames = [ row1StateName, row2StateName, row4StateName, row5StateName, row7StateName, row9StateName];
    var rowIds = [row1Id, row2Id, row3Id, row4Id, row5Id, row6Id, row7Id, row8Id, row9Id];
    rowCities.forEach(function(city){ city.image.opacity(0); });
    rowNames.forEach(function(name) { name.image.opacity(0); });
    rowStateNames.forEach(function(name) { name.image.opacity(0); });
    rowIds.forEach(function(row) { row.image.opacity(0); });

    var pk1 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/primary-key-city.svg', 314, 29, 20, 80);
    var pk2 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/primary-key-name.svg', 337, 29, 20, 80);
    var pk3 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/primary-key-city-name.svg', 390, 29, 20, 80);
    var pk4 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/primary-key-city-name-id.svg', 425, 29, 20, 80);

    pk1.image.opacity(0);
    pk2.image.opacity(0);
    pk3.image.opacity(0);
    pk4.image.opacity(0);

    addAnimation('prt', function() {
      pk1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('prt', function() {
      // Order by city
      row1.image.animate(animationSpeed).move(500, 225);
      row2.image.animate(animationSpeed).move(500, 108);
      row3.image.animate(animationSpeed).move(500, 342);
      row4.image.animate(animationSpeed).move(500, 30);
      row5.image.animate(animationSpeed).move(500, 147);
      row6.image.animate(animationSpeed).move(500, 186);
      row7.image.animate(animationSpeed).move(500, 69);
      row9.image.animate(animationSpeed).move(500, 264).after(function() {
        rowCities.forEach(function(city) { city.image.animate(animationSpeed).opacity(1); });
      });
    });
    addAnimation('prt', function() {
      pk1.image.animate(animationSpeed).opacity(0).after(function() {
        pk2.image.animate(animationSpeed).opacity(1).after(function() {
          rows.forEach(function(city) { city.image.opacity(0); });
        });
      });
    });
    addAnimation('prt', function() {
      row1City.image.animate(animationSpeed).move(500, 186);
      row2City.image.animate(animationSpeed).move(500, 69);
      row3City.image.animate(animationSpeed).move(500, 264);
      row4City.image.animate(animationSpeed).move(500, 225);
      row5City.image.animate(animationSpeed).move(500, 30);
      row6City.image.animate(animationSpeed).move(500, 303);
      row7City.image.animate(animationSpeed).move(500, 147);
      row8City.image.animate(animationSpeed).move(500, 342)
      row9City.image.animate(animationSpeed).move(500, 108).after(function() {
        rowNames.forEach(function(name) { name.image.animate(animationSpeed).opacity(1); });
      });
    });
    addAnimation('prt', function() {
      pk2.image.animate(animationSpeed).opacity(0).after(function() {
        pk3.image.animate(animationSpeed).opacity(1);
      });
    });

    addAnimation('prt', function() {
      rowCities.forEach(function(row) { row.image.opacity(0); });

      row1City.image.move(500, 225);
      row2City.image.move(500, 108);
      row3City.image.move(500, 342);
      row4City.image.move(500, 30);
      row5City.image.move(500, 147);
      row6City.image.move(500, 186);
      row7City.image.move(500, 69);
      row8City.image.move(500, 303);
      row9City.image.move(500, 264);

      row1Name.image.animate(animationSpeed).move(500, 264);
      row2Name.image.animate(animationSpeed).move(500, 108);
      row3Name.image.animate(animationSpeed).move(500, 342);
      row4Name.image.animate(animationSpeed).move(500, 30);
      row5Name.image.animate(animationSpeed).move(500, 147);
      row6Name.image.animate(animationSpeed).move(500, 186);
      row7Name.image.animate(animationSpeed).move(500, 69);
      row8Name.image.animate(animationSpeed).move(500, 303)
      row9Name.image.animate(animationSpeed).move(500, 225).after(function() {
        rowCities.forEach(function(row) { row.image.animate(animationSpeed).opacity(1); });
        rowNames.forEach(function(row) { row.image.animate(animationSpeed, '<>', animationSpeed).opacity(0); });
      });
    });
    addAnimation('prt', function() {
      row4City.image.animate(animationSpeed).move(500, 69);
      row7City.image.animate(animationSpeed).move(500, 30);

      row1City.image.animate(animationSpeed).move(500, 264);
      row9City.image.animate(animationSpeed).move(500, 225);

      row2City.image.animate(animationSpeed).move(500, 147);
      row5City.image.animate(animationSpeed).move(500, 108).after(function(){
        rowStateNames.forEach(function(name) { name.image.animate(animationSpeed).opacity(1); });
      });
    });
    addAnimation('prt', function() {
      pk3.image.animate(animationSpeed).opacity(0).after(function() {
        pk4.image.animate(animationSpeed).opacity(1).after(function() {
          rowIds.forEach(function(row) { row.image.animate(animationSpeed).opacity(1); });
        });
      });
    });
  }
});


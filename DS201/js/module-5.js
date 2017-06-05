var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('happyserver')) {
    var server = registerSVG('happyserver', 'images/cassandra/internals/node-architecture/storage-engine/write-path/node-single.svg', 395, 395, 600, 0);
    var longArrow = registerSVG('happyserver', 'images/cassandra/internals/node-architecture/storage-engine/write-path/long-arrow.svg', 600, 300, 0, 0);
    var row = registerSVG('happyserver', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-1-houston.png', 385, 35, -500, 75);
    longArrow.image.opacity(0);
    addAnimation('happyserver', function() {
      longArrow.image.animate(animationSpeed).opacity(1).after(function(){
        row.image.animate(750).move(600, 180);
      });
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('writepth')) {
    var server = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/server-background.svg', 1083, 546, 20, 0);
    var server2 = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/server-background-two-drives.svg', 1083, 546, 20, 0);
    var server3 = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/server-background-no-hdd-1.svg', 1083, 546, 20, 0);
    var server4 = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/server-background-hdd-2.svg', 1083, 546, 20, 0);
    var ack = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/ack.svg', 123, 30, -3, 258);
    var commitLogLbl = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/commit-log-label.svg', 204, 30, 75, 30);
    var commitLogsLbl = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/commit-logs-label.svg', 206, 31, 230, 115);
    var memTableLbl = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/mem-table-label.svg', 184, 30, 95, 315);
    var sstableLbl = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/sstable-label.svg', 184, 30, 500, 30);
    var immutableLbl = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/immutable-label.svg', 102, 23, 500, 60);
    var verticalLine = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/vertical-line.svg', 5, 227, 670, 22);
    verticalLine.image.opacity(0);
    sstableLbl.image.opacity(0);
    immutableLbl.image.opacity(0);
    server2.image.opacity(0);

    var row1Log = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-1-houston.png', 385, 35, -500, 255);
    var row1Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-1-houston.png', 385, 35, 40, 255);
    var row2Log = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-2-dallas.png', 371, 35, -500, 255);
    var row2Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-2-dallas.png', 371, 35, 40, 255);
    var row3Log = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-3-snyder.png', 385, 35, -500, 255);
    var row3Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-3-snyder.png', 385, 35, 40, 255);
    var row4Log = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-4-austin.png', 385, 35, -500, 255);
    var row4Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-4-austin.png', 385, 35, 40, 255);
    var row5Log = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-5-dallas.png', 385, 35, -500, 255);
    var row5Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-5-dallas.png', 385, 35, 40, 255);
    var row6Log = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-6-el-paso.png', 385, 35, -500, 255);
    var row6Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-6-el-paso.png', 385, 35, 40, 255);

    var row7Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-7-austin.png', 385, 35, -500, 255);
    var row8Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-8-san-antonio.png', 385, 35, -500, 255);
    var row9Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-3-snyder-dup.png', 385, 35, -500, 255);
    var row10Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-10-dallas.png', 385, 35, -500, 255);
    var row11Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-11-austin.png', 385, 35, -500, 255);
    var row12Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-12-houston.png', 385, 35, -500, 255);

    var redX = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/red-x.svg', 166, 303, 400, -20);
    redX.image.opacity(0);
    server3.image.opacity(0);
    server4.image.opacity(0);
    commitLogsLbl.image.opacity(0);

    commitLogLbl.image.opacity(0);
    memTableLbl.image.opacity(0);
    row1Mem.image.opacity(0);
    row2Mem.image.opacity(0);
    row3Mem.image.opacity(0);
    row4Mem.image.opacity(0);
    row5Mem.image.opacity(0);
    row6Mem.image.opacity(0);
    ack.image.opacity(0);
    addAnimation('writepth', function() {
      row1Log.image.animate(animationSpeed).move(40, 255);
    });
    addAnimation('writepth', function() {
      row1Mem.image.opacity(1);
      row1Log.image.animate(animationSpeed).move(280, 30);
      row1Mem.image.animate(animationSpeed).move(280, 310).after(function() {
        commitLogLbl.image.animate(animationSpeed).opacity(1);
        memTableLbl.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('writepth', function() {
      ack.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('writepth', function() {
      ack.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('writepth', function() {
      row2Log.image.animate(animationSpeed).move(40, 255);
    });
    addAnimation('writepth', function() {
      row2Mem.image.opacity(1);
      row2Log.image.animate(animationSpeed).move(287, 64);
    });
    addAnimation('writepth', function() {
      row2Mem.image.animate(animationSpeed).move(287, 310);
      row1Mem.image.animate(animationSpeed).move(280, 344);
    });
    addAnimation('writepth', function() {
      row3Log.image.animate(animationSpeed).move(40, 255);
    });
    addAnimation('writepth', function() {
      row3Mem.image.opacity(1);
      row3Mem.image.animate(animationSpeed).move(280, 378);
      row3Log.image.animate(animationSpeed).move(280, 98);
    });
    addAnimation('writepth', function() {
      row4Log.image.animate(animationSpeed).move(40, 255);
    });
    addAnimation('writepth', function() {
      row4Mem.image.opacity(1);
      row4Log.image.animate(animationSpeed).move(280, 132);
      row4Mem.image.animate(animationSpeed).move(280, 310);
      row1Mem.image.animate(animationSpeed).move(280, 378);
      row2Mem.image.animate(animationSpeed).move(287, 344);
      row3Mem.image.animate(animationSpeed).move(280, 412);
    });
    addAnimation('writepth', function() {
      row5Log.image.animate(animationSpeed).move(40, 255);
    });
    addAnimation('writepth', function() {
      row5Mem.image.opacity(1);
      row5Log.image.animate(animationSpeed).move(280, 166);
      row5Mem.image.animate(animationSpeed).move(280, 344);
      row1Mem.image.animate(animationSpeed).move(280, 412);
      row2Mem.image.animate(animationSpeed).move(287, 378);
      row3Mem.image.animate(animationSpeed).move(280, 446);
    });
    addAnimation('writepth', function() {
      row6Log.image.animate(animationSpeed).move(40, 255);
    });
    addAnimation('writepth', function() {
      row6Mem.image.opacity(1);
      row6Log.image.animate(animationSpeed).move(280, 200);
      row6Mem.image.animate(animationSpeed).move(280, 412);
      row1Mem.image.animate(animationSpeed).move(280, 446);
      row3Mem.image.animate(animationSpeed).move(280, 480);
    });
    addAnimation('writepth', function() {
      memTableLbl.image.animate(animationSpeed).opacity(0);
      verticalLine.image.animate(animationSpeed).opacity(1);
      row4Mem.image.animate(animationSpeed).move(680, 30);
      row5Mem.image.animate(animationSpeed).move(680, 64);
      row2Mem.image.animate(animationSpeed).move(687, 98);
      row6Mem.image.animate(animationSpeed).move(680, 132);
      row1Mem.image.animate(animationSpeed).move(680, 166);
      row3Mem.image.animate(animationSpeed).move(680, 200);
    });
    addAnimation('writepth', function() {
      redX.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('writepth', function() {
      row1Log.image.animate(animationSpeed).opacity(0);
      row2Log.image.animate(animationSpeed).opacity(0);
      row3Log.image.animate(animationSpeed).opacity(0);
      row4Log.image.animate(animationSpeed).opacity(0);
      row5Log.image.animate(animationSpeed).opacity(0);
      row6Log.image.animate(animationSpeed).opacity(0);
      verticalLine.image.animate(animationSpeed).opacity(0);
      commitLogLbl.image.animate(animationSpeed).opacity(0);
      redX.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('writepth', function() {
      sstableLbl.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('writepth', function() {
      immutableLbl.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('writepth', function() {
      sstableLbl.image.animate(animationSpeed).opacity(0);
      immutableLbl.image.animate(animationSpeed).opacity(0);
      server2.image.animate(animationSpeed).opacity(1);
      commitLogsLbl.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('writepth', function() {
      server3.image.animate(animationSpeed).opacity(1);
      commitLogsLbl.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('writepth', function() {
      server4.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('writepth', function() {
      row4Mem.image.animate(animationSpeed).move(220, 30);
      row5Mem.image.animate(animationSpeed).move(220, 64);
      row2Mem.image.animate(animationSpeed).move(227, 98);
      row6Mem.image.animate(animationSpeed).move(220, 132);
      row1Mem.image.animate(animationSpeed).move(220, 166);
      row3Mem.image.animate(animationSpeed).move(220, 200);
    });
    addAnimation('writepth', function() {
      row7Mem.image.animate(animationSpeed).move(220, 310).after(function() {
        row8Mem.image.animate(animationSpeed).move(220, 344).after(function() {
          row8Mem.image.animate(animationSpeed).move(220, 378);
          row9Mem.image.animate(animationSpeed).move(220, 344).after(function() {
            row10Mem.image.animate(animationSpeed).move(220, 344);
            row8Mem.image.animate(animationSpeed).move(220, 408);
            row9Mem.image.animate(animationSpeed).move(220, 378).after(function(){
              row11Mem.image.animate(animationSpeed).move(220, 344);
              row10Mem.image.animate(animationSpeed).move(220, 378);
              row8Mem.image.animate(animationSpeed).move(220, 442);
              row9Mem.image.animate(animationSpeed).move(220, 412).after(function(){
                row8Mem.image.animate(animationSpeed).move(220, 476);
                row12Mem.image.animate(animationSpeed).move(220, 442);
              });
            });
          });
        });
      });
    });
    addAnimation('writepth', function() {
      row7Mem.image.animate(animationSpeed).move(650, 30);
      row11Mem.image.animate(animationSpeed).move(650, 64);
      row10Mem.image.animate(animationSpeed).move(650, 98);
      row9Mem.image.animate(animationSpeed).move(650, 132);
      row12Mem.image.animate(animationSpeed).move(650, 166);
      row8Mem.image.animate(animationSpeed).move(650, 200);
    });
  }
});

var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('memss')) {
    var memTable = registerSVG('memss', 'images/cassandra/internals/node-architecture/storage-engine/read-path/memtable.svg', 494, 122, 40, 166);
    var ssTables = registerSVG('memss', 'images/cassandra/internals/node-architecture/storage-engine/read-path/sstables.svg', 494, 400, 590, 25);
    memTable.image.opacity(0);
    ssTables.image.opacity(0);
    addAnimation('memss', function() {
      ssTables.image.animate(animationSpeed).opacity(1);
      memTable.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('memss', function() {
      ssTables.image.animate(animationSpeed).opacity(.1);
    });
    addAnimation('memss', function() {
      ssTables.image.animate(animationSpeed).opacity(1);
      memTable.image.animate(animationSpeed).opacity(.1);
    });
    addAnimation('memss', function() {
      memTable.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('memreading')) {
    var memTable = registerSVG('memreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/memtable-data.svg', 486, 390, 350, 20);
    var rows = registerSVG('memreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/rows.svg', 278, 85, 515, 220);
    var query58 = registerSVG('memreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query-58.svg', 340, 41, 0, 30);
  ////  var mergeSstable = registerSVG('memreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/merge-sstable.svg', 340, 41, 0, 30);
    query58.image.opacity(0);
    addAnimation('memreading', function() {
      query58.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('memreading', function() {
      rows.image.animate(animationSpeed * 2).move(30, 30).after(function() {
        query58.image.animate(animationSpeed).opacity(0);
      });
    });
  }
});


//ssreading
Animation.animate(function () {
  if(registerCanvas('ssreading')) {
    var sstable1 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/sstable1.svg', 980, 80, 100, 100);
    var sstable2 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/sstable2.svg', 980, 80, 100, 100);
    var sstable3 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/sstable3.svg', 988, 132, 98, 50);
    var partitionIndex = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/partition-index.png', 300, 259, 420, 10);
    var query58 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query58-2.svg', 345, 158, 100, 50);
    var partition58 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/partition-58.svg', 230, 62, 780, 350);
    var bentArrow = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bent-arrow.svg', 121, 61, 680, 220);
    var largeSstable = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/big-sstable.svg', 884, 289, 150, 100);
    var partitionIndex2 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/partition-index-2.png', 330, 259, 377, 10);
    var partitionSummary = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/partition-summary.png', 373, 130, 150, 70);
    var query36 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query-36.svg', 142, 73, 80, 80);
    var query36_2 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query36-2.svg', 138, 11, 450, 150);
    var query36_3 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query36-3.svg', 142, 22, 450, 160);
    var query36_4 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query36-4.svg', 42, 119, 700, 200);
    var partition36 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/partition-36.svg', 87, 63, 692, 350);
    var keyCache1 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/keycache-1.png', 196, 34, 102, 55);
    var keyCache2 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/keycache-2.png', 200, 65, 100, 55);
    var query36_5 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query36-5.svg', 60, 60, 25, 50);
    var query36_6 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query36-6.svg', 350, 240, 320, 100);
    var ramHddDivide = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/ram-hdd-divide.svg', 202, 270, 420, 0);
    var bloomFilter = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bloom-filter.svg', 95, 80, 60, 100);
    var bloomArrow1 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bloom-arrow.svg', 47, 12, 0, 135);
    var bloomArrow2 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bloom-arrow.svg', 47, 12, 165, 135);
    var bloom36 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bloom-36.svg', 40, 28, 0, 100);
    var bloom48 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bloom-48.svg', 39, 28, 0, 100);
    var bloom74 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bloom-74.svg', 40, 26, 0, 100);
    var bloomX = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bloom-x.svg', 24, 27, 175, 125);
    var questionMark = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/question-mark.svg', 20, 27, 175, 125);


    var all = [sstable2, sstable3, query58, partitionIndex, partition58, bentArrow,
              largeSstable, partitionIndex2, partitionSummary,
              query36, query36_2, query36_3, query36_4, partition36,
              keyCache1, keyCache2, query36_5, query36_6, ramHddDivide,
              bloom36, bloom48, bloom74, questionMark, bloomArrow1, bloomArrow2, bloomX, bloomFilter];
    all.forEach(function(i) { i.image.opacity(0); });

    addAnimation('ssreading', function() {
      sstable2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      sstable3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      sstable1.image.opacity(0);
      sstable2.image.opacity(0);
      sstable3.image.animate(animationSpeed).move(100, 290).after(function(){
        partitionIndex.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('ssreading', function() {
      query58.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      bentArrow.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      partition58.image.opacity(1);
      partition58.image.animate(750).move(-300, 0).after(function(){
        query58.image.animate(animationSpeed).opacity(0);
        bentArrow.image.animate(animationSpeed).opacity(0);
      });
    });
    addAnimation('ssreading', function() {
      partitionIndex.image.animate(animationSpeed).opacity(.4);
      sstable3.image.animate(animationSpeed).opacity(.4).after(function() {
        largeSstable.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('ssreading', function() {
      partitionIndex.image.animate(animationSpeed).opacity(1);
      sstable3.image.animate(animationSpeed).opacity(1);
      largeSstable.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('ssreading', function() {
      partitionIndex2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      partitionIndex.image.opacity(0);
      partitionIndex2.image.animate(animationSpeed).move(540, 10).after(function() {
        partitionSummary.image.animate(animationSpeed).opacity(1);
        ramHddDivide.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('ssreading', function() {
      query36.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      query36_2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      query36_2.image.opacity(0);
      query36_3.image.opacity(1);
    });
    addAnimation('ssreading', function() {
      query36_4.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      partition36.image.opacity(1);
      partition36.image.animate(1500).move(-300, 0).after(function(){
        query36.image.animate(animationSpeed).opacity(0);
        query36_2.image.animate(animationSpeed).opacity(0);
        query36_3.image.animate(animationSpeed).opacity(0);
        query36_4.image.animate(animationSpeed).opacity(0).after(function() {
          partitionIndex2.image.animate(animationSpeed).move(700, 10);
          ramHddDivide.image.animate(animationSpeed).move(580, 0);
          partitionSummary.image.animate(animationSpeed).move(310, 70).after(function() {
            keyCache1.image.animate(animationSpeed).opacity(1);
            partitionIndex2.image.animate(animationSpeed).opacity(.3);
            partitionSummary.image.animate(animationSpeed).opacity(.3);
          });
        });
      });
    });
    addAnimation('ssreading', function() {
      keyCache2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      query36_5.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      query36_6.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      partition36.image.move(692, 350);
      partition36.image.animate(1500).move(-300, 0).after(function() {
        query36_5.image.animate(animationSpeed).opacity(0);
        query36_6.image.animate(animationSpeed).opacity(0);
      });
    });
    addAnimation('ssreading', function() {
      keyCache1.image.opacity(0);
      var rightShift = 150;
      keyCache2.image.animate(animationSpeed).opacity(.3).after(function() {
        partitionIndex2.image.animate(animationSpeed).move(
          partitionIndex2.image.x() + rightShift,
          partitionIndex2.image.y());
        ramHddDivide.image.animate(animationSpeed).move(
          ramHddDivide.image.x() + rightShift,
          ramHddDivide.image.y());
        partitionSummary.image.animate(animationSpeed).move(
          partitionSummary.image.x() + rightShift,
          partitionSummary.image.y());
        keyCache2.image.animate(animationSpeed).move(
          keyCache2.image.x() + rightShift,
          keyCache2.image.y()).after(function() {
            bloomFilter.image.animate(animationSpeed).opacity(1);
          });
      });
    });
    addAnimation('ssreading', function() {
      bloomArrow1.image.animate(animationSpeed).opacity(1);
      bloom36.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      bloomArrow2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      bloomArrow1.image.animate(animationSpeed).opacity(0);
      bloom36.image.animate(animationSpeed).opacity(0);
      bloomArrow2.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('ssreading', function() {
      bloomArrow1.image.animate(animationSpeed).opacity(1);
      bloom48.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      bloomX.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      bloomArrow1.image.animate(animationSpeed).opacity(0);
      bloom48.image.animate(animationSpeed).opacity(0);
      bloomX.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('ssreading', function() {
      bloomArrow1.image.animate(animationSpeed).opacity(1);
      bloom74.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      questionMark.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      bloomArrow2.image.move(210, 135);
      bloomArrow2.image.animate(animationSpeed).opacity(1);
    });
  }
});

var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('multss')) {
    var fullRead1 = registerSVG('multss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/full-read.svg', 857, 96, 200, 0);
    var fullRead2 = registerSVG('multss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/full-read.svg', 857, 96, 200, 110);
    var fullRead3 = registerSVG('multss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/full-read.svg', 857, 96, 200, 220);
    var fullRead4 = registerSVG('multss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/full-read.svg', 857, 96, 200, 330);
    var all = [fullRead2, fullRead3, fullRead4];
    all.forEach(function(i){ i.image.opacity(0); });
    addAnimation('multss', function() {
      fullRead2.image.animate(animationSpeed).opacity(1);
      fullRead3.image.animate(animationSpeed).opacity(1);
      fullRead4.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('cmppart')) {

    var p1 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2.svg', 304, 264, 210, 0);
    var p2 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2.svg', 304, 264, 720, 0);
    var p3 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p3.svg', 298, 249, 465, 0);
    var p1Label = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/partition-label.svg', 125, 27, 75, 102);
    var p2Label = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/partition-label.svg', 125, 27, 580, 102);

    var p1r1 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r1.svg', 276, 41, 222, 10);
    var p1r2_2 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r2.2.svg', 276, 41, 222, 60);
    var p1r3_4 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r3.4.svg', 276, 41, 222, 110);
    var p1r4 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r4.svg', 276, 41, 222, 160);
    var p1r5 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r5.1.svg', 276, 41, 222, 210);

    var p2r1 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r1.svg', 276, 41, 730, 10);
    var p2r2_2 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r2.2.svg', 276, 41, 730, 60);//43
    var p2r3 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r3.svg', 276, 41, 730, 110);
    var p2r5_2 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r5.2.svg', 276, 41, 730, 160);
    var p2r6 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r6.svg', 276, 41, 730, 210);

    var p1r1g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r1g.svg', 276, 41, 122, 10);
    var p1r2_2g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r2.2g.svg', 276, 41, 122, 60);
    var p1r3_4g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r3.4g.svg', 276, 41, 122, 110);
    var p1r4g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r4g.svg', 276, 41, 122, 160);
    var p1r5g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r5.1g.svg', 276, 41, 122, 210);

    var p2r1g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r1g.svg', 276, 41, 830, 10);
    var p2r2_2g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r2.2g.svg', 276, 41, 830, 60);//43
    var p2r3g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r3g.svg', 276, 41, 830, 110);
    var p2r5_2g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r5.2g.svg', 276, 41, 830, 160);
    var p2r6g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r6g.svg', 276, 41, 830, 210);

    var p1s = [p1r1, p1r2_2, p1r3_4, p1r4, p1r5];
    var p2s = [p2r1, p2r2_2, p2r3, p2r5_2, p2r6];
    var p1sg = [p1r1g, p1r2_2g, p1r3_4g, p1r4g, p1r5g];
    var p2sg = [p2r1g, p2r2_2g, p2r3g, p2r5_2g, p2r6g];

    p3.image.opacity(0);
    var split = 100;
    p1sg.forEach(function(i) {
      i.image.opacity(0);
    });
    p2sg.forEach(function(i) {
      i.image.opacity(0);
    });
    addAnimation('cmppart', function() {
      p1Label.image.animate(animationSpeed).opacity(0);
      p2Label.image.animate(animationSpeed).opacity(0).after(function() {
        p1s.forEach(function(r){ r.image.animate(animationSpeed).move(r.image.x() - split, r.image.y()); });
        p2s.forEach(function(r){ r.image.animate(animationSpeed).move(r.image.x() + split, r.image.y()); });
        p1.image.animate(animationSpeed).move(p1.image.x() - split, 0);
        p2.image.animate(animationSpeed).move(p2.image.x() + split, 0).after(function() {
          p3.image.animate(animationSpeed).opacity(1);
        });
      });
    });
    addAnimation('cmppart', function() {
      p1r1g.image.animate(animationSpeed).opacity(1);
      p2r1g.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmppart', function() {
      p1r1.image.animate(animationSpeed).opacity(0);
      p1r1g.image.animate(animationSpeed).opacity(0);
      p2r1g.image.animate(animationSpeed).opacity(0).after(function(){
        p2r1.image.animate(animationSpeed).move(476, 10)
      });
    });
    addAnimation('cmppart', function() {
      p1r2_2g.image.animate(animationSpeed).opacity(1);
      p2r2_2g.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmppart', function() {
      p1r2_2g.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('cmppart', function() {
      p2r2_2.image.opacity(0);
      p1r2_2.image.animate(animationSpeed).opacity(0);
      p2r2_2g.image.animate(animationSpeed).opacity(0);
      p2r2_2.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('cmppart', function() {
      p1r3_4g.image.animate(animationSpeed).opacity(1);
      p2r3g.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmppart', function() {
      p1r3_4.image.animate(animationSpeed).opacity(0);
      p1r3_4g.image.animate(animationSpeed).opacity(0);
      p2r3g.image.animate(animationSpeed).opacity(0).after(function() {
        p2r3.image.animate(animationSpeed).move(476, 56);
      });
    });
    addAnimation('cmppart', function() {
      p1r4g.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmppart', function() {
      p1r4g.image.animate(animationSpeed).opacity(0).after(function() {
        p1r4.image.animate(animationSpeed).move(476, 102);
      });
    });
    addAnimation('cmppart', function() {
      p2r5_2g.image.animate(animationSpeed).opacity(1);
      p1r5g.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmppart', function() {
      p1r5.image.opacity(0);
      p1r5g.image.animate(animationSpeed).opacity(0);
      p2r5_2g.image.animate(animationSpeed).opacity(0).after(function() {
        p2r5_2.image.animate(animationSpeed).move(476, 148);
      });
    });
    addAnimation('cmppart', function() {
      p2r6g.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmppart', function() {
      p2r6g.image.animate(animationSpeed).opacity(0).after(function() {
        p2r6.image.animate(animationSpeed).move(476, 194).after(function(){
          p1.image.animate(animationSpeed).opacity(0);
          p2.image.animate(animationSpeed).opacity(0);
        });
      });
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('cmpss')) {
    var ss1 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s1.svg', 908, 80, 130, 0);
    var ss2 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s2.svg', 979, 80, 130, 100);
    var ss3 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3.svg', 836, 80, 130, 260);

    var s1p7 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s1p7.svg', 71, 63, 140, 9);
    var s1p13 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s1p13.svg', 190, 63, 216, 9);
    var s1p18 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s1p18.svg', 130, 63, 410, 9);
    var s1p21 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s1p21.svg', 231, 63, 544, 9);
    var s1p58 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s1p58.svg', 130, 63, 780, 9);
    var s1p92 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s1p92.svg', 113, 63, 915, 9);

    var s2p3 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s2p3.svg', 130, 63, 140, 109);
    var s2p7 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s2p7.svg', 199, 63, 275, 109);
    var s2p18 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s2p18.svg', 231, 63, 480, 109);
    var s2p36 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s2p36.svg', 87, 63, 716, 109);
    var s2p58 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s2p58.svg', 154, 63, 810, 109);
    var s2p84 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s2p84.svg', 130, 63, 970, 109);

    var s3p3 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3p3.svg', 130, 63, 140, 270);
    var s3p7 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3p7.svg', 45, 63, 276, 270);
    var s3p13 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3p13.svg', 72, 63, 327, 270);
    var s3p18 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3p18.svg', 72, 63, 406, 270);
    var s3p21 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3p21.svg', 231, 63, 484, 270);
    var s3p36 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3p36.svg', 45, 63, 721, 270);
    var s3p58 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3p58.svg', 191, 63, 770, 270);

    var allp3 = [ss3, s3p3, s3p7, s3p13, s3p18, s3p21, s3p36, s3p58 ];
    allp3.forEach(function(i) { i.image.opacity(0); });

    addAnimation('cmpss', function() {
      ss3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmpss', function() {
      s2p3.image.animate(animationSpeed).move(140, 270);
    });
    addAnimation('cmpss', function() {
      s1p7.image.animate(animationSpeed).move(276, 230);
      s2p7.image.animate(animationSpeed).move(276, 305);
    });
    addAnimation('cmpss', function() {
      s1p7.image.animate(animationSpeed).move(276, 270);
      s2p7.image.animate(animationSpeed).move(276, 270).after(function() {
        s1p7.image.animate(animationSpeed).opacity(0);
        s2p7.image.animate(animationSpeed).opacity(0);
        s3p7.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('cmpss', function() {
      s1p13.image.animate(animationSpeed).move(328, 270);
    });
    addAnimation('cmpss', function() {
      s1p13.image.animate(animationSpeed).opacity(0);
      s3p13.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmpss', function() {
      s1p18.image.animate(animationSpeed).move(406, 230);
      s2p18.image.animate(animationSpeed).move(406, 305);
    });
    addAnimation('cmpss', function() {
      s1p18.image.animate(animationSpeed).move(406, 270);
      s2p18.image.animate(animationSpeed).move(406, 270).after(function() {
        s1p18.image.animate(animationSpeed).opacity(0);
        s2p18.image.animate(animationSpeed).opacity(0);
        s3p18.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('cmpss', function() {
      s1p21.image.animate(animationSpeed).move(484, 270);
    });
    addAnimation('cmpss', function() {
      s2p36.image.animate(animationSpeed).move(721, 270);
    });
    addAnimation('cmpss', function() {
      s2p36.image.animate(animationSpeed).opacity(0);
      s3p36.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmpss', function() {
      s1p58.image.animate(animationSpeed).move(770, 230);
      s2p58.image.animate(animationSpeed).move(770, 305);
    });
    addAnimation('cmpss', function() {
      s1p58.image.animate(animationSpeed).move(770, 270);
      s2p58.image.animate(animationSpeed).move(770, 270).after(function() {
        s1p58.image.animate(animationSpeed).opacity(0);
        s2p58.image.animate(animationSpeed).opacity(0);
        s3p58.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('cmpss', function() {
      s2p84.image.animate(animationSpeed).move(970, 270);
    });
    addAnimation('cmpss', function() {
      s2p84.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('cmpss', function() {
      s1p92.image.animate(animationSpeed).move(970, 270).after(function() {
        s1p92.image.animate(animationSpeed).opacity(0);
        ss1.image.animate(animationSpeed).opacity(0);
        ss2.image.animate(animationSpeed).opacity(0);
      });
    });
  }
});


var animationSpeed = 350;

Animation.animate(function () {
  if(registerCanvas('ndrynde')) {

    var smiley = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/node-single.svg', 300, 300, 450, 150);
    var cassandraBackdrop = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/cassandra-backdrop.svg', 350, 300, 50, 0);
    var cassandra = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/cassandra.svg', 280, 280, 85, 35);
    var cloud = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/cloud.svg', 350, 250, 800, 0);
    var jbod = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/harddrive.svg', 350, 200, 800, 350);
    var serverRoom = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/server-room.svg', 350, 200, 50, 350);
    cassandraBackdrop.image.opacity(0);
    serverRoom.image.opacity(0);
    cloud.image.opacity(0);
    jbod.image.opacity(0);
    cassandra.image.opacity(0);
    addAnimation('ndrynde', function() {
      cassandraBackdrop.image.animate(animationSpeed).opacity(1);
      cassandra.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ndrynde', function() {
      cloud.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ndrynde', function() {
      serverRoom.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ndrynde', function() {
      jbod.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ndrynde', function() {
      cassandraBackdrop.image.animate(animationSpeed).opacity(0);
      cassandra.image.animate(animationSpeed).opacity(0);
      cloud.image.animate(animationSpeed).opacity(0);
      jbod.image.animate(animationSpeed).opacity(0);
      serverRoom.image.animate(animationSpeed).opacity(0);
    });


    var data55 = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/data-55.png', 200, 200, -200, -200);
    var arrow = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/arrow.png', 200, 200, 280, 125);
    arrow.image.opacity(0);
    addAnimation('ndrynde', function() {
      data55.image.animate(animationSpeed).move(80, 50).after(function(){
        arrow.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('ndrynde', function() {
      data55.image.animate(animationSpeed).move(500, 200).opacity(0);
      arrow.image.animate(animationSpeed).opacity(0);
    });


    var request22 = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/request-22.png', 200, 150, 450, 0);
    var receive22 = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/receive-22.png', 200, 150, 500, 0);
    var data22 = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/data-22.png', 200, 200, 500, 200);
    request22.image.opacity(0);
    receive22.image.opacity(0);
    data22.image.opacity(0);
    addAnimation('ndrynde', function(){
      request22.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ndrynde', function(){
      data22.image.animate(animationSpeed).opacity(1);
      receive22.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ndrynde', function(){
      request22.image.animate(animationSpeed).opacity(0);
      data22.image.animate(750, '<>').move(500, -500);
      receive22.image.animate(animationSpeed, '<>', 500).opacity(0);
    });

    var transactions = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/transactions.svg', 500, 250, 350, -25);
    var terabytes = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/terabytes.svg', 500, 200, 350, 400);
    transactions.image.opacity(0);
    terabytes.image.opacity(0);
    addAnimation('ndrynde', function(){
      transactions.image.animate(animationSpeed).opacity(1);
      terabytes.image.animate(animationSpeed).opacity(1);
    });
  }
});

var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('overloadednode')) {
    var requests = registerSVG('overloadednode', 'images/cassandra/internals/node-architecture/ring/requests.png', 600, 600, 275, 0);
    var smiley = registerSVG('overloadednode', 'images/cassandra/internals/node-architecture/ring/node-single.svg', 300, 300, 450, 150);
    var requestsExtreme = registerSVG('overloadednode', 'images/cassandra/internals/node-architecture/ring/requests-extreme.png', 600, 600, 280, 0);
    var freakOut = registerSVG('overloadednode', 'images/cassandra/internals/node-architecture/ring/node-cracked.svg', 300, 300, 450, 150);
    requests.image.opacity(0);
    requestsExtreme.image.opacity(0);
    freakOut.image.opacity(0);
    addAnimation('overloadednode', function() {
      requests.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('overloadednode', function() {
      requests.image.animate(animationSpeed).opacity(0);
      requestsExtreme.image.animate(animationSpeed).opacity(1).after(function(){
        smiley.image.animate(animationSpeed).opacity(0);
        freakOut.image.animate(animationSpeed).opacity(1);
      });
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('thering')) {
    var theRing = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/ring.svg', 600, 600, 275, 0);
    var coloredRing = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/colored-ring.svg', 500, 500, 320, 0);
    var theRingBlank = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/ring-blank.svg', 500, 500, 320, 70);
    var theRingPro = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/ring-pro.svg', 500, 500, 320, 0);
    var questionMark = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/question-mark.svg', 175, 175, 490, 150);
    var arrow1 = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/arrow1.svg', 18, 183, 425, 160);
    var arrow2 = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/arrow2.svg', 80, 250, 300, -50);
    var data55 = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/partition-59.svg', 106, 36, -200, -200);
    var data55Purple = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/partition-59-purple.svg', 106, 36, 370, 85);
    theRingBlank.image.opacity(0);
    theRingPro.image.opacity(0);
    questionMark.image.opacity(0);
    arrow1.image.opacity(0);
    arrow2.image.opacity(0);
    coloredRing.image.opacity(0);
    data55Purple.image.opacity(0);

    addAnimation('thering', function() {
      theRing.image.animate(animationSpeed).opacity(0);
      theRingBlank.image.animate(animationSpeed).opacity(1).after(function(){
        theRingBlank.image.animate(animationSpeed).translate(0, -70);
      });
    });
    addAnimation('thering', function() {
      data55.image.animate(animationSpeed).move(160, 10).after(function(){
        questionMark.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('thering', function() {
      arrow2.image.animate(animationSpeed).opacity(1).after(function(){
        data55.image.animate(animationSpeed).move(370, 85).after(function() {
          arrow2.image.animate(animationSpeed).opacity(0);
        });
      });
    });
    addAnimation('thering', function() {
      theRingBlank.image.animate(animationSpeed).opacity(0);
      theRingPro.image.animate(animationSpeed).opacity(1);
      coloredRing.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('thering', function() {
      data55Purple.image.animate(animationSpeed).opacity(1).after(function() { data55.image.opacity(0); });
    });
    addAnimation('thering', function() {
      arrow1.image.animate(animationSpeed).opacity(1).after(function(){
        questionMark.image.animate(animationSpeed).opacity(0).after(function(){
          data55Purple.image.animate(animationSpeed).move(370, 380).after(function(){
            arrow1.image.animate(animationSpeed).opacity(0);
            data55Purple.image.animate(animationSpeed).opacity(0);
          });
        });
      });
    });
  }
});

Animation.animate(function() {
  if(registerCanvas('fullrng')) {
    var theRingBlank = registerSVG('fullrng', 'images/cassandra/internals/node-architecture/ring/ring-blank.svg', 500, 500, 320, 00);
    var fullRing = registerSVG('fullrng', 'images/cassandra/internals/node-architecture/ring/full-ring.svg', 570, 570, 287, 00);
    fullRing.image.opacity(0);
    addAnimation('fullrng', function(){
      theRingBlank.image.animate(animationSpeed).translate(0, 70).after(function(){
        theRingBlank.image.animate(animationSpeed).opacity(0);
        fullRing.image.animate(animationSpeed).opacity(1);
      });
    });
  }
});

var center = { x : 566, y : 316 };

allowInconsistency = true;

function getTarget()
{
  var radius = 209;
  var pi = 3.1415927;
  var radialRange = pi / 2 - pi / 6;
  var radialBaseOffset = pi / 14;
  var block = Math.floor(Math.random() * 4);

  var beInconsistent = Math.random() < .75 && allowInconsistency;
  if(beInconsistent)
  {
    block = Math.random() < .5 ? 0 : 2;
    radialBaseOffset = pi / 4;
    radialRange = pi / 12;
  }
  var blockBase = block * pi / 2;
  var theta = blockBase + radialBaseOffset + Math.random() * radialRange;

  return {
    block : block,
    x: center.x + radius * Math.cos(theta),
    y: center.y + radius * Math.sin(theta)
  };
}

Animation.animate(function () {
  if(registerCanvas('csthsh')) {
    var ring = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/ring-blank-no-nodes.svg', 500, 500, 320, 70);
    var ringNumberRange = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/ring-number-range.svg', 570, 570, 287, 00);

    var node0Green = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-green.svg', 83, 83, 528, 74);
    var node0Yellow = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-yellow.svg', 83, 83, 528, 74);
    var node0Red = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-red.svg', 83, 83, 528, 74);
    var node1Green = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-green.svg', 83, 83, 730, 276);
    var node1Yellow = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-yellow.svg', 83, 83, 730, 276);
    var node1Red = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-red.svg', 83, 83, 730, 276);
    var node2Green = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-green.svg', 83, 83, 528, 478);
    var node2Yellow = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-yellow.svg', 83, 83, 528, 478);
    var node2Red = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-red.svg', 83, 83, 528, 478);
    var node3Green = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-green.svg', 83, 83, 328, 276);
    var node3Yellow = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-yellow.svg', 83, 83, 328, 276);
    var node3Red = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-red.svg', 83, 83, 328, 276);
    var groups = [ { yellow : node0Yellow, red : node0Red },
                   { yellow : node1Yellow, red : node1Red },
                   { yellow : node2Yellow, red : node2Red },
                   { yellow : node3Yellow, red : node3Red }];
    groups.forEach(function(i) { i.yellow.image.opacity(0); i.red.image.opacity(0); });

    numDatams = 150;
    datums = [];

    for(i = 0; i < numDatams; i++)
    {
      var datum = {
        pic : registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/datam.svg', 7, 7, center.x, center.y),
        target : getTarget()
      };
      datums.push(datum)
    }
    var partitioner = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/partitioner.svg', 153, 56, 490, 290);

    var numDatumsPerBlock = [ 0, 0, 0, 0 ];

    var changeNodeColorIfNecessary = function() {
      var yellowThreshold = numDatams * (1/4);
      var redThreshold = numDatams * (1/3);

      for(j = 0; j < numDatumsPerBlock.length && allowInconsistency; j++)
      {
        if(numDatumsPerBlock[j] > redThreshold)
        {
          groups[j].red.image.opacity(1);
        }
        else if(numDatumsPerBlock[j] > yellowThreshold)
        {
          groups[j].yellow.image.opacity(1);
        }
      }
    }

    var reset = function() {
      i = 0;
      groups.forEach(function(g) { g.yellow.image.opacity(0); g.red.image.opacity(0); });
      datums.forEach(function(d) { d.pic.image.x(center.x); d.pic.image.y(center.y); });
      for(j = 0; j < numDatumsPerBlock.length; j++)
        numDatumsPerBlock[j] = 0;
    };

    i = 0;
    var moveIt = function() {
        if(i == datums.length)
          return;
        var datum = datums[i++];
        numDatumsPerBlock[datum.target.block]++;
        changeNodeColorIfNecessary();
        datum.pic.image.animate(50, '-').move(datum.target.x, datum.target.y).after(moveIt);
    }
    addAnimation('csthsh', function() {
      moveIt();
    });

    addAnimation('csthsh', function() {
      reset();
      allowInconsistency = false;
      for(j = 0; j < numDatams; j++)
        datums[j].target = getTarget();
      moveIt();
    });
  }
});


var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('mrslv')) {
    var client = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/client.svg', 136, 75, 550, 370);
    var server = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/server.svg', 136, 75, 550, 174);
    var router = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/router.svg', 136, 75, 550, 300);
    var arrow1 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/arrow1.svg', 10, 95, 615, 260);
    var arrow2 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/arrow2.svg', 10, 35, 615, 382);
    var arrow3 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/arrow3.svg', 168, 36, 450, 256);
    var masterSlaves2 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master-slaves.svg', 137, 249, 550, 0);
    var masterSlaves3 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master-slaves.svg', 137, 249, 550, 0);
    var masterSlaves4 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master-slaves.svg', 137, 249, 550, 0);
    var masterSlaves5 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master-slaves.svg', 137, 249, 550, 0);
    var masterSlaves1 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master-slaves.svg', 137, 249, 550, 0);
    var deadMaster = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/dead-master.svg', 136, 75, 351, 174);
    var deadSmiley = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/skull.svg', 100, 100, 370, 165);
    var hourGlass = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/hour-glass.svg', 200, 200, 220, 300);
    var newMaster = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/new-master.svg', 136, 162, 350, 0);

    var singleSlave = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/single-slave.svg', 136, 75, 150, 0);
    var twoSlaves = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/two-slaves.svg', 137, 162, 350, 0);
    var split1 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/new-master.svg', 136, 162, 150, 87);
    var master1 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master.svg', 136, 75, 350, 87);
    var master2 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master.svg', 136, 75, 150, 0);
    var master3 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master.svg', 136, 75, 350, 174);
    var splitBrain = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/split-brain.svg', 320, 148, 160, 110);

    var all = [masterSlaves1, masterSlaves2, masterSlaves3, masterSlaves4, masterSlaves5];
    var all2 = [router, arrow2, arrow3, hourGlass, deadSmiley, deadMaster, newMaster];
    var all3 = [split1, master1, master2, master3, twoSlaves, singleSlave, splitBrain];
    all.forEach(function(i){ i.image.opacity(0); });
    all2.forEach(function(i){ i.image.opacity(0); });
    all3.forEach(function(i){ i.image.opacity(0); });
    addAnimation('mrslv', function() {
      masterSlaves1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('mrslv', function() {
      server.image.opacity(0);
      all.forEach(function(i){ i.image.opacity(1); });
      masterSlaves2.image.animate(animationSpeed).move(350, 0);
      masterSlaves3.image.animate(animationSpeed).move(150, 0);
      masterSlaves4.image.animate(animationSpeed).move(750, 0);
      masterSlaves5.image.animate(animationSpeed).move(950, 0);
    });
    addAnimation('mrslv', function() {
      arrow1.image.animate(animationSpeed).opacity(0);
      client.image.animate(animationSpeed).move(550, 426).after(function() {
        router.image.animate(animationSpeed).opacity(1);
        arrow2.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('mrslv', function() {
      arrow3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('mrslv', function() {
      deadSmiley.image.animate(animationSpeed).opacity(1).after(function() {
        deadMaster.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('mrslv', function() {
      hourGlass.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('mrslv', function() {
      hourGlass.image.animate(animationSpeed).opacity(0);
      newMaster.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('mrslv', function() {
      all2.forEach(function(i){ i.image.animate(animationSpeed).opacity(0); });
      client.image.animate(animationSpeed).opacity(0).after(function(){
        masterSlaves2.image.opacity(0);
        masterSlaves3.image.opacity(0);
        singleSlave.image.opacity(1);
        master3.image.opacity(1);
        split1.image.opacity(1);
        twoSlaves.image.opacity(1);
      });
    });
    addAnimation('mrslv', function() {
      master3.image.animate(animationSpeed).move(350, 280);
      split1.image.animate(animationSpeed).move(150, 193).after(function(){
        splitBrain.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('mrslv', function() {
      master1.image.animate(animationSpeed).opacity(1);
      master2.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('prtopr')) {
    var cluster = registerSVG('prtopr', 'images/cassandra/internals/distributed-architecture/peer-to-peer/cluster.svg', 416, 467, 400, 0);
    var data = registerSVG('prtopr', 'images/cassandra/internals/distributed-architecture/peer-to-peer/data.svg', 204, 422, 590, 22);
    var request1 = registerSVG('prtopr', 'images/cassandra/internals/distributed-architecture/peer-to-peer/request-1.svg', 423, 300, 310, 80);
    var request2 = registerSVG('prtopr', 'images/cassandra/internals/distributed-architecture/peer-to-peer/request-2.svg', 264, 290, 624, 80);
    var request3 = registerSVG('prtopr', 'images/cassandra/internals/distributed-architecture/peer-to-peer/request-3.svg', 277, 285, 310, 100);
    var request4 = registerSVG('prtopr', 'images/cassandra/internals/distributed-architecture/peer-to-peer/request-4.svg', 243, 197, 650, 80);
    var split = registerSVG('prtopr', 'images/cassandra/internals/distributed-architecture/peer-to-peer/split.svg', 342, 450, 440, 0);
    var all = [data, request1, request2, request3, request4, split];
    all.forEach(function(i){ i.image.opacity(0); });

    addAnimation('prtopr', function() {
      data.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('prtopr', function() {
      request1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('prtopr', function() {
      request1.image.animate(animationSpeed).opacity(0).after(function(){
        request2.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('prtopr', function() {
      request2.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('prtopr', function() {
      split.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('prtopr', function() {
      request3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('prtopr', function() {
      request4.image.animate(animationSpeed).opacity(1);
    });
  }
});

var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('drawing')) {
    var node1x = 547;
    var node1y = 60;
    var ring1 = registerSVG('drawing', 'images/cassandra/internals/distributed-architecture/vnodes/ring1.svg', 388, 388, 400, 70);
    var ring2 = registerSVG('drawing', 'images/cassandra/internals/distributed-architecture/vnodes/ring2.svg', 388, 388, 400, 70);
    var node1 = registerSVG('drawing', 'images/cassandra/internals/distributed-architecture/vnodes/node1.svg', 90, 90, node1x, node1y);
    var node2 = registerSVG('drawing', 'images/cassandra/internals/distributed-architecture/vnodes/node2.svg', 90, 90, 715, 225);
    var node3 = registerSVG('drawing', 'images/cassandra/internals/distributed-architecture/vnodes/node3.svg', 90, 90, 550, 385);
    var node4 = registerSVG('drawing', 'images/cassandra/internals/distributed-architecture/vnodes/node4.svg', 90, 90, -100, 225);

    var datums = [];
    var halves = [];
    var blueDatums = [];

    function fillNode(nodex, nodey, datumFileName, addToHalves)
    {
      var pi = 3.1415927;
      var twoPi = 2 * pi;
      for(numCircles = 1; numCircles <= 6; numCircles++)
      {
        var numDatumsThisCircle = numCircles * 6;
        var radius = numCircles * 6;
        for(i = 0; i < numDatumsThisCircle; i++)
        {
          alternate = ! addToHalves;
          if(alternate)
            i += 1;
          var theta = i * (twoPi / numDatumsThisCircle)
          var datum = registerSVG('drawing', datumFileName, 8, 8, nodex + 41 + radius * Math.cos(theta), nodey + 40 + radius * Math.sin(theta));
          datum.image.opacity(0);
          datums.push(datum);
          if(addToHalves && (numCircles + i) % 2 == 0)
            halves.push(datum);
        }
      }
    }
    fillNode(node1x, node1y, 'images/cassandra/internals/distributed-architecture/vnodes/datum-yellow.svg', true);
    fillNode(715, 225, 'images/cassandra/internals/distributed-architecture/vnodes/datum-blue.svg', false); // node2
    fillNode(550, 385, 'images/cassandra/internals/distributed-architecture/vnodes/datum-bright-green.svg', false); // node3
    var all = [ring2];
    all.forEach(function(i){ i.image.opacity(0); });
    addAnimation('drawing', function() {
      datums.forEach(function(d){ d.image.animate(animationSpeed).opacity(1);});
    });
    addAnimation('drawing', function() {
      node4.image.animate(animationSpeed).move(300, 225);
    });
    addAnimation('drawing', function() {
      node4.image.animate(animationSpeed).move(390, 225);
    });
    addAnimation('drawing', function() {
      ring2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('drawing', function() {
      halves.forEach(function(datum) {
        var newDatum = registerSVG('drawing', 'images/cassandra/internals/distributed-architecture/vnodes/datum-green.svg', 8, 8, datum.image.x(), datum.image.y());
        newDatum.image.opacity(0);
        datum.image.animate(animationSpeed).opacity(0);
        newDatum.image.animate(animationSpeed).opacity(1);
        blueDatums.push(newDatum);
      });
    });
    addAnimation('drawing', function() {
      var n = 0;
      function moveDatam() {
          if(n == blueDatums.length)
            return;
          var d = blueDatums[n];
          n = n + 1;
          d.image.animate(50, '<>').move(d.image.x() - 158, d.image.y() + 166).after(moveDatam);
      }
      moveDatam();
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('vndes')) {
    var ring1 = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/ring1.svg', 388, 388, 400, 70);
    var ring2 = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/vnode-ring-1.svg', 388, 388, 400, 70);
    var ring3 = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/vnode-ring-2.svg', 388, 388, 400, 70);
    var node1 = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/node1.svg', 90, 90, 547, 60);
    var node2 = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/node2.svg', 90, 90, 715, 225);
    var node3 = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/node3.svg', 90, 90, 550, 385);
    var node4 = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/node4.svg', 90, 90, -100, 225);

    var threeNodes = [node1, node2, node3];

    ring2.image.opacity(0);
    ring3.image.opacity(0);

    var datums = [[],[],[]];
    var blueDatums = [[], [], []];

    function fillNode(nodex, nodey, datumFileName, offset, datumsSlice)
    {
      var pi = 3.1415927;
      var twoPi = 2 * pi;
      for(numCircles = 1; numCircles <= 6; numCircles++)
      {
        var numDatumsThisCircle = numCircles * 4;
        var radius = numCircles * 6;
        for(i = 0; i < numDatumsThisCircle; i++)
        {
          var theta = (offset + i) * (twoPi / numDatumsThisCircle)
          var datum = registerSVG('vndes', datumFileName, 8, 8, nodex + 41 + radius * Math.cos(theta), nodey + 40 + radius * Math.sin(theta));
          datum.image.opacity(0);
          datumsSlice.push(datum);
        }
      }
    }
    fillNode(547, 0, 'images/cassandra/internals/distributed-architecture/vnodes/datum-yellow.svg', 0, datums[0]);
    fillNode(770, 225, 'images/cassandra/internals/distributed-architecture/vnodes/datum-blue.svg', 1, datums[1]); // node2
    fillNode(550, 438, 'images/cassandra/internals/distributed-architecture/vnodes/datum-bright-green.svg', 2, datums[2]); // node3

    addAnimation('vndes', function() {
      node1.image.animate(animationSpeed).move(547, 0);
      node2.image.animate(animationSpeed).move(770, 225);
      node3.image.animate(animationSpeed).move(550, 438).after(function() {
        ring2.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('vndes', function() {
      datums.forEach(function(d) {
        d.forEach(function(i) {
          i.image.animate(animationSpeed).opacity(1);
        });
      });
    });
    addAnimation('vndes', function() {
      node4.image.animate(animationSpeed).move(330, 225);
    });
    addAnimation('vndes', function() {
      ring1.image.opacity(0);
      ring2.image.animate(animationSpeed).opacity(0).after(function(){
        ring3.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('vndes', function() {
      var j = 0;
      datums.forEach(function(datumArray) {
        var i = 0;
        newBlue = blueDatums[j++];
        datumArray.forEach(function(datum) {
          if(i++ % 4 != 0)
            return;
          var newDatum = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/datum-green.svg', 8, 8, datum.image.x(), datum.image.y());
          datum.image.animate(animationSpeed).opacity(0);
          newDatum.image.opacity(0);
          newDatum.image.animate(animationSpeed).opacity(1);
          newBlue.push(newDatum);
        });
      });
    });
    addAnimation('vndes', function() {
      var j = 0;
      blueDatums.forEach(function(node) {
        var i = 0;
        var nodeGraphic = threeNodes[j++];
        var xDelta = node4.image.x() - nodeGraphic.image.x();
        var yDelta = node4.image.y() - nodeGraphic.image.y();
        function moveDatam() {
          if(node.length == 0)
            return;
          var d = node[i++];
          node.splice(0, 0);
          d.image.animate(100, '<>').move(d.image.x() + xDelta, d.image.y() + yDelta).after(moveDatam);
        };
        moveDatam();
      });
    });
  }
});

var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('gspr')) {
    var cluster = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/cluster.svg', 461, 462, 400, 20);
    var arrow1 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/arrow1.svg', 120, 53, 330, 45);
    var arrow2 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/arrow2.svg', 85, 232, 520, 160);
    var arrow3 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/arrow3.svg', 234, 279, 480, 120);
    var arrow4 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/arrow4.svg', 293, 299, 490, 110);
    var gossip1 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip1.png', 80, 80, 455, 75);
    var gossip2 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip2.png', 80, 80, 590, 22);
    var gossip3 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip3.png', 80, 80, 725, 76);
    var gossip4 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip4.png', 80, 80, 784, 212);
    var gossip5 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip5.png', 80, 80, 725, 347);
    var gossip6 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip6.png', 80, 80, 592, 400);
    var gossip7 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip7.png', 80, 80, 455, 347);
    var gossip8 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip8.png', 80, 80, 400, 212);
    var all = [arrow1, arrow2, arrow3, arrow4, gossip1, gossip2,
               gossip3, gossip4, gossip5, gossip6, gossip7, gossip8];
    all.forEach(function(i){ i.image.opacity(0); });
    addAnimation('gspr', function() {
      gossip1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('gspr', function() {
      arrow1.image.animate(animationSpeed).opacity(0).after(function(){
        arrow2.image.animate(animationSpeed).opacity(1).after(function(){
          gossip6.image.animate(animationSpeed).opacity(1);
        });
      });
    });
    addAnimation('gspr', function() {
      arrow2.image.animate(animationSpeed).opacity(0).after(function(){
        arrow3.image.animate(animationSpeed).opacity(1).after(function(){
          gossip3.image.animate(animationSpeed).opacity(1);
          gossip8.image.animate(animationSpeed).opacity(1);
        });
      });
    });
    addAnimation('gspr', function() {
      arrow3.image.animate(animationSpeed).opacity(0).after(function(){
        arrow4.image.animate(animationSpeed).opacity(1).after(function(){
          gossip2.image.animate(animationSpeed).opacity(1);
          gossip4.image.animate(animationSpeed).opacity(1);
          gossip5.image.animate(animationSpeed).opacity(1);
          gossip7.image.animate(animationSpeed).opacity(1);
        });
      });
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('whtgsp')) {
    var cluster = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/cluster.svg', 461, 462, 400, 20);
    var largeNode = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/large-node.svg', 74, 74, 404, 214);

    var endpointState = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state.svg', 251, 27, 485, 60);

    var heartbeatState = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/heartbeat-state.svg', 207, 16, 460, 120);
    var heartbeatState0 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/heartbeat-state-0.svg', 236, 45, 550, 120);
    var heartbeatState1 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/heartbeat-state-1.svg', 236, 66, 550, 120);

    var applicationState = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state.svg', 340, 20, 460, 210);
    var applicationState0 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state-0.svg', 239, 41, 485, 210);
    var applicationState1 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state-1.svg', 239, 66, 485, 210);
    var applicationState2 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state-2.svg', 239, 91, 485, 210);
    var applicationState3 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state-3.svg', 239, 116, 485, 210);
    var applicationState4 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state-4.svg', 239, 141, 485, 210);
    var applicationState5 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state-5.svg', 239, 166, 485, 210);
    var applicationState6 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state-6.svg', 239, 191, 485, 210);

   var all = [
     endpointState,

     heartbeatState,
     heartbeatState0,
     heartbeatState1,

    applicationState,
    applicationState0,
    applicationState1,
    applicationState2,
    applicationState3,
    applicationState4,
    applicationState5,
    applicationState6
   ];
   all.forEach(function(i){ i.image.opacity(0); });

    addAnimation('whtgsp', function() {
      cluster.image.animate().opacity(0);
      largeNode.image.animate().move(360, 0).during(function(theta){
        increase = 508 - 74;
        largeNode.image.height(74 + increase * theta);
        largeNode.image.width(74 + increase * theta);
      });
      addAnimation('whtgsp', function() {
        endpointState.image.animate(animationSpeed).opacity(1);
      });
      addAnimation('whtgsp', function() {
        heartbeatState.image.animate(animationSpeed).opacity(1);
      });
      addAnimation('whtgsp', function() {
        heartbeatState0.image.animate(animationSpeed).opacity(1);
      });
      addAnimation('whtgsp', function() {
        heartbeatState1.image.animate(animationSpeed).opacity(1).after(function(){
          heartbeatState0.image.opacity(0);
        });
      });
      addAnimation('whtgsp', function() {
        applicationState.image.animate(animationSpeed).opacity(1);
      });
      addAnimation('whtgsp', function() {
        applicationState0.image.animate(animationSpeed).opacity(1);
      });
      addAnimation('whtgsp', function() {
        applicationState1.image.animate(animationSpeed).opacity(1).after(function(){
          applicationState0.image.opacity(0);
        });
      });
      addAnimation('whtgsp', function() {
        applicationState2.image.animate(animationSpeed).opacity(1).after(function(){
          applicationState1.image.opacity(0);
        });
      });
      addAnimation('whtgsp', function() {
        applicationState3.image.animate(animationSpeed).opacity(1).after(function(){
          applicationState2.image.opacity(0);
        });
      });
      addAnimation('whtgsp', function() {
        applicationState4.image.animate(animationSpeed).opacity(1).after(function(){
          applicationState3.image.opacity(0);
        });
      });
      addAnimation('whtgsp', function() {
        applicationState5.image.animate(animationSpeed).opacity(1).after(function(){
          applicationState4.image.opacity(0);
        });
      });
      addAnimation('whtgsp', function() {
        applicationState6.image.animate(animationSpeed).opacity(1).after(function(){
          applicationState5.image.opacity(0);
        });
      });
    });
  }
});


Animation.animate(function () {
  if(registerCanvas('snc')) {
    var cluster = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/small-cluster.svg', 403, 462, 400, 20);
    var nodeA = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/node-a.svg', 83, 83, 365, 210);
    var nodeC = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/node-c.svg', 83, 83, 750, 210);
    var arrow1sc = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/arrow1-sc.svg', 278, 11, 460, 245);
    var largeNodeA = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/large-node.svg', 508, 508, 0, 0);
    var largeNodeB = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/large-node.svg', 508, 508, 680, 0);

    var endpointStateNode1_0 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-0.svg', 287, 396, 110, 55);
    var endpointStateNode1_1 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-1.svg', 287, 396, 110, 55);
    var endpointStateNode1_2 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-2.svg', 287, 396, 110, 55);
    var endpointStateNode1_3 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-3.svg', 287, 396, 110, 55);
    var endpointStateNode1_4 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-4.svg', 287, 396, 110, 55);
    var endpointStateNode1_5 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-5.svg', 287, 396, 110, 55);
    var endpointStateNode1_6 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-6.svg', 287, 396, 110, 55);
    var endpointStateNode1_7 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-7.svg', 287, 396, 110, 55);
    var endpointStateNode2_0 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node2-0.svg', 287, 396, 790, 55);
    var endpointStateNode2_1 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node2-1.svg', 287, 396, 790, 55);
    var endpointStateNode2_2 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node2-2.svg', 287, 396, 790, 55);
    var endpointStateNode2_3 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node2-3.svg', 287, 396, 790, 55);
    var endpointStateNode2_4 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node2-4.svg', 287, 396, 790, 55);
    var endpointStateNode2_5 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node2-5.svg', 287, 396, 790, 55);
    var endpointStateNode2_6 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node2-6.svg', 287, 396, 790, 55);

    var synArrow = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/arrow1-sc.svg', 278, 11, 460, 150);
    var syn0 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-0.svg', 299, 186, 400, 60);
    var syn1 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-1.svg', 299, 186, 400, 60);
    var syn2 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-2.svg', 299, 186, 400, 60);
    var syn3 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-3.svg', 299, 186, 400, 60);
    var syn4 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-4.svg', 299, 186, 400, 60);
    var syn5 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-5.svg', 299, 186, 488, 60);
    var syn6 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-6.svg', 299, 186, 488, 60);
    var syn7 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-7.svg', 299, 186, 488, 60);

    var ack0 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack-0.svg', 299, 186, 520, 260);
    var ack1 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack-1.svg', 299, 186, 520, 260);
    var ack2 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack-2.svg', 299, 186, 520, 260);
    var ack3 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack-3.svg', 299, 186, 520, 260);
    var ack4 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack-4.svg', 299, 186, 365, 260);
    var ack5 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack-5.svg', 299, 186, 365, 260);

    var ack2_0 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack2-0.svg', 299, 186, 400, 60);
    var ack2_1 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack2-1.svg', 299, 186, 488, 60);

    var ackArrow = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack-arrow.svg', 282, 11, 460, 350);

    var all = [arrow1sc,largeNodeA, largeNodeB,ackArrow,
      endpointStateNode1_0,endpointStateNode1_1,endpointStateNode1_2,endpointStateNode1_3,endpointStateNode1_4,
      endpointStateNode1_5,endpointStateNode1_6,endpointStateNode1_7,endpointStateNode2_0,endpointStateNode2_1,
      endpointStateNode2_2,endpointStateNode2_3,endpointStateNode2_4,endpointStateNode2_5,endpointStateNode2_6,
      synArrow,syn0,syn1,syn2,syn3,syn4,syn5,syn6,syn7,ack0,ack1,ack2,ack3,ack4,ack5,
      ack2_0,ack2_1
    ];
    all.forEach(function(i){ i.image.opacity(0); });


    addAnimation('snc', function() {
      arrow1sc.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      arrow1sc.image.animate(animationSpeed).opacity(0);
      cluster.image.animate(animationSpeed).opacity(0);
      nodeA.image.animate(animationSpeed).move(220, 210);
      nodeC.image.animate(animationSpeed).move(900, 210).after(function() {
        nodeA.image.animate(animationSpeed).opacity(0);
        nodeC.image.animate(animationSpeed).opacity(0);
        largeNodeA.image.animate(animationSpeed).opacity(1);
        largeNodeB.image.animate(animationSpeed).opacity(1).after(function(){
          endpointStateNode1_0.image.animate(animationSpeed).opacity(1);
          endpointStateNode2_0.image.animate(animationSpeed).opacity(1);
        });
      });
    });
    addAnimation('snc', function() {
      synArrow.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      syn0.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      syn1.image.animate(animationSpeed).opacity(1).after(function(){
        syn0.image.opacity(0);
      });
    });
    addAnimation('snc', function() {
      syn2.image.animate(animationSpeed).opacity(1).after(function(){
        syn1.image.opacity(0);
      });
      endpointStateNode1_1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      syn3.image.animate(animationSpeed).opacity(1).after(function(){
        syn2.image.opacity(0);
        endpointStateNode1_1.image.opacity(0);
      });
      endpointStateNode1_2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      syn4.image.animate(animationSpeed).opacity(1).after(function(){
        syn3.image.opacity(0);
        endpointStateNode1_2.image.opacity(0);
      });
      endpointStateNode1_3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      endpointStateNode1_3.image.animate(animationSpeed).opacity(0);
      syn4.image.animate(animationSpeed).move(488, 60);
      synArrow.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('snc', function() {
      syn5.image.animate(animationSpeed).opacity(1).after(function(){
        syn4.image.opacity(0);
      });
      endpointStateNode2_1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      ack0.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      ack1.image.animate(animationSpeed).opacity(1).after(function(){
        ack0.image.opacity(0);
      });
    });
    addAnimation('snc', function() {
      syn6.image.animate(animationSpeed).opacity(1).after(function(){
        syn5.image.opacity(0);
        endpointStateNode2_1.image.opacity(0);
      });
      endpointStateNode2_2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      ack2.image.animate(animationSpeed).opacity(1).after(function(){
        ack1.image.opacity(0);
      });
    });
    addAnimation('snc', function() {
      endpointStateNode2_3.image.animate(animationSpeed).opacity(1).after(function() {
        endpointStateNode2_2.image.opacity(0);
      })
      syn7.image.animate(animationSpeed).opacity(1).after(function(){
        syn6.image.opacity(0);
      });
    });
    addAnimation('snc', function() {
      ack3.image.animate(animationSpeed).opacity(1).after(function(){
        ack2.image.opacity(0);
      });
    });
    addAnimation('snc', function() {
      ackArrow.image.animate(animationSpeed).opacity(1).after(function() {
        syn7.image.animate(animationSpeed).opacity(0);
        endpointStateNode2_3.image.animate(animationSpeed).opacity(0);
        ack3.image.animate(animationSpeed).move(365, 260).after(function(){
          ackArrow.image.animate(animationSpeed).opacity(0);
        });
      });
    });
    addAnimation('snc', function() {
      ack4.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      ack2_0.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      ack4.image.animate(animationSpeed).opacity(0);
      ack5.image.animate(animationSpeed).opacity(1);
      endpointStateNode1_5.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      endpointStateNode1_6.image.animate(animationSpeed).opacity(1).after(function() {
        endpointStateNode1_5.image.opacity(0);
      });
    });
    addAnimation('snc', function() {
      ack3.image.opacity(0);
      ack5.image.animate(animationSpeed).opacity(0);
      endpointStateNode1_7.image.animate(animationSpeed).opacity(1).after(function(){
        endpointStateNode1_6.image.opacity(0);
        ack2_0.image.animate(animationSpeed).move(488, 60);
      });
    });
    addAnimation('snc', function() {
      ack2_1.image.animate(animationSpeed).opacity(1).after(function(){
        ack2_0.image.opacity(0);
      });
      endpointStateNode2_4.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      endpointStateNode2_5.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      endpointStateNode2_6.image.animate(animationSpeed).opacity(1);
      ack2_1.image.animate(animationSpeed).opacity(0);
    });
  }
});


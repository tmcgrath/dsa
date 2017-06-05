var animationSpeed = 250;

Animation.animate(function() {
  if(registerCanvas('replr')) {
    var ringColoredWider = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/ring-colored-wider.svg', 548, 548, 295, -25);
    var ringColored = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/ring-colored.svg', 498, 498, 320, 00);
    var ringColoredSmaller = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/ring-colored-smaller.svg', 444, 444, 348, 26);
    var ringPro = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/ring-pro.svg', 500, 500, 320, 00);

    var replicationFactor1 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/replication-factor-1.svg', 500, 500, 320, 00);
    var replicationFactor2 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/replication-factor-2.svg', 500, 500, 320, 00);
    var replicationFactor3 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/replication-factor-3.svg', 500, 500, 320, 00);

    var partition59Gray = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/partition-59.svg', 106, 36, 1200, 00);
    var partition59Purple1 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/partition-59-purple.svg', 106, 36, 665, 85);
    var partition59Purple2 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/partition-59-purple.svg', 106, 36, 665, 85);
    var partition59Purple3 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/partition-59-purple.svg', 106, 36, 665, 85);

    var rfArrow1 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/rf-1-arrow.svg', 199, 207, 470, 140);
    var rfArrow2 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/rf-2-arrow.svg', 244, 208, 420, 140);
    var rfArrow3 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/rf-3-arrow.svg', 244, 228, 430, 116);

    replicationFactor3.image.opacity(0);
    replicationFactor2.image.opacity(0);
    replicationFactor1.image.opacity(0);
    ringColoredWider.image.opacity(0);
    ringColored.image.opacity(0);
    partition59Purple1.image.opacity(0);
    partition59Purple2.image.opacity(0);
    partition59Purple3.image.opacity(0);
    rfArrow1.image.opacity(0);
    rfArrow2.image.opacity(0);
    rfArrow3.image.opacity(0);

    var arrow3 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/arrow3.svg', 80, 50, 760, 50);
    arrow3.image.opacity(0);
    addAnimation('replr', function() {
      replicationFactor1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('replr', function() {
      arrow3.image.animate(animationSpeed).opacity(1).after(function() {
        partition59Gray.image.animate(animationSpeed * 2).move(850, 45);
      });
    });
    addAnimation('replr', function() {
      partition59Gray.image.animate(animationSpeed).move(665, 85); // key spot
    });
    addAnimation('replr', function() {
      partition59Purple1.image.animate(animationSpeed).opacity(1).after(function() {
        partition59Gray.image.opacity(0);
      });
    });
    addAnimation('replr', function() {
      rfArrow1.image.animate(animationSpeed).opacity(1).after(function() {
        partition59Purple1.image.animate(animationSpeed * 2).move(375, 380);
      });
    });
    addAnimation('replr', function() {
      rfArrow1.image.animate(animationSpeed).opacity(0);
      partition59Purple1.image.animate(animationSpeed).opacity(0);
      arrow3.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('replr', function() {
      replicationFactor1.image.animate(animationSpeed).opacity(0).after(function(){
        replicationFactor2.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('replr', function() {
      ringColored.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('replr', function() {
      partition59Purple1.image.move(1200, 0);
      partition59Purple1.image.opacity(1);
      arrow3.image.animate(animationSpeed).opacity(1).after(function() {
        partition59Purple1.image.animate(animationSpeed * 2).move(665, 85);
      });
    });
    addAnimation('replr', function() {
      rfArrow2.image.animate(animationSpeed).opacity(1).after(function(){
        partition59Purple2.image.opacity(1);
        partition59Purple1.image.animate(animationSpeed * 2).move(375, 380);
        partition59Purple2.image.animate(animationSpeed * 2).move(312, 235);
      });
    });
    addAnimation('replr', function() {
      arrow3.image.animate(animationSpeed).opacity(0);
      rfArrow2.image.animate(animationSpeed).opacity(0);
      partition59Purple1.image.animate(animationSpeed).opacity(0);
      partition59Purple2.image.animate(animationSpeed).opacity(0).after(function() {
        partition59Purple1.image.move(1200, 0);
        partition59Purple1.image.opacity(1);
        partition59Purple2.image.opacity(0);
        partition59Purple2.image.move(665, 85);
      });
    });
    addAnimation('replr', function() {
      replicationFactor2.image.animate(animationSpeed).opacity(0).after(function(){
        replicationFactor3.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('replr', function() {
      ringColoredWider.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('replr', function() {
      arrow3.image.animate(animationSpeed).opacity(1).after(function() {
        partition59Purple1.image.animate(animationSpeed * 2).move(665, 85);
      });
    });
    addAnimation('replr', function() {
      rfArrow3.image.animate(animationSpeed).opacity(1).after(function() {
        partition59Purple1.image.animate(animationSpeed * 2).move(375, 380);
        partition59Purple2.image.opacity(1);
        partition59Purple3.image.opacity(1);
        partition59Purple2.image.animate(animationSpeed * 2).move(312, 235);
        partition59Purple3.image.animate(animationSpeed * 2).move(375, 85);
      });
    });
    addAnimation('replr', function() {
      partition59Purple1.image.animate(animationSpeed).opacity(0);
      partition59Purple2.image.animate(animationSpeed).opacity(0);
      partition59Purple3.image.animate(animationSpeed).opacity(0);
      arrow3.image.animate(animationSpeed).opacity(0);
      rfArrow3.image.animate(animationSpeed).opacity(0);
    });
  }
});

Animation.animate(function() {
  if(registerCanvas('rqst')) {
    var ringColoredWider = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/ring-colored-wider.svg', 548, 548, 295, -25);
    var ringColored = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/ring-colored.svg', 498, 498, 320, 00);
    var ringColoredSmaller = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/ring-colored-smaller.svg', 444, 444, 348, 26);
    var ringPro = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/ring-pro.svg', 500, 500, 320, 00);
    var partition59 = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/partition-59-purple.svg', 106, 36, 312, 235);

    var request59Arrow1 = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/request59-arrow-1.svg', 70, 54, 760, 405);
    var request59Arrow2 = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/request59-arrow-2.svg', 230, 98, 430, 270);

    var x1 = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/x.svg', 81, 87, 385, 60);
    var x2 = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/x.svg', 81, 87, 385, 355);

    request59Arrow1.image.opacity(0);
    request59Arrow2.image.opacity(0);
    partition59.image.opacity(0);

    addAnimation('rqst', function() {
      request59Arrow1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rqst', function() {
      request59Arrow2.image.animate(animationSpeed).opacity(1);
      partition59.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rqst', function() {
      partition59.image.animate(1000).move(1300, 600).after(function() {
        request59Arrow1.image.animate(animationSpeed).opacity(0);
        request59Arrow2.image.animate(animationSpeed).opacity(0);
      });
    });
  }
});

Animation.animate(function() {
  if(registerCanvas('mdat')) {
    var dcWest = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-west.svg', 260, 294, 236, 58);
    var dcEast = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-east.svg', 260, 294, 650, 58);
    var fullRing = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/ring-colored-smaller.svg', 444, 444, 355, 5);
    var dcWestDonut = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-west-donut.svg', 210, 210, 260, 110);
    var dcEastDonut = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-east-donut.svg', 210, 210, 676, 110);

    var node0 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node0.svg', 71, 69, 540, 10);
    var node1 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node1.svg', 71, 69, 675, 65);
    var node2 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node2.svg', 71, 69, 725, 190);
    var node3 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node3.svg', 71, 69, 675, 320);
    var node4 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node4.svg', 71, 69, 540, 372);
    var node5 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node5.svg', 71, 69, 410, 320);
    var node6 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node6.svg', 71, 69, 355, 190);
    var node7 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node7.svg', 71, 69, 405, 65);
    var createKeyspace = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/create-keyspace.svg', 363, 86, 0, 0);
    var arrow1 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-arrow1.svg', 148, 48, 180, 260);
    var arrow2 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-arrow2.svg', 102, 100, 290, 165);
    var arrow3 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-arrow3.svg', 270, 12, 410, 300);
    var arrow4 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-arrow4.svg', 101, 77, 708, 180);
    var data68_1 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/partition-59-bright.svg', 106, 36, -130, 200);
    var data68_2 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/partition-59-bright.svg', 106, 36, 310, 315);
    var data68_3 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/partition-59-bright.svg', 106, 36, 310, 315);
    var data68_4 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/partition-59-bright.svg', 106, 36, 660, 315);
    var data68_5 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/partition-59-bright.svg', 106, 36, 660, 315);
    var coordinatorLabel = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/coordinator-label.svg', 117, 17, 310, 360);
    var remoteCoordinatorLabel = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/remote-coordinator-label.svg', 196, 17, 620, 360);

    dcWestDonut.image.opacity(0);
    dcEastDonut.image.opacity(0);

    var all = [dcWest, dcEast, arrow1, arrow2, arrow3, arrow4,
             data68_2, data68_3, data68_4, data68_5, coordinatorLabel, remoteCoordinatorLabel, createKeyspace];
    var all2 = [arrow1, arrow2, arrow3, arrow4, data68_1,
                data68_2, data68_3, data68_4, data68_5, coordinatorLabel, remoteCoordinatorLabel];
    all.forEach(function(i){ i.image.opacity(0); });
    addAnimation('mdat', function() {
      fullRing.image.animate(animationSpeed).opacity(0);
      var s = animationSpeed * 2;
      node0.image.animate(s).move(330, 90);
      node2.image.animate(s).move(420, 182);
      node4.image.animate(s).move(330, 270);
      node6.image.animate(s).move(240, 182);

      node1.image.animate(s).move(810, 115);
      node3.image.animate(s).move(810, 245);
      node5.image.animate(s).move(680, 245);
      node7.image.animate(s).move(680, 115).after(function(){
        dcWest.image.animate(animationSpeed).opacity(1);
        dcEast.image.animate(animationSpeed).opacity(1);
        dcWestDonut.image.animate(animationSpeed).opacity(1);
        dcEastDonut.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('mdat', function() {
      createKeyspace.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('mdat', function() {
      arrow1.image.animate(animationSpeed).opacity(1).after(function(){
        data68_1.image.animate(animationSpeed).move(310, 315).after(function(){
          coordinatorLabel.image.animate(animationSpeed).opacity(1);
        });
      });
    });
    addAnimation('mdat', function() {
      arrow3.image.animate(animationSpeed).opacity(1)
      arrow2.image.animate(animationSpeed).opacity(1).after(function() {
        data68_1.image.opacity(1);
        data68_2.image.opacity(1);
        data68_3.image.opacity(1);
        data68_1.image.animate(animationSpeed).move(660, 315).after(function(){
          remoteCoordinatorLabel.image.animate(animationSpeed).opacity(1);
        });
        data68_2.image.animate(animationSpeed).move(220, 200);
        data68_3.image.animate(animationSpeed).move(310, 110);
      });
    });
    addAnimation('mdat', function() {
      arrow4.image.animate(animationSpeed).opacity(1).after(function() {
        data68_4.image.opacity(1);
        data68_5.image.opacity(1);
        data68_1.image.animate(animationSpeed).move(660, 260);
        data68_4.image.animate(animationSpeed).move(660, 130);
        data68_5.image.animate(animationSpeed).move(790, 130);
      });
    });
    addAnimation('mdat', function() {
      all2.forEach(function(i){ i.image.animate(animationSpeed).opacity(0); });
    });
  }
});

var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('dueji')) {
    var cap = registerSVG('dueji', 'images/cassandra/internals/distributed-architecture/consistency-level/cap-theorem.svg', 558, 430, 320, 0);
    var cassandraLabel = registerSVG('dueji', 'images/cassandra/internals/distributed-architecture/consistency-level/cassandra-label.svg', 120, 17, 605, 230);
    cassandraLabel.image.opacity(0);
    addAnimation('dueji', function() {
      cassandraLabel.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('cftw')) {
    var ring = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/ring.svg', 373, 360, 440, 0);
    var arrow1 = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow1.svg', 90, 32, 500, -10);
    var clientLabel = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/client-label.svg', 70, 20, 440, 5);
    var arrow2 = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow2.svg', 225, 210, 535, 60);
    var arrow3 = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow3.svg', 139, 65, 630, 55);
    var arrow4 = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow4.svg', 83, 200, 550, 65);
    var arrow5 = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow5.svg', 109, 200, 622, 65);
    var arrow6 = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow6.svg', 104, 26, 490, 0);
    var clOne = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/cl-one.svg', 82, 17, 720, 10);
    var clQuorum = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/cl-quorum.svg', 131, 18, 720, 10);
    var clAll = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/cl-all.svg', 76, 17, 720, 10);
    var all = [arrow1, clientLabel, arrow2, arrow3,
              arrow4, arrow5, arrow6, clOne, clQuorum, clAll];
    all.forEach(function(i){ i.image.opacity(0); });
    addAnimation('cftw', function() {
      clientLabel.image.animate(animationSpeed).opacity(1);
      arrow1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cftw', function() {
      arrow2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cftw', function() {
      clOne.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cftw', function() {
      arrow3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cftw', function() {
      arrow6.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cftw', function() {
      clOne.image.animate(animationSpeed).opacity(0).after(function() {
        clQuorum.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('cftw', function() {
      arrow4.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cftw', function() {
      clQuorum.image.animate(animationSpeed).opacity(0).after(function() {
        clAll.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('cftw', function() {
      arrow5.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('hicu')) {
    var ring2 = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/ring2.svg', 405, 413, 400, 20);
    var arrow1 = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow2.1.svg', 92, 49, 300, 170);
    var arrow2 = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow2.2.svg', 262, 271, 475, 90);
    var arrow3 = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow2.3.svg', 114, 122, 470, 240);
    var arrow4 = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow2.4.svg', 101, 55, 300, 155);
    var clientLabel = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/client-label2.svg', 117, 37, 250, 120);
    var writeLabel = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/write-label.svg', 150, 12, 550, 0);
    var readLabel = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/read-label.svg', 150, 12, 450, 410);
    var rfLabel = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/rf-label.svg', 120, 26, 565, 215);
    var bigCircle = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/big-oval.svg', 333, 421, 460, 16);
    var littleCircle = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/little-oval.svg', 82, 86, 562, 352);
    var all = [arrow1, arrow2, arrow3, arrow4, clientLabel,
              writeLabel, readLabel, rfLabel, bigCircle, littleCircle];
    all.forEach(function(i){ i.image.opacity(0); });
    addAnimation('hicu', function() {
      clientLabel.image.animate(animationSpeed).opacity(1);
      arrow1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('hicu', function() {
      arrow2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('hicu', function() {
      writeLabel.image.animate(animationSpeed).opacity(1);
      bigCircle.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('hicu', function() {
      readLabel.image.animate(animationSpeed).opacity(1);
      littleCircle.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('hicu', function() {
      arrow3.image.animate(animationSpeed).opacity(1);
      arrow4.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('strq')) {
    var ring = registerSVG('strq', 'images/cassandra/internals/distributed-architecture/consistency-level/cl-one-ring.svg', 542, 412, 260, 25);
    var initialRequest1 = registerSVG('strq', 'images/cassandra/internals/distributed-architecture/consistency-level/initial-request-arrows-1.svg', 110, 57, 284, 165);
    var initialRequest2 = registerSVG('strq', 'images/cassandra/internals/distributed-architecture/consistency-level/initial-request-arrows-2.svg', 110, 57, 284, 165);
    var requestOne = registerSVG('strq', 'images/cassandra/internals/distributed-architecture/consistency-level/quorum-write.svg', 494, 293, 386, 0);
    var requestTwo = registerSVG('strq', 'images/cassandra/internals/distributed-architecture/consistency-level/quorum-read.svg', 347, 274, 460, 180);
    initialRequest1.image.opacity(0);
    initialRequest2.image.opacity(0);
    requestOne.image.opacity(0);
    requestTwo.image.opacity(0);
    addAnimation('strq', function() {
      initialRequest1.image.animate(animationSpeed).opacity(1);
      requestOne.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('strq', function() {
      initialRequest2.image.animate(animationSpeed).opacity(1);
      requestTwo.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('cloney')) {
    var ring = registerSVG('cloney', 'images/cassandra/internals/distributed-architecture/consistency-level/cl-one-ring.svg', 542, 412, 260, 25);
    var initialRequest1 = registerSVG('cloney', 'images/cassandra/internals/distributed-architecture/consistency-level/initial-request-arrows-1.svg', 110, 57, 284, 165);
    var initialRequest2 = registerSVG('cloney', 'images/cassandra/internals/distributed-architecture/consistency-level/initial-request-arrows-2.svg', 110, 57, 284, 165);
    var requestOne = registerSVG('cloney', 'images/cassandra/internals/distributed-architecture/consistency-level/cl-one-request-1.svg', 240, 229, 455, 0);
    var requestTwo = registerSVG('cloney', 'images/cassandra/internals/distributed-architecture/consistency-level/cl-one-request-2.svg', 245, 210, 455, 240);
    initialRequest1.image.opacity(0);
    initialRequest2.image.opacity(0);
    requestOne.image.opacity(0);
    requestTwo.image.opacity(0);
    addAnimation('cloney', function() {
      initialRequest1.image.animate(animationSpeed).opacity(1);
      requestOne.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cloney', function() {
      initialRequest2.image.animate(animationSpeed).opacity(1);
      requestTwo.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('qvlq')) {
    var ring2 = registerSVG('qvlq', 'images/cassandra/internals/distributed-architecture/consistency-level/two-dcs.svg', 522, 241, 330, 50);
    var arrow1 = registerSVG('qvlq', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow3.1.svg', 147, 68, 280, 0);
    var arrow2 = registerSVG('qvlq', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow3.2.svg', 140, 144, 395, 100);
    var arrow3 = registerSVG('qvlq', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow3.3.svg', 310, 175, 480, 65);
    var localQuorum = registerSVG('qvlq', 'images/cassandra/internals/distributed-architecture/consistency-level/local-quorum.svg', 259, 277, 325, 44);
    var quorum = registerSVG('qvlq', 'images/cassandra/internals/distributed-architecture/consistency-level/quorum.svg', 600, 320, 315, 30);

    var all = [arrow1, arrow2, arrow3, localQuorum, quorum];
    all.forEach(function(i){ i.image.opacity(0); });

    addAnimation('qvlq', function() {
      arrow1.image.animate(animationSpeed).opacity(1);
      arrow2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('qvlq', function() {
      localQuorum.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('qvlq', function() {
      arrow3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('qvlq', function() {
      quorum.image.animate(animationSpeed).opacity(1);
    });
  }
});

var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('hhdoff')) {
    var cluster = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/cluster.svg', 461, 462, 400, 0);
    var arrow1 = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/arrow-1.svg', 270, 42, 120, 190);
    var arrow2 = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/arrow-2.svg', 123, 128, 480, 80);
    var arrow3 = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/arrow-3.svg', 292, 12, 485, 230);
    var arrow4 = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/arrow-4.svg', 117, 119, 480, 260);
    var data1 = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/data.svg', 108, 40, -100, 180);
    var data2 = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/data.svg', 108, 40, 385, 210);
    var data3 = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/data.svg', 108, 40, 385, 210);
    var x = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/x.svg', 79, 76, 592, 380);
    var all = [arrow1, arrow2, arrow3, arrow4, data2, data3, x];
    all.forEach(function(i) { i.image.opacity(0); });
    addAnimation('hhdoff', function() {
      // data 390 203
      arrow1.image.animate(animationSpeed).opacity(1).after(function() {
        data1.image.animate(animationSpeed).move(385, 210);
      });
    });
    addAnimation('hhdoff', function() {
      data2.image.opacity(1);
      data3.image.opacity(1);
      arrow2.image.animate(animationSpeed).opacity(1).after(function() {
        data3.image.animate(animationSpeed).move(575,20);
      });
      arrow3.image.animate(animationSpeed).opacity(1).after(function() {
        data2.image.animate(animationSpeed).move(765,210);
      });
      arrow4.image.animate(animationSpeed).opacity(1).after(function() {
        data1.image.animate(animationSpeed, '<').move(500, 330).after(function(){
          x.image.opacity(1);
        });
      });
    });
    addAnimation('hhdoff', function() {
      data1.image.animate(animationSpeed).move(390, 260).after(function() {
        data2.image.animate(animationSpeed).opacity(0);
        data3.image.animate(animationSpeed).opacity(0);
        arrow2.image.animate(animationSpeed).opacity(0);
        arrow3.image.animate(animationSpeed).opacity(0);
        arrow4.image.animate(animationSpeed).opacity(0);
        arrow1.image.animate(animationSpeed).opacity(0);
      });
    });
    addAnimation('hhdoff', function() {
      x.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('hhdoff', function() {
      data1.image.animate(animationSpeed).opacity(1).after(function(){
        arrow4.image.animate(animationSpeed).opacity(1);
        data1.image.animate(animationSpeed).move(575, 400).after(function() {
          data1.image.animate(animationSpeed).opacity(0);
          arrow4.image.animate(animationSpeed).opacity(0);
        });
      });
    });
  }
});

var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('nrred')) {
    var cluster = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/cluster.svg', 497, 493, 400, 25);
    var arrow1 = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/arrow1.svg', 153, 29, 240, 235);
    var arrow3 = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/arrow3.svg', 287, 165, 500, 110);
    var arrow2 = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/arrow2-2.svg', 289, 324, 500, 105);
    var consistencyLevel = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/consistency-level.svg', 366, 584, 527, 0);
    var data = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/data.svg', 96, 44, 600, 450);
    var hash23_1 = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/hash-23.svg', 96, 44, 600, 50);
    var hash23_2 = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/hash-23.svg', 96, 44, 800, 250);
    var hash23_3 = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/hash-23.svg', 96, 44, 400, 320);
    var all = [arrow1, arrow2, arrow3, consistencyLevel, data, hash23_1, hash23_2, hash23_3];
    all.forEach(function(i){i.image.opacity(0);});
  //  var hash23_3 = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/hash-23.svg', 96, 44, 0, 0);
    addAnimation('nrred', function() {
      arrow1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('nrred', function() {
      consistencyLevel.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('nrred', function() {
      arrow2.image.animate(animationSpeed).opacity(1);
      arrow3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('nrred', function() {
      data.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('nrred', function() {
      hash23_1.image.animate(animationSpeed).opacity(1);
      hash23_2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('nrred', function() {
      data.image.animate(animationSpeed).move(400, 320);
    });
    addAnimation('nrred', function() {
      hash23_1.image.animate(animationSpeed).move(400, 200);
      hash23_2.image.animate(animationSpeed).move(400, 260);
    });
    addAnimation('nrred', function() {
      hash23_3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('nrred', function() {
      hash23_1.image.animate(animationSpeed).move(400, 260);
      hash23_3.image.animate(animationSpeed).move(400, 260).after(function() {
        hash23_1.image.animate(animationSpeed).opacity(0);
        hash23_2.image.animate(animationSpeed).opacity(0);
        hash23_3.image.animate(animationSpeed).opacity(0);
      });
    });
    addAnimation('nrred', function() {
      data.image.animate(animationSpeed).move(-200,200);
      arrow1.image.animate(animationSpeed).opacity(0);
      arrow2.image.animate(animationSpeed).opacity(0);
      arrow3.image.animate(animationSpeed).opacity(0);
    });
  }
});


Animation.animate(function () {
  if(registerCanvas('rdrpairr')) {
    var cluster = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/cluster.svg', 497, 493, 400, 25);
    var arrow1 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/arrow1.svg', 153, 29, 240, 235);
    var arrow3 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/arrow3.svg', 287, 165, 500, 110);
    var arrow2 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/arrow2-2.svg', 289, 324, 500, 105);
    var consistencyLevel = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/consistency-level.svg', 366, 584, 527, 0);
    var data = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/data.svg', 96, 44, 600, 450);
    var hash42 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/hash-42.svg', 96, 44, 800, 250);
    var hash69 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/hash-69.svg', 96, 44, 600, 50);
    var hash23 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/hash-23.svg', 96, 44, 400, 320);

    var data122 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/data-122.svg', 232, 44, 530, 50);
    var data159_1 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/data-159.svg', 232, 44, 330, 260);
    var data159 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/data-159.svg', 232, 44, 730, 250);
    var data135 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/data-135.svg', 232, 44, 330, 320);

    var all = [arrow1, arrow2, consistencyLevel, data, hash23, hash42, hash69,
               data122, data159,data135,arrow3,data159_1];
    all.forEach(function(i){i.image.opacity(0);});
    addAnimation('rdrpairr', function() {
      arrow1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      consistencyLevel.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      arrow2.image.animate(animationSpeed).opacity(1);
      arrow3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      data.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      hash42.image.animate(animationSpeed).opacity(1);
      hash69.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      data.image.animate(animationSpeed).move(400, 320);
    });
    addAnimation('rdrpairr', function() {
      hash69.image.animate(animationSpeed).move(400, 200);
      hash42.image.animate(animationSpeed).move(400, 260);
      arrow2.image.animate(animationSpeed).opacity(0);
      arrow3.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('rdrpairr', function() {
      hash23.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      hash23.image.animate(animationSpeed).move(400, 260);
      hash69.image.animate(animationSpeed).move(400, 260).after(function() {
        hash69.image.animate(animationSpeed).opacity(0);
        hash42.image.animate(animationSpeed).opacity(0);
      });
    });
    addAnimation('rdrpairr', function() {
      hash23.image.animate(animationSpeed).opacity(0);
      hash42.image.animate(animationSpeed).opacity(0);
      hash69.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('rdrpairr', function() {
      data135.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      arrow3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      data122.image.animate(animationSpeed).opacity(1);
      data159.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      data122.image.animate(animationSpeed).move(330, 200);
      data159.image.animate(animationSpeed).move(330, 260);
      arrow3.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('rdrpairr', function() {
      data.image.move(400, 260);
      data122.image.animate(animationSpeed).opacity(0);
      data135.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('rdrpairr', function() {
      data159.image.animate(animationSpeed).move(530, 50);
      data159_1.image.opacity(1);
      data159_1.image.animate(animationSpeed).move(525, 455);
      data.image.animate(animationSpeed).move(-200,200);
    });
    addAnimation('rdrpairr', function() {
      data159.image.animate(animationSpeed).opacity(0);
      data159_1.image.animate(animationSpeed).opacity(0);
      arrow1.image.animate(animationSpeed).opacity(0);
      arrow3.image.animate(animationSpeed).opacity(0);
      consistencyLevel.image.animate(animationSpeed).opacity(0);
    });
  }
});


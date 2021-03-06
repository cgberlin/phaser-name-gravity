var winH = window.innerHeight;
var winW = window.innerWidth;


function preload() {
  game.load.image('first', 'http://i.imgur.com/105gPPB.png');
  game.load.image('last', 'http://i.imgur.com/9x8lNpr.png');
}

var sprite;
var text;
var game = new Phaser.Game(winW, winH, Phaser.CANVAS, 'phaser', { preload: preload, create: create, update: update });
function create() {

    game.stage.backgroundColor = 0xffffff;

    game.physics.startSystem(Phaser.Physics.P2JS);



    sprite = game.add.sprite(100, 96, 'first');
    sprite2 = game.add.sprite(100, 96, 'last');
    game.physics.enable([sprite, sprite2], Phaser.Physics.P2JS);
    game.physics.p2.gravity.y = -100;

    sprite.inputEnabled = true;
    sprite.input.enableDrag(true);
    sprite2.inputEnabled = true;
    sprite2.input.enableDrag(true);

    sprite.events.onDragStart.add(startDrag, this);
    sprite.events.onDragStop.add(stopDrag, this);
    sprite2.events.onDragStart.add(startDrag, this);
    sprite2.events.onDragStop.add(stopDrag, this);


}

function startDrag() {
  sprite.body.moves = false;

  console.log('startdrag');
}

function stopDrag() {
  sprite.body.moves = true;
  console.log('stopdrag');
}


function update() {
    if( sprite.input.isDragged ){
      //BODY => follow pointer
      if( sprite.body != null ){
        sprite.body.x = game.input.activePointer.worldX;
        sprite.body.y = game.input.activePointer.worldY;
      }
    }
    if( sprite2.input.isDragged ){
      //BODY => follow pointer
      if( sprite2.body != null ){
        sprite2.body.x = game.input.activePointer.worldX;
        sprite2.body.y = game.input.activePointer.worldY;
      }
    }

}

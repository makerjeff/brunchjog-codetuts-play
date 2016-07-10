/**
 * Created by jeffersonwu on 7/9/16.
 */

/**
 * Bug.
 * @param size The size of the bug.
 * @param health How long should the bug live.
 * @constructor
 */
var Bug = function(x, y, size, health){

    this.x = x;
    this.y = y;
    this.size = size;
    this.health = health;

    /*things to define:
     - width and height of sprite
     - total number of frames

     - current position
     - delay (random)
     - target position
     */
};

//spawn a bug
Bug.prototype.spawn = function(x, y){
    this.div = document.createElement('div');
    this.div.classList.add('bug');
    this.div.style.left = this.x + 'px';
    this.div.style.top = this.y + 'px';

    document.body.appendChild(this.div);
};

//animate the bug



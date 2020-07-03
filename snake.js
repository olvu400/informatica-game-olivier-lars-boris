function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    //teken snake
    this.draw = function() {
        ctx.fillStyle = "#FFFFFF";
        for (let i=0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale);
    }

    //updatefunctie zodat de snake aan de achterkant weer weg gaat
    this.update = function() {
        for (let i=0; i<this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y};


        this.x += this.xSpeed;
        this.y += this.ySpeed;

        //boundries voor waar de slang wel en niet heen kan
        if (this.x > canvas.width) {
            this.x = 0;
        }

        if (this.y > canvas.height) {
            this.y = 0;
        }

        if (this.x  < 0) {
            this.x = canvas.width;
        }

        if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    //keystrokes voor het bewegen voor de slang
    this.changeDirection = function(direction) {
        switch(direction) {
            case 'Up':
            this.xSpeed = 0;
            this.ySpeed = -scale *1;
                break;
            case 'Down':
            this.xSpeed = 0;
            this.ySpeed = scale *1;
                break;
            case 'Left':
            this.xSpeed = -scale *1;
            this.ySpeed = 0;
                break;
            case 'Right':
            this.xSpeed = scale *1;
            this.ySpeed = 0;
                break;
        }
    }

    //check of de slang zijn hoofd op dezelfde x en y positie staat als de locatie van het fruit
    this.eat = function(fruit) {
        if (this.x === fruit.x && 
           this.y === fruit.y) {
            this.total++;
            return true;
        }

        return false;
    }

    //checken of het hoofd van de slang het lichaam van de slang raakt
    this.checkCollision = function() {
        for (var i=0; i < this.tail.length; i++) {
             if (this.x === tail.x && this.y === tail.y) {
            this.total = 0;
            this.tail = [];
            console.log("test for death");
            }
        }
    }
}

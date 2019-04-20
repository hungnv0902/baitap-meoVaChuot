function rat(name, weight, speed,live,look ) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.live = live;
    this.look = look;

    this.getWeight = function () {
        document.write("Trong luong cua chuot " + this.name + " la " + this.weight +  "</br>")
    };

    this.ratTalk = function (talk) {
        document.write( this.name + ": " + talk + "</br>");
        console.log(talk);
    };
}

function cat(name, weight, maxspeed) {
    this.name = name;
    this.weight = weight;
    this.maxspeed = maxspeed;

    this.catTalk = function (cattalk) {
        document.write(cattalk + "</br>")
    };

    this.catchMouse = function (mouse) {
        if (this.maxspeed > mouse.speed && mouse.live == true) {
            document.write("Chuot " + mouse.name + " bi meo " + this.name+  " bat" + "</br>");
            mouse.look = true;
        } else {
            mouse.look = false;
            document.write("Chuot " + mouse.name + " chay thoat" + "</br>");
        }
    };

    this.eatMouse = function (mouse) {
        if (mouse.look == true) {
            if(mouse.weight > 0) {
                mouse.weight --;
                this.weight ++;
                mouse.getWeight();
                this.getWeight();
            } else {
                document.write("Da an het chuot " + mouse.name + "</br>")
            }
        } else {
            document.write("Chua bat duoc chuot " + mouse.name+ "</br>")
        }
    };

    this.getWeight = function () {
        document.write("Trong luong cua meo " + this.name + " la " + this.weight+ "</br>");
    };


}


let mickey = new rat("Mickey", 14, 50, true, false)

let jerry = new rat ('Jerry', 13 , 30, true, false );
let tom = new cat ( 'Tom', 200, 40);

jerry.ratTalk("chit chit");

tom.catchMouse(jerry);
tom.catchMouse(mickey);

for (let i = 1; i < 15; i ++) {
    tom.eatMouse(jerry);
}

jerry.getWeight();

mickey.getWeight();

tom.getWeight();
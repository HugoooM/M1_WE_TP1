
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Shape(thickness, currColour){
    this.currColour = currColour;
    this.thickness = thickness;
}

function Drawing() {
    this.drawings = [];
}

function Rectangle(x, y, width, height, thickness, currColour){
    Shape.call(this, thickness, currColour);
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
}

Rectangle.prototype = new Shape();

function Line(x1, x2, y1, y2, thickness, currColour){
    Shape.call(this, thickness, currColour);
    this.x_start = x1;
    this.y_start = y1;
    this.x_final = x2;
    this.y_final = y2;
}

Line.prototype = new Shape();

// Rectangle function
Rectangle.prototype.getInitX = function() {
    return this.x;
};

Rectangle.prototype.getInitY = function() {
    return this.y;
};

Rectangle.prototype.getWidth= function() {
    return this.width;
};

Rectangle.prototype.getHeight = function() {
    return this.height;
};

// Line function
Line.prototype.getInitX = function() {
    return this.x_start;
};

Line.prototype.getInitY = function() {
    return this.y_start;
};

Line.prototype.getFinalX = function() {
    return this.x_final;
};

Line.prototype.getFinalY = function() {
    return this.y_final;
};

Drawing.prototype.getForms = function (){
    return this.drawings;
};
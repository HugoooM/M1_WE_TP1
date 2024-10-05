
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.currColour;
    ctx.lineWidth = this.thickness;
    ctx.rect(this.getInitX(), this.getInitY(), this.getWidth(),   this.getHeight());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.currColour;
    ctx.beginPath();
    ctx.lineWidth = this.thickness;
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        eltDuTableau.paint(ctx);
    });
};

Shape.prototype.paint = function (ctx){
    this.currColour = ctx.currColour;
    this.thickness = ctx.thickness;
}

function updateShapeList(drawings){
    var ul = document.getElementById("shapeList");
    ul.innerHTML = ''; // Clear list

    drawings.forEach(function(shape, id){
        var li = document.createElement("li");
        li.id = id;
        var text = document.createTextNode(shape.constructor.name + ' - ' +
            shape.currColour + ' - ' + shape.thickness + 'px');
        li.appendChild(text);

        var button = document.createElement("button");
        button.addEventListener('click', function (){
            deleteShape(id, drawings);
        });
        var text  = document.createTextNode('Supprimer la forme');
        button.appendChild(text);

        li.appendChild(button);
        ul.appendChild(li);
    });
}

function deleteShape(id, drawings){
    drawings.delete(id);
    document.getElementById(id).remove();
    drawing.paint(ctx);

}
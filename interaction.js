
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.x_initalPos = 0;
  this.y_initialPos = 0;
  this.x_finalPos = 0;
  this.y_finalPos = 0;
  this.pressed = false;
  this.interactor = interactor;

	// Developper les 3 fonctions gérant les événements

  this.mouseDown = function (evt){
    this.pressed = true;

    var pos = getMousePosition(canvas, evt);
    this.x_initalPos = pos.x;
    this.y_initialPos = pos.y;
    this.interactor.onInteractionStart(this);

  }.bind(this)

  this.mouseMove = function (evt){
    if (this.pressed){
      var pos = getMousePosition(canvas, evt);

      this.x_finalPos = pos.x;
      this.y_finalPos = pos.y;
      this.interactor.onInteractionUpdate(this);
    }

  }.bind(this)

  this.mouseUp = function (evt){
    if (this.pressed){
      var pos = getMousePosition(canvas, evt);

      this.x_finalPos = pos.x;
      this.y_finalPos = pos.y;

      this.pressed = false;
      this.interactor.onInteractionEnd(this);

    }
  }.bind(this)

	// Associer les fonctions précédentes aux évènements du canvas.

  canvas.addEventListener('mousedown', this.mouseDown, false);
  canvas.addEventListener('mousemove', this.mouseMove, false);
  canvas.addEventListener('mouseup', this.mouseUp, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};





var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById('butRect').onclick = (_) => this.currEditingMode = editingMode.rect
	document.getElementById('butLine').onclick = (_) => this.currEditingMode = editingMode.line
	document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth = e.target.value
	document.getElementById('colour').onchange = (e) => this.currColour = e.target.value

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd){
		if (this.currEditingMode === editingMode.rect){
			this.currentShape = new Rectangle();
		} else{
			this.currentShape = new Line();
		}

		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionUpdate = function (dnd){
		if (this.currEditingMode === editingMode.rect){
			this.currentShape = new Rectangle(
				dnd.x_initalPos,
				dnd.y_initialPos,
				dnd.x_finalPos - dnd.x_initalPos,
				dnd.y_finalPos - dnd.y_initialPos,
				this.currLineWidth,
				this.currColour
				)
		} else{
			this.currentShape = new Line(
				dnd.x_initalPos,
				dnd.x_finalPos,
				dnd.y_initialPos,
				dnd.y_finalPos,
				this.currLineWidth,
				this.currColour
			)
		}
		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionEnd = function (dnd){
		if (this.currEditingMode === editingMode.rect){
			this.currentShape = new Rectangle(
				dnd.x_initalPos,
				dnd.y_initialPos,
				dnd.x_finalPos - dnd.x_initalPos,
				dnd.y_finalPos - dnd.y_initialPos,
				this.currLineWidth,
				this.currColour
			)
		} else{
			this.currentShape = new Line(
				dnd.x_initalPos,
				dnd.x_finalPos,
				dnd.y_initialPos,
				dnd.y_finalPos,
				this.currLineWidth,
				this.currColour
			)
		}

		dnd.x_initalPos = undefined
		dnd.x_finalPos = undefined
		dnd.y_initialPos = undefined
		dnd.y_finalPos = undefined
		drawing.drawings.push(this.currentShape);
		drawing.paint(ctx, canvas);
		//this.currentShape = undefined;

	}.bind(this);
};



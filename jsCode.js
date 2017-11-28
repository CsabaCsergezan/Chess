var pickedCoordX = null;
var pickedCoordY = null;

var EMPTY_CELL = 0;

var PIECE = {

	WHITE: {
		KING: 1,
		QUEEN: 2,
		ROOK: 3,
		BISHOP: 4,
		KNIGHT: 5,
		PAWN: 6,
	},

	BLACK: {
		KING: 7,
		QUEEN: 8,
		ROOK: 9,
		BISHOP: 10,
		KNIGHT: 11,
		PAWN: 12,
	},
};

var matrix = [
	[PIECE.BLACK.ROOK, PIECE.BLACK.KNIGHT, PIECE.BLACK.BISHOP, PIECE.BLACK.QUEEN, PIECE.BLACK.KING, PIECE.BLACK.BISHOP, PIECE.BLACK.KNIGHT, PIECE.BLACK.ROOK],
	[PIECE.BLACK.PAWN, PIECE.BLACK.PAWN, PIECE.BLACK.PAWN, PIECE.BLACK.PAWN, PIECE.BLACK.PAWN, PIECE.BLACK.PAWN, PIECE.BLACK.PAWN, PIECE.BLACK.PAWN],
	[EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
	[EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
	[EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
	[EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
	[PIECE.WHITE.PAWN, PIECE.WHITE.PAWN, PIECE.WHITE.PAWN, PIECE.WHITE.PAWN, PIECE.WHITE.PAWN, PIECE.WHITE.PAWN, PIECE.WHITE.PAWN, PIECE.WHITE.PAWN],
	[PIECE.WHITE.ROOK, PIECE.WHITE.KNIGHT, PIECE.WHITE.BISHOP, PIECE.WHITE.QUEEN, PIECE.WHITE.KING, PIECE.WHITE.BISHOP, PIECE.WHITE.KNIGHT, PIECE.WHITE.ROOK],
];

$("document").ready(function() {

	redrawTable();
	redrawPieces();


	$(".cell").click(function(){
		var x = $(this).attr('data-coord-x');
		var y = $(this).attr('data-coord-y');
		console.log(pickedCoordX);
		console.log(pickedCoordY);
		console.log('x=' + x);
		console.log('y=' + y);
		console.log('matrix[' + x + '][' + y + '];' + matrix[y][x]);
		console.log(matrix);
		
		if (x == pickedCoordX && y == pickedCoordY) {
			pickedCoordY = null;
			pickedCoordX = null;
		}else
		if (pickedCoordX != null && pickedCoordY != null) {
			matrix[y][x] = matrix[pickedCoordY][pickedCoordX];
			matrix[pickedCoordY][pickedCoordX] = EMPTY_CELL;
			pickedCoordY = null;
			pickedCoordX = null;
		}else
		if (pickedCoordX == null && pickedCoordY == null && matrix[y][x] != EMPTY_CELL) {
			pickedCoordX = x;
			pickedCoordY = y;
		}
		console.log('x=' + x);
		console.log('y=' + y);
		console.log('pickedX:' + pickedCoordX);
		console.log('pickedY:' + pickedCoordY);

		redrawPieces();
	});

});

function redrawTable() {
	$(".chess-table").empty();
	var table = $('<table />');
	var color;
	$("#chess-table").append(table);
	for (var i = 0; i < 8; i++) {
		var tr = $('<tr />');
		if (i % 2 == 0)
			color = 0;
		else
			color = 1;
		for (var j = 0; j < 8; j++) {
			if (color == 0) {
				tr.append('<td class="cell" data-coord-x="' + j +'" data-coord-y="' + i +'" />');
				color = 1;
			}else
			if (color == 1) {
				tr.append('<td class="blackCell cell" data-coord-x="' + j +'" data-coord-y="' + i +'" />');
				color = 0;
			}
		}
		table.append(tr);
	}
}

function redrawPieces() {
	$("#chess-table table tr td").empty();
	for ( var i = 0; i < 8; i++){
		for ( var j = 0; j < 8; j++){
			if (matrix[i][j] == PIECE.BLACK.ROOK)
				$("#chess-table table tr:nth-child(" + (i + 1) + ") td:nth-child("+ (j + 1) + ")").append("<span class=\"rook piece\">&#9820;</span>");
			else
			if (matrix[i][j] == PIECE.BLACK.KNIGHT)
				$("#chess-table table tr:nth-child(" + (i + 1) + ") td:nth-child(" + (j + 1) + ")").append("<span class=\"knight piece\">&#9822;</span>");
			else
			if (matrix[i][j] == PIECE.BLACK.BISHOP)
				$("#chess-table table tr:nth-child(" + (i + 1) + ") td:nth-child(" + (j + 1) + ")").append("<span class=\"bishop piece\">&#9821;</span>");
			else
			if (matrix[i][j] == PIECE.BLACK.QUEEN)
				$("#chess-table table tr:nth-child(" + (i + 1) + ") td:nth-child(" + (j + 1) + ")").append("<span class=\"queen piece\">&#9819;</span>");
			else
			if (matrix[i][j] == PIECE.BLACK.KING)
				$("#chess-table table tr:nth-child(" + (i + 1) + ") td:nth-child(" + (j + 1) + ")").append("<span class=\"king piece\">&#9818;</span>");
			else
			if (matrix[i][j] == PIECE.BLACK.PAWN)
				$("#chess-table table tr:nth-child(" + (i + 1) + ") td:nth-child(" + (j + 1) + ")").append("<span class=\"pawn piece\">&#9823;</span>");
			else
			if (matrix[i][j] == PIECE.WHITE.ROOK)
				$("#chess-table table tr:nth-child(" + (i + 1) + ") td:nth-child(" + (j + 1) + ")").append("<span class=\"rook piece\">&#9814;</span>");
			else
			if (matrix[i][j] == PIECE.WHITE.KNIGHT)
				$("#chess-table table tr:nth-child(" + (i + 1) + ") td:nth-child(" + (j + 1) + ")").append("<span class=\"knight piece\">&#9816;</span>");
			else
			if (matrix[i][j] == PIECE.WHITE.BISHOP)
				$("#chess-table table tr:nth-child(" + (i + 1) + ") td:nth-child(" + (j + 1) + ")").append("<span class=\"bishop piece\">&#9815;</span>");
						else
			if (matrix[i][j] == PIECE.WHITE.QUEEN)
				$("#chess-table table tr:nth-child(" + (i + 1) + ") td:nth-child(" + (j + 1) + ")").append("<span class=\"queen piece\">&#9813;</span>");
			else
			if (matrix[i][j] == PIECE.WHITE.KING)
				$("#chess-table table tr:nth-child(" + (i + 1) + ") td:nth-child(" + (j + 1) + ")").append("<span class=\"king piece\">&#9812;</span>");
			else
			if (matrix[i][j] == PIECE.WHITE.PAWN)
				$("#chess-table table tr:nth-child(" + (i + 1) + ") td:nth-child(" + (j + 1) + ")").append("<span class=\"pawn piece\">&#9817;</span>");
		}
	};



}
var BoardUtil;
(function (BoardUtil){
	var initializeBoard = function(){
		var $board = $(Context.ID_BOARD),
		divTag = "div",
		rowCount = 6,
		colCount = 7,
		propX, propY;
		//reset container
		$board.empty();
		$("#connect-msg").text("").hide();
		ConnectEvents.lockPlayer = true;
		//add each row
		for(var row=0; row<rowCount; row++){
			//div poperties
			propY = {id:"row-" + row, "class":"row"};
			ElementFactory.add(divTag, propY, $board);
			//add each column
			for(var col=0; col<colCount; col++){
				propX = {id:["R",row,"C"+col].join(""), "class":["col-" + (col + 1) +  " col"].join("")};
				ElementFactory.add(divTag, propX, $("#" + propY.id));
			}
		}
	},
        initializeCircles = function(){
		var rowCount = 6,colCount = 7,divTag = "div";
		for(var row=0; row<rowCount; row++){
			for(var col=0; col<colCount; col++){
				propC = {id:["C-R",row,"C"+col].join(""), "class":"circle"};
				ElementFactory.add(divTag, propC, $(["#", "R",row,"C"+col].join("")));
			}
		}
	};

	BoardUtil.initialize = function(){
                BoardUtil.status = Context.STATUS_BUSY;
		initializeBoard();
		initializeCircles();
                ConnectEvents.initialize();
                BoardUtil.status = Context.STATUS_READY;
                ConnectEvents.curPlayer == 0;
	};
    BoardUtil.initializeDefault = function(){
        //default
    	$("#player-1, #player-2").val("").removeAttr("readOnly");
        $("#opt-human").trigger("click");
        
    };
})(BoardUtil || (BoardUtil = {}));

$(function() {
	BoardUtil.initialize();
    BoardUtil.initializeDefault();
        
});

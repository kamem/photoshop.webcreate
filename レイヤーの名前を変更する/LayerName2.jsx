//選択してるオブジェクト
var actDoc = activeDocument;
//選択してるレイヤー
var layObj = activeDocument.activeLayer;
//リンクされているレイヤー配列
var allselLinkLys = new Array();
//選択されている数
var allselLinkLysLength;



var editWindow = new Window("dialog","レイヤー名変更",[300,300,600,530]);
editWindow.center();

editWindow.eText = editWindow.add("edittext",[10,10,290,10+25], "");
editWindow.eText.text = layObj.name;

editWindow.replaceBtn = editWindow.add("radiobutton",[10,40,275,40+30], "置換");
editWindow.replaceText = editWindow.add("edittext",[70,40,290,40+25], "");

editWindow.deleteBtn1 = editWindow.add("radiobutton",[10,65,275,65+30], "削除[最初から]");
editWindow.deleteBtn2 = editWindow.add("radiobutton",[140,65,275,65+30], "削除[最後から]");

editWindow.addBtn1 = editWindow.add("radiobutton",[10,90,275,90+30], "追加 [最初]");
editWindow.addBtn2 = editWindow.add("radiobutton",[110,90,275,90+30], "追加 [最後]");

editWindow.numberBtn1 = editWindow.add("radiobutton",[10,115,275,115+30], "連番 [最初]");
editWindow.numberBtn2 = editWindow.add("radiobutton",[110,115,275,115+30], "連番 [最後]");

editWindow.numberCopy = editWindow.add("statictext",[58,153,160,150+25], "連番 0の数"); 
editWindow.numberText = editWindow.add("edittext",[10,150,50,150+25], "0");

editWindow.okBtn = editWindow.add("button",[160,190,230,190+25], "OK", { name:"ok"});
editWindow.cancelBtn = editWindow.add("button", [70,190,150,190+25], "Cancel", {name: "cancel"});



editWindow.cancelBtn.onClick = function() {
	editWindow.close();
}
/*
editWindow.deleteBtn1.onClick = function() {
	editWindow.eText.text = 0;
}
editWindow.deleteBtn2.onClick = function() {
	editWindow.eText.text = 0;
}
editWindow.replaceBtn.onClick = function() {
	editWindow.eText.text = layObj.name;
}
editWindow.numberBtn1.onClick = function() {
	editWindow.eText.text = layObj.name;
}
editWindow.numberBtn2.onClick = function() {
	editWindow.eText.text = layObj.name;
}*/

editWindow.okBtn.onClick = function() {
	editWindow.close();
	UnLinkSelLys();

	try {
		LinkSelLys();
	}
	catch(e){}
	finally{}
	SelLy();
	UnLinkSelLys();


	//置換
	if(editWindow.replaceBtn.value) {
		for(i=0;i<allselLinkLysLength;i++)
		{
			allselLinkLys[i].name = replaceAll(allselLinkLys[i].name, editWindow.eText.text, editWindow.replaceText.text); 
		}
		allselLinkLys[0].name = replaceAll(allselLinkLys[0].name, editWindow.eText.text, editWindow.replaceText.text); 
	}


	// 削除
	if(editWindow.deleteBtn1.value) {
		for(i=0;i<allselLinkLysLength;i++)
		{
			allselLinkLys[i].name = allselLinkLys[i].name.slice(editWindow.eText.text,allselLinkLys[i].name.length);
		}
		allselLinkLys[0].name = allselLinkLys[0].name.slice(editWindow.eText.text,allselLinkLys[0].name.length);
	}
	if(editWindow.deleteBtn2.value) {
		for(i=0;i<allselLinkLysLength;i++)
		{
			allselLinkLys[i].name = allselLinkLys[i].name.slice(0,allselLinkLys[i].name.length - editWindow.eText.text);
		}
			allselLinkLys[0].name = allselLinkLys[0].name.slice(0,allselLinkLys[0].name.length - editWindow.eText.text);
	}
	
	// 追加
	if(editWindow.addBtn1.value) {
		for(i=0;i<allselLinkLysLength;i++)
		{
			allselLinkLys[i].name =  editWindow.eText.text + allselLinkLys[i].name;
		}
		allselLinkLys[0].name = editWindow.eText.text + allselLinkLys[0].name;
	}
	if(editWindow.addBtn2.value) {
		for(i=0;i<allselLinkLysLength;i++)
		{
			allselLinkLys[i].name = allselLinkLys[i].name + editWindow.eText.text;
		}
		allselLinkLys[0].name = allselLinkLys[0].name + editWindow.eText.text;
	}

	// 連番
	if(editWindow.numberBtn1.value || editWindow.numberBtn2.value) {
		for(i=0;i<allselLinkLysLength;i++) {
		
			//if (i < 9) var num = "0" + (i+1); else var num = (i+1);
			
			var zeroString = '';
			var zeroNum = editWindow.numberText.text;
			var num = i;
			
			zeroNum = zeroNum - (String(num + 1).length - 1);
			for(var j = 0; j < zeroNum; j++) {
				zeroString = zeroString + '0';
			}
			num = String(zeroString) + (num + 1);
			
			if(editWindow.eText.text === '') {
				if(editWindow.numberBtn1.value) {
					allselLinkLys[i].name = num + allselLinkLys[i].name;
				}
				else {
					allselLinkLys[i].name = allselLinkLys[i].name + num;
				}
			}
			else {
				if(editWindow.numberBtn1.value) {
					allselLinkLys[i].name = num + editWindow.eText.text;
				}
				else {
					allselLinkLys[i].name = editWindow.eText.text + num;
				}
			}
		}

		zeroNum = editWindow.numberText.text - (String(0).length - 1);
		var zeroString = '';
		
		for(var j = 0; j < zeroNum; j++) {
			zeroString = zeroString + '0';
		}
		if(editWindow.eText.text === '') {
			if(editWindow.numberBtn1.value) {
				allselLinkLys[0].name = String(zeroString) + 1 + allselLinkLys[0].name;
			}
			else {
				allselLinkLys[0].name = allselLinkLys[0].name + String(zeroString) + 1;
			}
		}
		else {
			if(editWindow.numberBtn1.value) {
				allselLinkLys[0].name = String(zeroString) + 1 + editWindow.eText.text;
			}
			else {
				allselLinkLys[0].name = editWindow.eText.text + String(zeroString) + 1;
			}
		}
	}
	
	else if(!(editWindow.replaceBtn.value || editWindow.deleteBtn1.value || editWindow.deleteBtn2.value || editWindow.numberBtn1.value || editWindow.numberBtn2.value || editWindow.addBtn1.value || editWindow.addBtn2.value)){
		//入力通り名前入れる
		for(i=0;i<allselLinkLysLength;i++)
		{
			allselLinkLys[i].name = editWindow.eText.text;
		}
		allselLinkLys[0].name = editWindow.eText.text;
	}
	

	ReSelected();
}


editWindow.show();

//複数置換用
function replaceAll(expression, org, dest){  
    return expression.split(org).join(dest);  
}  

//--------------------------------------------------------------------------------------------------

//選択レイヤーをリンク付け
function LinkSelLys() {
	var lID1 = stringIDToTypeID( "linkSelectedLayers" );
	var lDesc1 = new ActionDescriptor();
	var lID2 = charIDToTypeID( "null" );
	var lRef1 = new ActionReference();
	var lID3 = charIDToTypeID( "Lyr " );
	var lID4 = charIDToTypeID( "Ordn" );
	var lID5 = charIDToTypeID( "Trgt" );
	lRef1.putEnumerated( lID3, lID4, lID5 );
	lDesc1.putReference( lID2, lRef1 );
	executeAction( lID1, lDesc1, DialogModes.NO );
}

//選択レイヤーのリンク解除
function UnLinkSelLys() {
	var uID1 = stringIDToTypeID( "unlinkSelectedLayers" );
	var uDesc1 = new ActionDescriptor();
	var uID2 = charIDToTypeID( "null" );
	var uRef1 = new ActionReference();
	var uID3 = charIDToTypeID( "Lyr " );
	var uID4 = charIDToTypeID( "Ordn" );
	var uID5 = charIDToTypeID( "Trgt" );
	uRef1.putEnumerated( uID3, uID4, uID5 );
	uDesc1.putReference( uID2, uRef1 );
	executeAction( uID1, uDesc1, DialogModes.NO );
}

//下のレイヤー選択
function selectBottom() {
	var idslct = charIDToTypeID( "slct" );
	var desc1337 = new ActionDescriptor();
	var idnull = charIDToTypeID( "null" );
	var ref904 = new ActionReference();
	var idLyr = charIDToTypeID( "Lyr " );
	var idOrdn = charIDToTypeID( "Ordn" );
	var idBckw = charIDToTypeID( "Bckw" );
	ref904.putEnumerated( idLyr, idOrdn, idBckw );
	desc1337.putReference( idnull, ref904 );
	var idselectionModifier = stringIDToTypeID( "selectionModifier" );
	var idselectionModifierType = stringIDToTypeID( "selectionModifierType" );
	var idaddToSelection = stringIDToTypeID( "addToSelection" );
	desc1337.putEnumerated( idselectionModifier, idselectionModifierType, idaddToSelection );
	var idMkVs = charIDToTypeID( "MkVs" );
	desc1337.putBoolean( idMkVs, false );
	executeAction( idslct, desc1337, DialogModes.NO );
}

//リンクされたレイヤーを取得
function SelLy() {
	var selLinkLys = layObj.linkedLayers;
	linkLysLength = selLinkLys.length;
	allselLinkLys[0] = layObj;
	u = 1;
	for(i=0;i<linkLysLength;i++)
	{
		allselLinkLys[u] = selLinkLys[i];
		u++;
	}
	allselLinkLysLength = allselLinkLys.length
}

//選択(Ctrl+Click)
function ToggleSelect(TslName) {
	var oID12 = charIDToTypeID( "slct" );
	var oDesc3 = new ActionDescriptor();
	var oID13 = charIDToTypeID( "null" );
	var oRef3 = new ActionReference();
	var oID14 = charIDToTypeID( "Lyr " );
	oRef3.putName( oID14, TslName );
	oDesc3.putReference( oID13, oRef3 );
	var oID15 = stringIDToTypeID( "selectionModifier" );
	var oID16 = stringIDToTypeID( "selectionModifierType" );
	var oID17 = stringIDToTypeID( "addToSelection" );
	oDesc3.putEnumerated( oID15, oID16, oID17 );
	var oID18 = charIDToTypeID( "MkVs" );
	oDesc3.putBoolean( oID18, false );
	executeAction( oID12, oDesc3, DialogModes.NO );
}

//元のレイヤー選択状態に復元
function ReSelected() {
	activeDocument.activeLayer = allselLinkLys[0];
	for(i=0;i<allselLinkLysLength;i++) {
		ToggleSelect(allselLinkLys[i].name);
	}
}
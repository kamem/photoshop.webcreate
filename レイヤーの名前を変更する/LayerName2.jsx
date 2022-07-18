app.activeDocument.suspendHistory('レイヤー名変更', 'changeLayerName()')

function changeLayerName() {

//選択してるレイヤー
const activeLayer = activeDocument.activeLayer;
//リンクされているレイヤー配列
const allselLinkLys = [];
//選択されている数
var allselLinkLysLength;

const editWindow = new Window("dialog","レイヤー名変更",[300,300,700,530]);
editWindow.center();

const dialogFieldHeight = 25
const dialogMargin = 10
const replacePosition = { x: 10, y: 10, width: 0, height: dialogFieldHeight }
editWindow.replaceBtn = editWindow.add("radiobutton", replacePosition, "置換");
replacePosition.y += dialogFieldHeight + dialogMargin
editWindow.addBtn = editWindow.add("radiobutton", replacePosition, "追加");
replacePosition.y += dialogFieldHeight + dialogMargin
editWindow.deleteBtn = editWindow.add("radiobutton", replacePosition, "削除");
replacePosition.y += dialogFieldHeight + dialogMargin
editWindow.numberBtn = editWindow.add("radiobutton", replacePosition, "連番");
editWindow.replaceBtn.value = true

// 置換
const replaceY = 10
editWindow.replaceBaseText = editWindow.add("edittext", { x: 70, y: replaceY, width: 130, height: dialogFieldHeight }, "");
editWindow.replaceBaseText.text = activeLayer.name;
editWindow.replaceText = editWindow.add("edittext", { x: 210, y: replaceY, width: 130, height: dialogFieldHeight }, "");
editWindow.replaceBaseText.active = true;

// 追加
const addY = replaceY + dialogFieldHeight + dialogMargin
editWindow.addStartEnd = editWindow.add("dropdownlist", { x: 70, y: addY, width: 80, height: dialogFieldHeight }, ['最初に', '最後に']);
editWindow.addStartEnd.selection = 0
editWindow.addText = editWindow.add("edittext",{ x: 160, y: addY, width: 100, height: dialogFieldHeight }, '');
editWindow.add("statictext", { x: 270, y: addY, width: 100, height: dialogFieldHeight }, "を追加");

// 削除
const deleteY = addY + dialogFieldHeight + dialogMargin
editWindow.deleteStartEnd = editWindow.add("dropdownlist", { x: 70, y: deleteY, width: 80, height: dialogFieldHeight }, ['最初から', '最後から']);
editWindow.deleteStartEnd.selection = 0
editWindow.deleteNum = editWindow.add("editnumber", { x: 160, y: deleteY, width: 40, height: dialogFieldHeight }, 0);
editWindow.add("statictext", { x:210, y: deleteY, width: 80, height: dialogFieldHeight }, "文字削除");

// 連番
const numberY = deleteY + dialogFieldHeight + dialogMargin
editWindow.numberStartEnd = editWindow.add("dropdownlist", { x: 70, y: numberY, width: 80, height: dialogFieldHeight }, ['最初に', '最後に']);
editWindow.numberStartEnd.selection = 0

editWindow.add("statictext", { x: 160, y: numberY, width: 70, height: dialogFieldHeight }, "連番 0の数"); 
editWindow.numberInput = editWindow.add("editnumber", { x: 230, y: numberY, width: 50, height: dialogFieldHeight }, 0);

const numberTextY = numberY + dialogFieldHeight + 5
editWindow.add("statictext", { x: 70, y: numberTextY, width: 60, height: dialogFieldHeight }, "接続文字列"); 
editWindow.joinStrinig = editWindow.add("edittext", { x: 140, y: numberTextY, width: 50, height: dialogFieldHeight }, '_');
editWindow.add("statictext", { x: 200, y: numberTextY, width: 70, height: dialogFieldHeight }, "で追加"); 

const buttonsY = numberTextY + dialogFieldHeight + dialogMargin + 10
editWindow.cancelBtn = editWindow.add("button", { x: 125, y: buttonsY, width: 70, height: dialogFieldHeight }, "キャンセル", {name: "cancel"});
editWindow.okBtn = editWindow.add("button",{ x: 210, y: buttonsY, width: 70, height: dialogFieldHeight }, "実行", { name:"ok"});

function addLayerName (text) {
	const isStart = editWindow.addStartEnd.selection.index === 0
	for(i=0;i<allselLinkLys.length;i++) {
		allselLinkLys[i].name = isStart ? text + allselLinkLys[i].name :  allselLinkLys[i].name + text
	}
}

function deleteLayerName (num) {
	const isStart = editWindow.deleteStartEnd.selection.index === 0
	for(i=0;i<allselLinkLys.length;i++) {
		allselLinkLys[i].name = isStart ? allselLinkLys[i].name.slice(num, allselLinkLys[i].name.length) : allselLinkLys[i].name.slice(0, allselLinkLys[i].name.length - num)
	}
}

function replaceLyaerNameText() {
	for(i=0;i<allselLinkLys.length;i++) {
		allselLinkLys[i].name = replaceAll(allselLinkLys[i].name, editWindow.replaceBaseText.text, editWindow.replaceText.text); 
	}
}

function addNumber(zeroNum) {
	const joinString = editWindow.joinStrinig.text || ''
	const isStart = editWindow.numberStartEnd.selection.index === 0
	for(i=0;i<allselLinkLys.length;i++) {
		var zeroString = '';
		var num = i;
		
		zeroNum = zeroNum - (String(num + 1).length - 1);
		for(var j = 0; j < zeroNum; j++) {
			zeroString = zeroString + '0';
		}
		num = String(zeroString) + (num + 1);
		allselLinkLys[i].name = isStart ? num + joinString + allselLinkLys[i].name : allselLinkLys[i].name + joinString + num
	}
}



editWindow.cancelBtn.onClick = function() {
	editWindow.close();
}

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
		replaceLyaerNameText()
	}

	// 削除
	if(editWindow.deleteBtn.value) {
		deleteLayerName(editWindow.deleteNum.text)
	}
	
	// 追加
	if(editWindow.addBtn.value) {
		addLayerName(editWindow.addText.text)
	}

	// 連番
	if(editWindow.numberBtn.value) {
		addNumber(editWindow.numberInput.text)
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
	var selLinkLys = activeLayer.linkedLayers;
	linkLysLength = selLinkLys.length;
	allselLinkLys[0] = activeLayer;
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
	// activeDocument.activeLayer = allselLinkLys[0];
	for(i=0;i<allselLinkLysLength;i++) {
		ToggleSelect(allselLinkLys[i].name);
	}
}

}


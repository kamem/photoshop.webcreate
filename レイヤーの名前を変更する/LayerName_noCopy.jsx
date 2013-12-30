//選択してるオブジェクト
var actDoc = activeDocument;
//選択してるレイヤー
var layObj = activeDocument.activeLayer;
//リンクされているレイヤー配列
var allselLinkLys = new Array();
//選択されている数
var allselLinkLysLength;




//キャンセル押されたら、そのまま
UnLinkSelLys();

try　{
LinkSelLys();
}
catch(e)　{}
finally{}

SelLy();
UnLinkSelLys();
nameSet();
ReSelected();



//入力通り名前入れる
function nameSet() {
	for(i=0;i<allselLinkLysLength;i++) {
	
		if(!(allselLinkLys[i].name.indexOf(" のコピー") == -1)) {
		//後ろに数字がついてたら 消す
			if(allselLinkLys[i].name.substr(allselLinkLys[i].name.length -2, 1) == " ") {
				allselLinkLys[i].name = allselLinkLys[i].name.replace(allselLinkLys[i].name.substr(allselLinkLys[i].name.length -2, 2), "");
			}
			else if(allselLinkLys[i].name.substr(allselLinkLys[i].name.length -3, 1) == " ") {
				allselLinkLys[i].name = allselLinkLys[i].name.replace(allselLinkLys[i].name.substr(allselLinkLys[i].name.length -2, 2), "");
			}
			allselLinkLys[i].name = allselLinkLys[i].name.replace(" のコピー", "");
		}
	}
	
	if(!(allselLinkLys[0].name.indexOf(" のコピー") == -1)) {
		if(allselLinkLys[0].name.substr(allselLinkLys[0].name.length -2, 1) == " ") {
			allselLinkLys[0].name = allselLinkLys[0].name.replace(allselLinkLys[0].name.substr(allselLinkLys[0].name.length -2, 2), "");
		}
		else if(allselLinkLys[0].name.substr(allselLinkLys[0].name.length -3, 1) == " ") {
			allselLinkLys[0].name = allselLinkLys[0].name.replace(allselLinkLys[0].name.substr(allselLinkLys[0].name.length -2, 2), "");
		}
		allselLinkLys[0].name = allselLinkLys[0].name.replace(" のコピー", "");
	}
}



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
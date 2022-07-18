//選択してるレイヤー
const activeLayer = activeDocument.activeLayer;
//リンクされているレイヤー配列
var allselLinkLys = new Array();
//選択されている数
var allselLinkLysLength;


selLinkLys = activeLayer.linkedLayers;
SelLy();
if(0 < selLinkLys.length) {
	UnLinkSelLys();
}
else {
	try　{
	LinkSelLys();
	}
	catch(e)　{}
	finally{}
}

function LinkSelLys() {
//選択レイヤーをリンク付け
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

function UnLinkSelLys() {
//選択レイヤーのリンク解除
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

function SelLy() {
//リンクされたレイヤーを取得
	var selLinkLys = activeLayer.linkedLayers;
	linkLysLength = selLinkLys.length;
	allselLinkLys[0] = activeLayer;
	u = 1;
	for(i=0;i<linkLysLength;i++)
	{
		allselLinkLys[u] = selLinkLys[i];
		u++;
	}
	allselLinkLysLength = allselLinkLys.length;
}
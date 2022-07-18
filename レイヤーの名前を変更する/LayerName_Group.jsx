//選択してるオブジェクト
var actDoc = activeDocument;
//選択してるレイヤー
var layObj = activeDocument.activeLayer;
//リンクされているレイヤー配列
var allselLinkLys = new Array();
//選択されている数
var allselLinkLysLength;


text = prompt("グループ名",layObj.parent.name);

//キャンセル押されたら、そのまま
if(text == null) {
}
else {

UnLinkSelLys();

try　{
LinkSelLys();
}
catch(e)　{}
finally{}

SelLy();
UnLinkSelLys();
//一つ以上選択されてたら
	if(allselLinkLysLength > 1) {
		//最初の文字が_だったら
		if(text.substr(0, 1) == "_") {
			nameSet3();
		}
		else {
			nameSet();
		}
	}

	else {
		//最初の文字が_だったら
		if(text.substr(0, 1) == "_") {
			nameSet3();
		}
		else {
			nameSet();
		}
	}
}

//入力通り名前入れる
function nameSet() {
	for(i=0;i<allselLinkLysLength;i++)
	{
		allselLinkLys[i].name = text;
	}
	allselLinkLys[0].name = text;
}

//連番
function nameSet2() {
	for(i=0;i<allselLinkLysLength;i++)
	{
		if (i < 9) var num = "0" + (i+1); else var num = (i+1);
		allselLinkLys[i].name = text + num;
	}
	allselLinkLys[0].name = text + "0" + 1;
}

//_が最初についている場合、最後に「_test」のように入れる
function nameSet3() {
	for(i=0;i<allselLinkLysLength;i++)
	{
		if(!(allselLinkLys[i].name.substr(allselLinkLys[i].name.length - text.length,  text.length) == text)) {
			allselLinkLys[i].name = allselLinkLys[i].name + text;
		}
	
	}
	if(!(allselLinkLys[0].name.substr(allselLinkLys[0].name.length - text.length,  text.length) == text)) {
		allselLinkLys[0].name = allselLinkLys[0].name + text;
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


//リンクされたレイヤーの親グループを取得
function SelLy() {
	var selLinkLys = layObj.linkedLayers;
	linkLysLength = selLinkLys.length;
	allselLinkLys[0] = layObj.parent;
	u = 1;
	for(i=0;i<linkLysLength;i++)
	{
		allselLinkLys[u] = selLinkLys[i].parent;
		u++;
	}
	allselLinkLysLength = allselLinkLys.length
}
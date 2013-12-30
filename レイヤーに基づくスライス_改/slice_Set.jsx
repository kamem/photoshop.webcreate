//選択してるオブジェクト
var actDoc = activeDocument;
//選択してるレイヤー
var layObj = activeDocument.activeLayer;
//リンクされているレイヤー配列
var allselLinkLys = new Array();
//選択したオブジェクト縦横配列
var W = new Array();
var H = new Array();
var W2 = new Array();
var H2 = new Array();
var Wid = new Array();
var Hei = new Array();

//選択されている数
var allselLinkLysLength;


UnLinkSelLys();
try　{
LinkSelLys();
}
catch(e)　{}
finally{}

SelLy();
UnLinkSelLys();


//選択しているオブジェクトのレイヤーに基づくスライスを削除
for(i=0;i<allselLinkLysLength;i++) {
	W[i] = allselLinkLys[i].bounds[0];
	H[i] = allselLinkLys[i].bounds[1];
	W2[i] = allselLinkLys[i].bounds[2];
	H2[i] = allselLinkLys[i].bounds[3];


	Wid[i] =  W2[i] - W[i];
	Hei[i] =  H2[i] - H[i];

	//alert(W[i]+Math.floor(Wid[i]/2) +" " + Wid[i],Math.floor(Hei[i]/2);//クリック位置
	selectSlice(W[i]+Math.floor(Wid[i]/2),H[i]+Hei[i]/2,false,Wid[i],Math.floor(Hei[i]/2));
	sliceDel();
}
slice();

for(i=0;i<allselLinkLysLength;i++)
{
	selectSlice(W[i]+Math.floor(Wid[i]/2),H[i]+Hei[i]/2,false,Wid[i],Math.floor(Hei[i]/2));

	nameSet(allselLinkLys[i].name);
}

//スライス選択
for(i=0;i<allselLinkLysLength;i++) {
	selectSlice(W[i]+Math.floor(Wid[i]/2),H[i]+Hei[i]/2,true,Wid[i],Math.floor(Hei[i]/2));
}

//レイヤーに基づくスライス作成
function slice() {
	var idMk = charIDToTypeID( "Mk  " );
	var desc168 = new ActionDescriptor();
	var idnull = charIDToTypeID( "null" );
	var ref100 = new ActionReference();
	var idslice = stringIDToTypeID( "slice" );
	ref100.putClass( idslice );
	desc168.putReference( idnull, ref100 );
	var idUsng = charIDToTypeID( "Usng" );
	var desc169 = new ActionDescriptor();
	var idType = charIDToTypeID( "Type" );
	var idsliceType = stringIDToTypeID( "sliceType" );
	var idLyr = charIDToTypeID( "Lyr " );
	desc169.putEnumerated( idType, idsliceType, idLyr );
	var idLyr = charIDToTypeID( "Lyr " );
	var ref101 = new ActionReference();
	var idLyr = charIDToTypeID( "Lyr " );
	var idOrdn = charIDToTypeID( "Ordn" );
	var idTrgt = charIDToTypeID( "Trgt" );
	ref101.putEnumerated( idLyr, idOrdn, idTrgt );
	desc169.putReference( idLyr, ref101 );
	var idslice = stringIDToTypeID( "slice" );
	desc168.putObject( idUsng, idslice, desc169 );
	executeAction( idMk, desc168, DialogModes.NO );
}

//座標でスライス選択
function selectSlice(x,y,shiftTF,wid,hei) {
	var idslct = charIDToTypeID( "slct" );
	var desc815 = new ActionDescriptor();
	var idnull = charIDToTypeID( "null" );
	var ref537 = new ActionReference();
	var idslice = stringIDToTypeID( "slice" );
	ref537.putClass( idslice );
	desc815.putReference( idnull, ref537 );
	var idAt = charIDToTypeID( "At  " );
	var desc816 = new ActionDescriptor();
	var idHrzn = charIDToTypeID( "Hrzn" );
	var idPxl = charIDToTypeID( "#Pxl" );
	desc816.putUnitDouble( idHrzn, idPxl, x );
	var idVrtc = charIDToTypeID( "Vrtc" );
	var idPxl = charIDToTypeID( "#Pxl" );
	desc816.putUnitDouble( idVrtc, idPxl, y );
	var idPnt = charIDToTypeID( "Pnt " );
	desc815.putObject( idAt, idPnt, desc816 );
	var idaddToSelection = stringIDToTypeID( "addToSelection" );
	desc815.putBoolean( idaddToSelection, shiftTF );
	executeAction( idslct, desc815, DialogModes.NO );
}

//名前をつける
function nameSet(name) {
	var idsetd = charIDToTypeID( "setd" );
	var desc205 = new ActionDescriptor();
	var idnull = charIDToTypeID( "null" );
	var ref130 = new ActionReference();
	var idslice = stringIDToTypeID( "slice" );
	var idOrdn = charIDToTypeID( "Ordn" );
	var idTrgt = charIDToTypeID( "Trgt" );
	ref130.putEnumerated( idslice, idOrdn, idTrgt );
	desc205.putReference( idnull, ref130 );
	var idT = charIDToTypeID( "T   " );
	var desc206 = new ActionDescriptor();
	var idNm = charIDToTypeID( "Nm  " );
	desc206.putString( idNm, name );
	var idsliceImageType = stringIDToTypeID( "sliceImageType" );
	var idsliceImageType = stringIDToTypeID( "sliceImageType" );
	var idImg = charIDToTypeID( "Img " );
	desc206.putEnumerated( idsliceImageType, idsliceImageType, idImg );
	var idslice = stringIDToTypeID( "slice" );
	desc205.putObject( idT, idslice, desc206 );
	executeAction( idsetd, desc205, DialogModes.NO );
}

//スライス削除
function sliceDel() {
	var idDlt = charIDToTypeID( "Dlt " );
	var desc182 = new ActionDescriptor();
	var idnull = charIDToTypeID( "null" );
	var ref128 = new ActionReference();
	var idslice = stringIDToTypeID( "slice" );
	var idOrdn = charIDToTypeID( "Ordn" );
	var idTrgt = charIDToTypeID( "Trgt" );
	ref128.putEnumerated( idslice, idOrdn, idTrgt );
	desc182.putReference( idnull, ref128 );
	executeAction( idDlt, desc182, DialogModes.NO );
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

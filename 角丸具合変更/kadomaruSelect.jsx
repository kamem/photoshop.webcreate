//選択してるオブジェクト
var actDoc = activeDocument;
//選択してるレイヤー
var layObj = activeDocument.activeLayer;




Lstyle = confirm("レイヤースタイルがありますか？");
if(Lstyle == true) {
	layStyleHd();

var W = layObj.bounds[0]+1;
var H = layObj.bounds[1]+1;
var W2 = layObj.bounds[2]-1;
var H2 = layObj.bounds[3]-1;


var Wid =  W2 - W - 2;
var Hei =  H2 - H - 2;

	styleCopy();
	text = prompt("角丸（数字のみ）","0");
	if(text == null) {
		layStyleShw();
	}
	else {
	test(text,W,H,W2,H2);
	stylePe();
	
		//del = flag = confirm("元レイヤー消しますか？");
		del = true;
		if(del == true) {
			var layObjN = activeDocument.activeLayer.name;
			layback();
			layDel();
			if(!(layObjN == activeDocument.activeLayer.name)) {
				laytop();
			}
			layStyleShw();
		}
		else {
		}
	}
}
else {

var W = layObj.bounds[0]+1;
var H = layObj.bounds[1]+1;
var W2 = layObj.bounds[2]-1;
var H2 = layObj.bounds[3]-1;


var Wid =  W2 - W - 2;
var Hei =  H2 - H - 2;

	text = prompt("角丸（数字のみ）","0");
	if(text == null) {
	}
	else {
	test(text,W,H,W2,H2);
	
		//del = flag = confirm("元レイヤー消しますか？");
		del = true;
		if(del == true) {
			var layObjN = activeDocument.activeLayer.name;
			layback();
			layDel();
			if(!(layObjN == activeDocument.activeLayer.name)) {
				laytop();
			}
		}
		else {
		}
	}
}


function styleCopy() {
var idCpFX = charIDToTypeID( "CpFX" );
executeAction( idCpFX, undefined, DialogModes.NO );
}

function stylePe() {
var idPaFX = charIDToTypeID( "PaFX" );
    var desc59 = new ActionDescriptor();
executeAction( idPaFX, desc59, DialogModes.NO );
}

function test(r,W,H,W2,H2) {
var idMk = charIDToTypeID( "Mk  " );
    var desc14 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref8 = new ActionReference();
        var idcontentLayer = stringIDToTypeID( "contentLayer" );
        ref8.putClass( idcontentLayer );
    desc14.putReference( idnull, ref8 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc15 = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
        var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
        desc15.putClass( idType, idsolidColorLayer );
        var idShp = charIDToTypeID( "Shp " );
            var desc16 = new ActionDescriptor();
            var idTop = charIDToTypeID( "Top " );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc16.putUnitDouble( idTop, idPxl, H );
            var idLeft = charIDToTypeID( "Left" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc16.putUnitDouble( idLeft, idPxl, W );
            var idBtom = charIDToTypeID( "Btom" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc16.putUnitDouble( idBtom, idPxl, H2 );
            var idRght = charIDToTypeID( "Rght" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc16.putUnitDouble( idRght, idPxl, W2 );
            var idRds = charIDToTypeID( "Rds " );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc16.putUnitDouble( idRds, idPxl, r );
        var idRctn = charIDToTypeID( "Rctn" );
        desc15.putObject( idShp, idRctn, desc16 );
    var idcontentLayer = stringIDToTypeID( "contentLayer" );
    desc14.putObject( idUsng, idcontentLayer, desc15 );
executeAction( idMk, desc14, DialogModes.NO );
}

function layback() {
var idslct = charIDToTypeID( "slct" );
    var desc23 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref15 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idBckw = charIDToTypeID( "Bckw" );
        ref15.putEnumerated( idLyr, idOrdn, idBckw );
    desc23.putReference( idnull, ref15 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc23.putBoolean( idMkVs, false );
executeAction( idslct, desc23, DialogModes.NO );
}

function laytop() {
var idslct = charIDToTypeID( "slct" );
    var desc26 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref18 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idFrwr = charIDToTypeID( "Frwr" );
        ref18.putEnumerated( idLyr, idOrdn, idFrwr );
    desc26.putReference( idnull, ref18 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc26.putBoolean( idMkVs, false );
executeAction( idslct, desc26, DialogModes.NO );
}

function layDel() {
var idDlt = charIDToTypeID( "Dlt " );
    var desc18 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref10 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref10.putEnumerated( idLyr, idOrdn, idTrgt );
    desc18.putReference( idnull, ref10 );
executeAction( idDlt, desc18, DialogModes.NO );
}

function layStyleShw() {
var idShw = charIDToTypeID( "Shw " );
    var desc25 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var list4 = new ActionList();
            var ref9 = new ActionReference();
            var idLefx = charIDToTypeID( "Lefx" );
            ref9.putClass( idLefx );
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref9.putEnumerated( idLyr, idOrdn, idTrgt );
        list4.putReference( ref9 );
    desc25.putList( idnull, list4 );
executeAction( idShw, desc25, DialogModes.NO );
}

function layStyleHd() {
var idHd = charIDToTypeID( "Hd  " );
    var desc26 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var list5 = new ActionList();
            var ref10 = new ActionReference();
            var idLefx = charIDToTypeID( "Lefx" );
            ref10.putClass( idLefx );
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref10.putEnumerated( idLyr, idOrdn, idTrgt );
        list5.putReference( ref10 );
    desc26.putList( idnull, list5 );
executeAction( idHd, desc26, DialogModes.NO );
}
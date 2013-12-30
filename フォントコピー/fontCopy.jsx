//選択してるオブジェクト
var actDoc = activeDocument;
//選択してるレイヤー
var layObj = activeDocument.activeLayer;

//fontSize = layObj.textItem.size;
font = layObj.textItem.font;

fontRed = layObj.textItem.color.rgb.red;
fontGreen = layObj.textItem.color.rgb.green;
fontBlue = layObj.textItem.color.rgb.blue;

//fontLeading = layObj.textItem.leading

fontAliasMethod = layObj.textItem.antiAliasMethod;

//alert(fontAliasMethod);


lname = font + "_"+ fontRed + "_"+ fontGreen + "_"+ fontBlue + "_" + fontAliasMethod;
styleCopy();
layerNew();
layerName(lname);
Top();
Top();
Top();
Top();


function styleCopy() {
var idCpFX = charIDToTypeID( "CpFX" );
executeAction( idCpFX, undefined, DialogModes.NO );
}

function layerNew() {
var idMk = charIDToTypeID( "Mk  " );
    var desc36 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref7 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        ref7.putClass( idLyr );
    desc36.putReference( idnull, ref7 );
executeAction( idMk, desc36, DialogModes.NO );
}

function layerName(lname) {
var idsetd = charIDToTypeID( "setd" );
    var desc37 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref8 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref8.putEnumerated( idLyr, idOrdn, idTrgt );
    desc37.putReference( idnull, ref8 );
    var idT = charIDToTypeID( "T   " );
        var desc38 = new ActionDescriptor();
        var idNm = charIDToTypeID( "Nm  " );
        desc38.putString( idNm, lname );
    var idLyr = charIDToTypeID( "Lyr " );
    desc37.putObject( idT, idLyr, desc38 );
executeAction( idsetd, desc37, DialogModes.NO );
}

function Top() {
var idmove = charIDToTypeID( "move" );
    var desc224 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref139 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref139.putEnumerated( idLyr, idOrdn, idTrgt );
    desc224.putReference( idnull, ref139 );
    var idT = charIDToTypeID( "T   " );
        var ref140 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idFrnt = charIDToTypeID( "Frnt" );
        ref140.putEnumerated( idLyr, idOrdn, idFrnt );
    desc224.putReference( idT, ref140 );
executeAction( idmove, desc224, DialogModes.NO );
}

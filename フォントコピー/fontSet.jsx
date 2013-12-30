//選択してるオブジェクト
var actDoc = activeDocument;
//選択してるレイヤー
var layObj = activeDocument.activeLayer;

stylePe();
//一番上野レイヤー選択
actDoc.activeLayer = actDoc.layers[0];
fontAry = activeDocument.activeLayer.name.split("_");
//alert(fontAry);



//alert(layObj);
//alert(fontAry.length);


layObj.textItem.font = fontAry[0];
layObj.textItem.color.rgb.red = fontAry[1];
layObj.textItem.color.rgb.green = fontAry[2];
layObj.textItem.color.rgb.blue = fontAry[3];

//layObj.textItem.antiAliasMethod = fontAry[4];

none()

function stylePe() {
var idPaFX = charIDToTypeID( "PaFX" );
    var desc59 = new ActionDescriptor();
executeAction( idPaFX, desc59, DialogModes.NO );
}

function none() {
var idDlt = charIDToTypeID( "Dlt " );
    var desc221 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref121 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref121.putEnumerated( idLyr, idOrdn, idTrgt );
    desc221.putReference( idnull, ref121 );
executeAction( idDlt, desc221, DialogModes.NO );
}


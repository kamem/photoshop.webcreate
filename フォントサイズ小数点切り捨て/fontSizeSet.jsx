//�I�����Ă�I�u�W�F�N�g
var actDoc = activeDocument;
//�I�����Ă郌�C���[
var layObj = activeDocument.activeLayer;

//�t�H���g�T�C�Y
fontSize = layObj.textItem.size;
fontSize = parseFloat(fontSize);
fontSize = Math.round(fontSize);


//�s��
fontLeading = layObj.textItem.leading;
fontLeading = parseFloat(fontLeading);
fontLeading = Math.round(fontLeading);


//�t�H���g�T�C�Y�Z�b�g
fontSizeSet(1);
fontSizeSet(fontSize);


//�s�ԃZ�b�g
fontLeadingSet(1);
fontLeadingSet(fontLeading);

//alert(fontSize);
//alert(fontLeading);

//�T�C�Y
function fontSizeSet(fontSize) {
var idsetd = charIDToTypeID( "setd" );
    var desc21 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var idPrpr = charIDToTypeID( "Prpr" );
        var idTxtS = charIDToTypeID( "TxtS" );
        ref4.putProperty( idPrpr, idTxtS );
        var idTxLr = charIDToTypeID( "TxLr" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref4.putEnumerated( idTxLr, idOrdn, idTrgt );
    desc21.putReference( idnull, ref4 );
    var idT = charIDToTypeID( "T   " );
        var desc22 = new ActionDescriptor();
        var idSz = charIDToTypeID( "Sz  " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc22.putUnitDouble( idSz, idPxl, fontSize );
    var idTxtS = charIDToTypeID( "TxtS" );
    desc21.putObject( idT, idTxtS, desc22 );
executeAction( idsetd, desc21, DialogModes.NO );
}

//�s��
function fontLeadingSet(fontLeadingSet) {
var idsetd = charIDToTypeID( "setd" );
    var desc46 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref20 = new ActionReference();
        var idPrpr = charIDToTypeID( "Prpr" );
        var idTxtS = charIDToTypeID( "TxtS" );
        ref20.putProperty( idPrpr, idTxtS );
        var idTxLr = charIDToTypeID( "TxLr" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref20.putEnumerated( idTxLr, idOrdn, idTrgt );
    desc46.putReference( idnull, ref20 );
    var idT = charIDToTypeID( "T   " );
        var desc47 = new ActionDescriptor();
        var idautoLeading = stringIDToTypeID( "autoLeading" );
        desc47.putBoolean( idautoLeading, false );
        var idLdng = charIDToTypeID( "Ldng" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc47.putUnitDouble( idLdng, idPxl, fontLeadingSet );
    var idTxtS = charIDToTypeID( "TxtS" );
    desc46.putObject( idT, idTxtS, desc47 );
executeAction( idsetd, desc46, DialogModes.NO );
}
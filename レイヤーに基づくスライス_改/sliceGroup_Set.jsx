var actDoc = activeDocument;
var layObj = activeDocument.activeLayer;

join();
nameSet();


function join() {
// =======================================================
var idDplc = charIDToTypeID( "Dplc" );
    var desc528 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref371 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref371.putEnumerated( idLyr, idOrdn, idTrgt );
    desc528.putReference( idnull, ref371 );
    var idVrsn = charIDToTypeID( "Vrsn" );
    desc528.putInteger( idVrsn, 5 );
executeAction( idDplc, desc528, DialogModes.NO );

// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc529 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref372 = new ActionReference();
        var idlayerSection = stringIDToTypeID( "layerSection" );
        ref372.putClass( idlayerSection );
    desc529.putReference( idnull, ref372 );
    var idFrom = charIDToTypeID( "From" );
        var ref373 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref373.putEnumerated( idLyr, idOrdn, idTrgt );
    desc529.putReference( idFrom, ref373 );
executeAction( idMk, desc529, DialogModes.NO );

// =======================================================
var idMrgtwo = charIDToTypeID( "Mrg2" );
executeAction( idMrgtwo, undefined, DialogModes.NO );

// =======================================================
var idMk = charIDToTypeID( "Mk  " );
    var desc530 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref374 = new ActionReference();
        var idslice = stringIDToTypeID( "slice" );
        ref374.putClass( idslice );
    desc530.putReference( idnull, ref374 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc531 = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
        var idsliceType = stringIDToTypeID( "sliceType" );
        var idLyr = charIDToTypeID( "Lyr " );
        desc531.putEnumerated( idType, idsliceType, idLyr );
        var idLyr = charIDToTypeID( "Lyr " );
            var ref375 = new ActionReference();
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref375.putEnumerated( idLyr, idOrdn, idTrgt );
        desc531.putReference( idLyr, ref375 );
    var idslice = stringIDToTypeID( "slice" );
    desc530.putObject( idUsng, idslice, desc531 );
executeAction( idMk, desc530, DialogModes.NO );

// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc532 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref376 = new ActionReference();
        var idsliceTool = stringIDToTypeID( "sliceTool" );
        ref376.putClass( idsliceTool );
    desc532.putReference( idnull, ref376 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc532.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc532.putBoolean( idforceNotify, true );
executeAction( idslct, desc532, DialogModes.NO );

// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc533 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref377 = new ActionReference();
        var idslice = stringIDToTypeID( "slice" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref377.putEnumerated( idslice, idOrdn, idTrgt );
    desc533.putReference( idnull, ref377 );
    var idT = charIDToTypeID( "T   " );
        var desc534 = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
        var idsliceType = stringIDToTypeID( "sliceType" );
        var iduser = stringIDToTypeID( "user" );
        desc534.putEnumerated( idType, idsliceType, iduser );
    var idslice = stringIDToTypeID( "slice" );
    desc533.putObject( idT, idslice, desc534 );
executeAction( idsetd, desc533, DialogModes.NO );

// =======================================================
var idslct = charIDToTypeID( "slct" );
    var desc535 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref378 = new ActionReference();
        var idmoveTool = stringIDToTypeID( "moveTool" );
        ref378.putClass( idmoveTool );
    desc535.putReference( idnull, ref378 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc535.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc535.putBoolean( idforceNotify, true );
executeAction( idslct, desc535, DialogModes.NO );

// =======================================================
var idDlt = charIDToTypeID( "Dlt " );
    var desc536 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref379 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref379.putEnumerated( idLyr, idOrdn, idTrgt );
    desc536.putReference( idnull, ref379 );
executeAction( idDlt, desc536, DialogModes.NO );
}

function nameSet() {
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
	desc206.putString( idNm, layObj.name );
	var idsliceImageType = stringIDToTypeID( "sliceImageType" );
	var idsliceImageType = stringIDToTypeID( "sliceImageType" );
	var idImg = charIDToTypeID( "Img " );
	desc206.putEnumerated( idsliceImageType, idsliceImageType, idImg );
	var idslice = stringIDToTypeID( "slice" );
	desc205.putObject( idT, idslice, desc206 );
	executeAction( idsetd, desc205, DialogModes.NO );
}
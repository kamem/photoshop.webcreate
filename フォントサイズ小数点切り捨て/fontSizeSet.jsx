app.activeDocument.suspendHistory('フォントサイズ・行間少数以下四捨五入', 'fontSizeRound()')

function fontSizeRound() {

//選択してるレイヤー
const activeLayer = activeDocument.activeLayer;

//フォントサイズ
fontSize = getFontSize(activeLayer, 'size');
fontSize = parseFloat(fontSize);
fontSize = Math.round(fontSize);

//行間
fontLeading = getFontSize(activeLayer, 'leading');
fontLeading = parseFloat(fontLeading);
fontLeading = Math.round(fontLeading);

//フォントサイズセット
fontSizeSet(fontSize);

//行間セット
fontLeadingSet(fontLeading);
 
function getFontSize(layer, name){
    var ref = new ActionReference();  
    ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
    var desc = executeActionGet(ref).getObjectValue(stringIDToTypeID('textKey'));  
    var textSize =  desc.getList(stringIDToTypeID('textStyleRange')).getObjectValue(0).getObjectValue(charIDToTypeID( "TxtS" )).getDouble(stringIDToTypeID(name));  
    if (desc.hasKey(charIDToTypeID("Trnf"))) {  
        var mFactor = desc.getObjectValue(charIDToTypeID("Trnf")).getUnitDoubleValue (stringIDToTypeID("yy") );
        textSize = (textSize* mFactor).toFixed(2);  
    }  
    return textSize;
};

//サイズ
function fontSizeSet(fontSize) {
    var idset = stringIDToTypeID( "set" );
    var desc4149 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref564 = new ActionReference();
        var idproperty = stringIDToTypeID( "property" );
        var idtextStyle = stringIDToTypeID( "textStyle" );
        ref564.putProperty( idproperty, idtextStyle );
        var idtextLayer = stringIDToTypeID( "textLayer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref564.putEnumerated( idtextLayer, idordinal, idtargetEnum );
    desc4149.putReference( idnull, ref564 );
    var idto = stringIDToTypeID( "to" );
        var desc4150 = new ActionDescriptor();
        var idtextOverrideFeatureName = stringIDToTypeID( "textOverrideFeatureName" );
        desc4150.putInteger( idtextOverrideFeatureName, 808465458 );
        var idtypeStyleOperationType = stringIDToTypeID( "typeStyleOperationType" );
        desc4150.putInteger( idtypeStyleOperationType, 3 );
        var idsize = stringIDToTypeID( "size" );
        var idpointsUnit = stringIDToTypeID( "pointsUnit" );
        desc4150.putUnitDouble( idsize, idpointsUnit, fontSize );
    var idtextStyle = stringIDToTypeID( "textStyle" );
    desc4149.putObject( idto, idtextStyle, desc4150 );
executeAction( idset, desc4149, DialogModes.NO );
}

//行間
function fontLeadingSet(fontLeadingSet) {
    var idset = stringIDToTypeID( "set" );
    var desc6098 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref588 = new ActionReference();
        var idproperty = stringIDToTypeID( "property" );
        var idtextStyle = stringIDToTypeID( "textStyle" );
        ref588.putProperty( idproperty, idtextStyle );
        var idtextLayer = stringIDToTypeID( "textLayer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref588.putEnumerated( idtextLayer, idordinal, idtargetEnum );
    desc6098.putReference( idnull, ref588 );
    var idto = stringIDToTypeID( "to" );
        var desc6099 = new ActionDescriptor();
        var idtextOverrideFeatureName = stringIDToTypeID( "textOverrideFeatureName" );
        desc6099.putInteger( idtextOverrideFeatureName, 808465461 );
        var idtypeStyleOperationType = stringIDToTypeID( "typeStyleOperationType" );
        desc6099.putInteger( idtypeStyleOperationType, 3 );
        var idleading = stringIDToTypeID( "leading" );
        var idpointsUnit = stringIDToTypeID( "pointsUnit" );
        desc6099.putUnitDouble( idleading, idpointsUnit, fontLeadingSet );
    var idtextStyle = stringIDToTypeID( "textStyle" );
    desc6098.putObject( idto, idtextStyle, desc6099 );
executeAction( idset, desc6098, DialogModes.NO );
}
}
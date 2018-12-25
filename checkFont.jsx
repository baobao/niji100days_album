/**
 * Check Font name.
 */
var doc = app.activeDocument;
var layers = doc.layers;
for(var i = 0; i < 1; i++)
{
    var layer = layers[i];
    $.writeln(layer.textItem.font);
}
/**
 * Get the date from the storage folder name and add a text layer containing it
 */

// Absolute path to the execution script file
var scriptPath = $.fileName;
var rootPath = new File(scriptPath).parent + "/Root/";
var folder = new Folder(rootPath);
var rootFiles = folder.getFiles();

$.writeln (rootPath);

for(var i = 0; i < rootFiles.length; i++)
{
	var rootObj = rootFiles[i];
	var subFolder = new Folder(rootObj);
	var subFolderPath = subFolder.toString();
	var pathArray = subFolderPath.split("/");
	var dateNumberString = pathArray[pathArray.length - 1];
	if (dateNumberString.indexOf(".DS_Store") >= 0)
	{
		continue;
	}
	// Folder name becomes date
	var dateNumber = Number(dateNumberString);
	var subFiles = subFolder.getFiles("*.psd");
	
	if (subFiles != "")
	{
		// File list in subfolder
		for (var j = 0; j < subFiles.length; j++)
		{
			var subFile = subFiles[j];
			app.open(subFile);
			
			// Add text layer processing
            var doc = app.activeDocument;
            var layers = doc.artLayers;
            var txtLayer = layers.add();
            txtLayer.kind = LayerKind.TEXT;
            txtLayer.textItem.font = "HiraMaruPro-W4";
            txtLayer.textItem.size = 8;
            txtLayer.textItem.color.rgb.red = 255;
            txtLayer.textItem.color.rgb.green = 255;
            txtLayer.textItem.color.rgb.blue = 255;
            txtLayer.textItem.justification.LEFT;
            txtLayer.textItem.contents = dateNumber + "日目";
            // Position
            var goalX = 100;
            var goalY = 80;
            var bounds = txtLayer.bounds;
            // Fits to the left end
            txtLayer.translate(-bounds[0], -bounds[1]);
            // Offset to specified location
            txtLayer.translate(goalX, goalY);
			
			// overwrite save
			app.activeDocument.save(subFile);
			app.activeDocument.close();
		}
	}
}
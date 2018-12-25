#!/bin/bash

# move psd raw/ to psd/

cd `dirname $0`

for filePath in raw/*.psd; do
	fileName=${filePath#*/}
	echo $fileName
	mv $filePath psd/$fileName
done
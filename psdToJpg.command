#!/bin/bash

# Convert PSD to JPG

# required ImageMagick

cd `dirname $0`

OUTPUT_FOLDER='Output'

mkdir -p $OUTPUT_FOLDER

find Root -type f | while read filePath
do
    fileName=`basename $filePath`
    # Delete extension
    fileName=${fileName%.*}
    convert $filePath[0] $OUTPUT_FOLDER/$fileName.jpg
done

exit
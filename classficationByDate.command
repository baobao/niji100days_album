#!/bin/bash

# File classification from exif information to folder storage

# required exiftool

cd `dirname $0`

# 24-hour conversion constant
DATE_TO_SEC=86400

# date of birth
COMPARE_DATE='2018:04:24'
# Export Root Folder
ROOT_FOLDER='Root'

# Create Root Folder
mkdir -p $ROOT_FOLDER

function dateComp()
{
    # Converted to elapsed seconds since 1970/01/01 00: 00: 00 (convert to UnixTime and calculate the number of seconds)
    ARG1_SECOND=`date -j -f '%Y:%m:%d' "$1" '+%s'`
    ARG2_SECOND=`date -j -f '%Y:%m:%d' "$2" '+%s'`
    
    # Returning differential seconds
    expr $ARG1_SECOND - $ARG2_SECOND
}

for filePath in Photos/psd/*.psd; do
    # Delete generation date and time from psd file name
	createDate=`exiftool -CreateDate $filePath`
    
    fileName=`basename $filePath`
    
    # Delete Prefix 'Create Date:'
    date=${createDate#* : }
    
    # Delete time with backward matching deletion
    date=${date%* *:*:*}
    
    # Calculate date difference
    ret=`dateComp $date $COMPARE_DATE`
    diffDate=$(($ret/$DATE_TO_SEC))
    
    echo $fileName : $diffDate
    
    baseFolder=$ROOT_FOLDER/$diffDate
    
    mkdir -p $baseFolder
    
    # Copy files and copy
    cp $filePath $baseFolder/$fileName
    
done

exit
niji100days_album
====

I tried to automate the place where I can automate to create an album for 100 days after my daughter was born.

### Specification
- Display the number of days of difference from the date of birth
- Deliver in jpg file

### Automate
- Calculate the day from the day of birth from the exif information of the photo and insert a text layer in Photoshop
- Write a temporary PSD file to a JPG file


### Preparation
- Make Niji100.atn read in Photoshop in advance

### How to use
1. Use Niji100.atn action to change resolution, aspect size (from JPG to PSD)
1. Moving files from Photos / raw to Photos / psd with cpPsd.command
1. Distribute the PSD from the exif information in classficationByDate.command
1. After all the work is done, execute psdToJpg.command. Jpg is written to Output
1. Draft and complete


### required
- ImageMagick
- exiftool
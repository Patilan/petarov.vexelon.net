#!/bin/sh

PWD=$(pwd)
YUI=$(pwd)/yuicompressor-2.4.8pre.jar
BUILD=$(pwd)/build

if [ ! -d $BUILD ]; then
	echo "Build folder($BUILD) does not exist!"
	exit
fi

if [ ! -e $YUI ]; then
	echo "YUI not found in $YUI!"
	exit
fi

if [ "$1" = "clean" ]; then
	CLEANONLY=1
fi

echo "Cleaning ..."

### Cleanup old build files
find $BUILD -type f ! -name ".gitkeep" |xargs -i rm {}
find $BUILD -type d ! -name ".gitkeep" -and ! -name "build" |xargs -i rmdir {} -p

if [ ! -z $CLEANONLY ]; then 
	echo "Done."
	exit
fi

echo "Building ..."

### Copy required files
#find . -not -name "/.git*" -and ! -iname "build" -and ! -name "*.jar" -and ! -name "tests*" -and ! -name ".*" | xargs  -i  cp {} $BUILD/{} -R
#find . \( -name '.project*' -o -name '.git*' -o -name '*.sh' -o -name 'build*' -o -name '.settings*' -o -name 'tests.*' -o -name '*.jar'  \) \
#-prune -o -print | xargs echo {}# cp {} $BUILD/{} -R

cp css/ $BUILD -R
cp data/ $BUILD -R
cp img/ $BUILD -R
cp js/ $BUILD -R
cp favicon.ico index.html LICENSE .htaccess $BUILD

### Obfuscate javascript
cd $BUILD/css
java -jar $YUI  -o 'style.css' style.css
#rm style.css
cd $BUILD/js
java -jar $YUI  -o '.js$:.js' *.js
cd $BUILD/js/app
java -jar $YUI  -o '.js$:.js' *.js

### Production
cd $BUILD
#sed -i 's/style.css/style.min.css/g' index.php
sed -i '/<\!\-\-URCHIN\-\->/{
    s/<\!\-\-URCHIN\-\->//g
    r ../urchin
}' index.html


echo "Build completed."

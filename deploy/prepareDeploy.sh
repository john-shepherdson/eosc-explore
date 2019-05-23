#ATTENTION
#DON'T run it in svn folder - it REMOVES files
#Copy project in another file "deploy-folder"
#cd "deploy-folder"
#run the script

## cp the file according to the deploy environment

# cp production-properties.json ../src/assets/env-properties.json;
# cp test-properties.json ../src/assets/env-properties.json;
# cp beta-properties.json ../src/assets/env-properties.json;

## uncommect from here-->
# echo -n 'Check that you have the correct properties file';
# echo -n "Press key:";
# read -n1 ans
# pico ../src/assets/env-properties.json;
# echo 'For Production keep meta for bots';
# echo -n 'Check index.html: For test keep meta for noindex, for production remove noindex and keep meta for Search engines verification';
# echo -n "Press key:";
# read -n1 ans
# echo -n "Pressed";
# pico ../src/index.html;
# echo -n 'Check Robots.txt: For test and beta add "Diasallow /", for production remove it!';
# echo -n "Press key:";
# read -n1 ans
# echo -n "Pressed";
# pico ../src/robots.txt;
# rm -rf ../src/assets/common-assets/.svn/;
# rm -rf ../src/app/openaireLibrary/.svn/;
# cd ..; npm run build:ssr; cd deploy;
# rm -rf ../src ../node_modules  ../.idea/ ../installOpenaireLib.sh;
# cd ..; rm -rf deploy;
# echo 'Now copy to the server!'
##<-- to here

#Deploy instructions!
#copy "deploy-folder" in beta.explore.openaire.eu, test.openaire.eu or explore.openaire.eu depending which in environment want to deploy and properties selected
#copies of previous deployments exist in  "/home/argiro.kokogiannaki/deployments-folder/dashboardYYYY-MM-DD"
#run "npm i"
#become nodejs user: "sudo su nodejs -s /bin/bash"
#go to "cd /srv/www/portal"
#cp files from "cp -r HOME_PATH/deployments-folder/* ."
#restart portal "pm2 restart openaire"

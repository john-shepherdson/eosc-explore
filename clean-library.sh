cd src/app/openaireLibrary
# Exclude Dashboard files
echo "Exclude Dashboard files"
svn update --set-depth exclude ./dashboard
# Exclude ck-editor usages
echo "Exclude ck-editor usages"
svn update --set-depth exclude  ./sharedComponents/subscriber-invite
cd ../../../
echo "Done"

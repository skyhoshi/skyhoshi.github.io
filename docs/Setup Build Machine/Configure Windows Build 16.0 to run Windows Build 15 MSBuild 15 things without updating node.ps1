C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\MSBuild\15.0\
C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\MSBuild\Current\

new-item -ItemType SymbolicLink -Path "C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\MSBuild\15.0\" -Target "C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\MSBuild\Current"
new-item -ItemType SymbolicLink -Path "C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\MSBuild\15.0\Bin\Microsoft" -Target "C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\MSBuild\Microsoft"
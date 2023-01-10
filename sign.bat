chcp 65001 > nul
@echo off

set VERSION_FILES=%CD%\*.ver
set CEP_DIR=%CD%
set ZXPSIGNCMD_DIR=C:\Program_Files_Portable\CEP-Resources-master\CEP-Resources-master\ZXPSignCMD\4.1.103\win64
set PASSWORD=njotmmrk

if exist "%VERSION_FILES%" (
    for %%f in ("%VERSION_FILES%") do (
        cd %ZXPSIGNCMD_DIR%
        ZXPSignCmd.exe -sign %CEP_DIR% C:\Users\njotn\UserDirectory\After_Effefts_Scripts\gifplayer-%%~nf.zxp sign.p12 %PASSWORD%
    )
) else (
    echo バージョン定義ファイル^(.ver^)が存在しません。
)

pause
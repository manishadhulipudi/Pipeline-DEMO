'ABAVN
SAPGuiSession("Session").SAPGuiWindow("Periodic Asset Postings").SAPGuiOKCode("OKCode").Set "/NABAVN" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf1.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Periodic Asset Postings").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf1.xml_;_
If SAPGuiSession("Session_2").SAPGuiWindow("Enter a company code").SAPGuiEdit("Company Code").Exist(8) Then
	SAPGuiSession("Session_2").SAPGuiWindow("Enter a company code").SAPGuiEdit("Company Code").Set DataTable("CCode",1)
    SAPGuiSession("Session_2").SAPGuiWindow("Enter a company code").SAPGuiButton("Continue   (Enter)").Click
End If
SAPGuiSession("Session").SAPGuiWindow("Enter Asset Transaction:").SAPGuiEdit("Asset").Set DataTable("Asset",1)
Arr = Split(Date,"/")
If Len(Arr(0)) =1 Then
	Arr(0) = 0&Arr(0)
End If

If Len(Arr(1)) = 1 Then
	Arr(1) = 0&Arr(1)
End If

Date1  = Join(Arr,"/")
SAPGuiSession("Session").SAPGuiWindow("Enter Asset Transaction:").SAPGuiEdit("Document Date").Set Date1 @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter Asset Transaction:").SAPGuiEdit("Asset value date").Set Date1 @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter Asset Transaction:").SAPGuiEdit("Text").Set DataTable("Text",1) @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter Asset Transaction:").SAPGuiButton("Simulate   (F9)").Click @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter Asset Transaction:_2").SAPGuiButton("Post   (Ctrl+S)").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter Asset Transaction:").SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf6.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter Asset Transaction:").SAPGuiStatusBar("StatusBar").Check CheckPoint("TxnPosted") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf7.xml_;_
 @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf8.xml_;_
'Activate Asset
SAPGuiSession("Session_3").SAPGuiWindow("Enter Asset Transaction:").SAPGuiOKCode("OKCode").Set "/NAS02" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session_3").SAPGuiWindow("Enter Asset Transaction:").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session_3").SAPGuiWindow("Change Asset: Initial").SAPGuiEdit("Asset").Set DataTable("Asset",1) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf11.xml_;_
SAPGuiSession("Session_3").SAPGuiWindow("Change Asset: Initial").SAPGuiEdit("Subnumber").Set DataTable("SubNo",1) @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf11.xml_;_
SAPGuiSession("Session_3").SAPGuiWindow("Change Asset: Initial").SAPGuiEdit("Company Code").Set DataTable("CCode",1) @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf11.xml_;_
SAPGuiSession("Session_3").SAPGuiWindow("Change Asset: Initial").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf11.xml_;_
SAPGuiSession("Session_3").SAPGuiWindow("Change Asset:  Master").SAPGuiEdit("Deactivation on").Set "" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf12.xml_;_
SAPGuiSession("Session_3").SAPGuiWindow("Change Asset:  Master").SAPGuiButton("Save   (Ctrl+S)").Click @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf14.xml_;_
SAPGuiSession("Session_3").SAPGuiWindow("Change Asset: Initial").SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf15.xml_;_



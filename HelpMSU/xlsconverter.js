var total=0;
var ForReading = 1, ForWriting = 2, ForAppending = 8;
var TristateUseDefault = -2, TristateTrue = -1, TristateFalse = 0;

var WshShell = WScript.CreateObject("WScript.Shell");
strPath = WshShell.currentDirectory;

var fso = new ActiveXObject("Scripting.FileSystemObject");

open_excel();

function open_excel(){

	var file_name = fso.BuildPath(strPath, 'origin.xls');
	var excel = new ActiveXObject("Excel.Application"); 
	var ws = excel.Workbooks.Open(file_name).Worksheets;
	
	var res=[];
	
	for(var cnt=1; cnt<ws.Count; cnt++) {
	
		var sheet = ws(cnt);
		var row_cnt=0;
		
		while(true) {
			row_cnt++;
			var c = ''+sheet.Cells(row_cnt, 1).Value;
			if(c=='undefined')
				break;
			if(row_cnt > 65530)
				break;
			row=[];
			for(var j=1; j<8; j++)
				row.push(sheet.Cells(row_cnt,j).Value);
			res.push(row.join("\t"));
		}
	}
	excel.Quit();
	process(res);
	WScript.Echo('Total: '+cnt);
}

function process(res) {
	var out_file_name=fso.BuildPath(strPath, 'merge.txt');	
	var ts = fso.CreateTextFile(out_file_name, true, true);
	ts.Write(res.join("\n"));
	ts.Close();

}
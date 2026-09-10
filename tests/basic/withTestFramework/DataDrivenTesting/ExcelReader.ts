import * as xlsx from "xlsx";

export class ExcelReader{

    static readExcel(path:string, sheetname:string):any{
        //read data from excel file
        const wb = xlsx.readFile(path);
        //select sheet name
        const sh= wb.Sheets[sheetname];
        //convert sheet into JSON
        const data  = xlsx.utils.sheet_to_json(sh);
        return data;

    }
}
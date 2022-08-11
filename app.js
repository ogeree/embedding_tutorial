console.log("Hey Back to School DS23")
let viz;
//Create a variable to store the viz container
//Create a variable to store the dashboard options
//Create a variable to store the URL of our dashboard
const viz_container = document.getElementById("viz_container");
const option = {
    device:"desktop",
    height:"800px",
    width:"1100px"
};
const url="https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia";

function initViz(){
    viz = new tableau.Viz(viz_container,url,option)
}

//Listener go here
document.addEventListener("DOMContentLoaded", initViz);

//Buttons go here
const exportpdfbutton = document.getElementById("exportPDF")
exportpdfbutton.addEventListener("click",exportPDFfunction);
function exportPDFfunction() {
    viz.showExportPDFDialog();
};
const exportppbutton = document.getElementById("exportPP")
exportppbutton.addEventListener("click",exportPPfunction);
function exportPPfunction() {
    viz.showExportPowerPointDialog();
}

//Filter function goes here
document.getElementById("FilterButton").addEventListener("click",ApplyFilterFunction)
function ApplyFilterFunction(){
   const MinValue=document.getElementById("MinValue").value;
   const MaxValue=document.getElementById("MaxValue").value;
   console.log(MinValue, MaxValue);
   const workbook = viz.getWorkbook();
   const activeSheet = workbook.getActiveSheet();
   console.log(activeSheet);
   const sheets = activeSheet.getWorksheets();
   console.log(sheets);
   const sheetToFilter = sheets[0]
   sheetToFilter.applyRangeFilterAsync("SUM(Sales)",{min:MinValue, max:MaxValue}).then(alert("viz is filtered"));
}
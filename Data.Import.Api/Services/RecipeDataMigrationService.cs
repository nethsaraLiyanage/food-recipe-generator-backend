
using Data.Import.Api.Repositories;
using OfficeOpenXml;

namespace Data.Import.Api.Services
{
    public class RecipeDataMigrationService : IRecipeDataMigrationService
    {
        private readonly IRecipeRepository _recipeRepository;
        private readonly ILogger<RecipeDataMigrationService> _logger;
        public RecipeDataMigrationService
            (IRecipeRepository recipeRepository, ILogger<RecipeDataMigrationService> logger)
        {
            this._recipeRepository = recipeRepository;
            this._logger = logger;
        }
        public async Task ExportToRecipeExcelDataToMongoDb()
        {
            try
            {
                var excelFilePath = "C:\\Personal Projects\\food-recipe-generator-backend\\Data.Import.Api\\ExcelData\\Recipe.xlsx";

                FileInfo fileInfo = new FileInfo(excelFilePath);

                using (ExcelPackage package = new ExcelPackage(fileInfo))
                {
                    ExcelWorksheet worksheet = package.Workbook.Worksheets["sheet"];

                    int colCount = worksheet.Dimension.End.Column;  //get Column Count
                    int rowCount = worksheet.Dimension.End.Row - 5;

                    for (int row = 6; row <= worksheet.Dimension.End.Row; row++)
                    {

                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                throw;
            }
        }
    }
}

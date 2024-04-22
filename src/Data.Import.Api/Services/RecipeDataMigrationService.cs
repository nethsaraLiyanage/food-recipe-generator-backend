
using Data.Import.Api.DTOs;
using Data.Import.Api.Entities;
using Data.Import.Api.Repositories;
using OfficeOpenXml;
using System.Reflection;

namespace Data.Import.Api.Services
{
    public class RecipeDataMigrationService : IRecipeDataMigrationService
    {
        private readonly IRecipeRepository _recipeRepository;
        private readonly IConfiguration _configuration;
        private readonly ILogger<RecipeDataMigrationService> _logger;
        public RecipeDataMigrationService
        (
            IRecipeRepository recipeRepository,
            ILogger<RecipeDataMigrationService> logger,
            IConfiguration configuration)
        {
            this._recipeRepository = recipeRepository;
            this._logger = logger;
            this._configuration = configuration;
        }
        public async Task<ResponseDTO> ExportToRecipeExcelDataToMongoDb()
        {
            var response = new ResponseDTO();

            try
            {
                _logger.LogInformation("Start");

                var recipeExcelFilePath = GetExcelFilePath
                    (
                    _configuration.GetValue<string>("ExcelFilePaths:RecipeExcelFilePath") ?? string.Empty
                    );

                _logger.LogInformation(recipeExcelFilePath ?? string.Empty);

                if (!string.IsNullOrEmpty(recipeExcelFilePath))
                {

                    FileInfo fileInfo = new FileInfo(recipeExcelFilePath);

                    using (ExcelPackage package = new ExcelPackage(fileInfo))
                    {
                        ExcelWorksheet worksheet = package.Workbook.Worksheets["sheet"];

                        if (worksheet is not null)
                        {
                            int colCount = worksheet.Dimension.End.Column;  //get Column Count
                            int rowCount = worksheet.Dimension.End.Row - 5;

                            var listOfRecipe = new List<Recipe>();


                            for (int row = 2; row <= worksheet.Dimension.End.Row; row++)
                            {
                                var recipe = new Recipe();

                                for (int col = 1; col <= colCount; col++)
                                {

                                    if (col == 1)
                                    {
                                        var ingredients = worksheet.Cells[row, col].Value == null ? string.Empty
                                                        : worksheet.Cells[row, col].Value.ToString().Trim();

                                        if (!string.IsNullOrEmpty(ingredients))
                                        {
                                            recipe.Ingredients = ingredients;
                                        }
                                    }
                                    else if (col == 2)
                                    {
                                        var recipeName = worksheet.Cells[row, col].Value == null ? string.Empty
                                                       : worksheet.Cells[row, col].Value.ToString().Trim();

                                        if (!string.IsNullOrEmpty(recipeName))
                                        {
                                            recipe.Name = recipeName;
                                        }
                                    }
                                    else if (col == 3)
                                    {
                                        var calories = worksheet.Cells[row, col].Value == null ? string.Empty
                                                     : worksheet.Cells[row, col].Value.ToString().Trim();

                                        if (!string.IsNullOrEmpty(calories))
                                        {
                                            recipe.Calories = calories;
                                        }
                                    }

                                    else if (col == 4)
                                    {
                                        var season = worksheet.Cells[row, col].Value == null ? string.Empty
                                                   : worksheet.Cells[row, col].Value.ToString().Trim();

                                        if (!string.IsNullOrEmpty(season))
                                        {
                                            recipe.Season = season;
                                        }
                                    }
                                    else if (col == 5)
                                    {
                                        var proteins = worksheet.Cells[row, col].Value == null ? string.Empty
                                                   : worksheet.Cells[row, col].Value.ToString().Trim();

                                        if (!string.IsNullOrEmpty(proteins))
                                        {
                                            recipe.Proteins = proteins;
                                        }
                                    }
                                    else if (col == 6)
                                    {
                                        var fats = worksheet.Cells[row, col].Value == null ? string.Empty
                                                   : worksheet.Cells[row, col].Value.ToString().Trim();

                                        if (!string.IsNullOrEmpty(fats))
                                        {
                                            recipe.Fats = fats;
                                        }
                                    }
                                    else if (col == 7)
                                    {
                                        var carbohydrates = worksheet.Cells[row, col].Value == null ? string.Empty
                                                   : worksheet.Cells[row, col].Value.ToString().Trim();

                                        if (!string.IsNullOrEmpty(carbohydrates))
                                        {
                                            recipe.Carbohydrates = carbohydrates;
                                        }
                                    }
                                    else if (col == 8)
                                    {
                                        var mealType = worksheet.Cells[row, col].Value == null ? string.Empty
                                                   : worksheet.Cells[row, col].Value.ToString().Trim();

                                        if (!string.IsNullOrEmpty(mealType))
                                        {
                                            recipe.MealType = mealType;
                                        }
                                    }
                                    else if (col == 9)
                                    {
                                        var preparationTime = worksheet.Cells[row, col].Value == null ? string.Empty
                                                   : worksheet.Cells[row, col].Value.ToString().Trim();

                                        if (!string.IsNullOrEmpty(preparationTime))
                                        {
                                            recipe.PreparationTime = preparationTime;
                                        }
                                    }
                                    else if (col == 10)
                                    {
                                        var cookingTime = worksheet.Cells[row, col].Value == null ? string.Empty
                                                   : worksheet.Cells[row, col].Value.ToString().Trim();

                                        if (!string.IsNullOrEmpty(cookingTime))
                                        {
                                            recipe.CookingTime = cookingTime;
                                        }
                                    }
                                    else if (col == 11)
                                    {
                                        var imageUrl = worksheet.Cells[row, col].Value == null ? string.Empty
                                                   : worksheet.Cells[row, col].Value.ToString().Trim();

                                        if (!string.IsNullOrEmpty(imageUrl))
                                        {
                                            recipe.ImageUrl = imageUrl;
                                        }
                                    }
                                }

                                await _recipeRepository.CreateRecipeAsync(recipe);

                            }


                        }
                    }
                }
                else
                {
                    _logger.LogInformation("Excel File Cannot Find Please try again");
                    response.Message = "Excel File Cannot Find Please try again";
                    response.IsSuccess = false;
                }


            }
            catch (Exception ex)
            {
                response.Message = "Error has been Occurred please try again";
                response.IsSuccess = false;
                _logger.LogError(ex.ToString());
                throw;
            }

            _logger.LogInformation("Operation Finished");
            response.Message = "Operation Finished";
            response.IsSuccess = true;

            return response;
        }

        private string GetExcelFilePath(string filePath)
        {
            var outPutDirectory = Path.GetDirectoryName(Assembly.GetEntryAssembly()?.Location);

            if (outPutDirectory is null) return string.Empty;

            return Path.Combine(outPutDirectory, filePath);
        }
    }
}

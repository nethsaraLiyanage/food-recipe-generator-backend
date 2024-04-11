using Data.Import.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Data.Import.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeDataMigrationService _recipeDataMigrationService;

        public RecipeController
            (IRecipeDataMigrationService recipeDataMigrationService)
        {
            this._recipeDataMigrationService = recipeDataMigrationService;

        }

        [HttpGet("ExportToRecipeExcelDataToMongoDb")]
        public async Task<IActionResult> ExportToRecipeExcelDataToMongoDb()
        {
            var response = await _recipeDataMigrationService.ExportToRecipeExcelDataToMongoDb();

            return Ok(response);
        }
    }
}

using Data.Import.Api.DTOs;

namespace Data.Import.Api.Services
{
    public interface IRecipeDataMigrationService
    {
        Task<ResponseDTO> ExportToRecipeExcelDataToMongoDb();
    }
}

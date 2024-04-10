namespace Data.Import.Api.Services
{
    public interface IRecipeDataMigrationService
    {
        Task ExportToRecipeExcelDataToMongoDb();
    }
}

using Data.Import.Api.Entities;

namespace Data.Import.Api.Repositories
{
    public interface IRecipeRepository
    {
        Task<IEnumerable<Recipe>> GetRecipes();
        Task<Recipe> GetRecipeByIdAsync(string id);
        Task<IEnumerable<Recipe>> GetRecipeByName(string name);

        Task CreateRecipeAsync(Recipe recipe);
        Task<bool> UpdateRecipeAsync(Recipe recipe);
        Task<bool> DeleteRecipeAsync(string id);
    }
}

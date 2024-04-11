using Data.Import.Api.Data;
using Data.Import.Api.Entities;

namespace Data.Import.Api.Repositories
{
    public class RecipeRepository : IRecipeRepository
    {
        private readonly IMongoDbContext _context;
        public RecipeRepository(IMongoDbContext context)
        {
            this._context = context;
        }
        public async Task CreateRecipeAsync(Recipe recipe)
        {
            await _context.Recipes.InsertOneAsync(recipe);
        }

        public Task<bool> DeleteRecipeAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task<Recipe> GetRecipeByIdAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Recipe>> GetRecipeByName(string name)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Recipe>> GetRecipes()
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateRecipeAsync(Recipe product)
        {
            throw new NotImplementedException();
        }
    }
}

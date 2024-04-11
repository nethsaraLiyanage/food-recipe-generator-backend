using Data.Import.Api.Entities;
using MongoDB.Driver;

namespace Data.Import.Api.Data
{
    public interface IMongoDbContext
    {
        IMongoCollection<Recipe> Recipes { get; }
    }
}

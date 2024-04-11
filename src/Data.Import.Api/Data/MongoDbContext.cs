using Data.Import.Api.Entities;
using MongoDB.Driver;

namespace Data.Import.Api.Data
{
    public class MongoDbContext : IMongoDbContext
    {
        public MongoDbContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetValue<string>("DatabaseSettings:ConnectionString"));
            var database = client.GetDatabase(configuration.GetValue<string>("DatabaseSettings:DatabaseName"));
            Recipes = database.GetCollection<Recipe>(configuration.GetValue<string>("DatabaseSettings:CollectionName"));


        }
        public IMongoCollection<Recipe> Recipes { get; }
    }
}

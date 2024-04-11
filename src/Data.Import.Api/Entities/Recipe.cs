using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Data.Import.Api.Entities
{
    public class Recipe
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string Rating { get; set; }
        public string Proteins { get; set; }
        public string Fats { get; set; }
        public string Carbohydrates { get; set; }
        public string Ingredients { get; set; }
        public string Direction { get; set; }
        public string Calories { get; set; }
        public string Season { get; set; }
    }
}

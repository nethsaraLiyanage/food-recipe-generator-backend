using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Data.Import.Api.Entities
{
    public class Recipe
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("imageUrl")]
        public string ImageUrl { get; set; }

        [BsonElement("rating")]
        public string Rating { get; set; }

        [BsonElement("proteins")]
        public string Proteins { get; set; }

        [BsonElement("fats")]
        public string Fats { get; set; }

        [BsonElement("carbohydrates")]
        public string Carbohydrates { get; set; }

        [BsonElement("ingredients")]
        public string Ingredients { get; set; }

        [BsonElement("direction")]
        public string Direction { get; set; }

        [BsonElement("calories")]
        public string Calories { get; set; }

        [BsonElement("season")]
        public string Season { get; set; }

        [BsonElement("mealType")]
        public string MealType { get; set; }

        [BsonElement("isSaved")]
        public bool IsSaved { get; set; } = false;

        [BsonElement("preparationTime")]
        public string PreparationTime { get; set; }

        [BsonElement("cookingTime")]
        public string CookingTime { get; set; }




    }
}

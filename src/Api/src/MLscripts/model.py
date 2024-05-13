import pandas as pd

# Create a DataFrame
df = pd.DataFrame(data)

# Function to extract ingredients from the Ingredients column
def extract_ingredients(ingredients):
    return [ingredient.split('(')[0].strip() for ingredient in ingredients]

# Apply the function to extract ingredients
df['Ingredients'] = df['Ingredients'].apply(extract_ingredients)

# Scale recipe ratings based on user preferences
def scale_ratings(df, user_preference):
    # Scale ratings based on user preference
    df['Scaled Rating'] = df['User Rating'] * user_preference
    return df

# Example user preference (on a scale of 1 to 5)
user_preference = 5

# Scale ratings based on user preference
df = scale_ratings(df, user_preference)

# Function to create a feature matrix
def create_feature_matrix(df):
    # Get unique ingredients
    unique_ingredients = sorted(set(ingredient for ingredients in df['Ingredients'] for ingredient in ingredients))
    # Create a DataFrame with zeros
    feature_matrix = pd.DataFrame(0, index=df.index, columns=unique_ingredients)
    # Populate the DataFrame with 1s where ingredients are present
    for i, ingredients in enumerate(df['Ingredients']):
        feature_matrix.loc[i, ingredients] = 1
    return feature_matrix

# Create the feature matrix
feature_matrix = create_feature_matrix(df)

print(feature_matrix)
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2")

text = "Blue cotton kurti M size available hai?"

embedding = model.encode(text)

print("Embedding created successfully!")
print("Number of values:", len(embedding))
print("First 5 values:", embedding[:5])
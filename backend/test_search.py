import os
from dotenv import load_dotenv
from supabase import create_client
from sentence_transformers import SentenceTransformer

# .env se Supabase details load karna
load_dotenv()

url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")

supabase = create_client(url, key)

# Same embedding model use karna
model = SentenceTransformer(
    "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
)

# Shopkeeper ka question
query = "Agle mahine kya stock karna chahiye?"

# Question ko vector mein convert karna
query_embedding = model.encode(query).tolist()

# Supabase mein similar memories search karna
response = supabase.rpc(
    "match_memories",
    {
        "query_embedding": query_embedding,
        "match_threshold": 0.3,
        "match_count": 5
    }
).execute()

print("\nRelevant business memories:\n")

for memory in response.data:
    print("Message:", memory["content"])
    print("Similarity:", memory["similarity"])
    print("---")
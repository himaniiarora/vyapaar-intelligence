import os
from dotenv import load_dotenv
from supabase import create_client
from sentence_transformers import SentenceTransformer

load_dotenv()

url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")

supabase = create_client(url, key)

model = SentenceTransformer(
    "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
)

response = supabase.table("interactions").select("*").execute()

interactions = response.data

for interaction in interactions:
    text = interaction["message"]

    embedding = model.encode(text).tolist()

    supabase.table("memories").insert({
        "content": text,
        "memory_type": "interaction",
        "source_interaction_ids": [interaction["id"]],
        "embedding": embedding
    }).execute()

print("All embeddings saved successfully!")
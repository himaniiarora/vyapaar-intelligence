import os

from dotenv import load_dotenv
from supabase import create_client
from ollama import chat
from sentence_transformers import SentenceTransformer


# Load environment variables
load_dotenv()

url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")

supabase = create_client(url, key)


# Embedding model
embedding_model = SentenceTransformer(
    "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
)


# --------------------------------
# 1. GET CUSTOMER INTERACTIONS
# --------------------------------

response = supabase.table("interactions").select("*").execute()

interactions = response.data


interaction_text = ""

for item in interactions:
    interaction_text += (
        f"- {item['customer_name']}: "
        f"{item['message']} "
        f"(Product: {item['product']}, "
        f"Type: {item['interaction_type']})\n"
    )


# --------------------------------
# 2. ASK GEMMA TO FIND PATTERNS
# --------------------------------

prompt = f"""
You are analyzing customer interactions for a small business.

Customer interactions:

{interaction_text}

Identify important long-term business patterns from these
conversations.

Create 3 to 5 concise business memories.

Focus on:
- repeated product demand
- customer preferences
- size or colour requests
- complaints
- purchase interest
- product requests

Write each memory as one simple sentence.

Do not invent information.
Only use patterns supported by the conversations.
"""


response = chat(
    model="gemma4:12b",
    messages=[
        {
            "role": "user",
            "content": prompt
        }
    ]
)


memory_text = response.message.content


print("\n=== GENERATED BUSINESS MEMORIES ===\n")
print(memory_text)


# --------------------------------
# 3. SAVE MEMORIES IN SUPABASE
# --------------------------------

lines = memory_text.split("\n")

for line in lines:

    memory = line.strip()

    # Remove numbering/bullets
    memory = memory.lstrip("0123456789.- ").strip()

    if not memory:
        continue

    embedding = embedding_model.encode(memory).tolist()

    supabase.table("memories").insert({
        "content": memory,
        "memory_type": "business_pattern",
        "source_interaction_ids": [
            item["id"] for item in interactions
        ],
        "embedding": embedding
    }).execute()


print("\nBusiness memories saved successfully!")
import os
from dotenv import load_dotenv
from supabase import create_client
from sentence_transformers import SentenceTransformer
from ollama import chat
import pandas as pd

# Load environment variables
load_dotenv()

url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")

supabase = create_client(url, key)

# Load embedding model
embedding_model = SentenceTransformer(
    "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
)

# Get business interactions
response = supabase.table("interactions").select("*").execute()
df = pd.DataFrame(response.data)

# -----------------------------
# 1. BUSINESS SIGNALS
# -----------------------------

product_demand = df["product"].value_counts().to_dict()

interaction_types = df["interaction_type"].value_counts().to_dict()

platform_activity = df["platform"].value_counts().to_dict()

purchase_df = df[
    df["interaction_type"] == "purchase_interest"
]

purchase_interest = purchase_df[
    ["customer_name", "product", "message"]
].to_dict("records")


# -----------------------------
# 2. RAG SEARCH
# -----------------------------

question = "Agle mahine kya stock karna chahiye?"

query_embedding = embedding_model.encode(question).tolist()

search_response = supabase.rpc(
    "match_memories",
    {
        "query_embedding": query_embedding,
        "match_threshold": 0.3,
        "match_count": 5
    }
).execute()

memories = search_response.data


# -----------------------------
# 3. BUILD CONTEXT
# -----------------------------

context = f"""
You are Vyapaar Intelligence, an AI business assistant for small business owners.

BUSINESS SIGNALS

Product demand:
{product_demand}

Interaction types:
{interaction_types}

Platform activity:
{platform_activity}

Purchase interest:
{purchase_interest}

RELEVANT CUSTOMER MEMORIES
"""

for memory in memories:
    context += f"- {memory['content']}\n"


# -----------------------------
# 4. ASK GEMMA
# -----------------------------

prompt = f"""
{context}

BUSINESS OWNER QUESTION:
{question}

Based only on the business information above:

1. Recommend what the business should stock.
2. Mention the product and size if there is evidence.
3. Give a short reason based on customer demand.

Keep the answer concise and practical.
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

print("\n=== VYAPAAR INTELLIGENCE ===\n")
print(response.message.content)
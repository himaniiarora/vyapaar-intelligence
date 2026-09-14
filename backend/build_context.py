import os
from dotenv import load_dotenv
from supabase import create_client
from sentence_transformers import SentenceTransformer
import pandas as pd

# Load environment variables
load_dotenv()

url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")

supabase = create_client(url, key)

# Same embedding model
model = SentenceTransformer(
    "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
)


# -----------------------------
# GET BUSINESS DATA
# -----------------------------

response = supabase.table("interactions").select("*").execute()

df = pd.DataFrame(response.data)

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
# RAG SEARCH
# -----------------------------

query = "Agle mahine kya stock karna chahiye?"

query_embedding = model.encode(query).tolist()

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
# BUILD CONTEXT
# -----------------------------

context = f"""
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


print("\n=== CONTEXT FOR GEMMA ===\n")
print(context)
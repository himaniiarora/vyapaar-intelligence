import os
from dotenv import load_dotenv
from supabase import create_client
import pandas as pd

# Load Supabase details
load_dotenv()

url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")

supabase = create_client(url, key)

# Get interactions
response = supabase.table("interactions").select("*").execute()

interactions = response.data

# Convert data into a Pandas table
df = pd.DataFrame(interactions)


# -----------------------------
# BUSINESS SIGNALS
# -----------------------------

# 1. Product demand
product_demand = df["product"].value_counts().to_dict()

# 2. Interaction types
interaction_types = df["interaction_type"].value_counts().to_dict()

# 3. Platform activity
platform_activity = df["platform"].value_counts().to_dict()

# 4. Purchase interest
purchase_df = df[
    df["interaction_type"] == "purchase_interest"
]

purchase_interest = purchase_df[
    ["customer_name", "product", "message"]
].to_dict("records")


# -----------------------------
# FINAL BUSINESS SIGNALS
# -----------------------------

business_signals = {
    "product_demand": product_demand,
    "interaction_types": interaction_types,
    "platform_activity": platform_activity,
    "purchase_interest": purchase_interest
}

print("\n=== BUSINESS SIGNALS ===\n")

print(business_signals)
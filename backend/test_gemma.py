from ollama import chat

response = chat(
    model="gemma4:12b",
    messages=[
        {
            "role": "user",
            "content": "What is 2 + 2?"
        }
    ]
)

print("\n=== GEMMA RESPONSE ===\n")
print(response.message.content)
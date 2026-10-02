---
name: less-tokens
description: Use when the user wants to compress prompts, minimize token consumption, strip filler words/redundancies, reduce LLM API costs, or convert documents into high-density clean markdown.
---

# Less-Tokens Prompt Compression Skill

`less-tokens` is a fast, deterministic lexical NLP library that shrinks LLM prompts by 30% to 40% without changing model response quality or semantic meaning.

## When to Use
- Compressing bulky system instructions or few-shot examples.
- Stripping conversational fluff and filler before forwarding queries to LLMs.
- Reducing document payloads into high-density Markdown.
- Optimizing token costs for OpenAI, Anthropic, or Gemini API pipelines.

## Installation & Setup
To install in Python:
```bash
pip install less-tokens
```
Or import directly from the local bundled module `less_tokens`.

## Core Functions

### 1. Basic Prompt Compression
```python
from less_tokens import compress

original = "I was wondering if you could please explain to me how I can run a Next.js script from the command line."
compressed = compress(
    original,
    remove_filler_phrases=1,
    remove_stopwords=1,
    apply_contractions=1
)
print(compressed)
# Output: "explain run Next.js script command line"
```

### 2. Document Reduction
Convert files (PDF, DOCX, TXT, HTML) into dense markdown:
```python
from less_tokens import reduce_document

markdown = reduce_document("path/to/spec.pdf", output_format="markdown")
```

### 3. Structured Compression (Preserving Code / JSON)
When prompts contain code or JSON blocks that must NOT be altered:
```python
from less_tokens import compress_structured

safe_compressed = compress_structured(
    prompt_with_code,
    protect_code_blocks=True,
    protect_json=True
)
```

### 4. Smart Conversation Compression
Compress conversation histories while keeping user intent intact:
```python
from less_tokens import smart_compress

optimized_messages = smart_compress(chat_history)
```

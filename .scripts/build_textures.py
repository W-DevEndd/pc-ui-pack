
import json, sys

tlist_file = sys.argv[1]

with open(tlist_file, "r", encoding='utf-8') as f:
    tlist = json.load(f)

print(type(tlist))
print(tlist)
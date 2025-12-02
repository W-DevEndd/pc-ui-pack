import os
from pathlib import Path
import json, sys
from PIL import Image, ImageDraw

is_dev_version = True
with open(Path(".is_dev_version.json")) as f:
    is_dev_version = json.load(f)
    f.close()

tlist_file = sys.argv[1]
rls = sys.argv[2]
bugrock = sys.argv[3]

with open(tlist_file, "r", encoding='utf-8') as f:
    tlist = json.load(f)

for obj in tlist:
    img_path = Path(obj["path"])
    positions = obj["pos"]

    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    draw = ImageDraw.Draw(img)

    transparent = (0, 0, 0, 0);

    # print(type(position));
    if not is_dev_version:
        if positions == "full":
            draw.rectangle(
                [(0, 0), (width - 1, height - 1)],
                transparent,
            )
        elif type(positions) == list:
            for pos in positions:
                start = pos["uv"];
                end = [a + b for a, b in zip(start, pos["uvSize"])]
                draw.rectangle(
                    [tuple(start), tuple(end)],
                    transparent,
                )
            
    save_path_parts = list(img_path.parts)
    save_path_parts[0] = bugrock

    save_path = Path(*save_path_parts)
    # print(img_path, "-->", save_path)
    os.makedirs(save_path.parent, exist_ok=True)

    img.save(save_path)
